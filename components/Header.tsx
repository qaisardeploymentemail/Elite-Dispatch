"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, site } from "@/content/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  // Freight Brokerage stays in the footer + as a page, but is hidden from the header nav.
  const headerNav = nav.filter((n) => n.href !== "/freight-brokerage");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-rd flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {headerNav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn-accent !px-5 !py-2.5" aria-label={`Call dispatch ${site.phone}`}>
            <Icon name="phone" className="h-4 w-4" />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">Call Dispatch</span>
              <span className="text-sm font-extrabold">{site.phone}</span>
            </span>
          </a>
          <Link href="/contact" className="btn-primary">Book Dispatch</Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy-900 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-rd flex flex-col py-3">
            {headerNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href={site.phoneHref} className="btn-accent w-full"><Icon name="phone" className="h-4 w-4" /> Call Dispatch: {site.phone}</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Book Dispatch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
