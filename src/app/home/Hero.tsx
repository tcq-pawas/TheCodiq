'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[88px] pb-6 sm:pt-[96px] sm:pb-8 lg:pt-[104px] lg:pb-10 section-spacing-mobile sm:section-spacing-tablet lg:section-spacing-desktop" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)' }}>
      {/* Soft radial gradients with improved opacity */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FBBF24]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="relative overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(37,99,235,.08)] sm:rounded-[32px]">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fcfdff] to-white" />
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
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaRocket className="text-[#2563EB] text-sm sm:text-base" />

                <span className="text-xs font-semibold text-[#2563EB] sm:text-sm">
                  Building Digital Excellence
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:mt-8 lg:text-3xl">
                <span className="text-[#111827]">
                  Build AI-Powered Software That
                </span>
                <br className="hidden sm:block" />
                <span 
                  className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#FBBF24] to-[#22C55E] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Accelerates Business Growth
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#6B7280] text-[12px] lg:mx-0 lg:mt-6">
                Custom Web Applications, Mobile Apps, AI Solutions, Cloud
                Infrastructure, and Digital Transformation Services for
                Startups, Enterprises, and Growing Businesses.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="glow-button rounded-[14px] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:-translate-y-1 sm:px-8 sm:py-4 block"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 20px 60px rgba(37,99,235,.08)' }}
                  >
                    Get Free Consultation
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/portfolio"
                    className="rounded-[14px] border-2 border-[#FBBF24] bg-white px-6 py-3 text-center font-medium text-[#111827] transition-all duration-300 hover:bg-[#FFF7ED] hover:shadow-[0_8px_24px_rgba(251,191,36,0.2)] sm:px-8 sm:py-4 block"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>

              {/* Trusted Companies */}
              <div className="mt-10 w-full lg:mt-16">
                <p className="mb-5 text-center text-xs text-[#6B7280] sm:text-sm lg:text-left">
                  Trusted by innovative companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] text-[#6B7280] lg:justify-start">
                  <span className="hover:text-[#2563EB] transition-colors cursor-default">Linear</span>
                  <span className="hover:text-[#2563EB] transition-colors cursor-default">HubSpot</span>
                  <span className="hover:text-[#2563EB] transition-colors cursor-default">Dropbox</span>
                  <span className="hover:text-[#2563EB] transition-colors cursor-default">Coinbase</span>
                  <span className="hover:text-[#2563EB] transition-colors cursor-default">Grammarly</span>
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
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-[#FBBF24]/20 to-[#22C55E]/20 blur-3xl rounded-full" />
                <Image
                  src="/images/hero-banner.png"
                  alt="TheCodiQ Global - Premium Software Development and AI Solutions Hero Banner"
                  fill
                  priority
                  sizes="(min-width: 1536px) 800px, (min-width: 1280px) 700px, (min-width: 1024px) 600px, (min-width: 768px) 500px, 100vw"
                  className="object-contain relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

