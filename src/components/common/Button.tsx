"use client";

import { ButtonProps } from "@/types/common";
import { cn } from "@/lib/helper";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary relative overflow-hidden";

  const variants = {
    primary:
      "bg-blue-gradient text-white hover:scale-105 focus:ring-brand-blue shadow-lg shadow-brand-blue/25 glow-button",
    secondary:
      "bg-gold-gradient text-white hover:scale-105 focus:ring-brand-gold shadow-lg shadow-brand-gold/25 glow-button",
    success:
      "bg-green-gradient text-white hover:scale-105 focus:ring-brand-green shadow-lg shadow-brand-green/25 glow-button",
    outline:
      "bg-transparent text-silver-primary border-2 border-brand-blue hover:bg-brand-blue/10 focus:ring-brand-blue hover:shadow-glow-blue transition-all",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
