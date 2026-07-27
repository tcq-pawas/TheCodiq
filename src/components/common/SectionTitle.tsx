import { SectionTitleProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const subtitleAlignments = {
    left: "mx-0",
    center: "mx-auto",
    right: "mx-auto ml-auto",
  };

  return (
    <div className={cn("mb-12", alignments[align], className)}>
      {/* Badge */}
      {badge && (
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-[11px] font-medium text-primary shadow-[0_0_20px_rgba(59,130,246,0.35)]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px] shadow-primary" />
            {badge}
          </span>
        </div>
      )}

      {/* Heading */}
      <h2 className="text-[26px] font-bold tracking-tight text-white">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[12px] leading-7 text-secondary-text",
            subtitleAlignments[align]
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}