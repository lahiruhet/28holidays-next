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
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-8">
          <p className="text-sm text-gray-500">Last updated: March 9, 2026</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including your name, phone number, email
              address, travel dates, passenger details, pickup/drop-off information, and any notes
              required to arrange your requested services.
            </p>
            <p>
              We may also collect technical information such as device type, browser data, IP address,
              and website usage events for security, diagnostics, and service improvement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">2. How We Use Your Information</h2>
            <p>
              Your information is used to respond to inquiries, generate quotations, confirm bookings,
              coordinate travel services, process payments, issue refunds, prevent fraud, and comply
              with legal or regulatory obligations.
            </p>
            <p>
              We may contact you by email, phone, or messaging platforms regarding your booking status,
              service updates, and required travel documentation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">3. Payment Data and Card Security</h2>
            <p>
              Card payments are processed by PCI-compliant payment gateway and acquiring bank systems.
              28Holidays does not store full card number, CVV, PIN, or sensitive authentication data.
            </p>
            <p>
              Payment transaction records, order references, and limited metadata may be retained for
              reconciliation, accounting, chargeback management, and compliance requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">4. Sharing of Information</h2>
            <p>
              We share personal data only as needed with transport operators, hotels, activity providers,
              payment service providers, and professional advisors to fulfill confirmed services.
            </p>
            <p>
              We do not sell personal data. We may disclose data when required by Sri Lankan law, court
              order, lawful government request, or fraud and security investigations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as required for operational, contractual, tax,
              accounting, dispute resolution, and legal compliance purposes.
            </p>
            <p>
              When retention is no longer necessary, data is deleted or irreversibly anonymized.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">6. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of personal data, subject to lawful and
              contractual limitations. You may also object to non-essential processing where applicable.
            </p>
            <p>
              To submit a request, contact info@28holidays.com. We may need to verify identity before
              completing certain requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">7. Cookies and Tracking</h2>
            <p>
              We may use cookies and similar technologies for session management, security, analytics,
              and user experience optimization. You can manage cookie settings in your browser.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">8. International Transfers and Security</h2>
            <p>
              Some service providers may process data outside Sri Lanka. We apply reasonable contractual
              and technical safeguards to protect data confidentiality and integrity.
            </p>
            <p>
              While we implement appropriate security controls, no internet transmission or storage method
              is guaranteed to be absolutely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-lora text-gray-900">9. Contact</h2>
            <p>
              For privacy or payment-data concerns, contact info@28holidays.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
