"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";

export default function FeaturedPost() {
  return (
    <motion.div
      className="mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT SIDE */}
            <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1220] p-4 sm:min-h-[260px] sm:p-6">
              <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-cyan-500/20 blur-[90px]" />
              <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-violet-500/20 blur-[110px]" />

              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1  font-semibold text-cyan-300 sm:px-3 text-[9px]">
                      FEATURED ARTICLE
                    </span>

                    <h4 className="mt-3 max-w-[220px] text-[20px] font-semibold leading-tight text-white sm:mt-4 sm:max-w-[240px] ">
                      AI is Changing Modern Development
                    </h4>
                  </div>

                  <div className="shrink-0 rounded-2xl bg-white/5 p-2.5 backdrop-blur sm:p-3">
                    <div className="text-[15px] font-semibold text-white">2026</div>
                  </div>
                </div>

                <div className="my-6 space-y-2 sm:my-8">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">
                      <p className="text-center text-[15px] font-bold text-white">95%</p>
                      <p className="mt-1 text-center text-[9px] leading-tight text-gray-400 sm:text-left sm:text-[11px]">
                        Faster Development
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">
                      <p className="text-center text-[15px] font-bold text-white">40%</p>
                      <p className="mt-1 text-center text-[9px] leading-tight text-gray-400 sm:text-left sm:text-[11px]">
                        Less Manual Work
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">
                      <p className="text-center text-[15px] font-bold text-white">24/7</p>
                      <p className="mt-1 text-center text-[9px] leading-tight text-gray-400 sm:text-left sm:text-[11px]">
                        AI Assistance
                      </p>
                    </div>
                  </div>

                  <div className="relative h-20 rounded-xl border border-white/10 bg-white/[0.04] sm:h-24">
                    <svg
                      viewBox="0 0 300 90"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="line" x1="0" x2="1">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M10 70 C60 20 90 60 140 35 S220 5 290 20"
                        fill="none"
                        stroke="url(#line)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400  sm:tracking-[0.3em]">
                      Trending Topic
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-white ">
                      Future of AI + Web
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center p-4 sm:p-5 md:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[9px] font-semibold text-cyan-300 ring-1 ring-cyan-300/20 ">
                  Latest Insight
                </span>

                <span className="text-[9px] text-gray-500">
                  Jan 15, 2026
                </span>
              </div>

              <h3 className="max-w-xl text-[24px] font-semibold leading-snug text-white ">
                The Future of Web Development in 2026
              </h3>

              <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-400">
                Explore how modern web products are evolving with AI-assisted
                workflows, faster frontend frameworks, smarter design systems,
                and performance-first development.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {["AI Workflows", "Better UX", "Faster Apps"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 first:col-span-2 first:sm:col-span-1"
                  >
                    <p className="text-[10px] font-semibold text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    By Digital Team
                  </p>

                  <p className="text-xs text-gray-500">
                    Practical trends for founders
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

    </motion.div>
  );
}
