import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Elite Truck Dispatch uses cookies, and how you can control or withdraw your consent.",
};

const browsers = [
  ["Google Chrome", "https://support.google.com/chrome/answer/95647"],
  ["Safari (macOS/iOS)", "https://support.apple.com/en-us/HT201265"],
  ["Microsoft Edge", "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"],
  ["Mozilla Firefox", "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"],
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="How Elite Truck Dispatch uses cookies, and how you can control or withdraw your consent."
      />
      <section className="section bg-white">
        <div className="container-rd max-w-3xl space-y-8 leading-relaxed text-slate-600">
          <p className="text-sm text-slate-400">Last updated: August 3, 2026</p>

          <div>
            <h2 className="text-xl font-bold text-navy-900">1. What Are Cookies?</h2>
            <p className="mt-2">
              Cookies are small text files stored on your device when you visit a website. They let the site
              recognize your device and remember information about your visit. Cookies are passive files — they
              can&apos;t run programs, extract information from your device, or carry viruses. We use them to keep the
              site working, remember your preferences, and understand how the site is used.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">2. Cookie Declaration</h2>
            <p className="mt-2">
              <a href={site.url} className="text-primary hover:underline">{site.url.replace(/^https?:\/\//, "")}</a> may use cookies to
              deliver and secure the site, remember preferences, analyze traffic, and — where you allow it — support
              marketing. Some information may be shared with trusted third-party providers (for example, analytics).
              The categories we use are:
            </p>
            <ul className="mt-3 space-y-2">
              <li><b className="text-navy-800">Strictly necessary</b> — required for the site to function (e.g. remembering your cookie choice, security). These don&apos;t require consent.</li>
              <li><b className="text-navy-800">Preferences</b> — remember choices you make to improve your experience.</li>
              <li><b className="text-navy-800">Statistics / analytics</b> — help us understand how visitors use the site so we can improve it.</li>
              <li><b className="text-navy-800">Marketing</b> — used to make messaging more relevant. Only set if you consent.</li>
            </ul>
            <p className="mt-3">
              For how we handle personal data more broadly, see our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">3. Your Consent (GDPR)</h2>
            <p className="mt-2">
              In line with the EU General Data Protection Regulation (GDPR) and similar privacy laws, we ask for your
              consent before placing any non-essential cookies. When you first visit, a banner lets you{" "}
              <b>Accept</b> or <b>Reject</b> non-essential cookies. Strictly necessary cookies are always active.
            </p>
            <p className="mt-2">
              You can <b>withdraw or change your consent at any time</b> by clearing this site&apos;s cookies in your
              browser (see below) — the consent banner will appear again on your next visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">4. How to Manage or Delete Cookies</h2>
            <p className="mt-2">You can control and delete cookies through your browser settings:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              {browsers.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{name}</a>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Note: disabling cookies may affect how parts of the site work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">5. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Cookie Policy from time to time. Any significant changes will be posted on this page
              with a revised date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">6. Contact</h2>
            <p className="mt-2">
              Questions about our use of cookies? Contact us at{" "}
              <a href={site.emailHref} className="text-primary hover:underline">{site.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
