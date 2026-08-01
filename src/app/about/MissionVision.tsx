"use client";

import { motion } from "framer-motion";
import { FaBinoculars, FaBullseye } from "react-icons/fa";
import { cn } from "@/lib/helper";

const items = [
  {
    Icon: FaBullseye,
    title: "Our Mission",
    text: "To empower businesses with cutting-edge technology solutions that drive innovation, improve efficiency, and accelerate sustainable growth. We aim to bridge the gap between complex technologies and real business success.",
    theme: {
      icon: "text-[#2563EB]",
      iconBg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      hoverBorder: "group-hover:border-[#2563EB]/60",
      glow: "bg-[#2563EB]/15",
      progress: "from-[#2563EB] via-[#3B82F6] to-[#06B6D4]",
      title: "group-hover:text-[#2563EB]",
      shadow: "group-hover:shadow-[0_30px_80px_rgba(37,99,235,.18)]",
    },
  },
  {
    Icon: FaBinoculars,
    title: "Our Vision",
    text: "To become a globally trusted technology partner recognized for innovation, quality, and customer success. We envision a future where businesses of every size leverage intelligent digital solutions to unlock their full potential.",
    theme: {
      icon: "text-[#16A34A]",
      iconBg: "bg-[#16A34A]/10",
      border: "border-[#16A34A]/30",
      hoverBorder: "group-hover:border-[#16A34A]/60",
      glow: "bg-[#16A34A]/15",
      progress: "from-[#16A34A] via-[#22C55E] to-[#84CC16]",
      title: "group-hover:text-[#16A34A]",
      shadow: "group-hover:shadow-[0_30px_80px_rgba(22,163,74,.18)]",
    },
  },
];

const topBorder =
  "from-[#2563EB] via-[#F59E0B] to-[#16A34A]";

export default function MissionVision() {
  return (
    <motion.section
      className="relative mb-16 overflow-hidden rounded-[2rem] border border-[#D9E6F7] bg-white px-4 py-10 shadow-[0_20px_70px_rgba(37,99,235,.08)] sm:px-6 sm:py-12 lg:px-10"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute -top-36 -left-36 h-[420px] w-[420px] rounded-full bg-[#2563EB]/6 blur-[160px]" />
      <div className="absolute -bottom-36 -right-36 h-[420px] w-[420px] rounded-full bg-[#16A34A]/6 blur-[160px]" />

      {/* Decorative Top Border */}
      <div
        className={cn(
          "absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r",
          topBorder
        )}
      />

      <div className="relative">
        {/* Heading */}
        <div className="mx-auto mb-9 sm:mb-11 lg:mb-12 max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C5D5EB] bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3.5 py-1.5 sm:px-4 text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.6)]" />
            Purpose Driven
          </span>

          <h2 className="mt-4 sm:mt-5 text-[26px] leading-tight font-bold text-black">
            Mission & <span className="text-black">Vision</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[12px] leading-6 sm:leading-7 text-[#475569]">
            We are driven by innovation, guided by purpose, and committed to
            delivering technology solutions that create lasting business impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group h-full"
              >
                                <div
                  className={cn(
                    "relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-white via-white to-[#F8FBFF] p-7 transition-all duration-500 group-hover:-translate-y-2",
                    item.theme.border,
                    item.theme.hoverBorder,
                    item.theme.shadow
                  )}
                >
                  {/* Glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 opacity-70 group-hover:opacity-100",
                      item.theme.glow
                    )}
                  />

                  {/* Decorative Border */}
                  <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#2563EB] via-[#F59E0B] to-[#16A34A]" />

                  {/* Icon */}
                  <div className="relative mb-8 flex items-center justify-between">
                    <div
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500",
                        item.theme.iconBg,
                        item.theme.border,
                        item.theme.icon,
                        "group-hover:scale-110 group-hover:rotate-6"
                      )}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      {index === 0 ? "01" : "02"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <h3
                      className={cn(
                        "mb-4 text-xl font-bold text-black transition-colors duration-300",
                        item.theme.title
                      )}
                    >
                      {item.title}
                    </h3>

                    <p className="flex-1 text-[12px] leading-8 text-[#64748B]">
                      {item.text}
                    </p>

                    {/* Progress */}
                    <div className="mt-8">
                      <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
                        <div
                          className={cn(
                            "h-full w-2/3 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full",
                            item.theme.progress
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}