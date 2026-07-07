'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-[260px] w-[260px] rounded-full bg-brand-blue/10 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
        <div className="absolute -right-32 top-20 h-[280px] w-[280px] rounded-full bg-brand-gold/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/5 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="hero-container">
          <div className="grid items-center gap-10 px-2 py-10 sm:px-4 sm:py-14 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24 xl:px-12 xl:py-32">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-medium text-silver-primary sm:text-sm">
                  🚀 Announcing TheCodiQ Platform
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-silver-primary sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Empower Your
                <br />
                <span className="accent-gradient-text">Digital Future</span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-secondary-text sm:mt-6 lg:mx-0">
                Premium IT solutions including web development, mobile applications, AI-powered
                systems, cloud infrastructure, and digital transformation services for modern
                businesses.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-6 py-3 text-center font-medium text-silver-primary backdrop-blur-md transition-all duration-300 hover:bg-brand-gold/20"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-10 sm:mt-14 lg:mt-16">
                <p className="mb-5 text-sm font-medium text-silver-secondary sm:mb-6">
                  Trusted by innovative companies
                </p>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-secondary-text sm:gap-x-8 lg:justify-start">
                  <span className="text-sm">Linear</span>
                  <span className="text-sm">HubSpot</span>
                  <span className="text-sm">Dropbox</span>
                  <span className="text-sm">Coinbase</span>
                  <span className="text-sm">Grammarly</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute h-[260px] w-[260px] rounded-full bg-blue-gradient opacity-20 blur-[90px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />

              {/* Outer div handles float + bob */}
              <motion.div
                className="relative aspect-square w-full max-w-[260px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px]"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Inner div handles the continuous spin independently */}
                <motion.div
                  className="relative h-full w-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Image
                    src="/images/hero-cubes.png"
                    alt="3D Metallic Cubes"
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 500px"
                    className="object-contain [mask-image:radial-gradient(circle,_rgba(0,0,0,1)_55%,_rgba(0,0,0,0)_72%)]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}