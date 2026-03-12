"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CountryCodePicker from "@/components/CountryCodePicker";
import { useCountryCodes } from "@/hooks/useCountryCodes";
import { vehicleTypes, vehicles } from "@/data/vehicles";

const WHATSAPP_NUMBER = "94788888761";
const QUOTE_EMAIL = "info@28holidays.com";

export default function CarRentalPage() {
  const quoteFormRef = useRef<HTMLFormElement>(null);
  const countryCodes = useCountryCodes();

  const submitQuote = (channel: "whatsapp" | "email") => {
    const form = quoteFormRef.current;
    if (!form || !form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const vehicleType = (data.get("vehicleType") as string) || "";
    const pickupDate = (data.get("pickupDate") as string) || "";
    const dropoffDate = (data.get("dropoffDate") as string) || "";
    const pickupLocation = (data.get("pickupLocation") as string) || "";
    const dropoffLocation = (data.get("dropoffLocation") as string) || "";
    const countryCode = (data.get("countryCode") as string) || "+94";
    const phone = (data.get("phone") as string) || "";
    const email = (data.get("email") as string) || "";
    const requirements = (data.get("requirements") as string) || "";

    const message = [
      "Vehicle Quote Request (Car Rental Page)",
      "",
      `Name: ${name}`,
      `Vehicle Type: ${vehicleType}`,
      `Pick-up Date: ${pickupDate}`,
      `Drop-off Date: ${dropoffDate}`,
      `Pick-up Location: ${pickupLocation || "-"}`,
      `Drop-off Location: ${dropoffLocation || "-"}`,
      `Phone: ${countryCode} ${phone}`,
      `Email: ${email}`,
      `Additional Requirements: ${requirements || "-"}`,
    ].join("\n");

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
        "Car Rental Quote Request - 28Holidays",
      )}&body=${encodeURIComponent(message)}`;
    }

    form.reset();
  };

  return (
    <main>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Car Rental</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">
              Home
            </Link>
            <span>&gt;</span>
            <span>Car Rental</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label">OUR FLEET</p>
            <h2 className="section-title">Choose Your Vehicle</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a range of well-maintained vehicles with experienced drivers to make your
              Sri Lankan journey comfortable and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <article key={vehicle.slug} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl font-lora font-semibold">{vehicle.name}</h3>
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0056D8]">
                      {vehicle.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-5">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0056D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Up to {vehicle.capacity} passengers
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0056D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                      {vehicle.luggage}
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[#0056D8] font-semibold">{vehicle.priceFrom}</span>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/car-rental/${vehicle.slug}`}
                        className="text-sm font-medium text-slate-900 hover:text-[#0056D8]"
                      >
                        View Details
                      </Link>
                      <Link href="#quote-form" className="btn-primary text-sm py-2 px-4">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-label">GET A QUOTE</p>
            <h2 className="section-title">Request Vehicle Quote</h2>
          </div>
          <form ref={quoteFormRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name *" className="form-control" required />
            <select name="vehicleType" defaultValue="" className="form-control" required>
              <option value="">Vehicle Type</option>
              {vehicleTypes.map((vehicleType) => (
                <option key={vehicleType} value={vehicleType}>
                  {vehicleType}
                </option>
              ))}
            </select>
            <label className="form-field">
              <span className="form-label">Pick-up date *</span>
              <input type="date" name="pickupDate" className="form-control" required />
            </label>
            <label className="form-field">
              <span className="form-label">Drop-off date *</span>
              <input type="date" name="dropoffDate" className="form-control" required />
            </label>
            <input type="text" name="pickupLocation" placeholder="Pick-up Location" className="form-control" />
            <input type="text" name="dropoffLocation" placeholder="Drop-off Location" className="form-control" />
            <div className="form-phone-grid">
              <CountryCodePicker
                name="countryCode"
                options={countryCodes}
                defaultValue="+94"
                ariaLabel="Country code"
              />
              <input type="tel" name="phone" placeholder="Phone Number *" required className="form-control min-w-0" />
            </div>
            <input type="email" name="email" placeholder="Email Address *" className="form-control" required />
            <div className="md:col-span-2">
              <textarea
                name="requirements"
                placeholder="Additional Requirements"
                className="form-control"
                rows={4}
              ></textarea>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="btn-whatsapp justify-center sm:min-w-[220px]"
                onClick={() => submitQuote("whatsapp")}
              >
                SEND VIA WHATSAPP
              </button>
              <button
                type="button"
                className="btn-primary sm:min-w-[220px]"
                onClick={() => submitQuote("email")}
              >
                SEND VIA EMAIL
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
