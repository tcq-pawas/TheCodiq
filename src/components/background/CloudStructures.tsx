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
    { x: "6%", y: "8%", w: 220, h: 110, delay: "0s", duration: "18s", tone: "blue", label: "edge" },
    { x: "72%", y: "6%", w: 260, h: 130, delay: "2s", duration: "20s", tone: "cyan", label: "cdn" },
    { x: "8%", y: "70%", w: 200, h: 100, delay: "4s", duration: "16s", tone: "indigo" },
    { x: "68%", y: "72%", w: 240, h: 120, delay: "1s", duration: "19s", tone: "purple", label: "api" },
    { x: "40%", y: "42%", w: 160, h: 80, delay: "3s", duration: "17s", tone: "emerald" },
  ],
  b: [
    { x: "4%", y: "12%", w: 240, h: 120, delay: "0s", duration: "17s", tone: "cyan", label: "region" },
    { x: "70%", y: "14%", w: 210, h: 105, delay: "2.5s", duration: "19s", tone: "blue" },
    { x: "10%", y: "68%", w: 230, h: 115, delay: "1.5s", duration: "18s", tone: "emerald", label: "storage" },
    { x: "74%", y: "66%", w: 190, h: 95, delay: "3.5s", duration: "16s", tone: "indigo" },
    { x: "45%", y: "38%", w: 150, h: 75, delay: "5s", duration: "20s", tone: "purple" },
  ],
  c: [
    { x: "8%", y: "6%", w: 200, h: 100, delay: "0s", duration: "16s", tone: "indigo", label: "k8s" },
    { x: "68%", y: "10%", w: 250, h: 125, delay: "2s", duration: "18s", tone: "purple", label: "ai" },
    { x: "5%", y: "65%", w: 220, h: 110, delay: "4s", duration: "19s", tone: "blue" },
    { x: "70%", y: "70%", w: 210, h: 105, delay: "1s", duration: "17s", tone: "cyan", label: "queue" },
    { x: "38%", y: "45%", w: 170, h: 85, delay: "3s", duration: "21s", tone: "emerald" },
  ],
  d: [
    { x: "5%", y: "10%", w: 230, h: 115, delay: "0s", duration: "18s", tone: "emerald", label: "edge" },
    { x: "74%", y: "8%", w: 200, h: 100, delay: "2s", duration: "16s", tone: "blue" },
    { x: "6%", y: "68%", w: 210, h: 105, delay: "3.5s", duration: "19s", tone: "cyan", label: "db" },
    { x: "66%", y: "64%", w: 250, h: 125, delay: "1.5s", duration: "20s", tone: "indigo", label: "workers" },
    { x: "42%", y: "40%", w: 155, h: 78, delay: "4.5s", duration: "17s", tone: "purple" },
  ],
};

const TONE_FILL: Record<CloudDef["tone"], string> = {
  blue: "rgba(59,130,246,0.08)",
  cyan: "rgba(56,189,248,0.08)",
  indigo: "rgba(99,102,241,0.08)",
  purple: "rgba(139,92,246,0.08)",
  emerald: "rgba(34,197,94,0.07)",
};

const TONE_STROKE: Record<CloudDef["tone"], string> = {
  blue: "rgba(59,130,246,0.16)",
  cyan: "rgba(56,189,248,0.16)",
  indigo: "rgba(99,102,241,0.15)",
  purple: "rgba(139,92,246,0.15)",
  emerald: "rgba(34,197,94,0.14)",
};

function CloudShape({ tone, id }: { tone: CloudDef["tone"]; id: string }) {
  return (
    <svg viewBox="0 0 200 100" className="dev-cloud__svg" aria-hidden="true">
      <defs>
        <filter id={id} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>
      <ellipse cx="70" cy="62" rx="42" ry="28" fill={TONE_FILL[tone]} />
      <ellipse cx="110" cy="55" rx="50" ry="34" fill={TONE_FILL[tone]} />
      <ellipse cx="145" cy="64" rx="36" ry="24" fill={TONE_FILL[tone]} />
      <ellipse cx="95" cy="42" rx="38" ry="30" fill={TONE_FILL[tone]} />
      <path
        d="M40 68 C40 52 55 40 72 40 C78 28 95 22 112 28 C122 18 142 20 150 34 C168 34 180 48 178 62 C178 78 162 88 145 88 H55 C42 88 40 76 40 68 Z"
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth="1"
        filter={`url(#${id})`}
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
  const clouds = CLOUDS[variant];

  return (
    <div className="tech-bg-layer tech-bg-clouds" aria-hidden="true">
      <svg className="dev-cloud-links" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="18%"
          y1="18%"
          x2="78%"
          y2="16%"
          stroke="rgba(56,189,248,0.09)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="tech-anim-pulse-stroke"
        />
        <line
          x1="16%"
          y1="78%"
          x2="80%"
          y2="78%"
          stroke="rgba(99,102,241,0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="tech-anim-pulse-stroke"
          style={{ animationDelay: "3s" }}
        />
        <line
          x1="20%"
          y1="28%"
          x2="22%"
          y2="72%"
          stroke="rgba(59,130,246,0.07)"
          strokeWidth="1"
          strokeDasharray="3 7"
          className="tech-anim-pulse-stroke"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>

      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`dev-cloud tech-anim-cloud-float dev-cloud--${cloud.tone}`}
          style={{
            left: cloud.x,
            top: cloud.y,
            width: cloud.w,
            height: cloud.h,
            animationDelay: cloud.delay,
            animationDuration: cloud.duration,
          }}
        >
          <CloudShape tone={cloud.tone} id={`cloud-f-${variant}-${i}`} />
          {cloud.label && <span className="dev-cloud__label">{cloud.label}</span>}
        </div>
      ))}
    </div>
  );
}
