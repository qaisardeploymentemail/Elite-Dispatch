import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Elite Truck Dispatch collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Elite Truck Dispatch collects, uses, and protects your information."
      />
      <section className="section bg-white">
        <div className="container-rd max-w-3xl space-y-8 leading-relaxed text-slate-600">
          <p className="text-sm text-slate-400">Last updated: August 1, 2026</p>
          <p>
            Elite Truck Dispatch LLC (&ldquo;Elite Truck Dispatch,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information
            when you visit <a href={site.url} className="text-primary hover:underline">{site.url.replace(/^https?:\/\//, "")}</a> or use
            our truck dispatching services.
          </p>

          <div>
            <h2 className="text-xl font-bold text-navy-900">1. Information We Collect</h2>
            <h3 className="mt-3 font-semibold text-navy-800">A. Information You Provide</h3>
            <p className="mt-1">
              Information you give us when you submit contact or quote forms, request dispatch services, sign up for
              updates, or communicate by phone, email, or messaging — for example: full name, email address, phone
              number, business/company name, MC/DOT number, mailing or billing address, and details about your
              equipment, lanes, and service needs.
            </p>
            <h3 className="mt-4 font-semibold text-navy-800">B. Information Collected Automatically</h3>
            <p className="mt-1">
              When you visit our website we may automatically collect certain details such as your IP address,
              browser type and version, pages visited, and the date and time of your visit, through cookies and
              similar tracking technologies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use your information to provide and improve our dispatch services; respond to inquiries and support
              requests; set up your carrier profile, broker packets, and bookings; send service notifications and
              updates; for administrative and customer-service purposes; and, with your consent, to send marketing or
              promotional messages. If we intend to use your information for a new purpose, we will notify you first.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">3. Legal Basis for Processing (Where Applicable)</h2>
            <p className="mt-2">
              Where applicable, we process your information based on your consent (for communications), contractual
              necessity (to deliver dispatch services), and our legitimate interests (service improvement, analytics,
              and security).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">4. Third-Party Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share it with trusted service providers, factoring or
              payment partners, and freight brokers as needed to perform dispatch services on your behalf, and with
              law enforcement or government authorities when legally required. All third parties are expected to
              protect your information and use it only for the purposes we specify.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">5. Cookies and Tracking Technologies</h2>
            <p className="mt-2">
              We use cookies to enhance site performance, analyze visitor behavior, and remember your preferences.
              You can manage or disable cookies through your browser settings, though some features may not work as
              intended.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">6. Data Security</h2>
            <p className="mt-2">
              We implement reasonable technical and organizational safeguards to protect your information. However, no
              method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">7. Data Retention</h2>
            <p className="mt-2">
              We retain personal information only as long as necessary for the purposes described here or as required
              by law, after which it is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">8. Your Privacy Rights</h2>
            <p className="mt-2">
              Depending on your location, you may have the right to access your personal information, request
              corrections or deletion, and opt out of marketing communications. To exercise these rights, contact us
              using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">9. Children&apos;s Privacy</h2>
            <p className="mt-2">
              Our website and services are not intended for children under 13. We do not knowingly collect personal
              information from minors under this age.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">10. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any significant changes will be posted on this page
              with a revised &ldquo;last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">11. Contact Us</h2>
            <p className="mt-2">
              Questions about this Privacy Policy? Reach us at{" "}
              <a href={site.emailHref} className="text-primary hover:underline">{site.email}</a>,{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">{site.phone}</a>, or via{" "}
              <a href={site.url} className="text-primary hover:underline">{site.url.replace(/^https?:\/\//, "")}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
