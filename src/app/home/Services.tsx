"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  "bg-brand-blue/15 text-brand-blue ring-brand-blue/30",
  "bg-brand-gold/15 text-brand-gold ring-brand-gold/30",
  "bg-brand-green/15 text-brand-green ring-brand-green/30",
  "bg-white/10 text-silver-primary ring-white/15",
  "bg-brand-blue/10 text-silver-primary ring-brand-blue/20",
];

export default function Services() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-silver-primary mb-6">
            Our Services
          </h2>
          <p className="text-secondary-text max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions tailored to your business needs. From web and mobile development to AI-powered systems and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {services.slice(0, 5).map((service, index) => {
            const serviceText = `${service.title} ${service.description}`.toLowerCase();
            const Icon =
              serviceIconRules.find(({ keywords }) =>
                keywords.some((keyword) => serviceText.includes(keyword))
              )?.Icon ?? fallbackServiceIcons[index % fallbackServiceIcons.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl border border-white/8 bg-bg-card/50 backdrop-blur-xl hover:border-brand-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-blue">
                  <div className="mb-6">
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ring-1 ring-inset transition-all duration-300 group-hover:scale-105 ${iconThemes[index % iconThemes.length]}`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <Icon className="relative h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-silver-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-text text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* keep the rest of your existing End-To-End section unchanged */}
      </div>
    </section>
  );
}