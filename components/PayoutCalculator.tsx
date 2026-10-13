"use client";

import { useState } from "react";
import Link from "next/link";

export default function PayoutCalculator() {
  const [gross, setGross] = useState(6000);
  const [pct, setPct] = useState(6);
  const fee = Math.round((gross * pct) / 100);
  const net = gross - fee;
  const money = (n: number) => "$" + n.toLocaleString();

  return (
    <section className="section bg-slate-50">
      <div className="container-rd">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <span className="eyebrow">Payout Calculator</span>
          <h2 className="mt-2 text-2xl text-navy-900 sm:text-3xl">See Your Weekly Take-Home</h2>
          <p className="mt-2 text-slate-600">Estimate your net after our dispatch fee — drag the sliders.</p>

          <div className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">Weekly gross revenue</span>
                <span className="font-bold text-navy-900">{money(gross)}</span>
              </div>
              <input type="range" min={2000} max={15000} step={100} value={gross}
                     onChange={(e) => setGross(+e.target.value)} className="mt-2 w-full accent-primary" />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">Dispatch fee</span>
                <span className="font-bold text-navy-900">{pct}%</span>
              </div>
              <input type="range" min={4} max={10} step={0.5} value={pct}
                     onChange={(e) => setPct(+e.target.value)} className="mt-2 w-full accent-primary" />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-[11px] uppercase tracking-wide text-slate-500">Gross</div>
              <div className="mt-1 text-lg font-extrabold text-navy-900 sm:text-xl">{money(gross)}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-[11px] uppercase tracking-wide text-slate-500">Dispatch fee</div>
              <div className="mt-1 text-lg font-extrabold text-slate-500 sm:text-xl">-{money(fee)}</div>
            </div>
            <div className="rounded-xl bg-accent/15 p-4 ring-1 ring-accent/40">
              <div className="text-[11px] uppercase tracking-wide text-accent-dark">Your net</div>
              <div className="mt-1 text-lg font-extrabold text-accent-dark sm:text-xl">{money(net)}</div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">
            Estimate only — final terms depend on lanes, equipment and volume.
          </p>
          <div className="mt-6 text-center">
            <Link href="/contact" className="btn-accent">Get my custom rate</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
