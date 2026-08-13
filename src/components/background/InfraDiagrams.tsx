"use client";

type InfraVariant = "a" | "b" | "c" | "d";

interface InfraDiagramsProps {
  variant?: InfraVariant;
}

/**
 * Lightweight holographic infra diagrams:
 * DB cylinders, git branches, lock nodes, pipeline stages, containers.
 * Pure SVG transforms — no filters / blur.
 */
export default function InfraDiagrams({ variant = "a" }: InfraDiagramsProps) {
  return (
    <div className="tech-bg-layer tech-bg-infra" aria-hidden="true">
      <svg
        className="tech-infra-svg"
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant === "a" && <HeroInfra />}
        {variant === "b" && <CircuitInfra />}
        {variant === "c" && <ServicesInfra />}
        {variant === "d" && <SecureInfra />}
      </svg>
    </div>
  );
}

function DbCylinder({
  x,
  y,
  color = "rgba(45,156,255,0.55)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      <ellipse cx={x} cy={y} rx="22" ry="8" stroke={color} strokeWidth="1" fill="rgba(45,156,255,0.04)" />
      <path d={`M${x - 22} ${y} V${y + 36}`} stroke={color} strokeWidth="1" />
      <path d={`M${x + 22} ${y} V${y + 36}`} stroke={color} strokeWidth="1" />
      <ellipse cx={x} cy={y + 36} rx="22" ry="8" stroke={color} strokeWidth="1" fill="none" />
      <ellipse cx={x} cy={y + 12} rx="22" ry="8" stroke={color} strokeWidth="0.6" opacity="0.45" />
    </g>
  );
}

function GitBranch({
  x,
  y,
  color = "rgba(111,207,74,0.55)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      <circle cx={x} cy={y} r="4" fill={color} />
      <circle cx={x} cy={y + 40} r="4" fill={color} />
      <circle cx={x + 28} cy={y + 20} r="4" fill={color} />
      <path d={`M${x} ${y + 4} V${y + 36}`} stroke={color} strokeWidth="1.2" />
      <path
        d={`M${x} ${y + 16} C${x} ${y + 16}, ${x + 28} ${y + 16}, ${x + 28} ${y + 20}`}
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
    </g>
  );
}

function LockNode({
  x,
  y,
  color = "rgba(242,201,76,0.5)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      <rect x={x - 10} y={y} width="20" height="16" rx="2" stroke={color} strokeWidth="1" fill="rgba(242,201,76,0.04)" />
      <path
        d={`M${x - 6} ${y} V${y - 8} C${x - 6} ${y - 14}, ${x + 6} ${y - 14}, ${x + 6} ${y - 8} V${y}`}
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <circle cx={x} cy={y + 8} r="2" fill={color} />
    </g>
  );
}

function Pipeline({
  x,
  y,
  color = "rgba(45,156,255,0.5)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  const stages = [0, 36, 72, 108];
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      {stages.map((dx, i) => (
        <g key={i}>
          <rect
            x={x + dx}
            y={y}
            width="24"
            height="14"
            rx="2"
            stroke={color}
            strokeWidth="1"
            fill="rgba(45,156,255,0.04)"
          />
          {i < stages.length - 1 && (
            <path
              d={`M${x + dx + 24} ${y + 7} H${x + stages[i + 1]}`}
              stroke={color}
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          )}
        </g>
      ))}
    </g>
  );
}

function ContainerBox({
  x,
  y,
  color = "rgba(45,156,255,0.5)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      <rect x={x} y={y} width="36" height="28" rx="3" stroke={color} strokeWidth="1" fill="rgba(45,156,255,0.04)" />
      <path d={`M${x} ${y + 8} H${x + 36}`} stroke={color} strokeWidth="0.7" opacity="0.6" />
      <circle cx={x + 8} cy={y + 4} r="1.5" fill={color} />
      <circle cx={x + 14} cy={y + 4} r="1.5" fill={color} opacity="0.7" />
    </g>
  );
}

