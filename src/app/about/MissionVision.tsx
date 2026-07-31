"use client";

import { motion } from "framer-motion";
import { FaBinoculars, FaBullseye } from "react-icons/fa";

const items = [
  {
    Icon: FaBullseye,
    title: "Our Mission",
    text: "To empower businesses with cutting-edge technology solutions that drive innovation, improve efficiency, and accelerate sustainable growth. We aim to bridge the gap between complex technologies and real business success.",
  },
  {
    Icon: FaBinoculars,
    title: "Our Vision",
    text: "To become a globally trusted technology partner recognized for innovation, quality, and customer success. We envision a future where businesses of every size leverage intelligent digital solutions to unlock their full potential.",
  },
];

const sharedIconStyle =
  "border-cyan-400/30 bg-cyan-400/15 text-cyan-400 shadow-cyan-400/15";

const sharedLineStyle = "from-transparent via-cyan-400/80 to-transparent";
const sharedProgressStyle = "from-cyan-300 via-primary to-blue-400";

export default function MissionVision() {
  return (
    <motion.section
      className="relative mb-16 sm:mb-20 lg:mb-24 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#C5D5EB] bg-white px-4 py-10 sm:px-6 sm:py-12 shadow-[0_18px_60px_rgba(37,99,235,.08)] md:px-8 lg:px-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Soft radial gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(59,130,246,0.04))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <div className="relative">
        <div className="mx-auto mb-9 sm:mb-11 lg:mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-[#C5D5EB] bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3.5 py-1.5 sm:px-4 text-[9px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]">
            Purpose Driven
          </span>

          <h2 className="mt-4 sm:mt-5 text-[26px] leading-tight  font-bold text-[#111827]">
            Mission & <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vision</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[12px] leading-6 sm:leading-7 text-[#475569]">
            We are driven by innovation, guided by purpose, and committed to
            delivering technology solutions that create lasting business impact.
          </p>
        </div>

        {/*
          md:items-stretch: makes CSS Grid force both columns to match the
          TALLER card's height (belt-and-braces alongside the text clamp
          below — either one alone would fix it, both together makes it
          bulletproof even if the Card component has its own quirks).
        */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:items-stretch lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.Icon;

            return (
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
                className="group h-full"
              >
               
                  <div className="relative flex h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-5 sm:p-6 shadow-[0_18px_60px_rgba(37,99,235,.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/35 group-hover:shadow-[0_24px_70px_rgba(34,211,238,0.15)] md:p-7">
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${sharedLineStyle}`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${sharedLineStyle}`}
                    />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

                    <div className="relative mb-5  flex items-center justify-between gap-4">
                      <div
                        className={`flex h-10 w-10 sm:h-[3.25rem] sm:w-[3.25rem] md:h-12 md:w-12 shrink-0 items-center justify-center rounded-2xl border text-2xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/45 group-hover:bg-cyan-400/20 group-hover:shadow-[0_18px_45px_-22px_rgba(34,211,238,0.9)] ${sharedIconStyle}`}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col">
                      <h3 className="mb-2.5 sm:mb-3 text-lg  font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#2563EB]">
                        {item.title}
                      </h3>

                      {/*
                        line-clamp-6: this is the real fix for your
                        screenshot. Both paragraphs are now forced to the
                        SAME fixed number of lines regardless of how much
                        copy each one has, so the text block height is
                        always identical — which means mt-auto below
                        always pushes the progress bar to the exact same
                        vertical position on both cards, every time.
                      */}
                      <p className="leading-7 sm:leading-8 text-[#475569] transition-colors duration-300 group-hover:text-[#525F73] line-clamp-6 text-[12px]">
                        {item.text}
                      </p>

                      <div className="mt-auto pt-5">
                        <div className="h-1.5 overflow-hidden rounded-full bg-[#E6ECF5]">
                          <div
                            className={`h-full w-2/3 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full ${sharedProgressStyle}`}
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