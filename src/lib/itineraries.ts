import itinerariesData from "@/data/itineraries.json";

export type Itinerary = {
  slug: string;
  url: string;
  title: string;
  duration: string;
  summary: string;
  detail_title: string;
  detail_text: string;
  listing_image_url?: string;
  detail_image_urls?: string[];
};

export type ParsedDay = {
  label: string;
  title: string;
  content: string;
  items: string[];
  imageUrl: string;
};

export type ParsedFaq = {
  question: string;
  answer: string;
};

export type ParsedItineraryContent = {
  intro: string[];
  days: ParsedDay[];
  highlights: string[];
  tips: string[];
  faqs: ParsedFaq[];
};

type RawItinerary = Omit<Itinerary, "slug">;

const DETAIL_INTRO_MARKER = "Travel itinerary Highlights Destinations Places you will stay FAQs & Tips";
const TAIL_SECTION_MARKERS = ["Journey Highlights", "Places you will stay", "Insightful Tips", "FAQ"];
const DAY_LABEL_REGEX = /Day\s*\d+(?:\s*[–-]\s*\d+)?(?:\s*,\s*\d+)*/g;
const CONTENT_STARTERS = new Set([
  "welcome",
  "arrive",
  "pickup",
  "transfer",
  "check-into",
  "check-in",
  "relax",
  "morning",
  "afternoon",
  "evening",
  "spend",
  "today",
  "following",
  "after",
  "prior",
  "later",
  "join",
  "head",
  "go",
  "enjoy",
  "take",
  "visit",
  "witness",
  "climb",
  "hike",
  "sail",
  "pay",
  "explore",
  "learn",
  "continue",
  "partake",
  "indulge",
  "refresh",
  "reach",
  "depart",
  "upon",
  "it’s",
  "it's",
  "you",
  "full",
  "recover",
  "optional",
  "exclusive",
  "get",
  "experience",
  "hop",
]);

function fallbackSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function slugFromUrl(url: string, title: string): string {
  try {
    const pathname = new URL(url).pathname;
    const segment = pathname.split("/").filter(Boolean).pop();
    return segment || fallbackSlug(title);
  } catch {
    return fallbackSlug(title);
  }
}

function normalizeItineraries(items: RawItinerary[]): Itinerary[] {
  const usedSlugs = new Set<string>();

  return items.map((item, index) => {
    const baseSlug = slugFromUrl(item.url, item.title);
    let slug = baseSlug;
    let suffix = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    if (!slug) {
      slug = `itinerary-${index + 1}`;
    }

    usedSlugs.add(slug);

    return {
      ...item,
      slug,
    };
  });
}

export const itineraries: Itinerary[] = normalizeItineraries(itinerariesData.itineraries as RawItinerary[]);

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function cleanDetailText(text: string): string {
  return normalizeWhitespace(
    text
      .replace(/Explore More Tailormade This Tours/gi, " ")
      .replace(/Feel free to reach out to one of the travel designers at Blue Lanka Tours[^.?!]*[.?!]?/gi, " ")
      .replace(/Do not hesitate to (?:speak to|connect with) one of (?:our|the) travel designers[^.?!]*[.?!]?/gi, " ")
      .replace(/Please get in touch with us[^.?!]*[.?!]?/gi, " ")
  );
}

function stripLeadingHeading(text: string, headings: string[]): string {
  let nextText = text.trim();

  for (const heading of headings) {
    if (heading && nextText.startsWith(heading)) {
      nextText = nextText.slice(heading.length).trim();
    }
  }

  return nextText;
}

function earliestMarkerIndex(text: string, markers: string[]): number {
  const indexes = markers
    .map((marker) => text.indexOf(marker))
    .filter((index) => index >= 0);

  return indexes.length > 0 ? Math.min(...indexes) : -1;
}

function extractSectionText(source: string, marker: string, nextMarkers: string[]): string {
  const startIndex = source.indexOf(marker);

  if (startIndex < 0) {
    return "";
  }

  const sectionStart = startIndex + marker.length;
  const remaining = source.slice(sectionStart);
  const nextIndex = earliestMarkerIndex(remaining, nextMarkers);

  return remaining.slice(0, nextIndex >= 0 ? nextIndex : remaining.length).trim();
}

