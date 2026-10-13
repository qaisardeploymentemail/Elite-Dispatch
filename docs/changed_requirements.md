# Elite Truck Dispatch — Website 2026 · Change Requirements

Running log of requested changes. Requirements are added one at a time as they are
given, and each is implemented against this record rather than from conversation
memory.

**Code:** `_src/` (Next.js 15 · React 18 · Tailwind 3 · TypeScript)
**Live:** https://elitetruckdispatch.desidhabawah.com · VPS `/opt/elite-truck-dispatch` · port 1404
**Deployment / secrets:** see `_credentials.md`

---

## How this file is used

| Status | Meaning |
|---|---|
| `OPEN` | Recorded, not yet built |
| `IN PROGRESS` | Being built now |
| `DONE` | Built, deployed and verified |
| `BLOCKED` | Needs something from the client (assets, real details, a decision) |

Each entry records what was asked, what was actually changed, and any decision taken
along the way — so a later reader can tell intent from implementation.

---

## Inherited issues already visible in the code

Not requirements yet — recorded because the source flags them as unfinished, and any
one of them may become a change request.

1. **Palette is a placeholder.** `tailwind.config.ts` carries Rayan Dispatch's
   royal-blue/navy scheme and says so explicitly. The Elite logo is black + gold, so
   the current look is knowingly wrong. Swapping the `primary` / `navy` / `gold` /
   `accent` tokens rethemes the whole site — no component hard-codes a theme hex.
   (The social brand colours hard-coded in `Footer.tsx` are meant to stay fixed.)
2. **Social links point at Rayan Dispatch's accounts** — Facebook, Instagram, X and
   LinkedIn in `content/site.ts`.
3. **Contact details are carried-over placeholders** — phone, support line, fax and
   address. `info@elitetruckdispatch.com` is unconfirmed, as is the legal entity name.
4. **Lead email is in safe mode** — SMTP unset, so the quote form does not deliver.

---

## Requirements

### R1 — Home page "Who We Are" section: new headline and body copy

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

Replace the copy in the home page intro section.

> **Headline:** Truck Dispatch Company
>
> **Body:**
> Your trucks should be making money, not waiting on load boards. We provide
> end-to-end dispatching across the USA and Canada to keep independent drivers and
> fleet owners operating at peak profitability.
>
> Our 24/7 team takes over the daily grind: finding top-paying freight, aggressively
> negotiating rates with brokers, and handling all backend paperwork. You maintain
> full control over your route while we make sure every mile pays off.

**Scope**

`components/TruckDispatchIntro.tsx` — third section on the home page, between
`BenefitBand` and `Services`. Currently headed *"Truck Dispatching Company"* under a
*"Who We Are"* eyebrow, with two paragraphs.

Replaces the `<h2>` and both `<p>` blocks. Structure is unchanged: two paragraphs in,
two paragraphs out.

**Points to confirm**

1. **Headline changes from "Truck Dispatching Company" to "Truck Dispatch Company"** —
   dropping the *-ing*. Reads as deliberate, but flagging in case it is a typo.
2. **The "Who We Are" eyebrow is not mentioned.** Assumed to stay as-is unless told
   otherwise — the new copy is about the service rather than the company, so
   "Who We Are" now sits a little oddly above it.
