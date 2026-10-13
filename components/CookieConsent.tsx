"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "rd-cookie-consent"; // "accepted" | "rejected"

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(KEY, value);
      // Mirror to a cookie so server/analytics gating can read it later if needed.
      document.cookie = `${KEY}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    } catch {
      /* ignore */
    }
    // Google Consent Mode v2 — flip analytics/ad storage based on the choice.
    const g = value === "accepted" ? "granted" : "denied";
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("consent", "update", {
      ad_storage: g, ad_user_data: g, ad_personalization: g, analytics_storage: g,
    });
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-navy-900 p-5 text-white shadow-2xl sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-slate-200">
          We use cookies to keep the site working, remember your preferences, and understand traffic. You can accept
          all cookies or reject non-essential ones. See our{" "}
          <Link href="/cookies" className="font-semibold text-white underline hover:text-primary-light">Cookie Policy</Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={() => choose("rejected")} className="btn border-2 border-white/40 px-5 py-2.5 text-sm text-white hover:bg-white/10">
            Reject non-essential
          </button>
          <button onClick={() => choose("accepted")} className="btn-accent px-5 py-2.5 text-sm">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
