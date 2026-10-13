import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SetupPipeline from "@/components/SetupPipeline";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "How to Start",
  description: "Getting started with Elite Truck Dispatch is simple — from first call to your first booked load in as little as 24 hours.",
};

const steps = [
  { n: "01", t: "Quick Call", d: "Reach out by phone or the quote form. We learn about your truck, authority age and the lanes you want to run." },
  { n: "02", t: "Easy Onboarding", d: "Send over your authority, insurance and W-9. We build your carrier profile and get broker packets ready — we do the busywork." },
  { n: "03", t: "Meet Your Dispatcher", d: "You're matched with a dedicated dispatcher who learns your preferences, rate goals and home time." },
  { n: "04", t: "Start Getting Loaded", d: "We source and negotiate loads, you approve them, and we handle the rest — often your first load within 24 hours." },
];

export default function HowToStartPage() {
  return (
    <>
      <PageHero
        eyebrow="Getting Started"
        title="How to Start"
        subtitle="New authority or seasoned operator — getting loaded with Elite Truck Dispatch takes minutes to set up and no long-term commitment."
      />
      <SetupPipeline />
      <section className="section bg-white">
        <div className="container-rd grid gap-6 lg:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="card card-hover flex gap-5">
              <span className="font-display text-5xl font-extrabold text-primary/30">{s.n}</span>
              <div>
                <h2 className="text-xl text-navy-900">{s.t}</h2>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
