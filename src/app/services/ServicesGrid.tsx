"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Check,
  CloudCog,
  Globe2,
  Megaphone,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const serviceVisuals: Record<
  string,
  {
    Icon: LucideIcon;
    accent: string;
    glow: string;
    line: string;
  }
> = {
  "1": {
    Icon: Globe2,
    accent: "border-sky-400/25 bg-sky-400/10 text-sky-300",
    glow: "bg-sky-400/15",
    line: "from-sky-300 via-primary to-transparent",
  },
  "2": {
    Icon: Smartphone,
    accent: "border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
    glow: "bg-cyan-300/15",
    line: "from-cyan-300 via-primary to-transparent",
  },
  "3": {
    Icon: BrainCircuit,
    accent: "border-violet-400/25 bg-violet-400/10 text-violet-300",
    glow: "bg-violet-400/15",
    line: "from-violet-300 via-primary to-transparent",
  },
  "4": {
    Icon: Palette,
    accent: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-300",
    glow: "bg-fuchsia-300/15",
    line: "from-fuchsia-300 via-primary to-transparent",
  },
  "5": {
    Icon: Megaphone,
    accent: "border-amber-300/25 bg-amber-300/10 text-amber-300",
    glow: "bg-amber-300/15",
    line: "from-amber-300 via-primary to-transparent",
  },
  "6": {
    Icon: CloudCog,
    accent: "border-emerald-300/25 bg-emerald-300/10 text-emerald-300",
    glow: "bg-emerald-300/15",
    line: "from-emerald-300 via-primary to-transparent",
  },
};

export default function ServicesGrid() {
  return (
    <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const visual = serviceVisuals[service.id] ?? serviceVisuals["1"];
        const Icon = visual.Icon;

        return (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:bg-white/[0.065]"
          >
            <div
              className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${visual.glow} blur-3xl transition duration-300 group-hover:scale-125 group-hover:opacity-90`}
            />
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${visual.line} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="relative mb-6 flex items-start justify-between gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg shadow-black/10 transition duration-300 group-hover:scale-105 ${visual.accent}`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                0{index + 1}
              </span>
            </div>

            <div className="relative">
              <h3 className="text-lg font-bold text-white transition duration-300 group-hover:text-primary">
                {service.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-5 text-gray-300"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2.4} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
