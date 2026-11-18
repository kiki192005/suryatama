import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <ScrollReveal direction="up" delay={0.1}>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-suryatama-navy-50 px-3.5 py-1 text-xs font-semibold text-suryatama-navy-500 border border-suryatama-navy-200 mb-3 uppercase tracking-wider">
            {badge}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl font-heading">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}
