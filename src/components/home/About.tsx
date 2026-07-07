"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Gauge,
  Globe2,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    title: "Expert Team",
    description:
      "Highly skilled professionals with years of experience in building enterprise-grade solutions. Our certified developers, architects, and consultants bring deep expertise across multiple technologies and industries.",
    icon: UsersRound,
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "Modern Tech",
    description:
      "We stay at the forefront of technology innovation, using cutting-edge frameworks, cloud-native architectures, and AI-powered tools to deliver future-ready solutions.",
    icon: Zap,
    accent: "from-amber-300 to-orange-400",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to keep your applications running smoothly, with rapid response times and proactive monitoring.",
    icon: Headphones,
    accent: "from-emerald-300 to-teal-400",
  },
  {
    title: "Quality Code",
    description:
      "We follow industry best practices, implement comprehensive testing, and maintain high code-quality standards to support long-term product success.",
    icon: Code2,
    accent: "from-violet-300 to-fuchsia-400",
  },
];

const metrics = [
  { label: "Launch Speed", value: "2.5x", icon: Gauge },
  { label: "Secure Builds", value: "99%", icon: ShieldCheck },
  { label: "Global Reach", value: "24/7", icon: Globe2 },
];

const orbitItems = [
  {
    label: "Innovation",
    icon: Sparkles,
    angle: 0,
    className: "bg-cyan-300 text-slate-950 shadow-cyan-300/30",
  },
  {
    label: "Speed",
    icon: Zap,
    angle: 120,
    className: "bg-amber-300 text-slate-950 shadow-amber-300/30",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    angle: 240,
    className: "bg-emerald-300 text-slate-950 shadow-emerald-300/30",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(250,204,21,0.12),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl font-bold text-silver-primary sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-text">
            We deliver excellence through innovation and expertise
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(12,18,34,0.78))] shadow-2xl shadow-black/30">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_28%,rgba(255,255,255,0.04)_65%,transparent)]" />

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-full w-full rounded-full border border-dashed border-white/10"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative h-full w-full"
                >
                  {orbitItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${item.angle}deg) translateX(13rem)`,
                        }}
                      >
                        <motion.div
                          initial={{ rotate: -item.angle }}
                          animate={{ rotate: -360 - item.angle }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 ${item.className} shadow-lg`}
                          style={{ marginLeft: -24, marginTop: -24 }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2.2} />
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <div className="absolute right-12 top-16 h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_28px_rgba(252,211,77,0.85)]" />
              <div className="absolute bottom-24 left-12 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />

              <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] shadow-[0_0_90px_rgba(56,189,248,0.35)] backdrop-blur-xl"
                >
                  <div className="absolute inset-5 rounded-full bg-gradient-to-br from-sky-400/20 via-transparent to-amber-300/20" />
                  <Rocket
                    className="relative h-24 w-24 text-white drop-shadow-[0_18px_28px_rgba(56,189,248,0.38)]"
                    strokeWidth={1.6}
                  />
                </motion.div>
              </div>

              <div className="absolute left-1/2 top-[61%] z-[1] -translate-x-1/2">
                <motion.div
                  animate={{
                    opacity: [0.45, 0.9, 0.45],
                    scaleY: [0.9, 1.08, 0.9],
                  }}
                  transition={{
                    duration: 2.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-32 w-12 rounded-full bg-gradient-to-b from-cyan-300/50 via-amber-300/25 to-transparent blur-xl"
                />
              </div>

              <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-silver-primary backdrop-blur-md">
                  Premium IT Solutions
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-amber-200 backdrop-blur-md">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                      <p className="text-xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-secondary-text">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <button
                      type="button"
                      className={`group w-full rounded-2xl border text-left transition-all duration-300 ${
                        isActive
                          ? "border-sky-300/50 bg-bg-card/80 shadow-2xl shadow-sky-950/25"
                          : "border-white/10 bg-bg-card/30 hover:border-sky-300/40 hover:bg-bg-card/50"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5`}
                          >
                            <div className="absolute inset-0 rounded-2xl bg-black/10" />
                            <Icon
                              className="relative h-7 w-7 text-white"
                              strokeWidth={1.9}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3
                              className={`text-lg font-bold transition-colors ${
                                isActive
                                  ? "text-sky-200"
                                  : "text-silver-primary"
                              }`}
                            >
                              {feature.title}
                            </h3>
                          </div>

                          <motion.span
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              isActive
                                ? "border-sky-300/40 bg-sky-300/10 text-sky-200"
                                : "border-white/10 bg-white/[0.03] text-silver-secondary"
                            }`}
                          >
                            <ChevronDown className="h-[18px] w-[18px]" />
                          </motion.span>
                        </div>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm leading-relaxed text-secondary-text sm:pl-[4.5rem]">
                            {feature.description}
                          </p>
                        </motion.div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}