// Dual pricing model — percentage tiers + a flat weekly plan (like the reference, but cleaner).
// TODO: confirm the exact percentages and weekly rate.

export type PercentTier = { equipment: string; rate: string };

export const percentTiers: PercentTier[] = [
  { equipment: "Dry Van", rate: "5%" },
  { equipment: "Flatbed / Step Deck", rate: "5%" },
  { equipment: "Reefer", rate: "6%" },
  { equipment: "Power Only", rate: "5%" },
  { equipment: "Box / Straight Truck", rate: "8%" },
  { equipment: "Specialized (Hot Shot)", rate: "7%" },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  highlight?: boolean;
  best: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Percentage Plan",
    price: "5–8%",
    cadence: "of gross / load",
    best: "Best for getting started",
    features: [
      "Pay only on loads we book",
      "Dedicated dispatcher",
      "Rate negotiation on every load",
      "Broker setups & paperwork",
      "Free invoicing",
      "No long-term contract",
    ],
    cta: "Get Started",
  },
  {
    name: "Flat Weekly Plan",
    price: "$350",
    cadence: "per truck / week",
    highlight: true,
    best: "Best for busy trucks",
    features: [
      "Flat fee — keep 100% of high weeks",
      "Priority dedicated dispatcher",
      "Aggressive rate negotiation",
      "Broker setups & paperwork",
      "Free invoicing + factoring setup",
      "24/7 support, cancel anytime",
    ],
    cta: "Book Dispatch",
  },
];
