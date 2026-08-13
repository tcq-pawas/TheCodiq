"use client";

type BinaryVariant = "a" | "b" | "c" | "d";

interface BinaryFieldProps {
  variant?: BinaryVariant;
}

interface Glyph {
  text: string;
  x: string;
  y: string;
  delay: string;
  duration: string;
  size: string;
  color: string;
}

/** Subtle floating binary / terminal glyphs — kept sparse for performance */
const LAYOUTS: Record<BinaryVariant, Glyph[]> = {
  a: [
    { text: "01", x: "8%", y: "18%", delay: "0s", duration: "42s", size: "0.7rem", color: "rgba(45,156,255,0.9)" },
    { text: "10", x: "78%", y: "72%", delay: "4s", duration: "48s", size: "0.65rem", color: "rgba(111,207,74,0.85)" },
    { text: "0110", x: "88%", y: "28%", delay: "2s", duration: "52s", size: "0.6rem", color: "rgba(45,156,255,0.8)" },
    { text: "0x2F", x: "18%", y: "78%", delay: "6s", duration: "56s", size: "0.55rem", color: "rgba(242,201,76,0.7)" },
  ],
  b: [
    { text: "AES", x: "10%", y: "22%", delay: "0s", duration: "44s", size: "0.6rem", color: "rgba(45,156,255,0.85)" },
    { text: "01", x: "80%", y: "18%", delay: "3s", duration: "48s", size: "0.7rem", color: "rgba(111,207,74,0.8)" },
    { text: "tls", x: "18%", y: "68%", delay: "5s", duration: "52s", size: "0.55rem", color: "rgba(242,201,76,0.75)" },
    { text: "1101", x: "72%", y: "72%", delay: "2s", duration: "40s", size: "0.6rem", color: "rgba(45,156,255,0.75)" },
  ],
  c: [
    { text: "GET", x: "12%", y: "20%", delay: "0s", duration: "46s", size: "0.55rem", color: "rgba(45,156,255,0.85)" },
    { text: "/v1", x: "84%", y: "24%", delay: "4s", duration: "50s", size: "0.55rem", color: "rgba(111,207,74,0.8)" },
    { text: "01", x: "20%", y: "76%", delay: "2s", duration: "42s", size: "0.7rem", color: "rgba(45,156,255,0.75)" },
    { text: "{}", x: "70%", y: "80%", delay: "5s", duration: "54s", size: "0.7rem", color: "rgba(242,201,76,0.7)" },
  ],
  d: [
    { text: "001", x: "6%", y: "30%", delay: "0s", duration: "50s", size: "0.65rem", color: "rgba(111,207,74,0.85)" },
    { text: "110", x: "90%", y: "22%", delay: "3s", duration: "44s", size: "0.65rem", color: "rgba(45,156,255,0.8)" },
    { text: "git", x: "16%", y: "70%", delay: "6s", duration: "52s", size: "0.55rem", color: "rgba(242,201,76,0.75)" },
    { text: "k8s", x: "78%", y: "68%", delay: "1s", duration: "48s", size: "0.55rem", color: "rgba(45,156,255,0.75)" },
  ],
};

export default function BinaryField({ variant = "a" }: BinaryFieldProps) {
  const glyphs = LAYOUTS[variant];

  return (
    <div className="tech-bg-layer tech-bg-binary" aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={i}
            className="tech-binary-glyph"
            style={{
              left: g.x,
              top: g.y,
              fontSize: g.size,
              color: g.color,
              opacity: 0.55,
            }}
        >
          {g.text}
        </span>
      ))}
    </div>
  );
}
