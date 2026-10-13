import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service truck dispatching: load booking, rate negotiation, paperwork, broker communication, factoring and 24/7 support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Dispatching, Done Right"
        subtitle="Everything it takes to keep your truck loaded and profitable — handled by a dedicated dispatcher who works for you."
      />
      <Services />
      <ProcessSteps />
      <WhyChooseUs />
      <Pricing />
      <CTABand />
    </>
  );
}
