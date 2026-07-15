"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";
import {
  FaBolt,
  FaCode,
  FaHeadset,
  FaUserTie,
  FaGlobe,
  FaRocket,
  FaTrophy,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import {
  Users,
  Rocket,
  Award,
  Globe,
} from "lucide-react";

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
  {
  title: "Secure Solutions",
  description:
    "Security is integrated into every stage of development. From secure coding standards and encrypted communication to regular security audits, we ensure your applications remain protected against modern cyber threats.",
  Icon: FaShieldAlt,
  accent: "from-red-500/20 to-red-500/5 text-red-400",
},
{
  title: "Innovative Approach",
  description:
    "We combine creativity with technology to build future-ready digital products. Our team constantly explores emerging technologies and innovative strategies to deliver solutions that keep your business ahead of the competition.",
  Icon: FaLightbulb,
  accent: "from-yellow-400/20 to-yellow-400/5 text-yellow-400",
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
            <div className="relative h-[520px] md:h-[800px] overflow-hidden rounded-[24px] md:rounded-[28px] border border-white/10 bg-[#08111d] shadow-[0_25px_80px_rgba(0,0,0,.45)]">

              {/* Background */}
              <Image
                src="/images/image3.png"
                alt="Rocket"
                fill
                priority
                className="object-cover object-center scale-[1.03]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/15 via-[#020617]/30 to-[#020617]/95" />

              {/* Launch Ready Badge */}
              <div className="absolute left-4 top-4 z-20 md:left-7 md:top-7">
                <div
                  className="flex items-center gap-2 md:gap-3 rounded-full border border-[#3b82f6]/30 bg-gradient-to-r
        from-[#2563eb]/25 via-[#1e3a8a]/20 to-[#0b1220]/90 px-3 py-2 md:px-5 backdrop-blur-2xl
        shadow-[0_0_30px_rgba(37,99,235,0.22)] ring-1 ring-white/5"
                >
                  <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb] shadow-[0_0_18px_rgba(59,130,246,.45)]">
                    <FaRocket className="text-xs md:text-sm text-white -rotate-45" />
                  </div>

                  <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    Launch Ready
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end">

                {/* Text */}
                <div className="px-5 md:px-8 text-center">

                  <h2 className="text-[28px] leading-[1.08] font-semibold md:text-[34px] text-white">
                    Excellence in
                    <br />
                    Every <span className="text-brand-blue">Project Idea</span>
                  </h2>

                  <p className="mx-auto mt-3 md:mt-4 max-w-[320px] md:max-w-[360px] text-[13px] md:text-[14px] leading-5 md:leading-6 text-slate-300">
                    Delivering premium IT solutions worldwide with innovation,
                    reliability, and exceptional <br/> customer satisfaction.
                  </p>

                </div>

                {/* Stats */}
                <div className="mt-6 md:mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 px-4 pb-4">

                  <div className="rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-3 md:py-4 backdrop-blur-xl">

                    <Users className="mx-auto mb-2 h-6 w-6 md:h-[26px] md:w-[26px] text-brand-blue" />

                    <h3 className="text-center text-[16px] md:text-[18px] font-bold text-white">
                      250+
                    </h3>

                    <p className="mt-1 text-center text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Happy Clients
                    </p>

                  </div>

                  <div className="rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-3 md:py-4 backdrop-blur-xl">

                    <Rocket className="mx-auto mb-2 h-6 w-6 md:h-[26px] md:w-[26px] text-violet-500" />

                    <h3 className="text-center text-[16px] md:text-[18px] font-bold text-white">
                      400+
                    </h3>

                    <p className="mt-1 text-center text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Projects Delivered
                    </p>

                  </div>

                  <div className="rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-3 md:py-4 backdrop-blur-xl">

                    <Award className="mx-auto mb-2 h-6 w-6 md:h-[26px] md:w-[26px] text-amber-400" />

                    <h3 className="text-center text-[16px] md:text-[18px] font-bold text-white">
                      50+
                    </h3>

                    <p className="mt-1 text-center text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Experts
                    </p>

                  </div>

                  <div className="rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-3 md:py-4 backdrop-blur-xl">

                    <Globe className="mx-auto mb-2 h-6 w-6 md:h-[26px] md:w-[26px] text-green-500" />

                    <h3 className="text-center text-[16px] md:text-[18px] font-bold text-white">
                      25+
                    </h3>

                    <p className="mt-1 text-center text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Countries Served
                    </p>

                  </div>

                </div>

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