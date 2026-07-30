import { CardProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] shadow-[0_18px_60px_rgba(37,99,235,.08)]",
        "[@media(hover:none)]:!scale-100 [@media(hover:none)]:!border-[#C5D5EB]",
        hover && "[@media(hover:hover)]:hover:scale-105 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}