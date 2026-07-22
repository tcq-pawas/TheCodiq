import { SectionTitleProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function SectionTitle({
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
      <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold text-silver-primary mb-4">
        {title}
      </h3>
      {subtitle && (
        <p className={cn("text-secondary-text text-[12px]", subtitleAlignments[align])}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
