import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact / Book Dispatch",
  description: "Book dispatch or get a free quote. Call 24/7 or send your details and a dedicated dispatcher will reach out.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Dispatch"
        title="Let's Get You Loaded"
        subtitle="Call us 24/7 or send your details below — a dedicated dispatcher will reach out with a plan to keep your truck moving."
      />
      <section className="section bg-slate-50">
        <div className="container-rd grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl text-navy-900">Talk to a Dispatcher</h2>
            <p className="mt-3 text-slate-600">
              We&apos;re available around the clock. Reach out any way you like — we&apos;ll get you set up fast.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["📍", "Address", site.address, "https://maps.google.com/?q=" + encodeURIComponent("Elite Truck Dispatch, " + site.address)],
                ["✉️", "Email", site.email, site.emailHref],
                ["📞", "Phone", site.phone, site.phoneHref],
                ["✆", "WhatsApp", "Message us " + site.whatsappNumber, site.whatsapp],
                ["🕑", "Support", site.hours, ""],
              ].map(([icon, label, value, href]) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-navy-900 hover:text-primary">{value}</a>
                    ) : (
                      <p className="font-semibold text-navy-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-2xl text-navy-900">Get a Free Quote</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
