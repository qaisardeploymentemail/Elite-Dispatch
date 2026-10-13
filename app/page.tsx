import Image from "next/image";
import { site } from "@/content/site";
import Hero from "@/components/Hero";
import BenefitBand from "@/components/BenefitBand";
import TruckDispatchIntro from "@/components/TruckDispatchIntro";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import PayoutCalculator from "@/components/PayoutCalculator";
// Stats hidden until real numbers exist (0+ counters = negative social proof).
// import Stats from "@/components/Stats";
import TruckTypesGrid from "@/components/TruckTypesGrid";
import QuoteSection from "@/components/QuoteSection";
import ProcessSteps from "@/components/ProcessSteps";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      {/* R8 — full-width hero banner, replacing the old Rayan-branded
          master-hero.jpeg. The split <Hero /> below it is kept.

          The banner carries its headline, callouts and CTAs as pixels, so two things
          are added back as real markup: a visually-hidden <h1> (search engines and
          tap-to-call overlay. The <h1> and the visible Call button live in <Hero />
          directly below, which the client asked to keep. */}
      <section className="bg-navy-900 py-6">
        <div className="container-rd">
          <a
            href={site.phoneHref}
            aria-label={`Call Elite Truck Dispatch on ${site.phone}`}
            className="group relative mx-auto block overflow-hidden rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            <Image
              src="/hero-banner.jpg"
              alt="Elite Truck Dispatch — end-to-end truck dispatching across the USA and Canada"
              width={1586}
              height={672}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="block h-auto w-full"
            />
          </a>
        </div>
      </section>
      <Hero />
      <BenefitBand />
      <TruckDispatchIntro />
      <Reviews />
      <PayoutCalculator />
      <Services />
      <WhyChooseUs />
      <Pricing />
      {/* <Stats /> — hidden until real metrics are available */}
      <TruckTypesGrid />
      <QuoteSection />
      <ProcessSteps />
      <About />
      <CTABand />
    </>
  );
}
