"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";

const items = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "To empower businesses with cutting-edge technology solutions that drive innovation, improve efficiency, and accelerate sustainable growth. We aim to bridge the gap between complex technologies and real business success through reliable digital solutions.",
  },
  {
    icon: "🚀",
    title: "Our Vision",
    text: "To become a globally trusted technology partner recognized for innovation, quality, and customer success. We envision a future where businesses of every size leverage intelligent digital solutions to unlock their full potential.",
  },
];

export default function MissionVision() {
  return (
    <motion.section
      className="relative mb-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-12 shadow-2xl shadow-primary/10 md:px-8 lg:px-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,rgba(59,130,246,0.1))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Purpose Driven
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-3xl">
            Mission & <span className="gradient-text">Vision</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            We are driven by innovation, guided by purpose, and committed to
            delivering technology solutions that create lasting business impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group"
            >
              <Card hover>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/70 p-6 shadow-xl shadow-black/20 transition duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.06] md:p-7">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-3xl shadow-lg shadow-primary/10">
                      {item.icon}
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-8 text-gray-400">
                    {item.text}
                  </p>

                  <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-cyan-300 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}