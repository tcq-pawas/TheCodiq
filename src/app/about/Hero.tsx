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
      className="relative mb-16 sm:mb-20 lg:mb-24 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12 shadow-2xl shadow-primary/10 backdrop-blur md:px-10 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
      style={{
        background: 'linear-gradient(135deg, rgba(13,15,18,0.95) 0%, rgba(21,26,33,0.9) 50%, rgba(13,15,18,0.95) 100%)',
        perspective: '1000px',
      }}
    >
      {/* 3D Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-gold/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
        
        {/* Strong ambient glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/30 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern for 3D surface effect */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'rotateX(15deg) rotateY(-10deg)',
        }} />
        
        {/* Glass-like overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Top highlight line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-blue/70 to-transparent shadow-[0_0_30px_rgba(30,136,255,0.8)]" />
      
      {/* Bottom shadow line */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-black/70 to-transparent shadow-[0_0_30px_rgba(0,0,0,0.8)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-8 right-12 w-4 h-4 bg-brand-blue/60 rounded-full blur-md animate-pulse shadow-[0_0_25px_rgba(30,136,255,0.8)]" />
      <div className="absolute bottom-12 left-8 w-5 h-5 bg-brand-gold/60 rounded-full blur-md animate-pulse shadow-[0_0_25px_rgba(247,166,0,0.8)]" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-brand-blue/50 rounded-full blur-md animate-pulse shadow-[0_0_25px_rgba(30,136,255,0.7)]" style={{ animationDelay: '3s' }} />

      <div className="relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div style={{ transform: 'translateZ(20px)' }}>
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 sm:px-4 text-[11px] font-medium text-primary shadow-lg shadow-primary/10 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 20px rgba(30,136,255,0.4), 0 0 40px rgba(30,136,255,0.2)',
            }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,1)]" />
            Our Story
          </motion.span>

          {/*
            Fixed the inverted scale (was text-4xl on mobile shrinking to
            md:text-3xl on desktop). Now it scales up properly across
            every breakpoint: smaller on phones, largest on desktop.
          */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 sm:mt-6 max-w-2xl text-[26px] leading-[1.2]  sm:leading-tight  font-bold text-white"
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
            className="mt-4 sm:mt-6 max-w-xl text-[12px] leading-7 sm:leading-8 text-secondary-text"
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
            className="mt-3 sm:mt-4 max-w-xl text-[12px] leading-7 sm:leading-8 text-gray-400"
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

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.05] p-2.5 sm:p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl md:p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            transform: 'translateZ(30px) rotateY(-5deg)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(30,136,255,0.2)',
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(59,130,246,0.12))]" />
          
          {/* Additional 3D depth layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-gold/10 opacity-60" />
          <div className="absolute inset-0 backdrop-blur-sm" />

          <div className="relative rounded-[1.1rem] sm:rounded-[1.5rem] border border-white/10 bg-background/75 p-4 sm:p-5 md:p-6 backdrop-blur-md">
            <div className="mb-5 sm:mb-6 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-[9px]  font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-primary shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-sm">
                  Our Impact
                </span>

                <h3 className="mt-2.5 sm:mt-3  font-semibold text-white"
                  style={{
                    textShadow: '0 2px 15px rgba(0,0,0,0.5)',
                  }}
                >
                  Results That Build Trust
                </h3>
              </div>

              {/*
                Fixed: outer badge was h-4 w-4 while the inner gradient
                block was h-6 w-6 — the icon overflowed its own container.
                Outer is now sized to comfortably contain the inner block
                at every breakpoint.
              */}
              <div>
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-gradient-to-br from-primary to-cyan-300 shadow-lg shadow-primary/40" style={{
                  boxShadow: '0 0 20px rgba(30,136,255,0.5)',
                }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  className="group relative flex min-h-[92px] sm:min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/[0.08] hover:shadow-2xl hover:shadow-primary/25"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="gradient-text text-lg font-bold"
                    style={{
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 max-w-[120px] text-[10px]  uppercase tracking-wide text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-4 sm:mt-5 rounded-2xl border border-primary/20 bg-primary/[0.07] p-4 sm:p-6 shadow-xl shadow-primary/10 backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(30,136,255,0.07) 0%, rgba(30,136,255,0.03) 100%)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(30,136,255,0.2)',
              }}
            >
              <h4 className="text-sm sm:text-base font-semibold text-white"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                Empowering Businesses Through Innovation
              </h4>

              <p className="mt-2.5 sm:mt-3 text-[12px] leading-6 sm:leading-7 text-secondary-text">
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