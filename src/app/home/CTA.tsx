"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1220 0%, #172554 100%)' }}>
      {/* Soft radial gradients for dark background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBBF24]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[120px]" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to <span 
              className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >get started</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button 
                className="px-8 py-4 text-white font-medium rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(37,99,235,.12)]"
                style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 20px 60px rgba(37,99,235,.08)' }}
              >
                Get Started
              </button>
            </Link>
            <Link href="/portfolio">
              <button 
                className="px-8 py-4 border border-[#FBBF24] bg-white text-[#111827] font-medium rounded-full transition-all duration-300 hover:bg-[#FFF7ED]"
              >
                View Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
