"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import BackgroundGlow from "./BackgroundGlow";
import CircuitLines from "./CircuitLines";
import CloudStructures from "./CloudStructures";
import SoftwareStructures from "./SoftwareStructures";
import CodingGraphics from "./CodingGraphics";
import BinaryField from "./BinaryField";
import { useParallaxPointer } from "@/hooks/useParallaxPointer";

type GlowVariant = "default" | "cyan" | "indigo" | "emerald" | "purple";
type LayoutKey = "a" | "b" | "c" | "d";

interface PageTheme {
  glow: GlowVariant;
  circuit: LayoutKey;
  clouds: LayoutKey;
  symbols: LayoutKey;
  binary: LayoutKey;
  infra: LayoutKey;
  accent: "hero" | "circuit" | "code" | "api" | "symbols" | "secure" | "network" | "binary";
}

function resolveTheme(pathname: string | null): PageTheme {
  const path = pathname ?? "/";

  if (path === "/") {
    return { glow: "default", circuit: "a", clouds: "a", symbols: "a", binary: "a", infra: "a", accent: "hero" };
  }
  if (path.startsWith("/about")) {
    return { glow: "cyan", circuit: "b", clouds: "b", symbols: "b", binary: "b", infra: "b", accent: "circuit" };
  }
  if (path.startsWith("/services")) {
    return { glow: "indigo", circuit: "c", clouds: "c", symbols: "c", binary: "c", infra: "c", accent: "code" };
  }
  if (path.startsWith("/portfolio")) {
    return { glow: "purple", circuit: "d", clouds: "d", symbols: "d", binary: "a", infra: "c", accent: "api" };
  }
  if (path.startsWith("/blog") || path.startsWith("/careers")) {
    return {
      glow: path.startsWith("/careers") ? "indigo" : "cyan",
      circuit: path.startsWith("/careers") ? "d" : "a",
      clouds: path.startsWith("/careers") ? "a" : "b",
      symbols: path.startsWith("/careers") ? "a" : "b",
      binary: "c",
      infra: "b",
      accent: "symbols",
    };
  }
  if (path.startsWith("/contact")) {
    return { glow: "emerald", circuit: "b", clouds: "c", symbols: "d", binary: "a", infra: "a", accent: "network" };
  }
  if (path.startsWith("/privacy") || path.startsWith("/terms")) {
    return { glow: "default", circuit: "c", clouds: "d", symbols: "c", binary: "b", infra: "d", accent: "secure" };
  }

  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    hash = (hash + path.charCodeAt(i) * (i + 1)) % 4;
  }
  const keys: LayoutKey[] = ["a", "b", "c", "d"];
  const glows: GlowVariant[] = ["default", "cyan", "indigo", "emerald"];
  return {
    glow: glows[hash],
    circuit: keys[(hash + 1) % 4],
    clouds: keys[(hash + 2) % 4],
    symbols: keys[(hash + 1) % 4],
    binary: keys[(hash + 3) % 4],
    infra: keys[hash],
    accent: "binary",
  };
}

/**
 * Lightweight tech background — fewer layers, snappy mouse parallax.
 */
export default function TechBackground() {
  const pathname = usePathname();
  const theme = useMemo(() => resolveTheme(pathname), [pathname]);
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useParallaxPointer(rootRef, ready);

  return (
    <div
      ref={rootRef}
      className={`tech-background tech-accent--${theme.accent}`}
      aria-hidden="true"
    >
      {/* Far — soft glow only */}
      <div className="tech-parallax-layer" data-parallax-layer="14">
        <BackgroundGlow variant={theme.glow} />
      </div>

      {/* Mid — circuits + clouds */}
      <div className="tech-parallax-layer" data-parallax-layer="28">
        <CircuitLines variant={theme.circuit} />
        <CloudStructures variant={theme.clouds} />
      </div>

      {/* Near — architecture structures (main mouse-reactive layer) */}
      <div className="tech-parallax-layer" data-parallax-layer="18">
        <SoftwareStructures variant={theme.infra} />
        <CodingGraphics variant={theme.symbols} />
        <BinaryField variant={theme.binary} />
      </div>

      <div className="tech-bg-overlay" />
    </div>
  );
}
