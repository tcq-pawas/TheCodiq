import { SectionTitleProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  titleColor = "text-[#0F172A]",
  subtitleColor = "text-[#64748B]",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-1.5 text-[11px] font-semibold text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]">
            {badge}
          </span>
        </div>
      )}

      {/* Heading */}
      <h2 className={`text-[26px] font-bold tracking-tight ${titleColor}`}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            `mt-4 max-w-2xl text-[12px] leading-7 ${subtitleColor}`,
            subtitleAlignments[align]
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}