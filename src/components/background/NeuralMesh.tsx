"use client";

type MeshVariant = "a" | "b" | "c" | "d";

interface NeuralMeshProps {
  variant?: MeshVariant;
}

/** Holographic AI neural / cloud-mesh diagrams — SVG only, no filters */
const MESH: Record<
  MeshVariant,
  {
    nodes: { cx: number; cy: number; r?: number }[];
    links: [number, number][];
    hexes?: { cx: number; cy: number; s: number }[];
  }
> = {
  a: {
    nodes: [
      { cx: 180, cy: 120 },
      { cx: 320, cy: 90 },
      { cx: 460, cy: 140 },
      { cx: 280, cy: 220 },
      { cx: 420, cy: 250 },
      { cx: 560, cy: 180 },
      { cx: 640, cy: 280 },
      { cx: 720, cy: 140 },
      { cx: 880, cy: 200 },
      { cx: 980, cy: 120 },
      { cx: 1040, cy: 280 },
      { cx: 200, cy: 360 },
      { cx: 360, cy: 400 },
      { cx: 520, cy: 380 },
      { cx: 760, cy: 420 },
      { cx: 920, cy: 360 },
    ],
    links: [
      [0, 1], [1, 2], [0, 3], [1, 3], [2, 4], [3, 4], [2, 5], [4, 5],
      [5, 6], [5, 7], [6, 7], [7, 8], [8, 9], [8, 10], [9, 10],
      [3, 11], [11, 12], [4, 12], [12, 13], [6, 13], [6, 14], [13, 14],
      [8, 15], [14, 15], [10, 15],
    ],
    hexes: [
      { cx: 1100, cy: 480, s: 28 },
      { cx: 1160, cy: 520, s: 22 },
      { cx: 1080, cy: 560, s: 18 },
    ],
  },
  b: {
    nodes: [
      { cx: 120, cy: 200 },
      { cx: 260, cy: 160 },
      { cx: 240, cy: 300 },
      { cx: 400, cy: 220 },
      { cx: 520, cy: 140 },
      { cx: 560, cy: 300 },
      { cx: 700, cy: 200 },
      { cx: 840, cy: 160 },
      { cx: 820, cy: 320 },
      { cx: 980, cy: 240 },
      { cx: 1100, cy: 180 },
      { cx: 1080, cy: 340 },
    ],
    links: [
      [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6],
      [6, 7], [6, 8], [7, 9], [8, 9], [9, 10], [9, 11], [10, 11],
    ],
    hexes: [
      { cx: 160, cy: 520, s: 24 },
      { cx: 220, cy: 560, s: 20 },
    ],
  },
  c: {
    nodes: [
      { cx: 200, cy: 100 },
      { cx: 340, cy: 160 },
      { cx: 480, cy: 100 },
      { cx: 420, cy: 260 },
      { cx: 600, cy: 200 },
      { cx: 740, cy: 120 },
      { cx: 780, cy: 280 },
      { cx: 940, cy: 180 },
      { cx: 300, cy: 400 },
      { cx: 500, cy: 440 },
      { cx: 700, cy: 400 },
      { cx: 900, cy: 460 },
    ],
    links: [
      [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 7],
      [6, 7], [3, 8], [8, 9], [4, 9], [6, 10], [9, 10], [10, 11], [7, 11],
    ],
  },
  d: {
    nodes: [
      { cx: 160, cy: 140 },
      { cx: 300, cy: 200 },
      { cx: 440, cy: 120 },
      { cx: 480, cy: 280 },
      { cx: 640, cy: 180 },
      { cx: 780, cy: 240 },
      { cx: 920, cy: 140 },
      { cx: 1000, cy: 300 },
      { cx: 240, cy: 380 },
      { cx: 560, cy: 420 },
      { cx: 860, cy: 400 },
    ],
    links: [
      [0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [5, 6], [5, 7],
      [1, 8], [3, 9], [5, 10], [8, 9], [9, 10], [7, 10],
    ],
    hexes: [
      { cx: 1140, cy: 520, s: 26 },
      { cx: 1200, cy: 560, s: 20 },
    ],
  },
};

function hexPath(cx: number, cy: number, s: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + s * Math.cos(a)},${cy + s * Math.sin(a)}`);
  }
  return `M${pts.join("L")}Z`;
}

export default function NeuralMesh({ variant = "a" }: NeuralMeshProps) {
  const { nodes, links, hexes = [] } = MESH[variant];

  return (
    <div className="tech-bg-layer tech-bg-neural" aria-hidden="true">
      <svg
        className="tech-neural-svg"
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {links.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          if (!n1 || !n2) return null;
          return (
            <line
              key={`l-${i}`}
              x1={n1.cx}
              y1={n1.cy}
              x2={n2.cx}
              y2={n2.cy}
              stroke={i % 3 === 0 ? "rgba(111,207,74,0.55)" : "rgba(45,156,255,0.55)"}
              strokeWidth="0.9"
              className="tech-anim-pulse-stroke"
              style={{ animationDelay: `${(i % 8) * 1.8}s`, animationDuration: "28s" }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g
            key={`n-${i}`}
            className="tech-anim-pulse-node"
            style={{ animationDelay: `${i * 1.4}s`, animationDuration: "22s" }}
          >
            <circle cx={n.cx} cy={n.cy} r={(n.r ?? 2.2) + 5} fill="rgba(45,156,255,0.12)" />
            <circle cx={n.cx} cy={n.cy} r={n.r ?? 2.2} fill="rgba(45,156,255,0.7)" />
          </g>
        ))}

        {hexes.map((h, i) => (
          <path
            key={`h-${i}`}
            d={hexPath(h.cx, h.cy, h.s)}
            stroke="rgba(45,156,255,0.5)"
            strokeWidth="1"
            fill="rgba(45,156,255,0.06)"
            className="tech-anim-pulse-stroke"
            style={{ animationDelay: `${i * 3}s`, animationDuration: "36s" }}
          />
        ))}

        {/* Packet dots drifting along mesh (CSS-driven via circles) */}
        <circle cx="280" cy="220" r="2" fill="rgba(242,201,76,0.55)" className="tech-anim-packet" />
        <circle cx="640" cy="280" r="2" fill="rgba(111,207,74,0.5)" className="tech-anim-packet" style={{ animationDelay: "8s" }} />
        <circle cx="920" cy="360" r="2" fill="rgba(45,156,255,0.55)" className="tech-anim-packet" style={{ animationDelay: "16s" }} />
      </svg>
    </div>
  );
}
