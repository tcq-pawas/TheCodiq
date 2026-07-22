"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";
import {
  FaBolt,
  FaCode,
  FaHeadset,
  FaUserTie,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import { Users, Rocket, Award, Globe } from "lucide-react";

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

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Tracks which feature descriptions are expanded to full text on small
  // screens. On sm: and up, the full description always shows regardless.
  const [expandedMobile, setExpandedMobile] = useState<Record<number, boolean>>({});

  const toggleFeature = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const toggleMobileAnswer = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // don't let this bubble up and collapse the accordion item
    setExpandedMobile((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative blurs - smaller & clipped on mobile so they don't cause horizontal scroll */}
      <div className="absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-brand-blue/10 blur-[90px] sm:blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-brand-gold/10 blur-[90px] sm:blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionTitle
            title="Why Choose Us"
            subtitle="We deliver excellence through innovation and expertise"
          />
        </motion.div>

        {/*
          items-stretch (instead of items-center) makes both grid columns
          automatically match the height of the TALLEST column — no fixed
          height needed anywhere. The accordion drives the height; the
          image card just stretches to fit whatever that is.
        */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 lg:items-stretch">
          {/* ---------------- Image / Stats Card ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[420px] xs:min-h-[460px] sm:min-h-[520px]"
          >
            <div className="relative h-full min-h-[420px] xs:min-h-[460px] sm:min-h-[520px] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[28px] border border-white/10 bg-[#08111d] shadow-[0_15px_50px_rgba(0,0,0,.4)] sm:shadow-[0_25px_80px_rgba(0,0,0,.45)]">

              {/* Background - object-top stops the top of the rocket getting cropped */}
              <Image
                src="/images/image3.png"
                alt="Rocket"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[50%_15%]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/15 via-[#020617]/30 to-[#020617]/95" />

              {/* Launch Ready Badge */}
              <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4 md:left-7 md:top-7">
                <div
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full border border-[#3b82f6]/30 bg-gradient-to-r
        from-[#2563eb]/25 via-[#1e3a8a]/20 to-[#0b1220]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-5 backdrop-blur-2xl
        shadow-[0_0_30px_rgba(37,99,235,0.22)] ring-1 ring-white/5"
                >
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb] shadow-[0_0_18px_rgba(59,130,246,.45)]">
                    <FaRocket className="text-[9px] sm:text-xs md:text-sm text-white -rotate-45" />
                  </div>

                  <span className="text-[8px] sm:text-[10px] md:text-[9px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white whitespace-nowrap">
                    Launch Ready
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end">

                {/* Text */}
                <div className="px-4 sm:px-5 md:px-8 text-center">
                  <h2 className="text-[22px] leading-[1.15] font-semibold xs:text-[24px] sm:text-[28px] md:text-[24px] text-white">
                    Excellence in
                    <br />
                    Every <span className="text-brand-blue">Project Idea</span>
                  </h2>

                  <p className="mx-auto mt-2 sm:mt-3 md:mt-4 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] text-[12px] sm:text-[13px] md:text-[12px] leading-5 md:leading-6 text-white">
                    Delivering premium IT solutions worldwide with innovation,
                    reliability, and exceptional customer satisfaction.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-5 sm:mt-6 md:mt-7 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-2 px-3 sm:px-4 pb-4">

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl">
                    <Users className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-brand-blue" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white">
                      250+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Happy Clients
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl">
                    <Rocket className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-violet-500" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white">
                      400+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl">
                    <Award className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-amber-400" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white">
                      50+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Experts
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-white/10 bg-[#0B1324]/80 px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl">
                    <Globe className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-green-500" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white">
                      25+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-slate-400">
                      Countries Served
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------------- Feature Accordion ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.Icon;
                const isActive = activeIndex === index;
                const isMobileExpanded = !!expandedMobile[index];

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    {/*
                      Changed from <button> to a <div role="button"> because
                      the "Know more" toggle below is also a <button> —
                      HTML doesn't allow nesting interactive elements
                      (<button> inside <button>), which throws a hydration
                      error. This div is fully keyboard-accessible via
                      role="button", tabIndex, and onKeyDown, same pattern
                      as the FAQ component.
                    */}
                    <div
                      role="button"
                      tabIndex={0}
                      className={`w-full text-left rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                          ? "border-brand-blue bg-bg-card/80 backdrop-blur-xl shadow-lg shadow-brand-blue/20"
                          : "border-white/8 bg-bg-card/30 backdrop-blur-sm hover:border-brand-blue/50"
                        }`}
                      onClick={() => toggleFeature(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFeature(index);
                        }
                      }}
                      aria-expanded={isActive}
                    >
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div
                            className={`h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.accent
                              } flex items-center justify-center ring-1 ring-white/10 transition-all duration-300 ${isActive ? "scale-105 shadow-lg" : ""
                              }`}
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3
                              className={`text-[14px] font-semibold transition-colors ${isActive ? "text-brand-blue" : "text-silver-primary"
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
                            <FiChevronDown className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
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
                          <div className="pt-3 sm:pt-4">
                            {/*
                              Mobile: description clamped to 2 lines with a
                              "Know more" toggle underneath (sm:hidden).
                              Desktop/tablet (sm: and up): full text always
                              shows, clamp removed, toggle hidden.
                            */}
                            <p
                              className={`text-secondary-text text-[12px] leading-relaxed ${isMobileExpanded ? "" : "line-clamp-2"
                                } sm:line-clamp-none`}
                            >
                              {feature.description}
                            </p>

                            <button
                              type="button"
                              onClick={(e) => toggleMobileAnswer(e, index)}
                              className="mt-1.5 text-xs font-semibold text-brand-blue sm:hidden"
                            >
                              {isMobileExpanded ? "Show less" : "Know more"}
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
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