function splitParagraphs(text: string): string[] {
  const prepared = normalizeWhitespace(text)
    .replace(/\s+(?=\d{1,2}:\d{2}\s*(?:am|pm)?\s*[–-])/gi, " | ")
    .replace(
      /\s+(?=(?:Morning|Afternoon|Evening|Overnight|Optional|Exclusive(?:\s+for\s+you!)?|Following|After|Prior|Later|Today|Spend|Transfer|Check-Into|Check-In|Visit|Take|Join|Head|Relax|Enjoy|Explore|Witness|Pay|Go|Partake|Indulge|Refresh|Sail|Arrive|Pickup|Continue|Learn|Get)\b)/g,
      " | "
    );

  return prepared
    .split(/\s+\|\s+|(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeDayLabel(label: string): string {
  return label.replace(/\s+/g, " ").replace(/\s*([–-])\s*/g, " $1 ").trim();
}

function extractDayTitleAndContent(text: string): { title: string; content: string } | null {
  const trimmed = normalizeWhitespace(text);

  if (!trimmed) {
    return null;
  }

  const words = trimmed.split(" ");
  const titleWords: string[] = [];
  let contentStartIndex = 0;

  for (let index = 0; index < words.length; index += 1) {
    const normalizedWord = words[index].toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9!'-]+$/g, "");

    if (CONTENT_STARTERS.has(normalizedWord)) {
      contentStartIndex = index;
      break;
    }

    titleWords.push(words[index]);

    if (titleWords.length >= 8) {
      contentStartIndex = index + 1;
      break;
    }

    if (index === words.length - 1) {
      contentStartIndex = words.length;
    }
  }

  if (titleWords.length === 0) {
    return null;
  }

  return {
    title: titleWords.join(" ").trim(),
    content: words.slice(contentStartIndex).join(" ").trim(),
  };
}

function parseFaqs(text: string): ParsedFaq[] {
  return [...text.matchAll(/Q:\s*(.*?\?)\s*([\s\S]*?)(?=\sQ:\s*|$)/g)]
    .map((match) => ({
      question: normalizeWhitespace(match[1]),
      answer: normalizeWhitespace(match[2]),
    }))
    .filter((faq) => Boolean(faq.question) && Boolean(faq.answer));
}

function uniqueImageUrls(urls: string[] | undefined, heroImage: string): string[] {
  const seen = new Set<string>();

  return (urls || [])
    .filter((url) => Boolean(url) && !url.endsWith(".svg") && url !== heroImage)
    .filter((url) => {
      if (seen.has(url)) {
        return false;
      }

      seen.add(url);
      return true;
    });
}

export function parseItineraryContent(itinerary: Itinerary): ParsedItineraryContent {
  const detailText = cleanDetailText(itinerary.detail_text);
  const heroImage =
    itinerary.listing_image_url || itinerary.detail_image_urls?.[0] || "/img/room/room-1.jpg";
  const dayImages = uniqueImageUrls(itinerary.detail_image_urls, heroImage);
  const introMarkerIndex = detailText.indexOf(DETAIL_INTRO_MARKER);
  const fullTextFirstDayIndex = [...detailText.matchAll(DAY_LABEL_REGEX)]
    .map((match) => {
      const startIndex = match.index ?? -1;
      const parsed = extractDayTitleAndContent(detailText.slice(startIndex + match[0].length));
      return parsed ? startIndex : -1;
    })
    .find((index) => index >= 0) ?? -1;
  const introSource =
    introMarkerIndex >= 0
      ? detailText.slice(0, introMarkerIndex)
      : fullTextFirstDayIndex >= 0
        ? detailText.slice(0, fullTextFirstDayIndex)
        : detailText;
  const bodySource =
    introMarkerIndex >= 0
      ? detailText.slice(introMarkerIndex + DETAIL_INTRO_MARKER.length)
      : fullTextFirstDayIndex >= 0
        ? detailText.slice(fullTextFirstDayIndex)
        : "";
  const tailIndex = earliestMarkerIndex(bodySource, TAIL_SECTION_MARKERS);
  const dayBlock = tailIndex >= 0 ? bodySource.slice(0, tailIndex).trim() : bodySource.trim();
  const tailBlock = tailIndex >= 0 ? bodySource.slice(tailIndex).trim() : "";
  const dayStarts = [...dayBlock.matchAll(DAY_LABEL_REGEX)]
    .map((match) => {
      const afterLabel = dayBlock.slice((match.index ?? 0) + match[0].length);
      const parsed = extractDayTitleAndContent(afterLabel);

      if (!parsed) {
        return null;
      }

      return {
        index: match.index ?? 0,
        label: normalizeDayLabel(match[0]),
        rawLength: match[0].length,
      };
    })
    .filter((entry): entry is { index: number; label: string; rawLength: number } => Boolean(entry));

  const days = dayStarts
    .map((start, index) => {
      const end = index < dayStarts.length - 1 ? dayStarts[index + 1].index : dayBlock.length;
      const sectionText = dayBlock.slice(start.index + start.rawLength, end).trim();
      const parsed = extractDayTitleAndContent(sectionText);

      if (!parsed) {
        return null;
      }

      return {
        label: start.label,
        title: parsed.title,
        content: parsed.content,
        items: splitParagraphs(parsed.content),
        imageUrl: dayImages[index % Math.max(dayImages.length, 1)] || heroImage,
      };
    })
    .filter((day): day is ParsedDay => Boolean(day));

  const highlightsText = extractSectionText(
    tailBlock,
    "Journey Highlights",
    ["Places you will stay", "Insightful Tips", "FAQ"]
  );
  const tipsText = extractSectionText(tailBlock, "Insightful Tips", ["FAQ"]);
  const faqText = extractSectionText(tailBlock, "FAQ", []);

  return {
    intro: splitParagraphs(stripLeadingHeading(introSource, [itinerary.detail_title, itinerary.title])),
    days,
    highlights: splitParagraphs(highlightsText.replace(/See available hotels.*$/i, "").replace(/View All/i, "")),
    tips: splitParagraphs(tipsText),
    faqs: parseFaqs(faqText),
  };
}
