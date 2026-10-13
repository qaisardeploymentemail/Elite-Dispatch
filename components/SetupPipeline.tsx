"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const steps = [
  { t: "Submit MC#", d: "Send your MC/DOT number and basic contact details — takes about 2 minutes." },
  { t: "Sign Agreement", d: "Review our transparent dispatcher–carrier agreement and limited power of attorney." },
  { t: "Carrier Setup", d: "We complete broker packets, factoring/NOA and your COI so you're broker-ready." },
  { t: "First Load Booked", d: "You approve your first high-paying load — often within 24 hours." },
];

export default function SetupPipeline() {
  const [active, setActive] = useState(0);
  return (
    <section className="section bg-slate-50">
      <div className="container-rd">
        <span className="eyebrow">Getting Started</span>
        <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">From MC# to First Load in 24 Hours</h2>
        <p className="mt-2 max-w-2xl text-slate-600">A simple, transparent onboarding — tap a step to see what happens.</p>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {steps.map((s, i) => {
            const done = i <= active;
            return (
              <button key={i} onClick={() => setActive(i)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  i === active ? "border-primary bg-white shadow-soft"
                               : "border-slate-200 bg-white hover:border-primary/40"}`}>
                <div className="flex items-center gap-2">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    done ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                    {done ? <Icon name="check" className="h-4 w-4" /> : i + 1}
                  </span>
                  {i < steps.length - 1 && <span className="hidden h-0.5 flex-1 bg-slate-200 md:block" />}
                </div>
                <h3 className="mt-3 text-base font-semibold text-navy-900">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn-primary">Start My Setup</Link>
        </div>
      </div>
    </section>
  );
}
