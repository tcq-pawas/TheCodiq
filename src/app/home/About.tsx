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
    accent: "from-blue-100 to-blue-50 text-[#2563EB]",
  },
  {
    title: "Modern Tech",
    description:
      "Latest technologies and best practices. We stay at the forefront of technology innovation, utilizing cutting-edge frameworks, cloud-native architectures, and AI-powered tools to deliver future-proof solutions.",
    Icon: FaBolt,
    accent: "from-yellow-100 to-yellow-50 text-[#FBBF24]",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for your needs. Our dedicated support team is available 24/7 to ensure your applications run smoothly, with rapid response times and proactive monitoring.",
    Icon: FaHeadset,
    accent: "from-green-100 to-green-50 text-[#22C55E]",
  },
  {
    title: "Quality Code",
    description:
      "Clean, maintainable, and scalable solutions. We follow industry best practices, implement comprehensive testing, and maintain high code quality standards to ensure long-term success.",
    Icon: FaCode,
    accent: "from-blue-100 to-blue-50 text-[#2563EB]",
  },
  {
    title: "Secure Solutions",
    description:
      "Security is integrated into every stage of development. From secure coding standards and encrypted communication to regular security audits, we ensure your applications remain protected against modern cyber threats.",
    Icon: FaShieldAlt,
    accent: "from-yellow-100 to-yellow-50 text-[#FBBF24]",
  },
  {
    title: "Innovative Approach",
    description:
      "We combine creativity with technology to build future-ready digital products. Our team constantly explores emerging technologies and innovative strategies to deliver solutions that keep your business ahead of the competition.",
    Icon: FaLightbulb,
    accent: "from-green-100 to-green-50 text-[#22C55E]",
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
    <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden section-spacing-mobile sm:section-spacing-tablet lg:section-spacing-desktop" style={{ background: '#F0FDF4' }}>
      {/* Decorative blurs - smaller & clipped on mobile so they don't cause horizontal scroll */}
      <div className="absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-[#22C55E]/5 blur-[90px] sm:blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-[#2563EB]/5 blur-[90px] sm:blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div 
            className="mb-4 inline-flex items-center rounded-full border border-[#22C55E]/20 bg-gradient-to-r from-[#22C55E]/10 to-[#4ADE80]/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(34,197,94,.12)]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[9px] text-[#22C55E] tracking-wide font-semibold">
              WHY CHOOSE US
            </span>
          </motion.div>
          <SectionTitle
            title="Your Trusted Technology Partner"
            subtitle="We combine innovation, expertise, and a client-first approach to deliver digital solutions that create measurable business results."
            titleColor="text-[#111827]"
            subtitleColor="text-[#6B7280]"
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
            <div className="relative h-full min-h-[420px] xs:min-h-[460px] sm:min-h-[520px] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[28px] border border-[#CBD5E1] bg-white shadow-[0_15px_45px_rgba(30,64,175,.08)] sm:shadow-[0_25px_80px_rgba(37,99,235,.08)]">

              {/* Background - object-top stops the top of the rocket getting cropped */}
              <Image
                src="/images/image3.png"
                alt="Rocket"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[50%_15%]"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/90" />

              {/* Launch Ready Badge */}
              <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4 md:left-7 md:top-7">
                <div
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full border border-[#CBD5E1] bg-white/80 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-5 backdrop-blur-2xl shadow-[0_10px_30px_rgba(37,99,235,.08)] ring-1 ring-white/50"
                >
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb] shadow-[0_0_18px_rgba(59,130,246,.45)]">
                    <FaRocket className="text-[9px] sm:text-xs md:text-sm text-white -rotate-45" />
                  </div>

                  <span className="text-[8px] sm:text-[10px] md:text-[9px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#0F172A] whitespace-nowrap">
                    Launch Ready
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end">

                {/* Text */}
                <div className="px-4 sm:px-5 md:px-8 text-center">
                  <h2 className="text-[22px] leading-[1.15] font-semibold xs:text-[24px] sm:text-[28px] md:text-[24px] text-[#111827]">
                    Excellence in
                    <br />
                    Every <span className="text-[#22C55E]">Project Idea</span>
                  </h2>

                  <p className="mx-auto mt-2 sm:mt-3 md:mt-4 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] text-[12px] sm:text-[13px] md:text-[12px] leading-5 md:leading-6 text-[#6B7280]">
                    Delivering premium IT solutions worldwide with innovation,
                    reliability, and exceptional customer satisfaction.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-5 sm:mt-6 md:mt-7 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-2 px-3 sm:px-4 pb-4">

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-[#CBD5E1] bg-white px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(37,99,235,.08)] hover:shadow-[0_25px_70px_rgba(37,99,235,.12)] transition-all duration-300 hover:-translate-y-1">
                    <Users className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-[#2563EB]" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#111827]">
                      250+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-[#6B7280]">
                      Happy Clients
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-[#CBD5E1] bg-white px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(251,191,36,.08)] hover:shadow-[0_25px_70px_rgba(251,191,36,.12)] transition-all duration-300 hover:-translate-y-1">
                    <Rocket className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-[#FBBF24]" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#111827]">
                      400+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-[#6B7280]">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-[#CBD5E1] bg-white px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(34,197,94,.08)] hover:shadow-[0_25px_70px_rgba(34,197,94,.12)] transition-all duration-300 hover:-translate-y-1">
                    <Award className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-[#22C55E]" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#111827]">
                      50+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-[#6B7280]">
                      Experts
                    </p>
                  </div>

                  <div className="rounded-[14px] sm:rounded-[16px] md:rounded-[18px] border border-[#CBD5E1] bg-white px-2 py-2.5 sm:py-3 md:py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(37,99,235,.08)] hover:shadow-[0_25px_70px_rgba(37,99,235,.12)] transition-all duration-300 hover:-translate-y-1">
                    <Globe className="mx-auto mb-1.5 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-[26px] md:w-[26px] text-[#2563EB]" />
                    <h3 className="text-center text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#111827]">
                      25+
                    </h3>
                    <p className="mt-0.5 sm:mt-1 text-center text-[9px] sm:text-[10px] md:text-[11px] leading-4 text-[#6B7280]">
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
                          ? "border-[#22C55E] bg-white shadow-[0_20px_60px_rgba(34,197,94,.08)]"
                          : "border-[#CBD5E1] bg-white hover:border-[#22C55E]/50 hover:shadow-[0_15px_45px_rgba(34,197,94,.08)]"
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
                              } flex items-center justify-center ring-1 ring-white/50 transition-all duration-300 ${isActive ? "scale-105 shadow-lg" : ""
                              }`}
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3
                              className={`text-[14px] font-semibold transition-colors ${isActive ? "text-[#22C55E]" : "text-[#111827]"
                                }`}
                            >
                              {feature.title}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="shrink-0 text-[#6B7280]"
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
                              className={`text-[#6B7280] text-[12px] leading-relaxed ${isMobileExpanded ? "" : "line-clamp-2"
                                } sm:line-clamp-none`}
                            >
                              {feature.description}
                            </p>

                            <button
                              type="button"
                              onClick={(e) => toggleMobileAnswer(e, index)}
                              className="mt-1.5 text-xs font-semibold text-[#22C55E] sm:hidden"
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