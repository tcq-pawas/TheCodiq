"use client";

import type { CSSProperties } from "react";

type GlowVariant = "default" | "cyan" | "indigo" | "emerald" | "purple";

interface BackgroundGlowProps {
  variant?: GlowVariant;
}

const GLOW_PRESETS: Record<
  GlowVariant,
  { className: string; style: CSSProperties }[]
> = {
  default: [
    {
      className: "tech-glow tech-glow--a tech-anim-breathe",
      style: {
        top: "8%",
        left: "12%",
        width: "38vw",
        height: "38vw",
        maxWidth: 520,
        maxHeight: 520,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0) 70%)",
      },
    },
    {
      className: "tech-glow tech-glow--b tech-anim-breathe-slow",
      style: {
        top: "55%",
        right: "5%",
        width: "32vw",
        height: "32vw",
        maxWidth: 440,
        maxHeight: 440,
        background:
          "radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0) 70%)",
        animationDelay: "4s",
      },
    },
    {
      className: "tech-glow tech-glow--c tech-anim-breathe hidden md:block",
      style: {
        bottom: "10%",
        left: "35%",
        width: "28vw",
        height: "28vw",
        maxWidth: 380,
        maxHeight: 380,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 70%)",
        animationDelay: "8s",
      },
    },
  ],
  cyan: [
    {
      className: "tech-glow tech-anim-breathe",
      style: {
        top: "15%",
        right: "10%",
        width: "40vw",
        height: "40vw",
        maxWidth: 500,
        maxHeight: 500,
        background:
          "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
      },
    },
    {
      className: "tech-glow tech-anim-breathe-slow hidden sm:block",
      style: {
        bottom: "20%",
        left: "8%",
        width: "30vw",
        height: "30vw",
        maxWidth: 400,
        maxHeight: 400,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 70%)",
        animationDelay: "5s",
      },
    },
  ],
  indigo: [
    {
      className: "tech-glow tech-anim-breathe",
      style: {
        top: "20%",
        left: "5%",
        width: "36vw",
        height: "36vw",
        maxWidth: 480,
        maxHeight: 480,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
      },
    },
    {
      className: "tech-glow tech-anim-breathe-slow hidden md:block",
      style: {
        top: "50%",
        right: "15%",
        width: "28vw",
        height: "28vw",
        maxWidth: 360,
        maxHeight: 360,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)",
        animationDelay: "6s",
      },
    },
  ],
  emerald: [
    {
      className: "tech-glow tech-anim-breathe",
      style: {
        top: "10%",
        left: "40%",
        width: "34vw",
        height: "34vw",
        maxWidth: 460,
        maxHeight: 460,
        background:
          "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)",
      },
    },
    {
      className: "tech-glow tech-anim-breathe-slow",
      style: {
        bottom: "15%",
        left: "10%",
        width: "30vw",
        height: "30vw",
        maxWidth: 400,
        maxHeight: 400,
        background:
          "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        animationDelay: "3s",
      },
    },
  ],
  purple: [
    {
      className: "tech-glow tech-anim-breathe",
      style: {
        top: "25%",
        right: "8%",
        width: "38vw",
        height: "38vw",
        maxWidth: 500,
        maxHeight: 500,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
      },
    },
    {
      className: "tech-glow tech-anim-breathe-slow hidden sm:block",
      style: {
        bottom: "25%",
        left: "15%",
        width: "32vw",
        height: "32vw",
        maxWidth: 420,
        maxHeight: 420,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
        animationDelay: "7s",
      },
    },
  ],
};

export default function BackgroundGlow({ variant = "default" }: BackgroundGlowProps) {
  const glows = GLOW_PRESETS[variant];

  return (
    <div className="tech-bg-layer tech-bg-glows" aria-hidden="true">
      {glows.map((glow, i) => (
        <div key={i} className={glow.className} style={glow.style} />
      ))}
    </div>
  );
}
