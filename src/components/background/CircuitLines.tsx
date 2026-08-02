"use client";

type CircuitVariant = "a" | "b" | "c" | "d";

interface CircuitLinesProps {
  variant?: CircuitVariant;
}

const PATHS: Record<CircuitVariant, { d: string; color: string; delay: string }[]> = {
  a: [
    { d: "M40 80 H180 V160 H320 V240 H460 V120 H620", color: "rgba(59,130,246,0.16)", delay: "0s" },
    { d: "M80 320 H200 V400 H360 V280 H520 V380 H700", color: "rgba(56,189,248,0.14)", delay: "2s" },
    { d: "M900 60 V180 H760 V300 H640 V200 H500", color: "rgba(99,102,241,0.13)", delay: "4s" },
    { d: "M1100 400 H960 V280 H820 V360 H680", color: "rgba(34,197,94,0.11)", delay: "1s" },
    { d: "M200 500 H280 V560 H400 V480 H520", color: "rgba(139,92,246,0.12)", delay: "3s" },
  ],
  b: [
    { d: "M100 100 H280 V220 H440 V140 H600 V300", color: "rgba(56,189,248,0.15)", delay: "0s" },
    { d: "M1200 80 V200 H1050 V320 H900 V180", color: "rgba(139,92,246,0.13)", delay: "3s" },
    { d: "M60 450 H220 V350 H400 V480 H580", color: "rgba(59,130,246,0.14)", delay: "5s" },
    { d: "M700 420 H860 V300 H1020 V400", color: "rgba(34,197,94,0.10)", delay: "1.5s" },
    { d: "M480 60 V140 H560 V220 H640", color: "rgba(99,102,241,0.12)", delay: "2.5s" },
  ],
  c: [
    { d: "M50 200 H160 V120 H300 V260 H450", color: "rgba(99,102,241,0.15)", delay: "0s" },
    { d: "M1100 150 H950 V280 H800 V160 H650", color: "rgba(59,130,246,0.14)", delay: "2.5s" },
    { d: "M200 500 H360 V380 H520 V460 H700", color: "rgba(56,189,248,0.13)", delay: "4s" },
    { d: "M820 480 H940 V560 H1080", color: "rgba(34,197,94,0.10)", delay: "1s" },
  ],
  d: [
    { d: "M80 60 H200 V140 H340 V80 H500 V200", color: "rgba(34,197,94,0.12)", delay: "0s" },
    { d: "M1150 100 V240 H1000 V160 H860 V300", color: "rgba(59,130,246,0.15)", delay: "3s" },
    { d: "M40 380 H180 V480 H340 V400 H500", color: "rgba(139,92,246,0.12)", delay: "1s" },
    { d: "M600 450 H760 V330 H920 V420 H1100", color: "rgba(56,189,248,0.13)", delay: "6s" },
  ],
};

const NODES: Record<CircuitVariant, { cx: number; cy: number; color: string; r?: number }[]> = {
  a: [
    { cx: 40, cy: 80, color: "rgba(59,130,246,0.40)" },
    { cx: 320, cy: 240, color: "rgba(56,189,248,0.35)" },
    { cx: 620, cy: 120, color: "rgba(99,102,241,0.32)" },
    { cx: 900, cy: 60, color: "rgba(59,130,246,0.36)" },
    { cx: 680, cy: 360, color: "rgba(34,197,94,0.28)" },
    { cx: 400, cy: 560, color: "rgba(139,92,246,0.30)" },
  ],
  b: [
    { cx: 100, cy: 100, color: "rgba(56,189,248,0.36)" },
    { cx: 440, cy: 220, color: "rgba(59,130,246,0.32)" },
    { cx: 1200, cy: 80, color: "rgba(139,92,246,0.34)" },
    { cx: 400, cy: 350, color: "rgba(34,197,94,0.26)" },
    { cx: 560, cy: 140, color: "rgba(99,102,241,0.30)" },
  ],
  c: [
    { cx: 50, cy: 200, color: "rgba(99,102,241,0.34)" },
    { cx: 300, cy: 120, color: "rgba(59,130,246,0.32)" },
    { cx: 800, cy: 280, color: "rgba(56,189,248,0.30)" },
    { cx: 520, cy: 460, color: "rgba(34,197,94,0.26)" },
    { cx: 940, cy: 560, color: "rgba(139,92,246,0.28)" },
  ],
  d: [
    { cx: 80, cy: 60, color: "rgba(34,197,94,0.32)" },
    { cx: 340, cy: 140, color: "rgba(59,130,246,0.34)" },
    { cx: 1000, cy: 240, color: "rgba(56,189,248,0.30)" },
    { cx: 500, cy: 400, color: "rgba(139,92,246,0.28)" },
    { cx: 760, cy: 330, color: "rgba(99,102,241,0.30)" },
  ],
};

/** Subtle PCB / motherboard circuit traces behind content */
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
        {/* Faint board grid */}
        <g className="tech-circuit-grid" opacity="0.045">
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`vg-${i}`}
              x1={80 * i}
              y1="0"
              x2={80 * i}
              y2="720"
              stroke="rgba(56,189,248,1)"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`hg-${i}`}
              x1="0"
              y1={72 * i}
              x2="1280"
              y2={72 * i}
              stroke="rgba(99,102,241,1)"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Trace paths */}
        {paths.map((path, i) => (
          <path
            key={i}
            d={path.d}
            stroke={path.color}
            strokeWidth="1.35"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="tech-anim-pulse-stroke"
            style={{ animationDelay: path.delay }}
          />
        ))}

        {/* Pads / vias */}
        {nodes.map((node, i) => (
          <g
            key={`n-${i}`}
            className="tech-anim-pulse-node"
            style={{ animationDelay: `${i * 1.1}s` }}
          >
            <circle cx={node.cx} cy={node.cy} r={node.r ?? 3} fill={node.color} />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={8}
              fill="none"
              stroke={node.color}
              strokeWidth="0.75"
              opacity="0.45"
            />
            <rect
              x={node.cx - 5}
              y={node.cy - 5}
              width="10"
              height="10"
              rx="1"
              fill="none"
              stroke={node.color}
              strokeWidth="0.5"
              opacity="0.25"
            />
          </g>
        ))}

        {/* Chip footprint accents */}
        <g className="tech-circuit-chips" opacity="0.1">
          <rect x="180" y="200" width="48" height="36" rx="2" stroke="rgba(59,130,246,1)" strokeWidth="1" fill="none" />
          <rect x="980" y="340" width="56" height="40" rx="2" stroke="rgba(56,189,248,1)" strokeWidth="1" fill="none" />
          <rect x="520" y="500" width="40" height="28" rx="2" stroke="rgba(139,92,246,1)" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
}
