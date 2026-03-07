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
        <div className="max-w-5xl mx-auto px-4 space-y-6 text-gray-700">
          <p>
            Cancellations made 14 or more days before service start are eligible for a partial refund
            after deduction of non-recoverable booking fees.
          </p>
          <p>
            Cancellations made within 14 days of service start may incur higher charges based on
            confirmed supplier terms. Same-day cancellations and no-shows are generally non-refundable.
          </p>
          <p>
            If a cancellation is required due to force majeure, we will work with you to reschedule or
            provide the best possible alternative based on supplier policies.
          </p>
        </div>
      </section>
    </main>
  );
}
