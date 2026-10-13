import Link from "next/link";
import { plans, percentTiers } from "@/content/pricing";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-rd">
        <SectionHeading
          eyebrow="Simple, Honest Pricing"
          title="Two Ways to Pay — You Choose"
          subtitle="Pay a small percentage of what we book, or a flat weekly rate per truck. Either way: no hidden fees, no contracts, cancel anytime."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 ${
                p.highlight
                  ? "border-primary bg-primary-tint/50 shadow-soft"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
                  Most Popular
                </span>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{p.best}</p>
              <h3 className="mt-3 text-2xl text-navy-900">{p.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-5xl font-extrabold text-navy-900">{p.price}</span>
                <span className="mb-1 text-sm text-slate-500">{p.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`mt-8 w-full ${p.highlight ? "btn-primary" : "btn-outline"}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Percentage tier table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-navy-900 px-6 py-4">
            <h3 className="text-lg text-white">Percentage by Equipment</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {percentTiers.map((t) => (
              <div key={t.equipment} className="flex items-center justify-between bg-white px-6 py-3.5">
                <span className="text-sm text-slate-600">{t.equipment}</span>
                <span className="font-display text-lg font-extrabold text-primary">{t.rate}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Rates shown are typical and confirmed on setup. Ask about specialized equipment and multi-truck discounts.
        </p>
      </div>
    </section>
  );
}
