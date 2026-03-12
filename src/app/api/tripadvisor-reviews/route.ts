import { NextResponse } from "next/server";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.co.uk/Attraction_Review-g293962-d27497643-Reviews-28holidays_com-Colombo_Western_Province.html";

export const revalidate = 3600;

type JsonObject = Record<string, unknown>;

type TripadvisorReview = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

function extractJsonLdBlocks(html: string) {
  return [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1]?.trim())
    .filter((block): block is string => Boolean(block));
}

function safeParseJson(block: string) {
  try {
    return JSON.parse(block) as unknown;
  } catch {
    return null;
  }
}

function getAuthorName(author: unknown) {
  if (typeof author === "string") {
    return author.trim();
  }

  if (author && typeof author === "object" && typeof (author as JsonObject).name === "string") {
    return ((author as JsonObject).name as string).trim();
  }

  return "";
}

function getRatingValue(reviewRating: unknown) {
  if (typeof reviewRating === "number") {
    return reviewRating;
  }

  if (typeof reviewRating === "string") {
    return Number(reviewRating);
  }

  if (reviewRating && typeof reviewRating === "object") {
    const ratingValue = (reviewRating as JsonObject).ratingValue;

    if (typeof ratingValue === "number") {
      return ratingValue;
    }

    if (typeof ratingValue === "string") {
      return Number(ratingValue);
    }
  }

  return Number.NaN;
}

function normalizeReview(node: JsonObject): TripadvisorReview | null {
  const typeValue = node["@type"];
  const types = Array.isArray(typeValue) ? typeValue : [typeValue];
  const isReview = types.some(
    (value) => typeof value === "string" && value.toLowerCase().includes("review"),
  );

  if (!isReview && !("reviewBody" in node) && !("reviewRating" in node)) {
    return null;
  }

  const author = getAuthorName(node.author);
  const rating = getRatingValue(node.reviewRating ?? node.ratingValue);
  const text =
    typeof node.reviewBody === "string"
      ? node.reviewBody.trim()
      : typeof node.description === "string"
        ? node.description.trim()
        : "";
  const date =
    typeof node.datePublished === "string"
      ? node.datePublished
      : typeof node.dateCreated === "string"
        ? node.dateCreated
        : "";

  if (!author || !text || Number.isNaN(rating)) {
    return null;
  }

  return {
    author,
    rating,
    text,
    date,
  };
}

function collectReviews(node: unknown, bucket: TripadvisorReview[]) {
  if (!node) {
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectReviews(item, bucket));
    return;
  }

  if (typeof node !== "object") {
    return;
  }

  const review = normalizeReview(node as JsonObject);

  if (review) {
    bucket.push(review);
  }

  Object.values(node).forEach((value) => {
    if (value && typeof value === "object") {
      collectReviews(value, bucket);
    }
  });
}

export async function GET() {
  try {
    const response = await fetch(TRIPADVISOR_URL, {
      headers: {
        "accept-language": "en-US,en;q=0.9",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `TripAdvisor request failed with status ${response.status}` },
        { status: 502 },
      );
    }

    const html = await response.text();
    const reviews: TripadvisorReview[] = [];

    extractJsonLdBlocks(html)
      .map(safeParseJson)
      .filter((parsed): parsed is unknown => parsed !== null)
      .forEach((parsed) => collectReviews(parsed, reviews));

    const normalizedReviews = Array.from(
      new Map(reviews.map((review) => [`${review.author}|${review.date}|${review.text}`, review])).values(),
    );

    return NextResponse.json(normalizedReviews);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { error: `Unable to fetch TripAdvisor reviews: ${message}` },
      { status: 500 },
    );
  }
}
