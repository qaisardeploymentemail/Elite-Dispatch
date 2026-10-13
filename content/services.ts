export type Service = { icon: string; title: string; desc: string };

export const services: Service[] = [
  {
    icon: "search",
    title: "Load Booking",
    desc: "We scan the boards and our broker network all day to book the highest-paying loads that fit your truck and your lanes.",
  },
  {
    icon: "dollar",
    title: "Rate Negotiation",
    desc: "Experienced dispatchers negotiate every load hard so you earn more per mile — never leaving money on the table.",
  },
  {
    icon: "file",
    title: "Paperwork & BOL",
    desc: "Rate confirmations, carrier packets, BOLs and PODs handled for you, so your time stays on the road, not the laptop.",
  },
  {
    icon: "network",
    title: "Broker & Shipper Comms",
    desc: "We handle broker setups, check calls and problem-solving on your behalf — one point of contact, zero headaches.",
  },
  {
    icon: "bank",
    title: "Factoring Support",
    desc: "Get set up with competitive factoring and steady cash flow. We coordinate invoicing so you get paid faster.",
  },
  {
    icon: "shield",
    title: "Insurance Support",
    desc: "We keep your certificates current and on file with every broker — COI requests handled the same day, so a missing document never costs you a load.",
  },
];

// "Why choose us" differentiators
export const whyChooseUs: { title: string; desc: string }[] = [
  { title: "Dedicated Dispatcher", desc: "One dispatcher who knows your truck, your lanes and your goals — not a call center." },
  { title: "Transparent Pricing", desc: "Simple percentage or flat weekly. No hidden fees, no long-term contracts, cancel anytime." },
  { title: "Higher-Paying Loads", desc: "We chase rate, not just miles — the goal is more revenue in your pocket every week." },
  { title: "Free Invoicing", desc: "We submit your invoices and paperwork at no extra charge, so cash flow stays healthy." },
  { title: "24/7 Availability", desc: "Real support around the clock — breakdowns and reschedules don't wait for business hours." },
  { title: "Driver-First", desc: "You approve every load. We work for you — no forced dispatch, ever." },
];

// Homepage process steps
export const process: { step: string; title: string; desc: string }[] = [
  { step: "01", title: "Load Sourcing", desc: "We find loads that match your equipment, lanes and rate goals." },
  { step: "02", title: "Rate Negotiation", desc: "We negotiate the best possible rate before anything is booked." },
  { step: "03", title: "Carrier Setup", desc: "We handle broker packets and setups so you're ready to roll." },
  { step: "04", title: "Dispatch", desc: "You approve the load; we lock it in and send your rate con." },
  { step: "05", title: "Tracking & Support", desc: "Check calls, updates and problem-solving, all handled for you." },
  { step: "06", title: "Invoicing", desc: "We submit paperwork and invoices so you get paid on time." },
];
