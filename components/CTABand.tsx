import Link from "next/link";
import { site } from "@/content/site";
import Icon from "./Icon";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container-rd relative flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl text-white sm:text-4xl">Available 24/7 to Keep You Moving</h2>
          <p className="mt-2 max-w-xl text-white/90">
            Talk to a dispatcher today and get your truck loaded this week. No contracts, no pressure.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-accent text-base"><Icon name="phone" className="h-4 w-4" /> {site.phone}</a>
          <Link href="/contact" className="btn border-2 border-white/70 text-white hover:bg-white hover:text-primary text-base">
            Book Dispatch
          </Link>
        </div>
      </div>
    </section>
  );
}
