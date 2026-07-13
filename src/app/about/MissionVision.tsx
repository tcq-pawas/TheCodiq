"use client";

import { motion } from "framer-motion";
import { FaBinoculars, FaBullseye } from "react-icons/fa";
import Card from "@/components/common/Card";

const items = [
  {
    Icon: FaBullseye,
    title: "Our Mission",
    text: "To empower businesses with cutting-edge technology solutions that drive innovation, improve efficiency, and accelerate sustainable growth. We aim to bridge the gap between complex technologies and real business success through reliable digital solutions.",
  },
  {
    Icon: FaBinoculars,
    title: "Our Vision",
    text: "To become a globally trusted technology partner recognized for innovation, quality, and customer success. We envision a future where businesses of every size leverage intelligent digital solutions to unlock their full potential.",
  },
];

const sharedIconStyle =
  "border-cyan-300/25 bg-cyan-300/10 text-cyan-300 shadow-cyan-300/10";

const sharedLineStyle = "from-transparent via-cyan-300/80 to-transparent";
const sharedProgressStyle = "from-cyan-300 via-primary to-blue-400";

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
                <Card hover>
                  <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/70 p-6 shadow-xl shadow-black/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-300/35 group-hover:bg-white/[0.06] group-hover:shadow-[0_24px_70px_-30px_rgba(34,211,238,0.55)] md:p-7">
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${sharedLineStyle}`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${sharedLineStyle}`}
                    />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

                    <div className="relative mb-6 flex items-center justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-300/45 group-hover:bg-cyan-300/15 group-hover:shadow-[0_18px_45px_-22px_rgba(34,211,238,0.9)] ${sharedIconStyle}`}
                      >
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col">
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        {item.text}
                      </p>

                      <div className="mt-auto pt-7">
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full w-2/3 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full ${sharedProgressStyle}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
