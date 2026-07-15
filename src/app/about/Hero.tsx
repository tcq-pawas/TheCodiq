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
      className="relative mb-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 shadow-2xl shadow-primary/10 backdrop-blur md:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,rgba(59,130,246,0.08))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-lg shadow-primary/10"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            About TheCodiQ
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-white md:text-3xl"
          >
            Building the Future with{" "}
            <span className="gradient-text">Innovative Technology</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-sm"
          >
            At TheCodiQ, we help startups, businesses, and enterprises transform
            ideas into powerful digital products. From modern web applications
            and mobile apps to AI-powered solutions, we deliver technology that
            drives measurable business growth.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base leading-8 text-gray-400 md:text-sm"
          >
            Our team combines technical expertise, creative thinking, and a
            customer-first approach to build scalable, secure, and future-ready
            software that helps businesses stay ahead in the digital world.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Web Apps", "Mobile Apps", "AI Solutions", "Cloud Systems"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300"
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
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl md:p-4"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(59,130,246,0.12))]" />

          <div className="relative rounded-[1.5rem] border border-white/10 bg-background/75 p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Our Impact
                </span>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Results That Build Trust
                </h3>
              </div>

              <div className="flex h-4 w-4 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-cyan-300 shadow-lg shadow-primary/30" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  className="group relative flex min-h-[50px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-1 text-center shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/[0.08]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="gradient-text text-lg font-bold md:text-lg">
                    {stat.value}
                  </h3>

                  <p className="mt-2 max-w-[120px] text-sm  uppercase  text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.07] p-6 shadow-xl shadow-primary/10"
            >
              <h4 className="text-md font-semibold text-white">
                Empowering Businesses Through Innovation
              </h4>

              <p className="mt-3 text-xs leading-7 text-gray-300">
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