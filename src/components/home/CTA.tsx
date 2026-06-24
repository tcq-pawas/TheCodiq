"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-bg-secondary">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-silver-primary mb-6">
            Ready to <span className="accent-gradient-text">get started</span>?
          </h2>
          <p className="text-lg text-secondary-text mb-12 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-blue-gradient text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 glow-button">
                Get Started
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 bg-gold-gradient text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 glow-button">
                View Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
