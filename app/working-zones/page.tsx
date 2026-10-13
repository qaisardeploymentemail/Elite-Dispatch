import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import QuoteSection from "@/components/QuoteSection";
import { zones } from "@/content/misc";

export const metadata: Metadata = {
  title: "Working Zones",
  description:
    "Elite Truck Dispatch dispatches across all 48 connected U.S. states and all of Canada — regional freight expertise, high-paying lanes, and cross-border coverage.",
};

export default function WorkingZonesPage() {
  return (
    <>
      <PageHero eyebrow="Coverage" title="Working Zones" subtitle={zones.intro} />

      {/* United States Coverage */}
      <section className="section bg-white">
        <div className="container-rd">
          <SectionHeading eyebrow="🇺🇸 Nationwide" title={zones.us.heading} subtitle={zones.us.blurb} />

          {/* 48-states banner */}
          <div className="mb-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary-tint/50 px-6 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-2xl font-extrabold text-navy-900">All 48 Connected States</p>
              <p className="text-sm text-slate-600">Deep expertise in the busiest, best-paying freight lanes.</p>
            </div>
            <span className="font-display text-4xl font-extrabold text-primary">48</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.us.regions.map((r) => (
              <div key={r.name} className="card card-hover">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-primary">📍</span>
                  <h3 className="text-xl text-navy-900">{r.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.states}</p>
              </div>
            ))}
          </div>

          {/* US region groups map */}
          <figure className="mx-auto mt-12 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src="/us-region-groups.png"
                alt="Map of US freight regions — West, Midwest, Southwest, Southeast and Northeast"
                width={1536}
                height={1024}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-500">
              Our five US freight regions at a glance.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Canada Coverage */}
      <section className="section bg-slate-50">
        <div className="container-rd">
          <SectionHeading eyebrow="🇨🇦 Cross-Border" title={zones.canada.heading} subtitle={zones.canada.blurb} />
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Major Canadian Freight Corridors</p>
            <p className="mt-4 text-lg leading-relaxed text-navy-900">{zones.canada.cities}</p>
            <p className="mt-4 text-sm text-slate-500">
              Our US–Canada cross-border team handles customs paperwork so your international loads keep rolling.
            </p>
          </div>
        </div>
      </section>

      {/* DAT Zip Zone Directory */}
      <section className="section bg-white">
        <div className="container-rd">
          <SectionHeading
            eyebrow="Freight Zones"
            title="Zip Zone Directory"
            subtitle="Loads are searched and priced by freight zip zones. Here's the reference directory we dispatch from — zones Z0–Z9 across the US, plus Canada and Mexico — so we target the exact lanes and regions that pay."
          />
          <figure className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src="/zip-zone-directory-dat.png"
                alt="Zip Zone Directory — US freight zones Z0–Z9 plus Canada and Mexico"
                width={2178}
                height={1410}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-500">
              Zip Zone Directory map — source:{" "}
              <a href="https://www.dat.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                DAT Freight &amp; Analytics (DAT.com)
              </a>
              . Shown for reference; DAT and Zip Zone Directory are trademarks of their respective owner.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section bg-white">
        <div className="container-rd">
          <SectionHeading
            eyebrow="What We Handle"
            title="Our Specialized Dispatch Services"
            subtitle="Whatever region you run, your dedicated dispatcher handles the whole load — start to invoice."
          />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {zones.specialized.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 text-primary">✓</span>
                <span className="text-sm text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Quote */}
      <QuoteSection />
    </>
  );
}
