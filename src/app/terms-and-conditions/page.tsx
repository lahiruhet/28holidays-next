import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Terms & Conditions</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-6 text-gray-700">
          <p>
            By using 28Holidays services, you agree to our booking, payment, and travel terms.
            Tour and vehicle availability is subject to confirmation at the time of booking.
          </p>
          <p>
            Final pricing may vary based on season, route changes, and special requests. We will
            confirm all inclusions and exclusions in writing before final payment.
          </p>
          <p>
            Customers are responsible for valid passports, visas, and travel insurance. 28Holidays
            is not liable for losses caused by delays, natural events, or third-party service failures.
          </p>
        </div>
      </section>
    </main>
  );
}
