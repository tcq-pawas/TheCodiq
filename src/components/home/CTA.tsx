"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-8 sm:py-10 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_72px] opacity-40" />

      <div className="relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 shadow-[0_16px_50px_rgba(255,255,255,0.05)] backdrop-blur-xl text-center"
        >
          <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-gradient-to-br from-sky-400 via-cyan-300 to-white text-black">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M13.2 3.5c3.1 1.7 4.9 4.5 5.2 8.2l-4.1 4.1-5.9-5.9 4.8-6.4Z"
                fill="currentColor"
              />
              <path
                d="M6.2 17.8c1.1-.1 2.2-.6 3.2-1.6"
                stroke="#f97316"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="14.5" cy="8.1" r="1.4" fill="#38bdf8" />
            </svg>
          </div>

          <h2 className="text-xl font-bold leading-tight text-silver-primary sm:text-2xl lg:text-3xl">
            Ready to <span className="accent-gradient-text">get started</span>?
          </h2>

          <p className="mx-auto mt-2 mb-5 max-w-md md:text-4xl sm:text-sm leading-relaxed text-secondary-text">
            Let&apos;s build something amazing together. Get in touch with our
            team today.
          </p>

          <div className="flex flex-col justify-center gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-gradient px-4 py-2 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}