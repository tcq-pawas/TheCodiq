"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function FeaturedPost() {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card hover>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT SIDE */}
            <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1220] p-6">
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
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                      FEATURED ARTICLE
                    </span>

                    <h4 className="mt-4 max-w-[240px] text-2xl font-semibold leading-tight text-white">
                      AI is Changing Modern Development
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-3 backdrop-blur">
                    <div className="text-xl font-semibold text-white">2026</div>
                  </div>
                </div>

                <div className="my-8 space-y-2">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xl font-bold text-white text-center">95%</p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        Faster Development
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xl font-bold text-white text-center">40%</p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        Less Manual Work
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xl font-bold text-white text-center">24/7</p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        AI Assistance
                      </p>
                    </div>
                  </div>

                  <div className="relative h-24 rounded-xl border border-white/10 bg-white/[0.04]">
                    <svg
                      viewBox="0 0 300 90"
                      className="absolute inset-0 h-full w-full"
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
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      Trending Topic
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                      Future of AI + Web
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 ring-1 ring-cyan-300/20">
                  Latest Insight
                </span>

                <span className="text-xs text-gray-500">
                  Jan 15, 2026
                </span>
              </div>

              <h3 className="max-w-xl text-xl font-semibold leading-snug text-white sm:text-[28px]">
                The Future of Web Development in 2026
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                Explore how modern web products are evolving with AI-assisted
                workflows, faster frontend frameworks, smarter design systems,
                and performance-first development.
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {["AI Workflows", "Better UX", "Faster Apps"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-white">
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
      </Card>
    </motion.div>
  );
}