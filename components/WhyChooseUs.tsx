import { whyChooseUs } from "@/content/services";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="section bg-navy-900">
      <div className="container-rd">
        <SectionHeading
          onDark
          eyebrow="Why Elite Truck Dispatch"
          title="Built Around the Driver"
          subtitle="We only win when you do. That's why owner-operators and small fleets trust us to keep them loaded and profitable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w) => (
            <div key={w.title} className="card-dark card-hover">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary-light">◆</span>
                <h3 className="text-lg text-white">{w.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
