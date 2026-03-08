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
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-8">
          <p className="text-sm text-gray-500">Last updated: March 9, 2026</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">1. Scope and Acceptance</h2>
            <p>
              These Terms and Conditions govern all services offered by 28Holidays, including tour
              planning, transportation, accommodation arrangements, activity reservations, and related
              support services in Sri Lanka.
            </p>
            <p>
              By making an inquiry, booking, payment, or using this website, you agree to these terms,
              our Privacy Policy, and our Cancellation Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">2. Booking Confirmation</h2>
            <p>
              Bookings are considered confirmed only after written confirmation from 28Holidays and
              receipt of the required deposit or full payment.
            </p>
            <p>
              Service availability is subject to supplier capacity, weather, local regulations, and
              force majeure events. If an item is unavailable, a comparable alternative will be offered.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">3. Pricing, Currency, and Taxes</h2>
            <p>
              All prices are quoted in the agreed currency and may include or exclude taxes and service
              charges as stated in your quotation. Bank charges, card processing fees, and currency
              conversion charges from your issuer are the customer&apos;s responsibility unless explicitly
              stated otherwise.
            </p>
            <p>
              Quotations are valid for the stated period and may change due to supplier revisions,
              exchange fluctuations, route changes, or customer-requested modifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">4. Online Card Payments</h2>
            <p>
              Online card payments are processed through authorized payment gateway providers and
              acquiring bank infrastructure in Sri Lanka. 28Holidays does not store full card numbers,
              CVV codes, or card PIN data on its own systems.
            </p>
            <p>
              We reserve the right to decline, hold, or cancel a transaction where fraud checks fail,
              payment authorization is rejected, or compliance concerns arise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">5. Customer Responsibilities</h2>
            <p>
              Customers are responsible for accurate traveler details, valid travel documents, medical
              suitability for activities, and obtaining appropriate insurance cover.
            </p>
            <p>
              Customers must follow local laws and provider safety instructions. We may remove a traveler
              from a service without refund for unsafe, abusive, or unlawful behavior.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">6. Changes, Cancellations, and Refunds</h2>
            <p>
              Customer-requested changes are subject to availability and may incur additional charges.
              Cancellations and refunds are handled in line with the published Cancellation Policy and
              supplier terms.
            </p>
            <p>
              Approved refunds are returned via the original payment method when possible and are subject
              to processing timelines of banks, card networks, and payment gateway operators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">7. Liability and Force Majeure</h2>
            <p>
              28Holidays coordinates services provided by third-party suppliers and is not liable for
              losses arising from supplier failures, weather conditions, transport disruptions, political
              events, public health restrictions, or other events beyond reasonable control.
            </p>
            <p>
              Our maximum liability for direct proven loss is limited to the amount paid by the customer
              for the affected service, except where limited by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">8. Governing Law and Contact</h2>
            <p>
              These terms are governed by the laws of Sri Lanka. Any disputes shall be subject to the
              jurisdiction of competent courts in Sri Lanka.
            </p>
            <p>
              For service or payment-related questions, contact us at info@28holidays.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