3. **The current copy interpolates the brand** via `{site.name}` ("At Elite Truck
   Dispatch, we provide…"). The new copy names no company, so that reference
   disappears. Assumed intentional.
4. ~~The process diagram and caption below the text are untouched.~~
   **SUPERSEDED by R10 — the diagram is removed entirely.**

**Decisions**

- **2026-09-10 — "Truck Dispatch Company" is deliberate.** The *-ing* is dropped on
  purpose; not a typo.
- **2026-09-10 — "Who We Are" eyebrow kept** (defaulted, not objected to).

**Result**

- *(not yet built)*

---

### R2 — Moving review strip below the intro section

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Immediately below this we'll add Reviews in the small moving flex boxes with images
> and the review text below. Adding variety of 4, 4.6, 4.2 and 5 star.

**Scope**

New component, placed on the home page directly after `TruckDispatchIntro` and before
`Services` (i.e. between lines 37 and 38 of `app/page.tsx`).

Each card: image on top, star rating, review text below. Cards move horizontally.

**Points to confirm**

1. **There is already a testimonials section further down the page.**
   `components/Testimonials.tsx` — a fading single-quote carousel under the heading
   *"What Carriers Say"*, fed from `content/misc.ts`. Two review sections on one page
   is usually a mistake. Options: keep both (different formats, different placement),
   replace the old one, or move the old one's content into this new strip.
2. **Whose reviews are these?** The existing testimonials are placeholder text. Real
   reviews with real names would need supplying; otherwise these are invented, which
   should not go live on a real business site making claims about customers.
3. **What are the images?** There are no avatar or customer photos in `public/` today
   — only logos, hero, truck types and diagrams. Needs either supplied photos,
   stock/illustrated avatars, or initials-in-a-circle as a placeholder.
4. **Fractional stars.** 4.6 and 4.2 need partial-star rendering, not just whole
   stars. Confirm the rating number is also shown as text (e.g. "4.6") beside the
   stars — otherwise the difference between 4.6 and 4.2 is invisible to the eye.
5. **Motion behaviour.** Continuous auto-scrolling marquee, or a stepped carousel with
   controls? A marquee should pause on hover and respect
   `prefers-reduced-motion` — an endlessly moving strip is an accessibility problem
   and makes the text hard to read.
6. **How many cards?** Four ratings are named; confirm whether that means exactly four
   reviews or four rating values across a longer list.

**Decisions**

- **2026-09-10 — replace, do not duplicate.** The new strip takes over from
  `components/Testimonials.tsx`; the old *"What Carriers Say"* section is removed from
  the home page. One review section, near the top.
- **2026-09-10 — reuse the existing review text for now.** `testimonials` in
  `content/misc.ts` supplies six entries with `name`, `role` and `quote` (e.g.
  *"James T. · Owner-Operator · Dry Van"*). These are still marked
  `TODO: replace with real figures` in that file — carried forward as placeholders,
  not endorsed as real.
- **2026-09-10 — avatars are initials in a coloured circle.** No photos to source, and
  no invented faces attached to invented quotes.
- **2026-09-10 — spread the four values across all six reviews.** All six existing
  testimonials appear; ratings cycle 5 · 4.6 · 4 · 4.2 · 5 · 4.6 so every requested
  value is present and no two neighbours repeat. The number is printed beside the
  stars, since 4.6 and 4.2 are otherwise indistinguishable by eye.
- **Consequences:** the `Testimonial` type gains `rating: number`; `Testimonials.tsx`
  is deleted and removed from `app/page.tsx`.

**Result**

- *(not yet built)*

---

### R3 — Move the Payout Calculator directly below the review strip

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Immediately after the Reviews we will add this Payout Calculator.

**Scope**

`app/page.tsx` — section order only. `PayoutCalculator` currently sits at line 41,
**after** `Pricing`. It moves up to sit directly after the new review strip (R2).

Resulting home page order:

```
Hero
BenefitBand
TruckDispatchIntro        (R1 — new copy)
Reviews                   (R2 — new)
PayoutCalculator          (R3 — moved up from after Pricing)
Services
WhyChooseUs
Pricing
TruckTypesGrid
QuoteSection
ProcessSteps
Testimonials
About
CTABand
```

**Points to confirm**

1. **Read as a move, not a copy.** The calculator appears once, relocated — not
   duplicated in two places. Say if a second instance was intended.
2. **It now runs ahead of `Pricing`.** The calculator shows a dispatch-fee percentage
   and a *"Get my custom rate"* button, so a visitor meets the fee mechanic before the
   pricing section that explains it. That may be the intent — lead with the earnings
   maths, justify the fee afterwards — but it is a real change in narrative order, not
   just a reshuffle. No technical coupling: `PayoutCalculator` imports nothing from
   `content/pricing.ts`, so nothing breaks either way.
3. **Three interactive/animated sections would then run back to back** — moving review
   strip, then calculator, then Services. Worth a look on a real screen once built.

**Decisions**

- *(none yet)*

**Result**

- *(not yet built)*

---

### N1 — Scope note: everything from `Services` down is unchanged

**Status:** CONFIRMED (not a change — a boundary)
**Confirmed:** 2026-09-10

**Said**

> After that this stays the same.

Given while pointing at the **Services** section — *"WHAT WE DO / Full-Service Truck
Dispatching"*, the six-card grid: Load Booking · Rate Negotiation · Paperwork & BOL ·
Broker & Shipper Comms · Factoring Support · DOT & Compliance.

**Meaning**

The home page changes stop after the Payout Calculator. `Services` and every section
below it keep their current copy, layout and order:

```
Services · WhyChooseUs · Pricing · TruckTypesGrid · QuoteSection
ProcessSteps · Testimonials · About · CTABand
```

So the home page work is exactly R1 (new intro copy), R2 (new review strip) and
R3 (calculator moved up) — nothing else.

**One consequence worth resolving**

If everything below stays, the existing **`Testimonials`** section survives, and the
page carries **two review sections**: the new moving strip near the top (R2) and
*"What Carriers Say"* near the bottom. That may be deliberate — different formats,
far apart — but it is the open question already raised in R2 point 1, and this note
does not settle it.

Also unaffected by the reorder, for the record: the calculator moving above `Pricing`
does not change `Pricing` itself; it only changes what a visitor reads first.

*Amended by R4 below — one card inside `Services` does change.*

**Sections confirmed individually (reviewed on screen, not merely unmentioned)**

- **`Pricing`** — *"SIMPLE, HONEST PRICING / Two Ways to Pay — You Choose"*.
  Confirmed 2026-09-10 as "exactly same". This verifies the live commercial terms as
  current, which is worth more than silence:
  - Percentage Plan — **5–8% of gross / load**, "Best for getting started", six
    bullets, *Get Started* CTA
  - Flat Weekly Plan — **$350 per truck / week**, "Best for busy trucks",
    **Most Popular** flag, six bullets, *Book Dispatch* CTA

  Held in `content/pricing.ts`; rendered by `components/Pricing.tsx`.

---

### R4 — Services card: "DOT & Compliance" becomes "Insurance Support"

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Except need to change the DOT & Compliance to "Insurance Support".

This is the one exception to N1 — `Services` is otherwise unchanged.

**Scope**

`content/services.ts`, the sixth entry in the `services` array. Rendered as the
bottom-right card of the home page grid by `components/Services.tsx`.

```ts
{
  icon: "shield",
  title: "DOT & Compliance",
  desc: "Stay road-legal — we help monitor authority status, insurance, and
         compliance so nothing slips through the cracks.",
}
```

**Points to confirm**

1. **Spelling.** Written as "Insurace" in the request; recorded as **"Insurance
   Support"**. Flagging rather than silently correcting.
2. **The description needs rewriting, and was not supplied.** The current text
   describes DOT compliance — *"stay road-legal … authority status … compliance"* —
   with insurance only as a passing mention. Retitling the card without rewriting the
   body leaves a card called "Insurance Support" that mostly talks about DOT. Either
   supply new copy or I will draft it for approval.
3. **Is DOT compliance being dropped as a service, or just this card?** It is claimed
   in two other places that this change does not touch:
   - `content/misc.ts:73` — *"DOT compliance & safety monitoring to keep you
     road-ready"* (in a service list elsewhere on the site)
   - `components/ComplianceCard.tsx` — *"Active MC/DOT Authority"* on the
     **How to Start** page

   If the company no longer offers compliance monitoring, those need attention too. If
   it does and this card is simply being repurposed to highlight insurance, they stay.
4. **Icon.** Currently `shield`, which suits both compliance and insurance. Assumed to
   stay unless a different one is wanted; the available set is in `components/Icon.tsx`.

**Decisions**

- **2026-09-10 — I write the body copy**, rewritten around insurance rather than DOT,
  for review before it ships.
- **2026-09-10 — DOT compliance is dropped as a service.** So the claim also goes from
  `content/misc.ts` (`specialized` list): *"DOT compliance & safety monitoring to keep
  you road-ready"*.
- **2026-09-10 — I write the Insurance Support copy without a pre-review.** The client
  will read it on the site rather than approve a draft first.
- **2026-09-10 — `ComplianceCard` IS removed**, overriding my recommendation to keep
  it. It is used in exactly one place, `app/how-to-start/page.tsx:27`, between the
  `PageHero` and `SetupPipeline`. Removing it deletes the four onboarding requirements
  it listed: Active MC/DOT Authority · W-9 · Certificate of Insurance (COI, $100k
  cargo / $1M auto liability, Elite listed as certificate holder) · Notice of
  Assignment.

  Consequence worth recording: **How to Start no longer tells a carrier what documents
  they need to sign up.** `SetupPipeline` covers the steps ("Submit MC#" …) but not
  the paperwork. If that information is wanted elsewhere later, it is in git history
  and in this entry.

**Result**

- *(not yet built)*

---

### R5 — Truck types: remove the last four

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Remove the last 4: Lowboy, Roll-Tite / Conestoga, RGN, Moffett.
> Keep rest of the things exactly same.

**Scope**

`content/truckTypes.ts` — the array drops from **12 entries to 8**, leaving:

```
Dry Van · Reefer · Flatbed · Power Only
Step Deck · Box Truck · Straight Truck · Hot Shot
```

The grid is a clean 4-across, so 8 items still fill two full rows with no ragged
last row.

**One array, two pages**

`truckTypes` is imported by both consumers, neither of which slices it:

- `components/TruckTypesGrid.tsx` — the home page section shown in the request
- `app/truck-types/page.tsx` — the dedicated **Truck Types** page (uses it twice)

So editing the array removes these four **site-wide**, not just from the home grid.
Assumed to be the intent — the company no longer advertises this equipment — but if
they should survive on the dedicated page, say so and the home grid gets sliced
instead.

**Three places still name the removed equipment**

"Keep rest exactly same" is taken as *do not redesign anything else*. These are not
redesigns — they are the same claim repeated elsewhere, and would contradict the
removal if left:

| File | Text | Note |
|---|---|---|
| `content/pricing.ts:12` | `Specialized (RGN, Lowboy, Hot Shot)` — **7%** | A **priced tier** for equipment no longer listed. Hot Shot stays, so the row cannot simply be deleted — it needs re-labelling, e.g. `Specialized (Hot Shot)`. Touches the pricing table confirmed unchanged in N1. |
| `content/misc.ts:41` | FAQ *"Which equipment do you dispatch?"* — lists RGN, lowboy, Moffett, roll-tite | Would answer with equipment the site no longer shows. |
| `app/truck-types/page.tsx:12` | Page meta description, same four named | SEO text promising equipment not offered. |

**Points to confirm**

1. ~~Remove site-wide, or hide from the home grid only?~~ **RESOLVED — site-wide.**
2. How should the 7% specialized pricing row read once RGN and Lowboy are gone?
3. Update the FAQ answer and the meta description to match? *(Recommended — leaving
   them is a factual inconsistency, not a styling choice.)*
4. ~~The four images become unreferenced — leave or delete?~~ **RESOLVED — delete
   the four.** `hot-shot.webp` is explicitly **kept**: Hot Shot remains one of the
   eight types and is the equipment named in the revised 7% pricing row.

**Decisions**

- **2026-09-10 — remove site-wide, confirmed.** Asked again while pointing at the
  **Truck Types page** (`/truck-types`), where the same four appear as full detail
  rows — eyebrow, name, blurb, a longer "Our dispatchers know the … market" paragraph,
  a *"Dispatch My …"* CTA and a photo.

  Since both the home grid and this page render the same `truckTypes` array without
  slicing, deleting the four entries removes them from both. One edit, both places —
  no per-page handling needed.

  Nothing outstanding from this entry.

- **2026-09-10 — delete the four unused photos** from `public/truck-types/`:
  `lowboy.webp`, `roll-tite.webp`, `rgn.webp`, `moffett.webp`. Recoverable from git if
  ever needed. **`hot-shot.webp` stays** — Hot Shot survives the cull.

- **2026-09-10 — remove the four from pricing as well.**
  `content/pricing.ts:12` becomes **`Specialized (Hot Shot)` — 7%**: Hot Shot stays at
  the same rate, RGN and Lowboy are struck. The rate itself is unchanged, so this does
  not alter the commercial terms confirmed in N1 — only which equipment they name.
- **2026-09-10 — FAQ and meta description updated to match** (point 3 confirmed by the
  same instruction: remove these types wherever mentioned).
  - `content/misc.ts:41` — *"Which equipment do you dispatch?"* drops RGN, lowboy,
    Moffett and roll-tite
  - `app/truck-types/page.tsx:12` — page meta description, same four removed

**Result**

- *(not yet built)*

---

### R6 — Replace the logo with the high-resolution asset

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Use `_assets/ellite_logo_large.jpeg` as the new high-resolution logo for Elite
> Dispatch.

**Scope**

`public/logo.png` (header) and `public/logo-footer.png` (footer), both consumed by
`components/Logo.tsx`. Also `public/logo-source.jpg`, which appears to be the archived
original.

| | Current | New asset |
|---|---|---|
| Dimensions | 160 × 160 | **1079 × 1050** |
| Format | PNG (JPG for source) | JPEG |
| Size | 28 KB | 68 KB |

A genuine resolution gain: the header renders the mark at up to 56 px and the footer
at 64 px, so on a 2× display the current 160 px asset is only just adequate and has no
headroom. Rendering the new file at those sizes is comfortable.

**The asset is square-ish on a solid black ground**

1079 × 1050 — near-square, gold truck illustration over **ELITE / TRUCK DISPATCH**
wordmark, all on near-black. That matches how `Logo.tsx` already treats the mark: it
renders a square badge with `rounded-lg`, and its own comment notes the dark ground is
what lets one asset work on both the light header and the dark footer.

So this is a like-for-like swap of a better-resolution version, not a shape change. No
component edits expected — only the files in `public/`.

**Points to confirm**

1. **Not exactly square** (1079 × 1050, ~2.8% wider than tall). Rendered into a square
   box it will squash very slightly. Recommended: pad to a true square rather than
   stretch, so the truck keeps its proportions.
2. **Keep the `.png` filenames?** Replacing the contents of `logo.png` with JPEG data
   works but is misleading. Cleaner to save as PNG (or WebP) at the existing paths so
   nothing else needs touching, and the file extension stays honest.
3. **One asset or two?** Header and footer currently point at two separate files that
   are byte-identical in size. If the mark is the same on both, one file would do —
   but leaving both costs nothing and preserves the option of a footer variant.
4. **The black ground is a design constraint, not a bug.** On the white header the
   logo shows as a black rounded tile. That is the current behaviour and this change
   does not alter it — worth stating since a transparent-background version would look
   quite different and is a separate decision.
5. **Should `logo-source.jpg` be replaced too?** It looks like a kept original;
   updating it keeps the archive matching what ships.

**Decisions**

- *(none yet)*

**Result**

- *(not yet built)*

---

### R7 — Real contact details and social profiles

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> In the footer things remain same except the following:
>
> For now: use **470-905-2978** for all the fax, WhatsApp and phone.
> Address: same.
> Email: for now **elitetruckdispatchllc@gmail.com**
>
> Facebook: `https://www.facebook.com/profile.php?id=61576363635365`
> Instagram: `https://www.instagram.com/elitetruckdispatch/`
> X/Twitter: `https://x.com/elitetruckdispa`
> LinkedIn: `https://www.linkedin.com/in/elite-truck-dispatch-usa-6706b4433/`
> WhatsApp: `https://wa.link/fsv3os`

This closes two of the four inherited issues listed at the top of this file — the
Rayan Dispatch social links, and the placeholder contact details.

**Scope**

`content/site.ts` only. Every consumer reads from it, so no component needs editing.

| Field | Current | New |
|---|---|---|
| `phone` | +1 (210) 447-8478 | **+1 (470) 905-2978** |
| `phoneHref` | tel:+12104478478 | **tel:+14709052978** |
| `fax` | +1 (254) 334-1421 | **+1 (470) 905-2978** |
| `whatsappNumber` | +1 (315) 979-4702 | **+1 (470) 905-2978** |
| `whatsapp` | wa.me/13159794702 | **https://wa.link/fsv3os** |
| `email` | info@elitetruckdispatch.com | **elitetruckdispatchllc@gmail.com** |
| `emailHref` | mailto:info@… | **mailto:elitetruckdispatchllc@gmail.com** |
| `social.facebook` | Rayan profile | **facebook.com/profile.php?id=61576363635365** |
| `social.instagram` | rayan_dispatch | **instagram.com/elitetruckdispatch/** |
| `social.twitter` | x.com/rayandispatch1 | **x.com/elitetruckdispa** |
| `social.linkedin` | Rayan profile | **linkedin.com/in/elite-truck-dispatch-usa-6706b4433/** |
| `social.whatsapp` | wa.me/13159794702 | **https://wa.link/fsv3os** |
| `address` | 1256 Bramlett Forest Ct SE, Atlanta, GA 30305 | unchanged (stated explicitly) |

**Not just the footer**

The request was framed as a footer change, but these fields are read in **13 files**.
Changing `site.ts` updates all of them, which is almost certainly what is wanted — a
phone number that differs between the header and the footer would be a defect:

- Header (desktop + mobile call buttons), Hero, CTABand, QuoteSection
- Contact page — email, phone, customer support, WhatsApp, fax
- Privacy Policy, Terms, Cookies — contact-us paragraphs
- `app/layout.tsx` — structured data (`telephone`, `faxNumber`, `email`)
- `app/api/lead/route.ts` — **quote-form leads default to `site.email`**

**Points to confirm**

1. **`supportPhone` was not mentioned.** There is a separate customer-support line,
   *+1 (210) 447-8635 (Ext. 101)*, shown in the footer and on the Contact page. "All
   the fax, WhatsApp and phone" reads as covering the main number; this extension is
   a distinct field. Point it at the new number too, or remove the support row while
   there is only one line?
2. **Lead email now goes to a Gmail address.** `app/api/lead/route.ts` falls back to
   `site.email`, so quote submissions would be delivered to
   `elitetruckdispatchllc@gmail.com` once SMTP is enabled. Currently in safe mode, so
   nothing sends yet — but worth stating, since it makes Gmail the business inbox by
   default.
3. **Fax and WhatsApp sharing the phone number.** Recorded as asked ("for now"). Worth
   noting that a fax row showing the same digits as the phone may read as an error to
   a visitor — consider hiding the fax row until there is a real fax line.
4. **`https://wa.link/fsv3os` is an opaque short link.** It cannot be verified from
   the number, unlike the current `wa.me/<number>` form. Recorded verbatim; worth one
   click to confirm it resolves to the right account before going live.

**Decisions**

- **2026-09-10 — drop the customer-support row.** `supportPhone` /
  `supportPhoneHref` are removed rather than repointed: with a single line, a second
  row showing the same digits under a different label is noise. Removes the row from
  `Footer.tsx` and the Contact page.
- **2026-09-10 — fax row hidden** (defaulted): showing the phone number as a fax reads
  as an error.
- **2026-09-10 — `wa.link/fsv3os` acknowledged** as the intended WhatsApp target.

**Result**

- *(not yet built)*

---

### R8 — Use `Hero_Banner.jpg` as the hero

**Status:** OPEN — unblocked 2026-09-10 (Option A chosen)
**Requested:** 2026-09-10

**Asked for**

> Take `_assets/Hero_Banner.jpg` and use it as the hero banner.

**The asset is a finished banner, not a photograph**

1586 × 672 (2.36:1), 812 KB. It already contains, baked into the pixels:

- the Elite logo and wordmark
- headline *"Fuel Your Business with Better Loads. Loads Worth Driving For."*
- subheading *"The Load Booking Partner You Deserve"*
- three feature callouts — Maximizing Revenue (**Average $2.50+ / mile**), Zero
  Hassle, 24/7 Dedicated Support
- an equipment list and a USA & Canada coverage map

**Why this is not a drop-in replacement**

The current hero (`components/Hero.tsx`) is a **split layout**: live HTML text on the
left — `<h1>`, subcopy and two working CTA buttons including *"Call {site.phone}"* —
with a rotating three-photo carousel occupying the right half (`content/hero.ts`).

Putting this banner into that photo slot would give a half-width, illegible image
whose baked-in headline competes with the real `<h1>` sitting beside it. So the
request implies **replacing the split hero with a full-width banner**, which changes:

| | Now | With a baked banner |
|---|---|---|
| Headline | real `<h1>` text | pixels |
| CTA buttons | live *Call* + *Get quote* | none — an image cannot be clicked in parts |
| Phone number | pulled from `site.ts` | not present |
| Carousel | 3 rotating photos | single static image |

**Concrete costs, worth weighing before approving**

1. **Mobile.** Text baked at 2.36:1 does not reflow. On a 390 px phone this banner is
   about 165 px tall and the callout text becomes unreadable. This is the single
   biggest problem — most dispatch traffic is mobile.
2. **SEO.** The `<h1>` disappears. Search engines currently read the headline; they
   would read nothing.
3. **Accessibility.** Screen readers get one `alt` string instead of a heading,
   paragraph and two links.
4. **The CTAs vanish.** *"Call +1 (470) 905-2978"* is currently a tap-to-dial button
   in the hero — the most valuable element on the page for this business.
5. **Duplicate logo.** The banner carries the Elite mark, which would sit directly
   under the header logo added in R6.
6. **New revenue claim.** *"Average $2.50+ / mile"* does not appear anywhere on the
   site today. It is a specific, checkable promise — confirm it is accurate and
   intended before publishing it.
7. **Equipment list conflicts with R5.** The banner reads *Dry Van | Reefer | Flatbed
   | Step Deck | Power Only | Hotshot | Box Truck | Canada* — seven types plus a
   country. R5 leaves **eight**, so **Straight Truck is missing** from the banner. As
   pixels, this cannot be corrected without re-exporting the artwork.

**Three ways to do it**

- **A — Full-width banner exactly as asked.** Truest to the request. Accepts costs
  1–5 above. Mitigation: a separate mobile crop, plus an overlaid transparent
  tap-to-call button.
- **B — Banner as the hero image, HTML text kept.** Use it in the existing right-hand
  slot but supply a version *without* baked text, so the live `<h1>`, phone CTA and
  responsiveness all survive. Requires a text-free export of the artwork.
- **C — Full-width banner with a live CTA strip beneath it.** Compromise: the banner
  reads as designed on desktop, and a real headline plus call button sits directly
  under it for mobile, SEO and conversion.

**Recommendation:** **B** if a text-free version of the artwork can be exported,
otherwise **C**. **A** is buildable, but it removes the tap-to-call button and makes
the hero unreadable on phones — that is a real conversion loss, not a style
preference.

**Points to confirm**

1. Which of A / B / C?
2. Is a layered/text-free export of this artwork available?
3. Is *"Average $2.50+ / mile"* an approved public claim?
4. Do the three existing carousel photos (`public/hero/hero-1..3`) stay anywhere, or
   is the carousel retired?

**Decisions**

- **2026-09-10 — Option A chosen: full-width banner exactly as supplied.** Taken with
  the costs already listed above on the record. The split hero is replaced; the live
  `<h1>`, subcopy, rotating carousel and the two CTA buttons in the hero go with it.
- **Mitigations I will build unless told otherwise**, since they recover most of what
  Option A gives up at little cost:
  1. A transparent **tap-to-call overlay** across the banner, linking to
     `site.phoneHref`, so the hero is still one tap to dial on mobile.
  2. A **visually-hidden `<h1>`** carrying the banner's headline as real text, so
     search engines and screen readers still get a heading. The banner's `alt` will
     describe the image rather than repeat it.
  3. `priority` loading on the image — it is 812 KB and above the fold.
- **2026-09-10 — the "Average $2.50+ / mile" claim ships as-is.** Confirmed by the
  client to keep. Recorded here because it is a specific, checkable earnings promise
  that appears nowhere else on the site, and it goes live as part of the banner. It is
  the client's claim to make; noted, not endorsed.
- **2026-09-10 — Option A re-confirmed.** A screenshot of the existing split hero was
  sent with "keep other things the same, do not change", which read as a possible
  reversal. Clarified: it was a general instruction not to touch anything unrequested,
  **not** a change to R8. The split hero is still replaced.

  *(Aside, for the record: that screenshot was of the **Rayan Dispatch** site, not
  Elite. Elite's hero renders `{site.name}` and the live page reads "Elite Truck
  Dispatch keeps owner-operators…" — there is no literal "Rayan" string anywhere in
  this codebase. Verified against both live sites. Nothing to fix.)*

- **What Option A deletes**, stated plainly so it is not a surprise on deploy:
  the `<h1>` *"Reliable Truck Dispatching for Owner-Operators"*, the eyebrow
  *"USA & Canada · 24/7 Dispatch Support"*, the body paragraph, the **Book Dispatch**
  button, the **Call {phone}** button, and the three-photo carousel with its
  prev/next controls and dots.

- **2026-09-10 (after first deploy) — Option A narrowed: the split hero STAYS.**
  On seeing it live the client said the section below the banner should be kept as is.
  So the banner replaced only `master-hero.jpeg`; `<Hero />` sits directly beneath it,
  with its `<h1>`, body copy, Book Dispatch / Call buttons and photo carousel intact.

  Consequently the two Option-A mitigations were removed again — the banner's
  `sr-only <h1>` and the extra Call button underneath — because `<Hero />` now supplies
  a real `<h1>` and a real Call button inches below. Two `<h1>`s on one page is wrong,
  and a duplicate CTA is noise. The tap-to-call overlay **on the banner is kept**.

  What the banner actually replaced, and why it needed to: `master-hero.jpeg` was a
  **Rayan Dispatch** banner — live on the Elite home page, showing "RAYAN DISPATCH",
  rayandispatch.com and info@rayandispatch.com.

- **Still unresolved:** the missing **Straight Truck** in the banner's equipment strip.
  Baked into the pixels, so the banner shows an equipment list that contradicts the
  eight types left by R5.

**Recovery note — this project is NOT a git repository.**
Earlier entries in this file said deleted files were "recoverable from git". That was
wrong. When `<Hero />` had to be restored, the assets were recovered from
**rayandispatch.com**, which still serves byte-identical copies (`hero-1.jpeg` 167104 B,
`hero-2.jpeg` 122137 B, `hero-3.png` 1671821 B) because the Elite site was copied from
it. `Hero.tsx` and `content/hero.ts` were reconstructed from source read earlier in the
session.

**Deletions that currently have no backup**, should any be wanted back:
`components/Testimonials.tsx`, `components/ComplianceCard.tsx`, `public/the-process.png`,
and the four truck photos. `the-process.png` and the truck photos are still served by
rayandispatch.com; the two components are not, and would need reconstructing.
**Initialising git here would be worth ten minutes.**

**Result**

- *(not yet built)*

---

### R9 — New brand palette

**Status:** OPEN — mapping approved 2026-09-10
**Requested:** 2026-09-10

**Asked for**

> Change in theme colour.

Five colours supplied:

| Hex | Reads as |
|---|---|
| `#0A1931` | near-black navy |
| `#1A3D63` | deep blue |
| `#4A7FA7` | mid blue |
| `#B3CFE5` | light blue |
| `#F6FAFD` | near-white |

This closes the first inherited issue at the top of this file — the palette has been
a knowing placeholder inherited from Rayan Dispatch since the rebrand began.

**Scope**

`tailwind.config.ts` only. The config's own note states no component hard-codes a
theme hex, so replacing the tokens rethemes the entire site. The one deliberate
exception is `Footer.tsx`, which hard-codes Facebook / Instagram / LinkedIn / WhatsApp
brand colours — those must **not** be rethemed.

**Five colours, thirteen tokens**

The existing scheme defines `primary` (4 shades), `navy` (5), `gold` (1) and `accent`
(3). A 1:1 swap is not possible. Proposed mapping:

| Token | Now | Proposed | Role |
|---|---|---|---|
| `navy.950` | #081536 | **#0A1931** | footer, deepest bands |
| `navy.900` | #0E2769 | **#1A3D63** | hero, dark sections |
| `navy.800/700/600` | blues | derived between #1A3D63 and #4A7FA7 | dark cards, borders |
| `primary.DEFAULT` | #1351D8 | **#1A3D63** *(see contrast note)* | CTA, links |
| `primary.light` | #3B74F0 | **#4A7FA7** | hover, lighter accents |
| `primary.dark` | #0E3DB5 | **#0A1931** | pressed state |
| `primary.tint` | #EAF1FF | **#F6FAFD** | soft wash on light sections |
| `gold` | #F5B841 | *unresolved* | stars, small highlights |
| `accent.*` | amber #F59E0B | *unresolved* | conversion CTAs |

**Two things the five colours do not answer**

1. **There is no warm accent.** `accent` (amber) is currently used for the highest-value
   buttons — *Call Dispatch* in the header and hero, and the CTA band. Amber was chosen
   deliberately to stand out against the blues. An all-blue palette means those buttons
   stop standing out. Options: keep amber as a deliberate non-brand signal colour,
   or make CTAs `#0A1931` and accept a flatter page.
2. **`gold` is used by the review stars** (and will be used by R2's new rating strip).
   The supplied palette has no gold — and note the **logo is black + gold**, which is
   exactly why `tailwind.config.ts` records the current blue scheme as wrong. Worth
   confirming: is gold gone from the brand, or does it survive as an accent alongside
   these blues?

**One measured problem**

`#4A7FA7` on white measures **4.30:1** contrast — below the WCAG AA threshold of
4.5:1 for normal text. Used as a button background with white label text, or as link
text on white, it technically fails accessibility. It passes for large text and UI
borders.

`#1A3D63` on white measures **11.1:1** — comfortable.

So the mapping above puts `#1A3D63` on `primary` (buttons, links) and keeps `#4A7FA7`
for hovers, borders and decorative fills, rather than the reverse. Flagging because
the mid blue is the more attractive of the two and the temptation is to lead with it.

**Points to confirm**

1. Approve the token mapping above, or supply a per-token assignment.
2. ~~Keep amber for conversion CTAs, or go all-blue?~~ **RESOLVED — keep amber.**
3. Does gold survive for stars and small highlights?
4. `#B3CFE5` is unassigned in the mapping — intended for light section backgrounds,
   or something specific?

**Decisions**

- **2026-09-10 — token mapping approved as proposed.** `#0A1931` → `navy.950`
  (footer); `#1A3D63` → `navy.900` and `primary.DEFAULT`; `#4A7FA7` →
  `primary.light`; `#F6FAFD` → `primary.tint`; `#B3CFE5` → light section fills;
  intermediate `navy` shades derived between `#1A3D63` and `#4A7FA7`.
  Deep blue leads on buttons and links because `#4A7FA7` measures 4.30:1 on white and
  fails WCAG AA for normal text.
- **2026-09-10 — amber stays, unchanged.** `accent` keeps `#F59E0B` / `#D97706` /
  `#FEF3C7` as a deliberate non-brand signal colour for conversion CTAs — *Call
  Dispatch* in the header and hero, and the CTA band. It is not part of the brand
  palette and is not expected to match it; the contrast against the blues is the
  point.

  Consequence worth noting: amber against `#1A3D63` and `#0A1931` is a **stronger**
  pairing than against the current royal blue, so the call buttons should stand out
  more after the retheme, not less.

  This also settles most of point 3 by implication — the palette now has one warm
  colour. Whether the review stars use amber `#F59E0B` or keep gold `#F5B841` is a
  small remaining question; they sit two shades apart and using amber for both would
  drop `gold` entirely.

**Result**

- *(not yet built)*

### R10 — Remove the process diagram; widen the intro text

**Status:** OPEN
**Requested:** 2026-09-10

**Asked for**

> Remove this image from the website. "Truck Dispatching Company" becomes full length.

The image is the three-layer process diagram — **Commercial Layer** (Shipper →
Broker), **Dispatch / Control Layer** (Dispatcher, Carrier, Driver) and **Physical
Layer** (Shipper → Driver → Receiver), with a freight-flow legend.

**Scope**

`components/TruckDispatchIntro.tsx` — the same component as R1, so the two land
together.

1. Delete the `<figure>` block: the `next/image` for `/the-process.png` and its
   caption *"How a load moves — and where your dedicated dispatcher does the heavy
   lifting."*
2. The text block loses its width cap. Currently `mx-auto max-w-3xl text-center`
   (768 px); "full length" is read as spanning the `container-rd` width (1200 px).
3. `public/the-process.png` (212 KB) becomes unreferenced — used nowhere else. Deleted,
   consistent with the R5 decision on unused images.

**Points to confirm**

1. **Centred or left-aligned once full width?** Assumed to stay centred, just wider.
2. **Line length.** Centred body text across 1200 px runs to roughly 150 characters
   per line, about double the comfortable reading measure. With the diagram gone the
   section is short, so the width will not look empty — but the paragraphs will be
   harder to read than they are now. If that shows badly once built, the usual fix is
   a two-column split or a cap around `max-w-5xl`; noting it rather than pre-empting
   the instruction.
3. **The section becomes text-only.** No image between `BenefitBand` above and the new
   review strip (R2) below. Intentional per this instruction.

**Decisions**

- *(none yet)*

**Result**

- *(not yet built)*

---

<!-- Template for each new entry:

### R1 — <short title>

**Status:** OPEN
**Requested:** <date>

**Asked for**
> <the requirement, in the client's own words where possible>

**Scope**
- files / components affected

**Decisions**
- anything resolved along the way, and why

**Result**
- what changed, and how it was verified

-->
