import {
  Cpu,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Globe,
  PenTool,
  Megaphone,
} from "lucide-react";

export const ORBITS = [
  {
    id: 1,
    width: 620,
    height: 300,
    duration: 28,
    rotate: -12,
    reverse: false,
    items: [
      {
        icon: Code2,
        label: "Web",
        progress: 0.10,
      },
      {
        icon: Smartphone,
        label: "Mobile",
        progress: 0.56,
      },
    ],
  },

  {
    id: 2,
    width: 520,
    height: 470,
    duration: 36,
    rotate: 18,
    reverse: true,
    items: [
      {
        icon: Cpu,
        label: "AI",
        progress: 0.05,
      },
      {
        icon: Cloud,
        label: "Cloud",
        progress: 0.66,
      },
    ],
  },

  {
    id: 3,
    width: 710,
    height: 510,
    duration: 42,
    rotate: 8,
    reverse: false,
    items: [
      {
        icon: PenTool,
        label: "UI/UX",
        progress: 0.34,
      },
      {
        icon: Megaphone,
        label: "Marketing",
        progress: 0.82,
      },
    ],
  },

  {
    id: 4,
    width: 760,
    height: 600,
    duration: 55,
    rotate: -22,
    reverse: true,
    items: [
      {
        icon: Globe,
        label: "Network",
        progress: 0.23,
      },
      {
        icon: ShieldCheck,
        label: "Security",
        progress: 0.73,
      },
    ],
  },
];