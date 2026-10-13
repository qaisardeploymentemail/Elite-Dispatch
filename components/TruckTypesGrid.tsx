import Link from "next/link";
import { truckTypes } from "@/content/truckTypes";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function TruckTypesGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="truck-types" className="section bg-slate-50">
      <div className="container-rd">
        {withHeading && (
          <SectionHeading
            eyebrow="Equipment We Dispatch"
            title="Every Truck Type, Covered"
            subtitle="Whatever you drive, we know the lanes and the brokers that pay for it."
          />
        )}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {truckTypes.map((t) => (
            <Link key={t.slug} href={`/truck-types#${t.slug}`} className="card card-hover group text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={t.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base text-navy-900">{t.name}</h3>
              <p className="mt-1 text-xs leading-snug text-slate-500">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
