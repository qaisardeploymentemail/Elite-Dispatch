import Link from "next/link";
import { site } from "@/content/site";

export default function About() {
  return (
    <section className="section bg-white">
      <div className="container-rd grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 text-3xl text-navy-900 sm:text-4xl">More Than a Dispatcher — Your Partner on the Road</h2>
          <p className="mt-5 text-slate-600">
            {site.name} was built by people who understand trucking from the driver&apos;s seat. We give
            owner-operators and small fleets the back-office muscle of a big carrier — load sourcing, rate
            negotiation, paperwork and 24/7 support — without the overhead or the red tape.
          </p>
          <p className="mt-4 text-slate-600">
            Our promise is simple: keep your truck loaded with good-paying freight, take the busywork off
            your plate, and treat your business like it&apos;s our own. You drive. We handle the rest.
          </p>
          <Link href="/contact" className="btn-primary mt-8">Partner With Us</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Driver-First", "You approve every load — no forced dispatch, ever."],
            ["Rate-Focused", "We negotiate hard so you earn more per mile."],
            ["Always On", "Real 24/7 support for breakdowns and reschedules."],
            ["No Contracts", "Stay because it works, not because you're locked in."],
          ].map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="text-base text-primary">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
