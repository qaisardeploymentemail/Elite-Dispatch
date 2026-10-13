export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} mb-12`}>
      {eyebrow && <span className={`eyebrow ${onDark ? "!text-primary-light" : ""}`}>{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl ${onDark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${onDark ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>
      )}
    </div>
  );
}
