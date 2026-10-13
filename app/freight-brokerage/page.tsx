import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Freight Brokerage",
  description:
    "Shippers: move your freight with a reliable brokerage partner. Vetted carriers, competitive rates, and full visibility.",
};

const points = [
  { icon: "🚛", title: "Vetted Carrier Network", desc: "Every carrier is authority-verified and insured before they ever touch your freight." },
  { icon: "💰", title: "Competitive Rates", desc: "We price freight fairly for shippers and carriers alike — good rates that actually get covered." },
  { icon: "📍", title: "Full Visibility", desc: "Check calls, tracking and proactive updates from pickup to delivery." },
  { icon: "⚡", title: "Fast Coverage", desc: "Deep carrier relationships mean your loads get covered quickly, even in tight markets." },
];

export default function FreightBrokeragePage() {
  return (
    <>
      <PageHero
        eyebrow="For Shippers"
        title="Freight Brokerage"
        subtitle="Need freight moved? Elite Truck Dispatch connects your loads with vetted, reliable carriers — with competitive rates and full visibility from pickup to delivery."
      />
      <section className="section bg-slate-50">
        <div className="container-rd grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="card card-hover flex items-start gap-4">
              <span className="text-3xl">{p.icon}</span>
              <div>
                <h2 className="text-xl text-navy-900">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container-rd mt-12 rounded-2xl border border-primary/20 bg-primary-tint/50 p-8 text-center">
          <h2 className="text-2xl text-navy-900">Have Freight to Move?</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            Tell us about your lanes and volume — we&apos;ll put together a coverage plan that keeps your freight moving.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Request Carrier Coverage</Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
