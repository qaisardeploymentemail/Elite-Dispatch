import { site } from "@/content/site";
import QuoteForm from "./QuoteForm";
import Icon from "./Icon";

export default function QuoteSection() {
  return (
    <section id="quote" className="section relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="container-rd relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow !text-primary-light">Get Started</span>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">
            Get a Free Quote &<br /><span className="text-primary-light">Get Loaded This Week</span>
          </h2>
          <p className="mt-5 max-w-md text-slate-300">
            Tell us about your truck and authority. A dedicated dispatcher will reach out with a plan to
            keep you loaded and profitable — no obligation, no long-term contract.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {["Free setup & consultation", "Start in as little as 24 hours", "Cancel anytime"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-primary-light">✓</span> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800 p-4">
            <Icon name="phone" className="h-6 w-6 text-primary-light" />
            <div>
              <p className="text-xs uppercase text-slate-400">Prefer to talk? Call us 24/7</p>
              <a href={site.phoneHref} className="font-display text-xl font-extrabold text-white hover:text-primary-light">
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
