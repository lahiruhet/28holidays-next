import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type QuotePayload = {
  page?: string;
  name?: string;
  email?: string;
  phone?: string;
  vehicleType?: string;
  travelStartDate?: string;
  travelEndDate?: string;
  adults?: string;
  children?: string;
  pickupDate?: string;
  dropoffDate?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  notes?: string;
  company?: string;
};

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@28holidays.com";

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function normalize(value: string | undefined) {
  return value?.trim() || "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const transport = getTransport();

  if (!transport) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (normalize(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const page = normalize(payload.page) || "unknown";
  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const phone = normalize(payload.phone);
  const vehicleType = normalize(payload.vehicleType);
  const travelStartDate = normalize(payload.travelStartDate);
  const travelEndDate = normalize(payload.travelEndDate);
  const adults = normalize(payload.adults);
  const children = normalize(payload.children);
  const pickupDate = normalize(payload.pickupDate);
  const dropoffDate = normalize(payload.dropoffDate);
  const pickupLocation = normalize(payload.pickupLocation);
  const dropoffLocation = normalize(payload.dropoffLocation);
  const notes = normalize(payload.notes);

  if (!name || !email || !phone || !vehicleType) {
    return NextResponse.json(
      { error: "Name, email, phone, and vehicle type are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (page === "home" && (!travelStartDate || !travelEndDate)) {
    return NextResponse.json(
      { error: "Travel start date and end date are required." },
      { status: 400 },
    );
  }

  if (page === "car-rental" && (!pickupDate || !dropoffDate)) {
    return NextResponse.json(
      { error: "Pick-up date and drop-off date are required." },
      { status: 400 },
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM || process.env.SMTP_USER;
  const finalSubject =
    page === "car-rental"
      ? "Car Rental Quote Request - 28Holidays"
      : "Vehicle Quote Request - 28Holidays";

  const textLines = [
    "New vehicle quote request",
    "",
    `Source Page: ${page}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Vehicle Type: ${vehicleType}`,
  ];

  if (page === "home") {
    textLines.push(
      `Travel Start Date: ${travelStartDate}`,
      `Travel End Date: ${travelEndDate}`,
      `Adults: ${adults || "-"}`,
      `Children: ${children || "-"}`,
    );
  } else {
    textLines.push(
      `Pick-up Date: ${pickupDate || "-"}`,
      `Drop-off Date: ${dropoffDate || "-"}`,
      `Pick-up Location: ${pickupLocation || "-"}`,
      `Drop-off Location: ${dropoffLocation || "-"}`,
    );
  }

  textLines.push("", "Additional Notes:", notes || "-");

  const htmlDetails = [
    `<p><strong>Source Page:</strong> ${escapeHtml(page)}</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`,
    `<p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType)}</p>`,
  ];

  if (page === "home") {
    htmlDetails.push(
      `<p><strong>Travel Start Date:</strong> ${escapeHtml(travelStartDate)}</p>`,
      `<p><strong>Travel End Date:</strong> ${escapeHtml(travelEndDate)}</p>`,
      `<p><strong>Adults:</strong> ${escapeHtml(adults || "-")}</p>`,
      `<p><strong>Children:</strong> ${escapeHtml(children || "-")}</p>`,
    );
  } else {
    htmlDetails.push(
      `<p><strong>Pick-up Date:</strong> ${escapeHtml(pickupDate || "-")}</p>`,
      `<p><strong>Drop-off Date:</strong> ${escapeHtml(dropoffDate || "-")}</p>`,
      `<p><strong>Pick-up Location:</strong> ${escapeHtml(pickupLocation || "-")}</p>`,
      `<p><strong>Drop-off Location:</strong> ${escapeHtml(dropoffLocation || "-")}</p>`,
    );
  }

  htmlDetails.push(
    "<p><strong>Additional Notes:</strong></p>",
    `<p>${escapeHtml(notes || "-").replace(/\n/g, "<br />")}</p>`,
  );

  try {
    await transport.sendMail({
      to: CONTACT_TO_EMAIL,
      from,
      replyTo: email,
      subject: finalSubject,
      text: textLines.join("\n"),
      html: `
        <p><strong>New vehicle quote request</strong></p>
        ${htmlDetails.join("\n")}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send quote request email", error);

    return NextResponse.json(
      { error: "We could not send your quote request. Please try again." },
      { status: 500 },
    );
  }
}
