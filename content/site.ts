// Central site config — edit hard facts here.
//
// Contact details and social profiles supplied by the client 2026-09-10 (R7); the
// Rayan Dispatch carry-overs are gone. `address` was explicitly confirmed unchanged.
// One number serves phone, fax and WhatsApp for now, at the client's instruction.
export const site = {
  name: "Elite Truck Dispatch",
  legalName: "Elite Truck Dispatch LLC", // TODO-BRAND confirm registered legal entity name
  tagline: "Truck Dispatching That Keeps You Loaded",
  description:
    "Full-service truck dispatching for owner-operators and small fleets — high-paying loads, expert rate negotiation, paperwork, and 24/7 support. No long-term contracts.",
  // Business line — dialing / SMS / voicemail (WhatsApp is a separate number below)
  phone: "+1 (470) 905-2978",
  phoneHref: "tel:+14709052978",
  // One line for now: phone, WhatsApp and fax are the same number. The separate
  // customer-support extension was dropped (R7) rather than repointed — a second row
  // showing identical digits under a different label is noise.
  whatsapp: "https://wa.link/fsv3os",
  whatsappNumber: "+1 (470) 905-2978",
  // Kept in the config for structured data, but the fax row is hidden in the footer
  // and on the contact page: the same digits labelled "Fax" reads as an error.
  fax: "+1 (470) 905-2978",
  email: "elitetruckdispatchllc@gmail.com",
  emailHref: "mailto:elitetruckdispatchllc@gmail.com",
  address: "1256 Bramlett Forest Ct SE, Atlanta, GA 30305, USA",
  hours: "24/7 Dispatch Support",
  // Deployed URL (used for metadata/OG/sitemap)
  // Canonical host (2026-09-10): note the double-L "ellite". The single-L
  // hostname still resolves and 301-redirects here.
  url: "https://www.elitedispatch.us.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61576363635365",
    instagram: "https://www.instagram.com/elitetruckdispatch/",
    twitter: "https://x.com/elitetruckdispa",
    linkedin: "https://www.linkedin.com/in/elite-truck-dispatch-usa-6706b4433/",
    whatsapp: "https://wa.link/fsv3os",
  },
} as const;

// Primary navigation (sticky header)
export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How to Start", href: "/how-to-start" },
  { label: "Working Zones", href: "/working-zones" },
  { label: "Truck Types", href: "/truck-types" },
  { label: "Freight Brokerage", href: "/freight-brokerage" }, // hidden from header, shown in footer
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
