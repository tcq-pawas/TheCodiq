"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import {
  Brain,
  Code2,
  Zap,
  Layers3,
  MessageSquare,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Expert Engineering",
    description:
      "Our experienced engineers build scalable, secure, and high-performance digital products using modern technologies and industry best practices.",
    icon: Code2,
    color: {
      icon: "text-blue-500",
      bg: "from-blue-500/25 to-blue-500/10",
      border: "border-blue-500/40",
      shadow: "shadow-blue-500/15",
      glow: "group-hover:border-blue-500/50",
    },
  },
  {
    title: "AI-First Approach",
    description:
      "We leverage AI and automation to create intelligent, data-driven solutions that help businesses innovate faster and work smarter.",
    icon: Brain,
    color: {
      icon: "text-purple-500",
      bg: "from-purple-500/25 to-purple-500/10",
      border: "border-purple-500/40",
      shadow: "shadow-purple-500/15",
      glow: "group-hover:border-purple-500/50",
    },
  },
  {
    title: "Fast Delivery",
    description:
      "Our agile development process enables rapid delivery while maintaining exceptional quality, reliability, and performance.",
    icon: Zap,
    color: {
      icon: "text-amber-500",
      bg: "from-amber-500/25 to-amber-500/10",
      border: "border-amber-500/40",
      shadow: "shadow-amber-500/15",
      glow: "group-hover:border-amber-500/50",
    },
  },
  {
    title: "Scalable Architecture",
    description:
      "Every solution is designed with future growth in mind, ensuring flexibility, maintainability, and long-term success.",
    icon: Layers3,
    color: {
      icon: "text-cyan-500",
      bg: "from-cyan-500/25 to-cyan-500/10",
      border: "border-cyan-500/40",
      shadow: "shadow-cyan-500/15",
      glow: "group-hover:border-cyan-500/50",
    },
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed throughout the project with clear communication, regular updates, and complete transparency.",
    icon: MessageSquare,
    color: {
      icon: "text-emerald-500",
      bg: "from-emerald-500/25 to-emerald-500/10",
      border: "border-emerald-500/40",
      shadow: "shadow-emerald-500/15",
      glow: "group-hover:border-emerald-500/50",
    },
  },
  {
    title: "Dedicated Support",
    description:
      "Our team provides continuous support and maintenance to ensure your products remain secure, optimized, and always available.",
    icon: Headset,
    color: {
      icon: "text-orange-500",
      bg: "from-orange-500/25 to-orange-500/10",
      border: "border-orange-500/40",
      shadow: "shadow-orange-500/15",
      glow: "group-hover:border-orange-500/50",
    },
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative pb-10"
    >
      {/* Soft radial gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px]" />

      {/* Heading */}
      <div className="relative mb-16 text-center">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-[#C5D5EB] bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-1.5 text-[11px] text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
          Our Advantages
        </motion.span>

        <h2 className="mt-6 text-[26px] font-bold tracking-tight text-[#111827]">
          Why Businesses Choose{" "}
          <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TheCodiQ</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[12px] leading-7 text-[#475569]">
          We combine technical expertise, creative thinking, and a
          customer-first mindset to build digital solutions that help businesses
          grow, innovate, and succeed.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card
                hover
                className={`group relative h-full overflow-hidden rounded-2xl border border-[#D7E6F8] bg-gradient-to-br from-white to-[#fbfdff] shadow-[0_18px_60px_rgba(37,99,235,.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)] ${feature.color.glow}`}
              >
                {/* top accent line that draws in on hover */}
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* faded decorative index number */}

                <div className="relative flex items-start justify-between">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border bg-gradient-to-br shadow-inner transition-transform duration-300 group-hover:scale-110 ${feature.color.border} ${feature.color.bg} ${feature.color.shadow}`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color.icon}`} />
                  </div>

          
                </div>

                <h3 className="relative mb-3  font-semibold text-[#111827]">
                  {feature.title}
                </h3>

                <p className="relative text-[12px] leading-7 text-[#475569]">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}