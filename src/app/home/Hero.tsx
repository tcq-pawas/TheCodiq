'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-6 sm:py-8 lg:py-10">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="hero-container relative overflow-hidden rounded-[24px] border border-white/10 bg-black/80 shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-[32px]">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-bg-primary to-black" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 grid items-center gap-8 px-5 py-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-20 lg:px-6 lg:py-10 xl:px-8 xl:py-12">
            {/* Left Content */}
            <motion.div
              className="order-1 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md">
                <FaRocket className="text-brand-blue text-sm sm:text-base" />

                <span className="text-xs font-medium text-silver-primary sm:text-sm">
                  Building Digital Excellence
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-3xl font-bold leading-tight text-silver-primary sm:text-4xl md:text-5xl lg:mt-8 lg:text-3xl">
                Build AI-Powered Software That
                <br className="hidden sm:block" />
                <span className="accent-gradient-text">
                  Accelerates Business Growth
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl  leading-relaxed text-secondary-text  text-[12px] lg:mx-0 lg:mt-6">
                Custom Web Applications, Mobile Apps, AI Solutions, Cloud
                Infrastructure, and Digital Transformation Services for
                Startups, Enterprises, and Growing Businesses.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-10">
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-gradient px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:opacity-90 glow-button sm:px-8 sm:py-4"
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-6 py-3 text-center font-medium text-silver-primary transition-all duration-300 hover:bg-brand-gold/20 sm:px-8 sm:py-4"
                >
                  View Our Work
                </Link>
              </div>

              {/* Trusted Companies */}
              <div className="mt-10 w-full lg:mt-16">
                <p className="mb-5 text-center text-xs text-silver-secondary sm:text-sm lg:text-left">
                  Trusted by innovative companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] text-secondary-text lg:justify-start">
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
              className="order-2 relative mt-8 flex items-center justify-center lg:order-2 lg:mt-0 lg:-mt-15 xl:-mt-16 2xl:-mt-20"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative h-[230px] w-[230px] sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px] lg:h-[500px] lg:w-[500px]"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/images/hero-banner.png"
                  alt="TheCodiQ Global - Premium Software Development and AI Solutions Hero Banner"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

