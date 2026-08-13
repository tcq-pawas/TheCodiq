"use client";

type CloudVariant = "a" | "b" | "c" | "d";

interface CloudStructuresProps {
  variant?: CloudVariant;
}

interface CloudDef {
  x: string;
  y: string;
  w: number;
  h: number;
  delay: string;
  duration: string;
  tone: "blue" | "cyan" | "indigo" | "purple" | "emerald";
  label?: string;
}

const CLOUDS: Record<CloudVariant, CloudDef[]> = {
  a: [
    { x: "6%", y: "8%", w: 220, h: 110, delay: "0s", duration: "36s", tone: "blue", label: "edge" },
    { x: "72%", y: "6%", w: 260, h: 130, delay: "4s", duration: "42s", tone: "cyan", label: "cdn" },
    { x: "8%", y: "70%", w: 200, h: 100, delay: "8s", duration: "38s", tone: "indigo" },
    { x: "68%", y: "72%", w: 240, h: 120, delay: "2s", duration: "40s", tone: "purple", label: "api" },
    { x: "40%", y: "42%", w: 160, h: 80, delay: "6s", duration: "44s", tone: "emerald" },
  ],
  b: [
    { x: "4%", y: "12%", w: 240, h: 120, delay: "0s", duration: "38s", tone: "cyan", label: "region" },
    { x: "70%", y: "14%", w: 210, h: 105, delay: "5s", duration: "40s", tone: "blue" },
    { x: "10%", y: "68%", w: 230, h: 115, delay: "3s", duration: "42s", tone: "emerald", label: "storage" },
    { x: "74%", y: "66%", w: 190, h: 95, delay: "7s", duration: "36s", tone: "indigo" },
    { x: "45%", y: "38%", w: 150, h: 75, delay: "10s", duration: "46s", tone: "purple" },
  ],
  c: [
    { x: "8%", y: "6%", w: 200, h: 100, delay: "0s", duration: "36s", tone: "indigo", label: "k8s" },
    { x: "68%", y: "10%", w: 250, h: 125, delay: "4s", duration: "40s", tone: "purple", label: "ai" },
    { x: "5%", y: "65%", w: 220, h: 110, delay: "8s", duration: "44s", tone: "blue" },
    { x: "70%", y: "70%", w: 210, h: 105, delay: "2s", duration: "38s", tone: "cyan", label: "queue" },
    { x: "38%", y: "45%", w: 170, h: 85, delay: "6s", duration: "48s", tone: "emerald" },
  ],
  d: [
    { x: "5%", y: "10%", w: 230, h: 115, delay: "0s", duration: "40s", tone: "emerald", label: "edge" },
    { x: "74%", y: "8%", w: 200, h: 100, delay: "4s", duration: "36s", tone: "blue" },
    { x: "6%", y: "68%", w: 210, h: 105, delay: "7s", duration: "42s", tone: "cyan", label: "db" },
    { x: "66%", y: "64%", w: 250, h: 125, delay: "3s", duration: "46s", tone: "indigo", label: "workers" },
    { x: "42%", y: "40%", w: 155, h: 78, delay: "9s", duration: "38s", tone: "purple" },
  ],
};

const TONE_FILL: Record<CloudDef["tone"], string> = {
  blue: "rgba(45,156,255,0.08)",
  cyan: "rgba(45,156,255,0.08)",
  indigo: "rgba(45,156,255,0.08)",
  purple: "rgba(242,201,76,0.08)",
  emerald: "rgba(111,207,74,0.07)",
};

const TONE_STROKE: Record<CloudDef["tone"], string> = {
  blue: "rgba(45,156,255,0.16)",
  cyan: "rgba(45,156,255,0.16)",
  indigo: "rgba(45,156,255,0.15)",
  purple: "rgba(242,201,76,0.15)",
  emerald: "rgba(111,207,74,0.14)",
};

function CloudShape({ tone }: { tone: CloudDef["tone"] }) {
  return (
    <svg viewBox="0 0 200 100" className="dev-cloud__svg" aria-hidden="true">
      <ellipse cx="70" cy="62" rx="42" ry="28" fill={TONE_FILL[tone]} />
      <ellipse cx="110" cy="55" rx="50" ry="34" fill={TONE_FILL[tone]} />
      <ellipse cx="145" cy="64" rx="36" ry="24" fill={TONE_FILL[tone]} />
      <ellipse cx="95" cy="42" rx="38" ry="30" fill={TONE_FILL[tone]} />
      <path
        d="M40 68 C40 52 55 40 72 40 C78 28 95 22 112 28 C122 18 142 20 150 34 C168 34 180 48 178 62 C178 78 162 88 145 88 H55 C42 88 40 76 40 68 Z"
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth="1"
      />
      <circle cx="80" cy="55" r="2.2" fill={TONE_STROKE[tone]} opacity="0.55" />
      <circle cx="110" cy="48" r="2.2" fill={TONE_STROKE[tone]} opacity="0.55" />
      <circle cx="135" cy="58" r="2.2" fill={TONE_STROKE[tone]} opacity="0.5" />
      <line
        x1="80"
        y1="55"
        x2="110"
        y2="48"
        stroke={TONE_STROKE[tone]}
        strokeWidth="0.7"
        opacity="0.4"
      />
      <line
        x1="110"
        y1="48"
        x2="135"
        y2="58"
        stroke={TONE_STROKE[tone]}
        strokeWidth="0.7"
        opacity="0.4"
      />
    </svg>
  );
}

export default function CloudStructures({ variant = "a" }: CloudStructuresProps) {
  const clouds = CLOUDS[variant].slice(0, 3);

  return (
    <div className="tech-bg-layer tech-bg-clouds" aria-hidden="true">
      <svg className="dev-cloud-links" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="18%"
          y1="18%"
          x2="78%"
          y2="16%"
          stroke="rgba(45,156,255,0.09)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.7"
        />
      </svg>

      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`dev-cloud dev-cloud--${cloud.tone}`}
          style={{
            left: cloud.x,
            top: cloud.y,
            width: cloud.w,
            height: cloud.h,
            opacity: 0.08,
          }}
        >
          <CloudShape tone={cloud.tone} />
          {cloud.label && <span className="dev-cloud__label">{cloud.label}</span>}
        </div>
      ))}
    </div>
  );
}
