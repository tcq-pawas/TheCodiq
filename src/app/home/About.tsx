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
            <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10   shadow-black/30">

              {/* Rocket Image — base background layer */}
              <Image
                src="/images/rocket-image.png"
                alt="Rocket Background"
                fill
                priority
                unoptimized
                className="object-cover object-center scale-[1.18] pt-4"
              />

              {/* Brand color wash on top of the photo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(34,197,94,0.2),transparent_35%)] mix-blend-screen" />

              {/* Rotating Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full border border-white/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-120px] right-[20px] h-[300px] w-[300px] rounded-full border border-dashed border-brand-blue/20"
              />

              {/* Stars */}
              {sparks.map((position, index) => (
                <motion.span
                  key={position}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1.25, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`absolute ${position} h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]`}
                />
              ))}

              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#08111d]/10 via-[#08111d]/35 to-[#08111d]/95" />

              {/* Text Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-10 pb-16">

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold leading-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
                >
                  Excellence in Every Project
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5  text-slate-300"
                >
                  Delivering premium IT solutions worldwide with innovation, reliability, and exceptional customer satisfaction.
                </motion.p>

              </div>

              {/* Launch Ready Badge */}
              <div className="absolute left-8 top-8 z-20 rounded-2xl border border-white/10 bg-slate-700/40 px-6 py-3 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Launch Ready
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