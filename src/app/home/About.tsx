"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Expert Team",
      description: "Highly skilled professionals with years of experience in building enterprise-grade solutions. Our team consists of certified developers, architects, and consultants who bring deep expertise across multiple technologies and industries.",
      icon: "👨‍💻",
    },
    {
      title: "Modern Tech",
      description: "Latest technologies and best practices. We stay at the forefront of technology innovation, utilizing cutting-edge frameworks, cloud-native architectures, and AI-powered tools to deliver future-proof solutions.",
      icon: "⚡",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for your needs. Our dedicated support team is available 24/7 to ensure your applications run smoothly, with rapid response times and proactive monitoring.",
      icon: "🛟",
    },
    {
      title: "Quality Code",
      description: "Clean, maintainable, and scalable solutions. We follow industry best practices, implement comprehensive testing, and maintain high code quality standards to ensure long-term success.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionTitle
            title="Why Choose Us"
            subtitle="We deliver excellence through innovation and expertise"
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature image/card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-bg-card to-bg-panel border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-9xl mb-6">🚀</div>
                  <p className="text-silver-primary text-xl font-semibold mb-2">Excellence in Every Project</p>
                  <p className="text-secondary-text">
                    Delivering premium IT solutions worldwide
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-brand-blue/20 blur-xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-brand-green/20 blur-xl" />
            </div>
          </motion.div>

          {/* Right side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeIndex === index
                        ? "border-brand-blue bg-bg-card/80 backdrop-blur-xl shadow-lg shadow-brand-blue/20"
                        : "border-white/8 bg-bg-card/30 backdrop-blur-sm hover:border-brand-blue/50"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                            activeIndex === index
                              ? "bg-blue-gradient shadow-lg"
                              : "bg-bg-panel"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-md font-semibold transition-colors ${
                              activeIndex === index
                                ? "text-brand-blue"
                                : "text-silver-primary"
                            }`}
                          >
                            {feature.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: activeIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-silver-secondary"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeIndex === index ? "auto" : 0,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-secondary-text text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
