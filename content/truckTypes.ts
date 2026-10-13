export type TruckType = { slug: string; name: string; icon: string; blurb: string; image: string | null };

// 8 equipment types we dispatch for. `image` = photo in public/truck-types (null = emoji fallback).
export const truckTypes: TruckType[] = [
  { slug: "dry-van", name: "Dry Van", icon: "truck", image: "/truck-types/dry-van.webp", blurb: "The backbone of freight — consistent, high-volume dry van loads nationwide." },
  { slug: "reefer", name: "Reefer", icon: "snowflake", image: "/truck-types/reefer.webp", blurb: "Temperature-controlled freight — produce, food and pharma at premium rates." },
  { slug: "flatbed", name: "Flatbed", icon: "flatbed", image: "/truck-types/flatbed.webp", blurb: "Steel, lumber, machinery and building materials — strong flatbed rates and steady lanes." },
  { slug: "power-only", name: "Power Only", icon: "bolt", image: "/truck-types/power-only.avif", blurb: "Pull drop trailers and earn — power-only loads with no trailer overhead." },
  { slug: "step-deck", name: "Step Deck", icon: "layers", image: "/truck-types/step-deck.webp", blurb: "Taller and heavier loads that won't fit a standard flatbed." },
  { slug: "box-truck", name: "Box Truck", icon: "box", image: "/truck-types/box-truck.jpeg", blurb: "Straight/box truck loads — local and regional freight, expedited and last-mile." },
  { slug: "straight-truck", name: "Straight Truck", icon: "van", image: "/truck-types/straight-truck.webp", blurb: "Straight-truck and cargo freight for regional and expedited lanes." },
  { slug: "hot-shot", name: "Hot Shot", icon: "flame", image: "/truck-types/hot-shot.webp", blurb: "Expedited hot shot freight on gooseneck trailers — fast, high-margin runs." },
];
