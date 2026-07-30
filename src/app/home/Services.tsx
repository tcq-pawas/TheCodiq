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
import { services } from "@/data/services";

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
  "bg-blue-50 text-[#2563EB] ring-blue-200",
  "bg-orange-50 text-[#F59E0B] ring-orange-200",
  "bg-green-50 text-[#22C55E] ring-green-200",
  "bg-blue-50 text-[#2563EB] ring-blue-200",
  "bg-orange-50 text-[#F59E0B] ring-orange-200",
];

const accentColors = [
  "bg-[#2563EB]",
  "bg-[#F59E0B]",
  "bg-[#22C55E]",
  "bg-[#2563EB]",
  "bg-[#F59E0B]",
];

const hoverBorderColors = [
  "hover:border-[#2563EB]",
  "hover:border-[#F59E0B]",
  "hover:border-[#22C55E]",
  "hover:border-[#2563EB]",
  "hover:border-[#F59E0B]",
];

const hoverShadowColors = [
  "hover:shadow-[0_25px_70px_rgba(37,99,235,.12)]",
  "hover:shadow-[0_25px_70px_rgba(245,158,11,.12)]",
  "hover:shadow-[0_25px_70px_rgba(34,197,94,.12)]",
  "hover:shadow-[0_25px_70px_rgba(37,99,235,.12)]",
  "hover:shadow-[0_25px_70px_rgba(245,158,11,.12)]",
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 20%, #fefcf7 45%, #f8fff9 70%, #ffffff 100%)' }}>
      {/* Soft radial gradients */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]">
            <span className="text-[9px] text-[#2563EB] tracking-wide font-semibold">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl text-2xl lg:text-3xl font-bold text-[#0F172A] mb-6">
            Our Services
          </h2>
          <p className="text-[#64748B] max-w-3xl mx-auto leading-relaxed text-[12px]">
            We deliver comprehensive technology solutions tailored to your business needs. From web and mobile development to AI-powered systems and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-15">
          {services.slice(0, 5).map((service, index) => {
            const serviceText = `${service.title} ${service.description}`.toLowerCase();
            const Icon =
              serviceIconRules.find(({ keywords }) =>
                keywords.some((keyword) => serviceText.includes(keyword))
              )?.Icon ?? fallbackServiceIcons[index % fallbackServiceIcons.length];

            const serviceHref = `/services/${service.id === "1" ? "web-development" : service.id === "2" ? "mobile-app-development" : service.id === "3" ? "ai-solutions" : service.id === "4" ? "ui-ux-design" : service.id === "5" ? "digital-marketing" : "cloud-devops"}`;

            return (
              <Link key={service.id} href={serviceHref}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group h-full"
                >
                  <div className={`h-full p-8 rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_15px_45px_rgba(30,64,175,.08)] ${hoverBorderColors[index % hoverBorderColors.length]} ${hoverShadowColors[index % hoverShadowColors.length]} transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 ${accentColors[index % accentColors.length]}`} />
                    <div className="mb-4">
                      <div
                        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ring-1 ring-inset transition-all duration-300 group-hover:scale-105 ${iconThemes[index % iconThemes.length]}`}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon className="relative h-7 w-7" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-[14px] font-semibold text-[#0F172A] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-[12px] mb-6 leading-relaxed">
                      {service.description}
                    </p>
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