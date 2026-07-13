'use client';



import Image from 'next/image';

import Link from 'next/link';

import { motion } from 'framer-motion';



export default function Hero() {

  return (

    <section className="relative overflow-hidden py-10 bg-black">

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

        <div className="hero-container bg-black/80 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl shadow-black/50 relative overflow-hidden">

          {/* Glowing black effect on banner */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-bg-primary to-black" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          </div>

          <div  className="relative z-10 grid items-center gap-12 lg:gap-20 px-4 py-8 lg:px-6 lg:py-10 xl:px-8 xl:py-12 lg:grid-cols-2">

            {/* Left Content */}

            <motion.div

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.7 }}

            >

              <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md">

                <span className="text-sm font-medium text-silver-primary">

                  🚀 Building Digital Excellence

                </span>

              </div>



              <h1 className="mt-8 text-5xl font-bold leading-tight text-silver-primary md:text-4xl lg:text-5xl">

                Build AI-Powered Software That

                <br />

                <span className="accent-gradient-text">Accelerates Business Growth</span>

              </h1>



              <p className="mt-6 max-w-2xl  leading-relaxed text-secondary-text">

                Custom Web Applications, Mobile Apps, AI Solutions, Cloud Infrastructure, and Digital Transformation Services for Startups, Enterprises, and Growing Businesses.

              </p>



              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link

                  href="/contact"

                  className="rounded-full bg-blue-gradient px-8 py-4 text-center font-medium text-white backdrop-blur-md transition-all duration-300 hover:opacity-90 glow-button"

                >

                  Get Free Consultation

                </Link>

                <Link

                  href="/portfolio"

                  className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-8 py-4 text-center font-medium text-silver-primary backdrop-blur-md transition-all duration-300 hover:bg-brand-gold/20"

                >

                  View Our Work

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

              className="relative flex items-center justify-center lg:-mt-15 xl:-mt-16 2xl:-mt-20"

              initial={{ opacity: 0, scale: 0.85 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 0.8 }}

            >

              {/* Outer div handles float + bob */}

              <motion.div

                className="relative h-[500px] w-[500px]"

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

                  src="images/hero-banner.png"

                  alt="TheCodiQ Global - Premium Software Development"

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