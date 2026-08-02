"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import BackgroundGlow from "./BackgroundGlow";
import CircuitLines from "./CircuitLines";
import CloudStructures from "./CloudStructures";
import CodeBubbles from "./CodeBubbles";
import CodingIcons from "./CodingIcons";
import ApiArchitecture from "./ApiArchitecture";
import CodingGraphics from "./CodingGraphics";

type GlowVariant = "default" | "cyan" | "indigo" | "emerald" | "purple";
type LayoutKey = "a" | "b" | "c" | "d";

interface PageTheme {
  glow: GlowVariant;
  bubbles: LayoutKey;
  circuit: LayoutKey;
  clouds: LayoutKey;
  icons: LayoutKey;
  api: LayoutKey;
  symbols: LayoutKey;
}

function resolveTheme(pathname: string | null): PageTheme {
  const path = pathname ?? "/";

  if (path === "/") {
    return { glow: "default", bubbles: "a", circuit: "a", clouds: "a", icons: "a", api: "a", symbols: "a" };
  }
  if (path.startsWith("/about")) {
    return { glow: "cyan", bubbles: "b", circuit: "b", clouds: "b", icons: "b", api: "b", symbols: "b" };
  }
  if (path.startsWith("/services")) {
    return { glow: "indigo", bubbles: "c", circuit: "c", clouds: "c", icons: "c", api: "c", symbols: "c" };
  }
  if (path.startsWith("/portfolio")) {
    return { glow: "purple", bubbles: "d", circuit: "d", clouds: "d", icons: "d", api: "d", symbols: "d" };
  }
  if (path.startsWith("/blog")) {
    return { glow: "cyan", bubbles: "a", circuit: "a", clouds: "b", icons: "c", api: "b", symbols: "b" };
  }
  if (path.startsWith("/contact")) {
    return { glow: "emerald", bubbles: "b", circuit: "b", clouds: "c", icons: "d", api: "d", symbols: "d" };
  }
  if (path.startsWith("/careers")) {
    return { glow: "indigo", bubbles: "d", circuit: "d", clouds: "a", icons: "b", api: "a", symbols: "a" };
  }
  if (path.startsWith("/privacy") || path.startsWith("/terms")) {
    return { glow: "default", bubbles: "c", circuit: "c", clouds: "d", icons: "a", api: "c", symbols: "c" };
  }

  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    hash = (hash + path.charCodeAt(i) * (i + 1)) % 4;
  }
  const keys: LayoutKey[] = ["a", "b", "c", "d"];
  const glows: GlowVariant[] = ["default", "cyan", "indigo", "emerald"];
  return {
    glow: glows[hash],
    bubbles: keys[hash],
    circuit: keys[(hash + 1) % 4],
    clouds: keys[(hash + 2) % 4],
    icons: keys[(hash + 3) % 4],
    api: keys[hash],
    symbols: keys[(hash + 1) % 4],
  };
}

/**
 * Global decorative tech background.
 * Fixed behind all content. pointer-events: none. Ambient animation only.
 */
export default function TechBackground() {
  const pathname = usePathname();
  const theme = useMemo(() => resolveTheme(pathname), [pathname]);

  return (
    <div className="tech-background" aria-hidden="true">
      <BackgroundGlow variant={theme.glow} />
      <CloudStructures variant={theme.clouds} />
      <CircuitLines variant={theme.circuit} />
      <ApiArchitecture variant={theme.api} />
      <CodeBubbles variant={theme.bubbles} />
      <CodingIcons variant={theme.icons} />
      <CodingGraphics variant={theme.symbols} />
      <div className="tech-bg-overlay" />
    </div>
  );
}
