"use client";

// R2 — moving review strip. Replaces the old Testimonials carousel, which was removed
// from the home page; this is now the only review section on the site.
//
// Avatars are initials in a coloured circle: there are no customer photos, and
// attaching invented faces to reviews would be worse than showing none.
import { testimonials } from "@/content/misc";
import SectionHeading from "./SectionHeading";

// Deterministic tint per name, so a card keeps the same colour between renders.
const TINTS = [
  "bg-navy-900",
  "bg-primary-light",
  "bg-navy-700",
  "bg-navy-800",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Five stars with a fractional fill. 4.6 and 4.2 must look different from each
 *  other and from 4 — whole stars alone cannot show that, so the last star is
 *  clipped to the remainder. The number is printed alongside as well, because a
 *  0.4-star difference is genuinely hard to read at this size. */
function Stars({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, value - i)); // 0 → 1 for this star
          return (
            <span key={i} className="relative inline-block h-4 w-4">
              <Star className="absolute inset-0 text-slate-200" />
              {fill > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  <Star className="h-4 w-4 text-gold" />
                </span>
              )}
            </span>
          );
        })}
      </span>
      <span className="font-display text-sm font-extrabold text-navy-900">
        {value.toFixed(1)}
      </span>
      <span className="sr-only">out of 5</span>
    </span>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${className ?? ""}`}>
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  );
}

function Card({ t }: { t: (typeof testimonials)[number] }) {
  const tint = TINTS[t.name.charCodeAt(0) % TINTS.length];
  return (
    <figure className="flex w-[330px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[380px]">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white ${tint}`}
          aria-hidden="true"
        >
          {initials(t.name)}
        </span>
        <figcaption className="min-w-0">
          <p className="font-display font-extrabold leading-tight text-navy-900">{t.name}</p>
          <p className="truncate text-xs text-slate-500">{t.role}</p>
        </figcaption>
      </div>
      <div className="mt-4">
        <Stars value={t.rating} />
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </figure>
  );
}

export default function Reviews() {
  // The track is rendered twice so the loop is seamless; the duplicate is hidden from
  // assistive tech so the reviews are not announced twice.
  return (
    <section className="section overflow-hidden bg-primary-tint">
      <div className="container-rd">
        <SectionHeading eyebrow="Drivers Talk" title="What Carriers Say" />
      </div>

      <div className="group relative">
        {/* soft fades at both edges so cards enter and leave rather than being cut */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary-tint to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary-tint to-transparent" />

        <div className="flex w-max gap-6 px-6 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {testimonials.map((t) => (
            <Card key={t.name} t={t} />
          ))}
          <div className="flex gap-6" aria-hidden="true">
            {testimonials.map((t) => (
              <Card key={`dup-${t.name}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
