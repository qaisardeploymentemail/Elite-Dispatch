// Lightweight line-icon set (Lucide-style, MIT-derived paths) — replaces template emojis
// with crisp, industrial vector glyphs. Usage: <Icon name="truck" className="h-6 w-6" />
import type { ReactNode, SVGProps } from "react";

const P: Record<string, ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  dollar: <><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h8M8 9h1.5" /></>,
  network: <><circle cx="5" cy="6" r="2.4" /><circle cx="19" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="M6.8 7.6l4 8M17.2 7.6l-4 8" /></>,
  bank: <><path d="M3 21h18" /><path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10" /><path d="M12 3l9 5H3z" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  truck: <><rect x="2.5" y="6" width="11" height="9" rx="1" /><path d="M13.5 9H17l3.5 3v3h-7z" /><circle cx="6.5" cy="17.5" r="1.7" /><circle cx="17" cy="17.5" r="1.7" /></>,
  van: <><path d="M2.5 6h11l4 4.5V15H2.5z" /><path d="M13.5 6v4.5H17.5" /><circle cx="7" cy="17.5" r="1.7" /><circle cx="16" cy="17.5" r="1.7" /></>,
  flatbed: <><path d="M2 13h15" /><path d="M17 13v-2h2.5l1.5 2v2H17z" /><path d="M4 13V9h9v4" /><circle cx="7" cy="17.5" r="1.7" /><circle cx="17.5" cy="17.5" r="1.7" /></>,
  snowflake: <><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" /></>,
  bolt: <><path d="M13 2L4 14h7l-2 8 9-12h-7z" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 17l9 5 9-5" /></>,
  box: <><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></>,
  flame: <><path d="M12 3c1.2 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.6.6-2.6 1.2-3.2C9.6 10 10.8 10.4 11 10c-.8-2 .5-4.4 1-7z" /></>,
  crane: <><path d="M4 21h16" /><path d="M7 21V4h10" /><path d="M17 4l3.5 3" /><path d="M10 4v4" /></>,
  tractor: <><circle cx="7" cy="16.5" r="3.3" /><circle cx="18" cy="17" r="2.3" /><path d="M4.2 14V8h5l2.2 4.5H16" /><path d="M16 8h3v4" /></>,
  phone: <><path d="M5 3.5h4l2 5-2.6 1.6a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5.5a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  headset: <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><path d="M4 13h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M20 13h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1z" /><path d="M20 18v1a3 3 0 0 1-3 3h-3" /></>,
  fax: <><path d="M7 9V3h10v6" /><rect x="3" y="9" width="18" height="7" rx="2" /><path d="M7 14h10v7H7z" /><path d="M10 17h4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  chart: <><path d="M3 17l6-6 4 4 7-8" /><path d="M17 7h4v4" /></>,
  route: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5" /></>,
  check: <><path d="M20 6L9 17l-5-5" /></>,
};

export default function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         className={props.className ?? "h-6 w-6"} {...props}>
      {P[name] ?? P.truck}
    </svg>
  );
}
