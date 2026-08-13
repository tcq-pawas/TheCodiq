"use client";

import type { CSSProperties } from "react";

type StructureVariant = "a" | "b" | "c" | "d";

interface SoftwareStructuresProps {
  variant?: StructureVariant;
}

interface NodeSpec {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  kind: "svc" | "api" | "db" | "cloud" | "ci" | "ai" | "git" | "secure";
  depth: number;
}

interface LinkSpec {
  from: string;
  to: string;
}

const LAYOUTS: Record<StructureVariant, { nodes: NodeSpec[]; links: LinkSpec[] }> = {
  a: {
    nodes: [
      { id: "client", label: "Client", sub: "Web / App", x: 12, y: 24, kind: "api", depth: 40 },
      { id: "gw", label: "API Gateway", sub: "/v1/*", x: 32, y: 40, kind: "api", depth: 28 },
      { id: "svc-a", label: "Users", sub: "microservice", x: 54, y: 28, kind: "svc", depth: 36 },
      { id: "ai", label: "AI Engine", sub: "inference", x: 76, y: 30, kind: "ai", depth: 48 },
      { id: "db", label: "Postgres", sub: "primary", x: 68, y: 62, kind: "db", depth: 32 },
      { id: "cdn", label: "Edge CDN", sub: "cache", x: 88, y: 52, kind: "cloud", depth: 44 },
    ],
    links: [
      { from: "client", to: "gw" },
      { from: "gw", to: "svc-a" },
      { from: "svc-a", to: "ai" },
      { from: "svc-a", to: "db" },
      { from: "ai", to: "cdn" },
    ],
  },
  b: {
    nodes: [
      { id: "repo", label: "Git", sub: "main · PR", x: 14, y: 30, kind: "git", depth: 40 },
      { id: "ci", label: "CI Pipeline", sub: "build · test", x: 36, y: 42, kind: "ci", depth: 30 },
      { id: "k8s", label: "Kubernetes", sub: "cluster", x: 62, y: 36, kind: "cloud", depth: 46 },
      { id: "pod-a", label: "Pod A", sub: "api", x: 84, y: 28, kind: "svc", depth: 34 },
      { id: "pod-b", label: "Pod B", sub: "worker", x: 86, y: 58, kind: "svc", depth: 42 },
      { id: "obs", label: "Observability", sub: "logs · metrics", x: 52, y: 68, kind: "api", depth: 28 },
    ],
    links: [
      { from: "repo", to: "ci" },
      { from: "ci", to: "k8s" },
      { from: "k8s", to: "pod-a" },
      { from: "k8s", to: "pod-b" },
      { from: "pod-a", to: "obs" },
    ],
  },
  c: {
    nodes: [
      { id: "fe", label: "Frontend", sub: "Next.js", x: 14, y: 28, kind: "svc", depth: 38 },
      { id: "bff", label: "BFF", sub: "GraphQL", x: 36, y: 42, kind: "api", depth: 30 },
      { id: "ms1", label: "Catalog", sub: "service", x: 58, y: 26, kind: "svc", depth: 42 },
      { id: "ms2", label: "Orders", sub: "service", x: 60, y: 54, kind: "svc", depth: 36 },
      { id: "queue", label: "Queue", sub: "events", x: 82, y: 40, kind: "ci", depth: 48 },
      { id: "redis", label: "Redis", sub: "cache", x: 40, y: 70, kind: "db", depth: 28 },
    ],
    links: [
      { from: "fe", to: "bff" },
      { from: "bff", to: "ms1" },
      { from: "bff", to: "ms2" },
      { from: "ms2", to: "queue" },
      { from: "bff", to: "redis" },
    ],
  },
  d: {
    nodes: [
      { id: "user", label: "User", sub: "session", x: 14, y: 36, kind: "api", depth: 38 },
      { id: "waf", label: "WAF", sub: "edge", x: 34, y: 28, kind: "secure", depth: 30 },
      { id: "idp", label: "IdP", sub: "SSO", x: 54, y: 42, kind: "secure", depth: 40 },
      { id: "vault", label: "Vault", sub: "secrets", x: 76, y: 28, kind: "secure", depth: 48 },
      { id: "app", label: "App Core", sub: "private", x: 88, y: 52, kind: "svc", depth: 32 },
      { id: "audit", label: "Audit Log", sub: "immutable", x: 62, y: 68, kind: "db", depth: 36 },
    ],
    links: [
      { from: "user", to: "waf" },
      { from: "waf", to: "idp" },
      { from: "idp", to: "vault" },
      { from: "idp", to: "app" },
      { from: "app", to: "audit" },
    ],
  },
};

function nodeById(nodes: NodeSpec[], id: string) {
  return nodes.find((n) => n.id === id);
}

export default function SoftwareStructures({ variant = "a" }: SoftwareStructuresProps) {
  const { nodes, links } = LAYOUTS[variant];

  return (
    <div className="tech-bg-layer tech-bg-structures" aria-hidden="true">
      <svg
        className="tech-structures-svg"
        xmlns="http://www.w3.org/2000/svg"
        data-parallax-extra="32"
      >
        {links.map((link, i) => {
          const a = nodeById(nodes, link.from);
          const b = nodeById(nodes, link.to);
          if (!a || !b) return null;
          return (
            <line
              key={`link-${i}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              className="tech-structure-link"
            />
          );
        })}
      </svg>

      <div className="tech-structure-nodes">
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`tech-structure-node tech-structure-node--${node.kind}`}
            data-parallax-node={node.depth}
            style={
              {
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate3d(-50%, -50%, 0)",
              } as CSSProperties
            }
          >
            <span className="tech-structure-node__glyph" />
            <span className="tech-structure-node__meta">
              <span className="tech-structure-node__label">{node.label}</span>
              {node.sub && <span className="tech-structure-node__sub">{node.sub}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
