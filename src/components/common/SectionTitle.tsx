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
      <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-silver-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-secondary-text", subtitleAlignments[align])}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
