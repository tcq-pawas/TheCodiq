"use client";

import Link from "next/link";
import { serviceDetails } from "@/data/serviceDetails";
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
    accent: "border-sky-500/40 bg-sky-500/15 text-sky-500",
    glow: "bg-sky-500/15",
    line: "from-sky-500 via-[#2563EB] to-transparent",
  },
  "2": {
    Icon: Smartphone,
    accent: "border-cyan-500/40 bg-cyan-500/15 text-cyan-500",
    glow: "bg-cyan-500/15",
    line: "from-cyan-500 via-[#2563EB] to-transparent",
  },
  "3": {
    Icon: BrainCircuit,
    accent: "border-violet-500/40 bg-violet-500/15 text-violet-500",
    glow: "bg-violet-500/15",
    line: "from-violet-500 via-[#2563EB] to-transparent",
  },
  "4": {
    Icon: Palette,
    accent: "border-fuchsia-500/40 bg-fuchsia-500/15 text-fuchsia-500",
    glow: "bg-fuchsia-500/15",
    line: "from-fuchsia-500 via-[#2563EB] to-transparent",
  },
  "5": {
    Icon: Megaphone,
    accent: "border-amber-500/40 bg-amber-500/15 text-amber-500",
    glow: "bg-amber-500/15",
    line: "from-amber-500 via-[#2563EB] to-transparent",
  },
  "6": {
    Icon: CloudCog,
    accent: "border-emerald-500/40 bg-emerald-500/15 text-emerald-500",
    glow: "bg-emerald-500/15",
    line: "from-emerald-500 via-[#2563EB] to-transparent",
  },
};

export default function ServicesGrid() {
  return (
    <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5 md:mb-16 lg:grid-cols-3 lg:gap-6 xl:gap-7">
      {serviceDetails.map((service, index) => {
        const visual = serviceVisuals[String(index + 1)] ?? serviceVisuals["1"];
        const Icon = visual.Icon;

        return (
          <Link href={`/services/${service.slug}`} key={service.slug}>
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative h-full overflow-hidden rounded-xl border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-4 shadow-[0_18px_60px_rgba(37,99,235,.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)] sm:rounded-2xl sm:p-5 lg:p-6"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${visual.glow} blur-2xl transition duration-300 group-hover:scale-125 group-hover:opacity-90 sm:-right-12 sm:-top-12 sm:h-36 sm:w-36 sm:blur-3xl`}
              />
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${visual.line} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-lg transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${visual.accent}`}
                >
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.8} aria-hidden="true" />
                </div>

                <span className="shrink-0 rounded-full border border-[#C5D5EB] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748B] sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-base font-bold leading-snug text-[#111827] transition duration-300 group-hover:text-[#2563EB] sm:text-lg">
                  {service.title}
                </h3>

                <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-[#475569] sm:mt-3">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                  {service.deliverables.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-5 text-[#475569]"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                        <Check className="h-3 w-3" strokeWidth={2.4} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </Link>
        );
      })}
    </div>
  );
}