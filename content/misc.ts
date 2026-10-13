// Stats (count-up), testimonials, FAQs, working zones, authority-age options.
// TODO: replace stat numbers + testimonials with real figures.

export type Stat = { value: number; suffix: string; label: string };
export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years Dispatching" },
  { value: 200, suffix: "+", label: "Trucks Dispatched" },
  { value: 5000, suffix: "+", label: "Loads Booked" },
  { value: 48, suffix: "", label: "Connected States" },
];

export type Testimonial = { name: string; role: string; quote: string; rating: number };
export const testimonials: Testimonial[] = [
  {
    name: "James T.",
    role: "Owner-Operator · Dry Van",
    rating: 5,
    quote:
      "Since switching to Elite Truck Dispatch my weekly gross is up and I actually take weekends off. They find the loads, I just drive.",
  },
  {
    name: "David W.",
    role: "Small Fleet · 4 Trucks",
    rating: 4.6,
    quote:
      "Transparent pricing, no games. My dispatcher negotiates every load and the paperwork is completely off my plate.",
  },
  {
    name: "Robert A.",
    role: "Reefer · Owner-Operator",
    rating: 4.2,
    quote:
      "Best rates I've had in years and someone answers the phone at 2am when a load falls through. Highly recommend.",
  },
];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  { q: "What does a truck dispatcher do?", a: "We find and book loads, negotiate rates, handle broker setups and paperwork, and support you on the road — so you can focus on driving and earning." },
  { q: "How much do you charge?", a: "Either a simple percentage of the load (5–8% depending on equipment) or a flat weekly rate per truck. No hidden fees and no long-term contract." },
  { q: "Do I have to accept every load?", a: "Never. You approve every load before it's booked. We work for you — there is no forced dispatch." },
  { q: "How new does my authority need to be?", a: "We work with brand-new authorities as well as established carriers. Some brokers require 90+ days, and we'll build your book of business either way." },
  { q: "Do you help with factoring and invoicing?", a: "Yes. We can set you up with competitive factoring and we submit your invoices and paperwork for free to keep cash flow steady." },
  { q: "Which equipment do you dispatch?", a: "Dry van, flatbed, reefer, step deck, box truck, power only, hot shot and straight trucks." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts — stay because it works, not because you're locked in." },
];

// Coverage
export const zones = {
  intro:
    "Elite Truck Dispatch keeps trucks loaded across all 48 connected U.S. states and all of Canada. Our dispatchers know the regional markets, lane preferences and rate patterns in every major freight zone — so wherever you run, we put you on the highest-paying freight we can find.",
  us: {
    heading: "United States Coverage",
    blurb:
      "We dispatch across all 48 connected U.S. states, with the deepest expertise in the busiest, best-paying freight lanes in each region.",
    regions: [
      { name: "West", states: "California · Washington · Oregon · Nevada · Idaho · Montana · Wyoming · Utah" },
      { name: "Midwest", states: "Illinois · Ohio · Indiana · Michigan · Wisconsin · Minnesota · Iowa · Missouri · Kansas" },
      { name: "Southwest", states: "Texas · Arizona · Oklahoma · Colorado · New Mexico" },
      { name: "Southeast", states: "Georgia · Florida · Tennessee · North Carolina · South Carolina · Alabama · Mississippi · Louisiana · Arkansas · Kentucky · Virginia · West Virginia" },
      { name: "Northeast", states: "Pennsylvania · New York · New Jersey · Massachusetts · Connecticut · Rhode Island · Vermont · New Hampshire · Maine · Delaware · Maryland" },
    ],
  },
  canada: {
    heading: "Canada Coverage",
    blurb:
      "We work with carriers and brokers across Canada's major freight corridors, and our cross-border team keeps your US–Canada loads moving and compliant at customs.",
    cities:
      "Toronto · Mississauga · Windsor · Montreal · Quebec City · Calgary · Edmonton · Vancouver · Surrey · Winnipeg",
  },
  specialized: [
    "Dry van, flatbed, step-deck & reefer dispatch",
    "High-paying load booking from trusted brokers & shippers",
    "Freight rate negotiation to maximize your revenue per mile",
    "Billing, invoicing & paperwork management for faster pay",
    "24/7 dedicated dispatcher support — always a call away",
  ],
};

export const authorityAges = [
  "Brand new (0–90 days)",
  "90 days – 6 months",
  "6 months – 1 year",
  "1 year – 2 years",
  "2+ years",
];
