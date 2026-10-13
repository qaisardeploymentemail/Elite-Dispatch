import Link from "next/link";
import { nav, site } from "@/content/site";
import Logo from "./Logo";
import Icon from "./Icon";

const icon = (path: string) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
    <path d={path} />
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: site.social.facebook,
    hover: "hover:border-[#1877F2] hover:bg-[#1877F2]",
    icon: icon(
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    ),
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    hover:
      "hover:border-transparent hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5]",
    icon: icon(
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    ),
  },
  {
    label: "X (Twitter)",
    href: site.social.twitter,
    hover: "hover:border-black hover:bg-black",
    icon: icon(
      "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.291 19.5h2.039L6.486 3.24H4.298l13.312 17.413z"
    ),
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    hover: "hover:border-[#0A66C2] hover:bg-[#0A66C2]",
    icon: icon(
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
    ),
  },
  {
    label: "WhatsApp",
    href: site.social.whatsapp,
    hover: "hover:border-[#25D366] hover:bg-[#25D366]",
    icon: icon(
      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.933 11.933 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.487-8.464",
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container-rd grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
        <div className="md:col-span-2 lg:col-span-4">
          <Logo onDark />
          <p className="mt-4 max-w-sm text-sm text-slate-400">{site.description}</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, hover, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all hover:text-white ${hover}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-slate-400 hover:text-primary-light">
                  {n.label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-primary-light">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="text-sm text-slate-400 hover:text-primary-light">Terms &amp; Conditions</Link></li>
            <li><Link href="/cookies" className="text-sm text-slate-400 hover:text-primary-light">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
              <span><span className="text-slate-300">Address:</span> {site.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="text-slate-300">Email:</span>{" "}
                <a href={site.emailHref} className="hover:text-primary-light">{site.email}</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="text-slate-300">Phone:</span>{" "}
                <a href={site.phoneHref} className="whitespace-nowrap hover:text-primary-light">{site.phone}</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 fill-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.933 11.933 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.487-8.464"/>
              </svg>
              <span>
                <span className="text-slate-300">WhatsApp:</span>{" "}
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-primary-light">{site.whatsappNumber}</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0" />
              <span><span className="text-slate-300">Support:</span> {site.hours}</span>
            </li>
          </ul>
          <Link href="/contact" className="btn-primary mt-5 w-full">Book Dispatch</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rd flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-primary-light">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary-light">Terms &amp; Conditions</Link>
            <Link href="/cookies" className="hover:text-primary-light">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
