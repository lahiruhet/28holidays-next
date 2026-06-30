"use client";

import { useRef, useState } from "react";
import type { CountryCodeOption } from "@/lib/countryCodeOptions";

const WHATSAPP_NUMBER = "94788888761";

export default function HomeQuoteForm({
  countryCodeOptions,
}: {
  countryCodeOptions: CountryCodeOption[];
}) {
  const quoteFormRef = useRef<HTMLFormElement>(null);
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [quoteMessage, setQuoteMessage] = useState("");

  const submitQuote = async (channel: "whatsapp" | "email") => {
    const form = quoteFormRef.current;
    if (!form || !form.reportValidity()) {
      return;
    }

    setQuoteStatus("submitting");
    setQuoteMessage("");

    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const vehicleType = (data.get("vehicleType") as string) || "";
    const adults = (data.get("adults") as string) || "";
    const children = (data.get("children") as string) || "";
    const fromDate = (data.get("fromDate") as string) || "";
    const toDate = (data.get("toDate") as string) || "";
    const countryCode = (data.get("countryCode") as string) || "+94";
    const phone = (data.get("phone") as string) || "";
    const email = (data.get("email") as string) || "";
    const notes = (data.get("notes") as string) || "";
    const company = (data.get("company") as string) || "";

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: "home",
          name,
          vehicleType,
          adults,
          children,
          travelStartDate: fromDate,
          travelEndDate: toDate,
          phone: `${countryCode} ${phone}`.trim(),
          email,
          notes,
          company,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your quote request.");
      }

      setQuoteStatus("success");
      setQuoteMessage("Your quote request has been sent.");
      form.reset();

      if (channel === "whatsapp") {
        const whatsappText = `New quote request submitted by ${name}. Please continue on WhatsApp.`;
        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
          "noopener,noreferrer",
        );
      }
    } catch (error) {
      setQuoteStatus("error");
      setQuoteMessage(
        error instanceof Error ? error.message : "We could not send your quote request.",
      );
    }
  };

  return (
    <section id="vehicle-quote" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="section-label">RENT A VEHICLE</p>
          <h2 className="section-title">Vehicle Quote Request</h2>
        </div>
        <form ref={quoteFormRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" className="form-control" required />
          <select name="vehicleType" defaultValue="" className="form-control" required>
            <option value="">Vehicle Type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
            <option value="bus">Bus</option>
          </select>
          <select name="adults" defaultValue="" className="form-control" required>
            <option value="">Select number of adults</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
          <select name="children" defaultValue="" className="form-control" required>
            <option value="">Select number of children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label className="form-field">
            <span className="form-label">Travel start date *</span>
            <input id="fromDate" type="date" name="fromDate" className="form-control" required />
          </label>
          <label className="form-field">
            <span className="form-label">Travel end date *</span>
            <input id="toDate" type="date" name="toDate" className="form-control" required />
          </label>
          <div className="form-phone-grid">
            <select
              name="countryCode"
              defaultValue="+94"
              className="form-control"
              aria-label="Country code"
            >
              {countryCodeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="form-control min-w-0"
              required
            />
          </div>
          <input type="email" name="email" placeholder="Email Address *" className="form-control" required />
          <div className="md:col-span-2">
            <textarea name="notes" placeholder="Additional Notes" className="form-control" rows={4}></textarea>
          </div>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          {quoteStatus !== "idle" ? (
            <p
              className={`md:col-span-2 rounded-md px-4 py-3 text-sm ${
                quoteStatus === "success"
                  ? "bg-green-50 text-green-700"
                  : quoteStatus === "error"
                    ? "bg-red-50 text-red-700"
                    : "bg-slate-100 text-slate-600"
              }`}
              role="status"
            >
              {quoteStatus === "submitting" ? "Sending your quote request..." : quoteMessage}
            </p>
          ) : null}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="btn-whatsapp justify-center sm:min-w-[220px]"
              onClick={() => void submitQuote("whatsapp")}
              disabled={quoteStatus === "submitting"}
            >
              {quoteStatus === "submitting" ? "SENDING..." : "SEND VIA WHATSAPP"}
            </button>
            <button
              type="button"
              className="btn-primary sm:min-w-[220px]"
              onClick={() => void submitQuote("email")}
              disabled={quoteStatus === "submitting"}
            >
              {quoteStatus === "submitting" ? "SENDING..." : "SEND VIA EMAIL"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
