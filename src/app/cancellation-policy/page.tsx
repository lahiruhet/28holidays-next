import Link from "next/link";

export default function CancellationPolicyPage() {
  return (
    <main>
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Cancellation Policy</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Cancellation Policy</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-8">
          <p className="text-sm text-gray-500">Last updated: March 9, 2026</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">1. Cancellation Requests</h2>
            <p>
              Cancellation requests must be submitted in writing by email from the booking contact.
              The effective cancellation date is the date and time we receive the written notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">2. Standard Cancellation Charges</h2>
            <p>Unless a specific quotation states otherwise, the following charges apply:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>30 days or more before service start: 10% of total booking value.</li>
              <li>15 to 29 days before service start: 25% of total booking value.</li>
              <li>7 to 14 days before service start: 50% of total booking value.</li>
              <li>3 to 6 days before service start: 75% of total booking value.</li>
              <li>0 to 2 days before service start, no-show, or early departure: 100% charge.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">3. Non-Refundable Components</h2>
            <p>
              Certain items may be fully non-refundable once confirmed, including special event tickets,
              permit-based activities, peak-season hotel allocations, and advance-purchase transport.
            </p>
            <p>
              Payment gateway charges, bank transfer charges, and currency conversion losses are generally
              non-refundable unless required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">4. Amendments and Date Changes</h2>
            <p>
              Date or itinerary changes requested by the customer are treated as amendments and may incur
              price differences, supplier penalties, or administration fees.
            </p>
            <p>
              If an amendment is not possible, the request may be treated as a cancellation and rebooking.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">5. Cancellations by 28Holidays</h2>
            <p>
              If we must cancel due to reasons within our control, customers will receive either a
              suitable alternative or a refund for services not delivered.
            </p>
            <p>
              If cancellation is caused by force majeure events, refunds will be processed after
              deducting unrecoverable costs retained by third-party suppliers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">6. Refund Method and Timelines</h2>
            <p>
              Approved refunds are issued to the original payment method where possible. Card refunds
              are typically processed within 7 to 14 business days after final approval, subject to bank
              and card network timelines.
            </p>
            <p>
              For chargeback or dispute processes initiated through banks, we will provide supporting
              records in accordance with payment gateway and card scheme rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">7. Contact</h2>
            <p>
              For cancellation and refund support, contact info@28holidays.com with your booking reference.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
