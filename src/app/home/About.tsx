"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";
import {
  FaBolt,
  FaCode,
  FaHeadset,
  FaUserTie,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const features = [
  {
    title: "Expert Team",
    description:
      "Highly skilled professionals with years of experience in building enterprise-grade solutions. Our team consists of certified developers, architects, and consultants who bring deep expertise across multiple technologies and industries.",
    Icon: FaUserTie,
    accent: "from-brand-blue/25 to-brand-blue/5 text-brand-blue",
  },
  {
    title: "Modern Tech",
    description:
      "Latest technologies and best practices. We stay at the forefront of technology innovation, utilizing cutting-edge frameworks, cloud-native architectures, and AI-powered tools to deliver future-proof solutions.",
    Icon: FaBolt,
    accent: "from-brand-gold/25 to-brand-gold/5 text-brand-gold",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for your needs. Our dedicated support team is available 24/7 to ensure your applications run smoothly, with rapid response times and proactive monitoring.",
    Icon: FaHeadset,
    accent: "from-brand-green/25 to-brand-green/5 text-brand-green",
  },
  {
    title: "Quality Code",
    description:
      "Clean, maintainable, and scalable solutions. We follow industry best practices, implement comprehensive testing, and maintain high code quality standards to ensure long-term success.",
    Icon: FaCode,
    accent: "from-silver-primary/20 to-white/5 text-silver-primary",
  },
];

const sparks = [
  "left-[18%] top-[22%]",
  "left-[68%] top-[18%]",
  "left-[80%] top-[44%]",
  "left-[22%] top-[72%]",
  "left-[58%] top-[78%]",
];



export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] rounded-3xl border border-white/10 overflow-hidden bg-[radial-gradient(circle_at_30%_25%,rgba(0,129,255,0.18),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(51,214,159,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-2xl shadow-black/20">
              <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />

              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-blue/25"
              />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

              {sparks.map((position, index) => (
                <motion.span
                  key={position}
                  aria-hidden="true"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: index * 0.28,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${position} h-2 w-2 rounded-full bg-silver-primary shadow-[0_0_20px_rgba(255,255,255,0.8)]`}
                />
              ))}

              <div className="absolute inset-0 flex flex-col items-center justify-start pt-4">
  {/* Bigger Rocket */}
  <div className="relative h-[430px] w-[430px]">
    <Image
      src="/images/image-2.png"
      alt="Rocket"
      fill
      priority
      unoptimized
      className="object-contain scale-[1.35]"
    />
  </div>

  {/* Text */}
  <div className="-mt-6 text-center">
    <h3 className="text-4xl font-bold text-silver-primary">
      Excellence in Every Project
    </h3>

    <p className="mt-3 text-lg text-secondary-text">
      Delivering premium IT solutions worldwide
    </p>
  </div>
</div>

              <div className="absolute left-8 top-8 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase text-secondary-text">
                  Launch Ready
                </p>
              </div>
              <div className="absolute bottom-8 right-8 rounded-2xl border border-brand-green/20 bg-brand-green/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-sm font-semibold text-brand-green">
                  Scalable Delivery
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.Icon;
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <button
                      type="button"
                      className={`w-full text-left rounded-2xl border transition-all duration-300 ${isActive
                        ? "border-brand-blue bg-bg-card/80 backdrop-blur-xl shadow-lg shadow-brand-blue/20"
                        : "border-white/8 bg-bg-card/30 backdrop-blur-sm hover:border-brand-blue/50"
                        }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center ring-1 ring-white/10 transition-all duration-300 ${isActive ? "scale-105 shadow-lg" : ""
                              }`}
                          >
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3
                              className={`text-base font-semibold transition-colors ${isActive ? "text-brand-blue" : "text-silver-primary"
                                }`}
                            >
                              {feature.title}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="shrink-0 text-silver-secondary"
                          >
                            <FiChevronDown className="h-5 w-5" aria-hidden="true" />
                          </motion.div>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-secondary-text text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
