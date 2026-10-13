import { services } from "@/content/services";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-rd">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Service Truck Dispatching"
          subtitle="Everything it takes to keep your truck moving and your revenue climbing — handled by a dedicated dispatcher who works for you."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl text-navy-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
