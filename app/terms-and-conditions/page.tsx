import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Elite Truck Dispatch website and dispatching services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The terms that govern your use of our website and dispatching services."
      />
      <section className="section bg-white">
        <div className="container-rd max-w-3xl space-y-8 leading-relaxed text-slate-600">
          <p className="text-sm text-slate-400">Last updated: August 1, 2026</p>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
            <a href={site.url} className="text-primary hover:underline">{site.url.replace(/^https?:\/\//, "")}</a> and the truck dispatching
            services provided by Elite Truck Dispatch LLC (&ldquo;Elite Truck Dispatch,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
            By using our website or services, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-xl font-bold text-navy-900">1. Use of Services</h2>
            <p className="mt-2">Elite Truck Dispatch provides truck dispatching services for owner-operators and carriers, which may include:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Load sourcing and booking</li>
              <li>Rate negotiation with brokers and shippers</li>
              <li>Broker/shipper setup and communication</li>
              <li>Paperwork support (rate confirmations, BOLs, invoicing) and factoring coordination</li>
              <li>Customer support by phone, email, or online messaging</li>
              <li>Notifications regarding service updates or changes</li>
            </ul>
            <p className="mt-3">
              By using our services, you agree to provide accurate information necessary to set up your authority and
              complete your bookings or service requests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">2. Eligibility</h2>
            <p className="mt-2">
              You must be at least 18 years old and legally capable of entering into contracts to use our services. By
              using our services, you confirm that you meet these requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">3. Communications</h2>
            <p className="mt-2">
              By providing your contact information, you consent to receive communications from Elite Truck Dispatch
              regarding your account, bookings, service updates, or other relevant information.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li><b>Message frequency:</b> varies depending on your service interactions.</li>
              <li><b>Message and data rates:</b> standard rates may apply per your carrier.</li>
              <li>
                <b>Opt-out:</b> you may opt out of marketing communications by contacting us at{" "}
                <a href={site.emailHref} className="text-primary hover:underline">{site.email}</a> or unsubscribing
                through the links provided.
              </li>
            </ul>
            <p className="mt-3">We do not share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">4. User Responsibilities</h2>
            <p className="mt-2">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Use our services in any unlawful or harmful way;</li>
              <li>Provide false, misleading, or incomplete information;</li>
              <li>Attempt unauthorized access to our systems or data.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">5. Dispatch Relationship</h2>
            <p className="mt-2">
              Elite Truck Dispatch acts as a dispatch agent on your behalf. You remain the motor carrier of record and are
              solely responsible for the safe, legal, and compliant operation of your equipment, for maintaining your
              authority and insurance, and for the final acceptance of any load. Elite Truck Dispatch does not take
              possession of freight and is not a motor carrier or freight broker of record for loads it dispatches
              on your behalf.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">6. Intellectual Property</h2>
            <p className="mt-2">
              All content, logos, trademarks, and service marks on this website are the property of Elite Truck Dispatch or
              its licensors. You may not reproduce, distribute, or use any content without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">7. Limitation of Liability</h2>
            <p className="mt-2">
              Elite Truck Dispatch is not liable for any indirect, incidental, or consequential damages resulting from your
              use of our services. While we strive to provide reliable service, we do not guarantee uninterrupted
              availability, specific load volumes, or guaranteed rates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">8. Modifications to Services or Terms</h2>
            <p className="mt-2">
              We may modify these Terms or our services at any time. Continued use after changes constitutes acceptance
              of the updated Terms. The most current version will always be available on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">9. Governing Law</h2>
            {/* TODO: confirm the state of Elite Truck Dispatch LLC's registration + preferred venue and update the wording. */}
            <p className="mt-2">
              These Terms are governed by the laws of the United States and the state in which Elite Truck Dispatch LLC is
              organized. Any disputes arising from these Terms or our services shall be resolved in the courts of that
              jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">10. Contact Us</h2>
            <p className="mt-2">
              Questions about these Terms? Reach us at{" "}
              <a href={site.emailHref} className="text-primary hover:underline">{site.email}</a> or{" "}
              <a href={site.phoneHref} className="text-primary hover:underline">{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
