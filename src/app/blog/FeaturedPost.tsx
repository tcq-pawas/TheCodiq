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
            <div className="relative min-h-[210px] overflow-hidden bg-[#111827] p-5">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_42%),linear-gradient(315deg,rgba(168,85,247,0.18),transparent_45%)]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                    Featured
                  </span>

                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-gray-950">
                    8 min read
                  </span>
                </div>

                <div className="my-7">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-xl bg-cyan-400/80" />
                    <div className="h-16 rounded-xl bg-violet-400/80" />
                    <div className="h-16 rounded-xl bg-emerald-400/80" />
                  </div>

                  <div className="mt-2 grid grid-cols-[1.4fr_0.8fr] gap-2">
                    <div className="h-14 rounded-xl border border-white/15 bg-white/10" />
                    <div className="flex h-14 items-center justify-center rounded-xl bg-white text-2xl font-black text-gray-950">
                      AI
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/55">
                  <span>Web Design</span>
                  <span className="h-1 w-1 rounded-full bg-white/35" />
                  <span>Development</span>
                  <span className="h-1 w-1 rounded-full bg-white/35" />
                  <span>Strategy</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 ring-1 ring-cyan-300/20">
                  Latest Insight
                </span>

                <span className="text-xs text-gray-500">Jan 15, 2026</span>
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
                {["AI workflows", "Better UX", "Faster apps"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
                  >
                    <p className="text-xs font-semibold text-white">{item}</p>
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

                <Button variant="outline" size="sm">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}