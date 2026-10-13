import { process } from "@/content/services";
import SectionHeading from "./SectionHeading";

export default function ProcessSteps() {
  return (
    <section className="section bg-white">
      <div className="container-rd">
        <SectionHeading
          eyebrow="How It Works"
          title="From Empty to Loaded in Six Steps"
          subtitle="A dispatcher who handles the whole load lifecycle so you can stay focused on the road."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="card card-hover">
              <span className="font-display text-5xl font-extrabold text-primary/20">{p.step}</span>
              <h3 className="mt-2 text-lg text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
