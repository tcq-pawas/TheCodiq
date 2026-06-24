'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-brand-blue/10 blur-[140px]" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-gold/5 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="hero-container">
          <div className="grid items-center gap-12 lg:gap-20 px-4 py-16 lg:px-8 lg:py-24 xl:px-12 xl:py-32 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md">
                <span className="text-sm font-medium text-silver-primary">
                  🚀 Announcing TheCodiQ Platform
                </span>
              </div>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-silver-primary md:text-6xl lg:text-7xl">
                Empower Your
                <br />
                <span className="accent-gradient-text">Digital Future</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-text">
                Premium IT solutions including web development, mobile applications, AI-powered
                systems, cloud infrastructure, and digital transformation services for modern
                businesses.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-8 py-4 text-center font-medium text-silver-primary backdrop-blur-md transition-all duration-300 hover:bg-brand-gold/20"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-16">
                <p className="mb-6 text-sm text-silver-secondary">Trusted by innovative companies</p>
                <div className="flex flex-wrap gap-8 text-secondary-text">
                  <span>Linear</span>
                  <span>HubSpot</span>
                  <span>Dropbox</span>
                  <span>Coinbase</span>
                  <span>Grammarly</span>
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
              <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-gradient opacity-20 blur-[120px]" />

              {/* Outer div handles float + bob */}
              <motion.div
                className="relative h-[500px] w-[500px]"
                animate={{
                  y: [0, -15, 0],
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
                    className="object-contain [mask-image:radial-gradient(circle,_rgba(0,0,0,1)_55%,_rgba(0,0,0,0)_70%)]"
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