"use client";

import {
  Code2,
  Braces,
  Terminal,
  GitBranch,
  FileCode2,
  Binary,
  Brackets,
  Database,
  Server,
  Cpu,
  Cloud,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type IconVariant = "a" | "b" | "c" | "d";

interface CodingIconsProps {
  variant?: IconVariant;
}

interface IconDef {
  Icon: LucideIcon;
  x: string;
  y: string;
  size: number;
  delay: string;
  duration: string;
  color: string;
  rotate?: string;
}

const LAYOUTS: Record<IconVariant, IconDef[]> = {
  a: [
    { Icon: Code2, x: "18%", y: "22%", size: 28, delay: "0s", duration: "14s", color: "rgba(45,156,255,0.22)" },
    { Icon: Braces, x: "82%", y: "24%", size: 26, delay: "1.5s", duration: "16s", color: "rgba(242,201,76,0.20)", rotate: "8deg" },
    { Icon: Terminal, x: "14%", y: "58%", size: 24, delay: "2s", duration: "15s", color: "rgba(111,207,74,0.20)" },
    { Icon: GitBranch, x: "86%", y: "55%", size: 25, delay: "0.5s", duration: "17s", color: "rgba(45,156,255,0.20)", rotate: "-6deg" },
    { Icon: FileCode2, x: "48%", y: "18%", size: 22, delay: "3s", duration: "13s", color: "rgba(45,156,255,0.18)" },
    { Icon: Binary, x: "52%", y: "82%", size: 23, delay: "4s", duration: "18s", color: "rgba(45,156,255,0.16)" },
    { Icon: Brackets, x: "28%", y: "78%", size: 22, delay: "1s", duration: "14s", color: "rgba(45,156,255,0.18)", rotate: "4deg" },
    { Icon: Cloud, x: "70%", y: "42%", size: 30, delay: "2.5s", duration: "19s", color: "rgba(45,156,255,0.18)" },
  ],
  b: [
    { Icon: Terminal, x: "16%", y: "20%", size: 26, delay: "0s", duration: "15s", color: "rgba(111,207,74,0.22)" },
    { Icon: Code2, x: "80%", y: "18%", size: 28, delay: "2s", duration: "14s", color: "rgba(45,156,255,0.20)", rotate: "-5deg" },
    { Icon: Database, x: "12%", y: "62%", size: 24, delay: "1s", duration: "16s", color: "rgba(45,156,255,0.20)" },
    { Icon: Server, x: "84%", y: "60%", size: 25, delay: "3s", duration: "17s", color: "rgba(45,156,255,0.18)" },
    { Icon: Braces, x: "46%", y: "14%", size: 24, delay: "1.5s", duration: "13s", color: "rgba(242,201,76,0.20)" },
    { Icon: GitBranch, x: "50%", y: "80%", size: 22, delay: "4s", duration: "18s", color: "rgba(111,207,74,0.16)", rotate: "7deg" },
    { Icon: Cpu, x: "30%", y: "42%", size: 23, delay: "2.5s", duration: "15s", color: "rgba(45,156,255,0.17)" },
    { Icon: Cloud, x: "68%", y: "48%", size: 28, delay: "0.5s", duration: "19s", color: "rgba(45,156,255,0.18)" },
  ],
  c: [
    { Icon: FileCode2, x: "15%", y: "18%", size: 26, delay: "0s", duration: "14s", color: "rgba(45,156,255,0.22)" },
    { Icon: Brackets, x: "82%", y: "22%", size: 24, delay: "1.5s", duration: "16s", color: "rgba(45,156,255,0.20)", rotate: "6deg" },
    { Icon: Workflow, x: "10%", y: "55%", size: 25, delay: "2s", duration: "15s", color: "rgba(242,201,76,0.18)" },
    { Icon: Code2, x: "88%", y: "58%", size: 27, delay: "3s", duration: "17s", color: "rgba(45,156,255,0.20)" },
    { Icon: Binary, x: "44%", y: "16%", size: 22, delay: "1s", duration: "13s", color: "rgba(111,207,74,0.18)" },
    { Icon: Terminal, x: "54%", y: "84%", size: 23, delay: "4s", duration: "18s", color: "rgba(45,156,255,0.16)", rotate: "-4deg" },
    { Icon: Cloud, x: "26%", y: "72%", size: 28, delay: "2.5s", duration: "19s", color: "rgba(45,156,255,0.17)" },
    { Icon: Cpu, x: "72%", y: "40%", size: 24, delay: "0.5s", duration: "14s", color: "rgba(45,156,255,0.18)" },
  ],
  d: [
    { Icon: GitBranch, x: "14%", y: "24%", size: 26, delay: "0s", duration: "15s", color: "rgba(111,207,74,0.20)", rotate: "-8deg" },
    { Icon: Cloud, x: "78%", y: "16%", size: 30, delay: "2s", duration: "18s", color: "rgba(45,156,255,0.22)" },
    { Icon: Braces, x: "12%", y: "64%", size: 25, delay: "1.5s", duration: "14s", color: "rgba(242,201,76,0.20)" },
    { Icon: Database, x: "86%", y: "62%", size: 24, delay: "3s", duration: "16s", color: "rgba(45,156,255,0.18)" },
    { Icon: Code2, x: "48%", y: "12%", size: 27, delay: "1s", duration: "17s", color: "rgba(45,156,255,0.20)" },
    { Icon: Terminal, x: "42%", y: "80%", size: 23, delay: "4s", duration: "13s", color: "rgba(111,207,74,0.16)" },
    { Icon: Server, x: "28%", y: "44%", size: 22, delay: "2.5s", duration: "19s", color: "rgba(45,156,255,0.17)", rotate: "5deg" },
    { Icon: FileCode2, x: "70%", y: "48%", size: 24, delay: "0.5s", duration: "15s", color: "rgba(45,156,255,0.18)" },
  ],
};

export default function CodingIcons({ variant = "a" }: CodingIconsProps) {
  const icons = LAYOUTS[variant];

  return (
    <div className="tech-bg-layer tech-bg-icons" aria-hidden="true">
      {icons.map(({ Icon, x, y, size, delay, duration, color, rotate }, i) => (
        <span
          key={i}
          className="dev-code-icon tech-anim-icon-float"
          style={{
            left: x,
            top: y,
            color,
            width: size,
            height: size,
            animationDelay: delay,
            animationDuration: duration,
            ["--icon-rot" as string]: rotate ?? "0deg",
          }}
        >
          <Icon size={size} strokeWidth={1.5} absoluteStrokeWidth={false} />
        </span>
      ))}
    </div>
  );
}
