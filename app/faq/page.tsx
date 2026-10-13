import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about truck dispatching, pricing, factoring, contracts and getting started with Elite Truck Dispatch.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Questions" title="Frequently Asked Questions" subtitle="Everything you need to know before getting loaded with Elite Truck Dispatch." />
      <section className="section bg-slate-50">
        <div className="container-rd">
          <FaqAccordion />
        </div>
      </section>
      <CTABand />
    </>
  );
}
