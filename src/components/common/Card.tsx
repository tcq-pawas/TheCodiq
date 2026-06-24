import { CardProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "premium-card rounded-2xl p-6",
        hover && "hover:scale-105 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
