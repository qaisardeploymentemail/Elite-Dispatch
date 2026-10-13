"use client";

import { useState } from "react";
import { truckTypes } from "@/content/truckTypes";
import { authorityAges } from "@/content/misc";

type State = "idle" | "sending" | "ok" | "error";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please call us instead.");
      setState("ok");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary-tint/60 p-8 text-center">
        <div className="text-4xl">✅</div>
        <h3 className="mt-3 text-2xl text-navy-900">Request Received</h3>
        <p className="mt-2 text-slate-600">
          Thanks — a dispatcher will reach out shortly. Need us now? Call anytime, we&apos;re 24/7.
        </p>
        <button onClick={() => setState("idle")} className="btn-outline mt-6">
          Send another
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot (hidden from users, catches bots) */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <input name="name" required placeholder="Full name *" className={inputCls} />
      <input name="phone" required placeholder="Phone *" className={inputCls} />
      <input name="email" type="email" required placeholder="Email *" className={`${inputCls} sm:col-span-2`} />

      <select name="truckType" required defaultValue="" className={inputCls}>
        <option value="" disabled>Truck type *</option>
        {truckTypes.map((t) => (
          <option key={t.slug} value={t.name}>{t.name}</option>
        ))}
      </select>

      <select name="authorityAge" required defaultValue="" className={inputCls}>
        <option value="" disabled>Authority age *</option>
        {authorityAges.map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>

      {!compact && (
        <textarea name="message" rows={3} placeholder="Anything we should know? (lanes, goals…)" className={`${inputCls} sm:col-span-2`} />
      )}

      {state === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">⚠ {error}</p>
      )}

      <button type="submit" disabled={state === "sending"} className="btn-primary sm:col-span-2 disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="sm:col-span-2 text-center text-xs text-slate-500">
        No spam. We&apos;ll only use your info to get you loaded.
      </p>
    </form>
  );
}
