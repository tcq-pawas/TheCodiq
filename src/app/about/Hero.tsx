"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "10+", label: "Years Experience" },
];

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
            className="mt-5 sm:mt-6 max-w-2xl text-[26px] leading-[1.2]  sm:leading-tight  font-bold text-[#0F172A]"
          >
            Building the Future with{" "}
            <span 
              className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >Innovative Technology</span>
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

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-[#C5D5EB] bg-white p-2.5 sm:p-3 shadow-[0_18px_60px_rgba(37,99,235,.08)] backdrop-blur-xl md:p-4"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(59,130,246,0.04))]" />

          <div className="relative rounded-[1.1rem] sm:rounded-[1.5rem] border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-4 sm:p-5 md:p-6">
            <div className="mb-5 sm:mb-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-[#C5D5EB] bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3 py-1 text-[9px]  font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]">
                  Our Impact
                </span>

                <h3 className="mt-2.5 sm:mt-3  font-semibold text-[#111827] ">
                  Results That Build Trust
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  className="group relative flex min-h-[92px] sm:min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#C5D5EB] bg-white px-3 py-4 text-center shadow-[0_15px_45px_rgba(30,64,175,.08)] transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/35 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 
                    className="text-lg font-bold bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 max-w-[120px] text-[10px]  uppercase tracking-wide text-[#475569]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-4 sm:mt-5 rounded-2xl border border-[#C5D5EB] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] p-4 sm:p-6 shadow-[0_15px_45px_rgba(30,64,175,.08)]"
            >
              <h4 className="text-sm sm:text-base font-semibold text-[#111827]">
                Empowering Businesses Through Innovation
              </h4>

              <p className="mt-2.5 sm:mt-3 text-[12px] leading-6 sm:leading-7 text-[#475569]">
                Every project we build is designed with performance, scalability, and
                long-term success in mind. We do not just write code; we create digital
                experiences that help businesses grow.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}