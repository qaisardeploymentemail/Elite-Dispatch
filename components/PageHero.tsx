export default function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />
      <div className="container-rd relative py-16 text-center lg:py-20">
        {eyebrow && <span className="eyebrow !text-primary-light">{eyebrow}</span>}
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
