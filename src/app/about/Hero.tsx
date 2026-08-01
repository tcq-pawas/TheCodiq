"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGlobe, FiSmartphone, FiCloud, FiCode } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

// Floating capability cards placed around the globe graphic (images/earth.png).
// left/top are the % position of each card's CENTER inside the relative
// image wrapper below — measured directly off the reference mockup with a
// percentage grid, not eyeballed.


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      className="relative mb-16 sm:mb-20 lg:mb-24 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#C5D5EB] bg-white px-5 py-10 sm:px-8 sm:py-12 shadow-[0_18px_60px_rgba(37,99,235,.08)] backdrop-blur md:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
    >
      {/* Soft radial gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(59,130,246,0.04))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      <div className="relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C5D5EB] bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3.5 py-1.5 sm:px-4 text-[11px] font-semibold text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2563EB] shadow-[0_0_18px_rgba(37,99,235,0.6)]" />
            About TheCodiQ
          </motion.span>

          {/*
            Fixed the inverted scale (was text-4xl on mobile shrinking to
            md:text-3xl on desktop). Now it scales up properly across
            every breakpoint: smaller on phones, largest on desktop.
          */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 sm:mt-6 max-w-2xl text-[26px] leading-[1.2]  sm:leading-tight  font-bold text-black"
          >
            Building the Future with{" "}
            <span className="text-black">Innovative Technology</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 sm:mt-6 max-w-xl text-[12px] leading-7 sm:leading-8 text-[#475569]"
          >
            At TheCodiQ, we help startups, businesses, and enterprises transform
            ideas into powerful digital products. From modern web applications
            and mobile apps to AI-powered solutions, we deliver technology that
            drives measurable business growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-3 sm:mt-4 max-w-xl text-[12px] leading-7 sm:leading-8 text-[#475569]"
          >
            Our team combines technical expertise, creative thinking, and a
            customer-first approach to build scalable, secure, and future-ready
            software that helps businesses stay ahead in the digital world.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3"
          >
            {["Web Apps", "Mobile Apps", "AI Solutions", "Cloud Systems"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#C5D5EB] bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#475569] transition-colors duration-300 hover:border-[#2563EB]/30 hover:bg-[#EFF6FF] hover:text-[#0F172A]"
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Globe graphic + floating capability cards — mirrors the shared reference image */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-[1418/1109] w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[540px]"
        >
          <Image
            src="/images/earth.png"
            alt="Global technology network"
            fill
            priority
            sizes="(min-width: 1024px) 540px, 85vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
