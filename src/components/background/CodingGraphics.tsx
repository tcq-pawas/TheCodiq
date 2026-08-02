"use client";

type SymbolVariant = "a" | "b" | "c" | "d";

interface CodingGraphicsProps {
  variant?: SymbolVariant;
}

interface SymbolDef {
  text: string;
  x: string;
  y: string;
  size: string;
  color: string;
  delay: string;
  duration: string;
  rotate?: string;
}

const SYMBOLS: Record<SymbolVariant, SymbolDef[]> = {
  a: [
    { text: "{ }", x: "42%", y: "16%", size: "1.4rem", color: "rgba(59,130,246,0.11)", delay: "0s", duration: "14s" },
    { text: "</>", x: "58%", y: "78%", size: "1.15rem", color: "rgba(56,189,248,0.10)", delay: "2s", duration: "16s", rotate: "-2deg" },
    { text: "=>", x: "48%", y: "88%", size: "1rem", color: "rgba(139,92,246,0.09)", delay: "3s", duration: "15s", rotate: "1deg" },
    { text: "λ", x: "36%", y: "72%", size: "1.2rem", color: "rgba(99,102,241,0.10)", delay: "1.5s", duration: "13s" },
  ],
  b: [
    { text: "</>", x: "45%", y: "14%", size: "1.3rem", color: "rgba(56,189,248,0.11)", delay: "0s", duration: "15s", rotate: "1deg" },
    { text: "{ }", x: "52%", y: "82%", size: "1.35rem", color: "rgba(99,102,241,0.10)", delay: "2s", duration: "14s" },
    { text: "::", x: "40%", y: "68%", size: "1.05rem", color: "rgba(34,197,94,0.09)", delay: "2.5s", duration: "16s" },
    { text: "()", x: "60%", y: "40%", size: "1.1rem", color: "rgba(59,130,246,0.09)", delay: "0.5s", duration: "13s", rotate: "-1deg" },
  ],
  c: [
    { text: "{ }", x: "38%", y: "20%", size: "1.4rem", color: "rgba(139,92,246,0.10)", delay: "0s", duration: "16s" },
    { text: "</>", x: "55%", y: "70%", size: "1.2rem", color: "rgba(59,130,246,0.11)", delay: "1.5s", duration: "14s", rotate: "2deg" },
    { text: "<>", x: "46%", y: "86%", size: "1.1rem", color: "rgba(56,189,248,0.09)", delay: "3s", duration: "15s" },
  ],
  d: [
    { text: "</>", x: "44%", y: "18%", size: "1.25rem", color: "rgba(34,197,94,0.10)", delay: "0s", duration: "13s", rotate: "-1deg" },
    { text: "{ }", x: "56%", y: "74%", size: "1.4rem", color: "rgba(59,130,246,0.11)", delay: "2s", duration: "15s" },
    { text: "=>", x: "50%", y: "48%", size: "1rem", color: "rgba(99,102,241,0.09)", delay: "3s", duration: "14s" },
    { text: "[]", x: "35%", y: "80%", size: "1rem", color: "rgba(139,92,246,0.08)", delay: "1s", duration: "16s" },
  ],
};

export default function CodingGraphics({ variant = "a" }: CodingGraphicsProps) {
  const symbols = SYMBOLS[variant];

  return (
    <div className="tech-bg-layer tech-bg-code" aria-hidden="true">
      <div className="tech-code-symbols">
        {symbols.map((sym, i) => (
          <span
            key={i}
            className="tech-code-symbol tech-anim-float-micro"
            style={{
              left: sym.x,
              top: sym.y,
              fontSize: sym.size,
              color: sym.color,
              animationDelay: sym.delay,
              animationDuration: sym.duration,
              ["--tech-rot" as string]: sym.rotate ?? "0deg",
            }}
          >
            {sym.text}
          </span>
        ))}
      </div>
    </div>
  );
}
