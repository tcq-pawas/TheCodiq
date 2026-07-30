'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 20%, #fefcf7 45%, #f8fff9 70%, #ffffff 100%)' }}>
      {/* Soft radial gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(37,99,235,.08)] backdrop-blur-xl sm:rounded-[32px]">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]">
                <FaRocket className="text-[#2563EB] text-sm sm:text-base" />

                <span className="text-xs font-semibold text-[#2563EB] sm:text-sm">
                  Building Digital Excellence
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:mt-8 lg:text-3xl">
                <span className="text-[#0F172A]">
                  Build AI-Powered Software That
                </span>
                <br className="hidden sm:block" />
                <span 
                  className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Accelerates Business Growth
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl  leading-relaxed text-[#64748B]  text-[12px] lg:mx-0 lg:mt-6">
                Custom Web Applications, Mobile Apps, AI Solutions, Cloud
                Infrastructure, and Digital Transformation Services for
                Startups, Enterprises, and Growing Businesses.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:mt-10">
                <Link
                  href="/contact"
                  className="rounded-full px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(37,99,235,.12)] sm:px-8 sm:py-4"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 20px 60px rgba(37,99,235,.08)' }}
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-full border border-[#F59E0B] bg-white px-6 py-3 text-center font-medium text-[#0F172A] transition-all duration-300 hover:bg-[#FFF7ED] sm:px-8 sm:py-4"
                >
                  View Our Work
                </Link>
              </div>

              {/* Trusted Companies */}
              <div className="mt-10 w-full lg:mt-16">
                <p className="mb-5 text-center text-xs text-[#64748B] sm:text-sm lg:text-left">
                  Trusted by innovative companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] text-[#64748B] lg:justify-start">
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

