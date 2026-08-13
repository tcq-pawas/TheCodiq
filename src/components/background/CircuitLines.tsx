"use client";

type CircuitVariant = "a" | "b" | "c" | "d";

interface CircuitLinesProps {
  variant?: CircuitVariant;
}

/** Soft data-flow / neural connection paths — logo palette, low opacity */
const PATHS: Record<CircuitVariant, { d: string; color: string; delay: string }[]> = {
  a: [
    { d: "M40 80 H180 V160 H320 V240 H460 V120 H620", color: "rgba(45,156,255,0.08)", delay: "0s" },
    { d: "M80 320 H200 V400 H360 V280 H520 V380 H700", color: "rgba(111,207,74,0.06)", delay: "2s" },
    { d: "M900 60 V180 H760 V300 H640 V200 H500", color: "rgba(45,156,255,0.07)", delay: "4s" },
    { d: "M1100 400 H960 V280 H820 V360 H680", color: "rgba(242,201,76,0.05)", delay: "1s" },
    { d: "M200 500 H280 V560 H400 V480 H520", color: "rgba(111,207,74,0.06)", delay: "3s" },
  ],
  b: [
    { d: "M100 100 H280 V220 H440 V140 H600 V300", color: "rgba(45,156,255,0.08)", delay: "0s" },
    { d: "M1200 80 V200 H1050 V320 H900 V180", color: "rgba(111,207,74,0.06)", delay: "3s" },
    { d: "M60 450 H220 V350 H400 V480 H580", color: "rgba(45,156,255,0.07)", delay: "5s" },
    { d: "M700 420 H860 V300 H1020 V400", color: "rgba(242,201,76,0.05)", delay: "1.5s" },
    { d: "M480 60 V140 H560 V220 H640", color: "rgba(111,207,74,0.06)", delay: "2.5s" },
  ],
  c: [
    { d: "M50 200 H160 V120 H300 V260 H450", color: "rgba(45,156,255,0.08)", delay: "0s" },
    { d: "M1100 150 H950 V280 H800 V160 H650", color: "rgba(111,207,74,0.06)", delay: "2.5s" },
    { d: "M200 500 H360 V380 H520 V460 H700", color: "rgba(45,156,255,0.07)", delay: "4s" },
    { d: "M820 480 H940 V560 H1080", color: "rgba(242,201,76,0.05)", delay: "1s" },
  ],
  d: [
    { d: "M80 60 H200 V140 H340 V80 H500 V200", color: "rgba(111,207,74,0.07)", delay: "0s" },
    { d: "M1150 100 V240 H1000 V160 H860 V300", color: "rgba(45,156,255,0.08)", delay: "3s" },
    { d: "M40 380 H180 V480 H340 V400 H500", color: "rgba(242,201,76,0.05)", delay: "1s" },
    { d: "M600 450 H760 V330 H920 V420 H1100", color: "rgba(45,156,255,0.07)", delay: "6s" },
  ],
};

const NODES: Record<CircuitVariant, { cx: number; cy: number; color: string; r?: number }[]> = {
  a: [
    { cx: 40, cy: 80, color: "rgba(45,156,255,0.22)" },
    { cx: 320, cy: 240, color: "rgba(111,207,74,0.18)" },
    { cx: 620, cy: 120, color: "rgba(45,156,255,0.2)" },
    { cx: 900, cy: 60, color: "rgba(242,201,76,0.16)" },
    { cx: 680, cy: 360, color: "rgba(111,207,74,0.16)" },
    { cx: 400, cy: 560, color: "rgba(45,156,255,0.18)" },
  ],
  b: [
    { cx: 100, cy: 100, color: "rgba(45,156,255,0.2)" },
    { cx: 440, cy: 220, color: "rgba(111,207,74,0.18)" },
    { cx: 1200, cy: 80, color: "rgba(242,201,76,0.16)" },
    { cx: 400, cy: 350, color: "rgba(111,207,74,0.15)" },
    { cx: 560, cy: 140, color: "rgba(45,156,255,0.18)" },
  ],
  c: [
    { cx: 50, cy: 200, color: "rgba(45,156,255,0.2)" },
    { cx: 300, cy: 120, color: "rgba(111,207,74,0.18)" },
    { cx: 800, cy: 280, color: "rgba(45,156,255,0.18)" },
    { cx: 520, cy: 460, color: "rgba(242,201,76,0.15)" },
    { cx: 940, cy: 560, color: "rgba(111,207,74,0.16)" },
  ],
  d: [
    { cx: 80, cy: 60, color: "rgba(111,207,74,0.18)" },
    { cx: 340, cy: 140, color: "rgba(45,156,255,0.2)" },
    { cx: 1000, cy: 240, color: "rgba(45,156,255,0.18)" },
    { cx: 500, cy: 400, color: "rgba(242,201,76,0.15)" },
    { cx: 760, cy: 330, color: "rgba(111,207,74,0.16)" },
  ],
};

/** Soft neural / data-flow connection lines behind content (not PCB) */
export default function CircuitLines({ variant = "a" }: CircuitLinesProps) {
  const paths = PATHS[variant];
  const nodes = NODES[variant];

  return (
    <div className="tech-bg-layer tech-bg-circuits" aria-hidden="true">
      <svg
        className="tech-circuit-svg"
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Soft connection paths */}
        {paths.map((path, i) => (
          <path
            key={i}
            d={path.d}
            stroke={path.color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        ))}

        {/* Glowing nodes */}
        {nodes.map((node, i) => (
          <g key={`n-${i}`}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={10}
              fill={node.color}
              opacity="0.12"
            />
            <circle cx={node.cx} cy={node.cy} r={node.r ?? 2.5} fill={node.color} />
          </g>
        ))}
      </svg>
    </div>
  );
}
