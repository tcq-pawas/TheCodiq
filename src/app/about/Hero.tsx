"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      className="relative mb-16 sm:mb-20 lg:mb-24 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-2xl shadow-primary/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
    >
      {/* Background photo */}
      <Image
        src="/images/about-bg.png"
        alt="TheCodiQ Global office building at night"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_center]"
      />

      {/* Dark-to-clear overlay: keeps the copy readable on the left, lets the building show through on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12]/95 via-[#0d0f12]/90 to-[#0d0f12]/60 sm:to-[#0d0f12]/35 lg:via-[#0d0f12]/55 lg:to-[#0d0f12]/5" />

      {/* Content */}
      <div className="relative z-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:flex lg:min-h-[560px] lg:items-center lg:px-14 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
      

          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 sm:px-4 text-[11px] font-medium text-primary shadow-lg shadow-primary/10 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 20px rgba(30,136,255,0.4), 0 0 40px rgba(30,136,255,0.2)',
            }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,1)]" />
            About TheCodiQ
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 sm:mt-6 text-[26px] leading-[1.2] sm:leading-tight font-bold text-white"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 0 40px rgba(30,136,255,0.4)',
            }}
          >
            Building the Future with{" "}
            <span className="gradient-text">Innovative Technology</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 sm:mt-6 text-[12px] leading-7 sm:leading-8 text-secondary-text"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            At TheCodiQ, we help startups, businesses, and enterprises transform
            ideas into powerful digital products. From modern web applications
            and mobile apps to AI-powered solutions, we deliver technology that
            drives measurable business growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-3 sm:mt-4 text-[12px] leading-7 sm:leading-8 text-gray-400"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
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
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-300 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-white hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
                  style={{
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  }}
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}