import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { truckTypes } from "@/content/truckTypes";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Truck Types We Dispatch",
  description:
    "Dry van, flatbed, reefer, step deck, box truck, power only, hot shot and straight truck dispatching.",
};

export default function TruckTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="Truck Types We Dispatch"
        subtitle="Whatever you drive, we know the lanes and the brokers that pay for it. Pick your equipment below."
      />

      {/* quick nav */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="container-rd flex flex-wrap justify-center gap-2">
          {truckTypes.map((t) => (
            <a key={t.slug} href={`#${t.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-1.5 text-xs text-slate-600 hover:border-primary hover:text-primary">
              <Icon name={t.icon} className="h-4 w-4" /> {t.name}
            </a>
          ))}
        </div>
      </section>

      {/* detail rows — photo beside each type, alternating sides */}
      <section className="bg-white">
        <div className="container-rd divide-y divide-slate-100">
          {truckTypes.map((t) => (
            <div key={t.slug} id={t.slug} className="grid scroll-mt-24 items-center gap-8 py-12 md:grid-cols-[65fr_35fr]">
              {/* Text + button — left (65%) */}
              <div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="eyebrow inline-flex items-center gap-1.5"><Icon name={t.icon} className="h-4 w-4" /> Equipment</span>
                    <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">{t.name}</h2>
                  </div>
                  <Link href="/contact" className="btn-primary shrink-0">Dispatch My {t.name}</Link>
                </div>
                <p className="mt-4 text-slate-600">{t.blurb}</p>
                <p className="mt-2 text-sm text-slate-500">
                  Our dispatchers know the {t.name.toLowerCase()} market — sourcing high-paying loads,
                  negotiating rates and handling paperwork so your {t.name.toLowerCase()} stays loaded and profitable.
                </p>
              </div>

              {/* Image — right (35%) */}
              <div>
                {t.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <Image
                      src={t.image}
                      alt={`${t.name} truck dispatch`}
                      fill
                      sizes="(max-width: 768px) 100vw, 35vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-slate-200 bg-primary/5 text-primary">
                    <Icon name={t.icon} className="h-20 w-20" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
