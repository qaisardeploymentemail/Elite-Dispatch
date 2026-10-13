"use client";

// Split hero: live text and CTAs on the left, rotating photo carousel on the right.
// Kept beneath the R8 banner at the client's instruction — the banner replaced the old
// master-hero image, not this section.
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/content/hero";
import { site } from "@/content/site";
import Icon from "./Icon";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const n = heroImages.length;

  const go = useCallback((d: number) => setIdx((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % n), 5500);
    return () => clearInterval(id);
  }, [n]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-rd relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-8 lg:py-0 lg:min-h-[620px]">
        {/* LEFT — text */}
        <div className="lg:py-24">
          <span className="eyebrow">USA &amp; Canada · 24/7 Dispatch Support</span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-900 sm:text-5xl lg:text-6xl">
            Reliable Truck
            <br />
            Dispatching for
            <br />
            <span className="text-primary">Owner-Operators</span>
          </h1>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            {site.name} keeps owner-operators and small fleets loaded across all 48 connected U.S. states and all of Canada —
            finding high-paying loads, negotiating every rate, and handling the paperwork so you keep driving
            and keep more of what you earn. No forced dispatch, no long-term contracts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary text-base">Book Dispatch →</Link>
            <a href={site.phoneHref} className="btn-accent text-base"><Icon name="phone" className="h-4 w-4" /> Call {site.phone}</a>
          </div>

          {/* carousel controls */}
          {n > 1 && (
            <div className="mt-10 flex items-center gap-3">
              <button onClick={() => go(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-primary hover:text-primary">‹</button>
              <button onClick={() => go(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-primary hover:text-primary">›</button>
              <div className="ml-2 flex gap-1.5">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>

      {/* RIGHT — image carousel (bleeds to the right edge on desktop) */}
      <div className="relative h-[300px] w-full sm:h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Elite Truck Dispatch trucking"
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* soft white blend on the left seam (desktop) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-white to-transparent lg:block" />
        {/* subtle navy tint at bottom for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/20 to-transparent" />
      </div>
    </section>
  );
}