function ServerRack({
  x,
  y,
  color = "rgba(111,207,74,0.5)",
  delay = "0s",
}: {
  x: number;
  y: number;
  color?: string;
  delay?: string;
}) {
  return (
    <g className="tech-anim-infra-float" style={{ animationDelay: delay, transformOrigin: `${x}px ${y}px` }}>
      <rect x={x} y={y} width="28" height="48" rx="2" stroke={color} strokeWidth="1" fill="rgba(111,207,74,0.04)" />
      <path d={`M${x + 4} ${y + 10} H${x + 24}`} stroke={color} strokeWidth="1" />
      <path d={`M${x + 4} ${y + 20} H${x + 24}`} stroke={color} strokeWidth="1" />
      <path d={`M${x + 4} ${y + 30} H${x + 24}`} stroke={color} strokeWidth="1" />
      <circle cx={x + 22} cy={y + 40} r="2" fill={color} className="tech-anim-pulse-node" />
    </g>
  );
}

function HeroInfra() {
  return (
    <>
      <DbCylinder x={140} y={480} delay="0s" />
      <DbCylinder x={220} y={520} color="rgba(111,207,74,0.5)" delay="6s" />
      <GitBranch x={1080} y={100} delay="3s" />
      <Pipeline x={980} y={520} delay="8s" />
      <ContainerBox x={80} y={120} delay="4s" />
      <ContainerBox x={130} y={160} color="rgba(242,201,76,0.45)" delay="10s" />
      <ServerRack x={1180} y={300} delay="5s" />
      <LockNode x={640} y={80} delay="12s" />
    </>
  );
}

function CircuitInfra() {
  return (
    <>
      <ServerRack x={80} y={100} delay="0s" />
      <ServerRack x={130} y={140} color="rgba(45,156,255,0.5)" delay="7s" />
      <Pipeline x={900} y={80} delay="4s" />
      <GitBranch x={100} y={500} delay="2s" />
      <GitBranch x={160} y={560} color="rgba(45,156,255,0.5)" delay="9s" />
      <DbCylinder x={1100} y={480} delay="5s" />
      <LockNode x={600} y={620} delay="11s" />
    </>
  );
}

function ServicesInfra() {
  return (
    <>
      <ContainerBox x={60} y={200} delay="0s" />
      <ContainerBox x={110} y={250} delay="5s" />
      <ContainerBox x={70} y={300} color="rgba(111,207,74,0.45)" delay="10s" />
      <Pipeline x={980} y={140} delay="3s" />
      <Pipeline x={1020} y={500} color="rgba(111,207,74,0.45)" delay="8s" />
      <DbCylinder x={200} y={520} delay="6s" />
      <ServerRack x={1160} y={320} delay="4s" />
    </>
  );
}

function SecureInfra() {
  return (
    <>
      <LockNode x={120} y={160} delay="0s" />
      <LockNode x={180} y={220} color="rgba(45,156,255,0.5)" delay="5s" />
      <LockNode x={1100} y={140} delay="2s" />
      <LockNode x={1160} y={200} color="rgba(111,207,74,0.5)" delay="8s" />
      <LockNode x={200} y={520} delay="4s" />
      <LockNode x={1080} y={540} delay="10s" />
      <DbCylinder x={640} y={80} color="rgba(242,201,76,0.45)" delay="6s" />
      <GitBranch x={600} y={560} delay="12s" />
      {/* Connection web between locks */}
      <line x1="120" y1="160" x2="180" y2="220" stroke="rgba(242,201,76,0.35)" strokeWidth="0.8" strokeDasharray="3 5" className="tech-anim-pulse-stroke" />
      <line x1="1100" y1="140" x2="1160" y2="200" stroke="rgba(45,156,255,0.35)" strokeWidth="0.8" strokeDasharray="3 5" className="tech-anim-pulse-stroke" />
      <line x1="200" y1="520" x2="600" y2="560" stroke="rgba(111,207,74,0.3)" strokeWidth="0.8" strokeDasharray="3 5" className="tech-anim-pulse-stroke" />
    </>
  );
}
