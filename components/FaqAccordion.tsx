"use client";

import { useState } from "react";
import { faqs } from "@/content/misc";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-navy-900">{f.q}</span>
              <span className={`text-2xl text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && <p className="-mt-1 px-6 pb-6 text-sm leading-relaxed text-slate-600">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
