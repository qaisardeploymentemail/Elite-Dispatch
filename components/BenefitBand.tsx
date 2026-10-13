import Icon from "./Icon";

const benefits = [
  { icon: "dollar", title: "Transparent Pricing", desc: "Simple percentage or flat weekly — no hidden fees, no long-term contracts." },
  { icon: "clock", title: "24/7 Support", desc: "Real people on the phone around the clock when a load or a plan changes." },
  { icon: "chart", title: "Higher-Paying Loads", desc: "We chase rate, not just miles — more revenue in your pocket every week." },
];

export default function BenefitBand() {
  return (
    <section className="bg-white">
      <div className="container-rd grid gap-6 py-12 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-primary-tint/40 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name={b.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg text-navy-900">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
