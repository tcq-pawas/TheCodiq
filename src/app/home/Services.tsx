"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiPenTool,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";
import { serviceDetails } from "@/data/serviceDetails";

const serviceIconRules = [
  { keywords: ["web", "website", "frontend", "software"], Icon: FiCode },
  { keywords: ["mobile", "app", "ios", "android"], Icon: FiSmartphone },
  { keywords: ["ai", "artificial", "machine", "automation"], Icon: FiCpu },
  { keywords: ["cloud", "devops", "aws", "infrastructure"], Icon: FiCloud },
  { keywords: ["backend", "api", "server"], Icon: FiServer },
  { keywords: ["data", "database"], Icon: FiDatabase },
  { keywords: ["ui", "ux", "design"], Icon: FiPenTool },
  { keywords: ["security", "secure"], Icon: FiShield },
  { keywords: ["marketing", "growth", "seo"], Icon: FiTrendingUp },
];

const fallbackServiceIcons = [
  FiCode,
  FiSmartphone,
  FiCpu,
  FiCloud,
  FiServer,
  FiDatabase,
  FiLayers,
];

const iconThemes = [
  "bg-gradient-to-br from-blue-50 to-blue-100 text-[#2563EB] ring-blue-200",
  "bg-gradient-to-br from-yellow-50 to-yellow-100 text-[#FBBF24] ring-yellow-200",
  "bg-gradient-to-br from-green-50 to-green-100 text-[#22C55E] ring-green-200",
  "bg-gradient-to-br from-blue-50 to-blue-100 text-[#2563EB] ring-blue-200",
  "bg-gradient-to-br from-yellow-50 to-yellow-100 text-[#FBBF24] ring-yellow-200",
];

const accentColors = [
  "bg-[#2563EB]",
  "bg-[#FBBF24]",
  "bg-[#22C55E]",
  "bg-[#2563EB]",
  "bg-[#FBBF24]",
];

const hoverBorderColors = [
  "hover:border-[#2563EB]",
  "hover:border-[#FBBF24]",
  "hover:border-[#22C55E]",
  "hover:border-[#2563EB]",
  "hover:border-[#FBBF24]",
];

const hoverShadowColors = [
  "hover:shadow-[0_25px_70px_rgba(37,99,235,.12)]",
  "hover:shadow-[0_25px_70px_rgba(251,191,36,.12)]",
  "hover:shadow-[0_25px_70px_rgba(34,197,94,.12)]",
  "hover:shadow-[0_25px_70px_rgba(37,99,235,.12)]",
  "hover:shadow-[0_25px_70px_rgba(251,191,36,.12)]",
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden section-spacing-mobile sm:section-spacing-tablet lg:section-spacing-desktop" style={{ background: '#FFFDF7' }}>
      {/* Soft radial gradients with yellow glow */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FBBF24]/8 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#22C55E]/5 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="mb-4 inline-flex items-center rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[9px] text-[#2563EB] tracking-wide font-semibold">
              OUR EXPERTISE
            </span>
          </motion.div>
          <h2 className="text-4xl text-2xl lg:text-3xl font-bold text-[#111827] mb-6">
            Our Services
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto leading-relaxed text-[12px]">
            We deliver comprehensive technology solutions tailored to your business needs. From web and mobile development to AI-powered systems and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-15">
          {serviceDetails.slice(0, 5).map((service, index) => {
            const serviceText = `${service.title} ${service.description}`.toLowerCase();
            const Icon =
              serviceIconRules.find(({ keywords }) =>
                keywords.some((keyword) => serviceText.includes(keyword))
              )?.Icon ?? fallbackServiceIcons[index % fallbackServiceIcons.length];

            const serviceHref = `/services/${service.slug}`;

            return (
              <Link key={service.slug} href={serviceHref}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`h-full p-8 rounded-[18px] border border-[#CBD5E1] bg-white shadow-[0_20px_60px_rgba(37,99,235,.08)] ${hoverBorderColors[index % hoverBorderColors.length]} ${hoverShadowColors[index % hoverShadowColors.length]} transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 ${accentColors[index % accentColors.length]}`} />
                    <div className="mb-4">
                      <div
                        className={`relative w-14 h-14 rounded-full flex items-center justify-center ring-1 ring-inset transition-all duration-300 group-hover:scale-110 ${iconThemes[index % iconThemes.length]}`}
                      >
                        <div className="absolute inset-0 rounded-full bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon className="relative h-7 w-7" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-[14px] font-semibold text-[#111827] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] text-[12px] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Arrow button */}
                    <div className={`flex items-center gap-2 text-[12px] font-medium transition-colors ${
                      index % 3 === 0 ? 'text-[#2563EB]' : index % 3 === 1 ? 'text-[#FBBF24]' : 'text-[#22C55E]'
                    }`}>
                      <span>Learn More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* keep the rest of your existing End-To-End section unchanged */}
      </div>
    </section>
  );
}