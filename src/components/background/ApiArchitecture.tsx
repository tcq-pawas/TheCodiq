"use client";

type GraphVariant = "a" | "b" | "c" | "d";

interface ApiArchitectureProps {
  variant?: GraphVariant;
}

interface NodeDef {
  x: string;
  y: string;
  label: string;
  delay: string;
  duration: string;
  tone: "blue" | "cyan" | "indigo" | "emerald" | "purple";
}

interface EdgeDef {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  color: string;
}

const LAYOUTS: Record<GraphVariant, { nodes: NodeDef[]; edges: EdgeDef[] }> = {
  a: {
    nodes: [
      { x: "14%", y: "28%", label: "Client", delay: "0s", duration: "14s", tone: "cyan" },
      { x: "28%", y: "42%", label: "API", delay: "1s", duration: "12s", tone: "blue" },
      { x: "18%", y: "58%", label: "Auth", delay: "2s", duration: "15s", tone: "indigo" },
      { x: "82%", y: "30%", label: "Edge", delay: "0.5s", duration: "13s", tone: "purple" },
      { x: "90%", y: "48%", label: "CDN", delay: "2.5s", duration: "16s", tone: "cyan" },
      { x: "76%", y: "62%", label: "DB", delay: "1.5s", duration: "14s", tone: "emerald" },
    ],
    edges: [
      { x1: "14%", y1: "28%", x2: "28%", y2: "42%", color: "rgba(56,189,248,0.12)" },
      { x1: "28%", y1: "42%", x2: "18%", y2: "58%", color: "rgba(99,102,241,0.10)" },
      { x1: "82%", y1: "30%", x2: "90%", y2: "48%", color: "rgba(139,92,246,0.11)" },
      { x1: "90%", y1: "48%", x2: "76%", y2: "62%", color: "rgba(34,197,94,0.10)" },
      { x1: "28%", y1: "42%", x2: "82%", y2: "30%", color: "rgba(59,130,246,0.08)" },
    ],
  },
  b: {
    nodes: [
      { x: "10%", y: "35%", label: "App", delay: "0s", duration: "13s", tone: "blue" },
      { x: "22%", y: "50%", label: "GraphQL", delay: "1.5s", duration: "15s", tone: "purple" },
      { x: "12%", y: "65%", label: "Cache", delay: "3s", duration: "12s", tone: "cyan" },
      { x: "86%", y: "22%", label: "Worker", delay: "0.5s", duration: "14s", tone: "indigo" },
      { x: "92%", y: "40%", label: "Queue", delay: "2s", duration: "16s", tone: "emerald" },
      { x: "80%", y: "72%", label: "S3", delay: "4s", duration: "11s", tone: "blue" },
    ],
    edges: [
      { x1: "10%", y1: "35%", x2: "22%", y2: "50%", color: "rgba(59,130,246,0.11)" },
      { x1: "22%", y1: "50%", x2: "12%", y2: "65%", color: "rgba(56,189,248,0.10)" },
      { x1: "86%", y1: "22%", x2: "92%", y2: "40%", color: "rgba(99,102,241,0.10)" },
      { x1: "92%", y1: "40%", x2: "80%", y2: "72%", color: "rgba(34,197,94,0.09)" },
    ],
  },
  c: {
    nodes: [
      { x: "12%", y: "24%", label: "Web", delay: "0s", duration: "14s", tone: "cyan" },
      { x: "24%", y: "38%", label: "BFF", delay: "1s", duration: "12s", tone: "blue" },
      { x: "16%", y: "72%", label: "Redis", delay: "2.5s", duration: "15s", tone: "emerald" },
      { x: "84%", y: "26%", label: "AI", delay: "0.8s", duration: "13s", tone: "purple" },
      { x: "88%", y: "55%", label: "Vector", delay: "3s", duration: "16s", tone: "indigo" },
      { x: "72%", y: "78%", label: "Logs", delay: "1.8s", duration: "14s", tone: "cyan" },
    ],
    edges: [
      { x1: "12%", y1: "24%", x2: "24%", y2: "38%", color: "rgba(56,189,248,0.11)" },
      { x1: "24%", y1: "38%", x2: "16%", y2: "72%", color: "rgba(34,197,94,0.09)" },
      { x1: "84%", y1: "26%", x2: "88%", y2: "55%", color: "rgba(139,92,246,0.11)" },
      { x1: "88%", y1: "55%", x2: "72%", y2: "78%", color: "rgba(99,102,241,0.09)" },
      { x1: "24%", y1: "38%", x2: "84%", y2: "26%", color: "rgba(59,130,246,0.07)" },
    ],
  },
  d: {
    nodes: [
      { x: "8%", y: "40%", label: "SDK", delay: "0s", duration: "13s", tone: "blue" },
      { x: "20%", y: "28%", label: "Gateway", delay: "1s", duration: "15s", tone: "cyan" },
      { x: "18%", y: "58%", label: "Service", delay: "2s", duration: "12s", tone: "indigo" },
      { x: "88%", y: "24%", label: "K8s", delay: "0.5s", duration: "14s", tone: "emerald" },
      { x: "92%", y: "48%", label: "Pod", delay: "2.5s", duration: "16s", tone: "purple" },
      { x: "78%", y: "70%", label: "Metric", delay: "3.5s", duration: "11s", tone: "blue" },
    ],
    edges: [
      { x1: "8%", y1: "40%", x2: "20%", y2: "28%", color: "rgba(56,189,248,0.11)" },
      { x1: "20%", y1: "28%", x2: "18%", y2: "58%", color: "rgba(99,102,241,0.10)" },
      { x1: "88%", y1: "24%", x2: "92%", y2: "48%", color: "rgba(34,197,94,0.10)" },
      { x1: "92%", y1: "48%", x2: "78%", y2: "70%", color: "rgba(139,92,246,0.09)" },
    ],
  },
};

export default function ApiArchitecture({ variant = "a" }: ApiArchitectureProps) {
  const { nodes, edges } = LAYOUTS[variant];

  return (
    <div className="tech-bg-layer tech-bg-api" aria-hidden="true">
      <svg className="tech-api-svg" xmlns="http://www.w3.org/2000/svg">
        {edges.map((edge, i) => (
          <line
            key={`e-${i}`}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke={edge.color}
            strokeWidth="1"
            strokeDasharray="4 6"
            className="tech-anim-pulse-stroke"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </svg>
      <div className="tech-api-nodes">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`dev-api-node dev-api-node--${node.tone} tech-anim-float-micro`}
            style={{
              left: node.x,
              top: node.y,
              animationDelay: node.delay,
              animationDuration: node.duration,
            }}
          >
            <span className="dev-api-node__dot" />
            <span className="dev-api-node__label">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
