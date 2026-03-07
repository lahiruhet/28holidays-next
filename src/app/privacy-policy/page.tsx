import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-lora text-center mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0056D8]">Home</Link>
            <span>&gt;</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-6 text-gray-700">
          <p>
            We collect contact and travel request details only to respond to inquiries, prepare
            quotations, and provide booked services.
          </p>
          <p>
            Your data is handled securely and is not sold to third parties. We may share limited
            information with transport, accommodation, or activity partners only when required to
            fulfill confirmed bookings.
          </p>
          <p>
            For data updates or removal requests, contact us at info@28holidays.com.
          </p>
        </div>
      </section>
    </main>
  );
}
