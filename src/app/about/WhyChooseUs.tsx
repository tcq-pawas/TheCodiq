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
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Expert Engineering",
    description:
      "Our experienced engineers build scalable, secure, and high-performance digital products using modern technologies and industry best practices.",
    icon: Code2,
    color: {
      icon: "text-blue-400",
      bg: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      shadow: "shadow-blue-500/10",
      glow: "group-hover:border-blue-500/30",
    },
  },
  {
    title: "AI-First Approach",
    description:
      "We leverage AI and automation to create intelligent, data-driven solutions that help businesses innovate faster and work smarter.",
    icon: Brain,
    color: {
      icon: "text-purple-400",
      bg: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      shadow: "shadow-purple-500/10",
      glow: "group-hover:border-purple-500/30",
    },
  },
  {
    title: "Fast Delivery",
    description:
      "Our agile development process enables rapid delivery while maintaining exceptional quality, reliability, and performance.",
    icon: Zap,
    color: {
      icon: "text-amber-400",
      bg: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/20",
      shadow: "shadow-amber-500/10",
      glow: "group-hover:border-amber-500/30",
    },
  },
  {
    title: "Scalable Architecture",
    description:
      "Every solution is designed with future growth in mind, ensuring flexibility, maintainability, and long-term success.",
    icon: Layers3,
    color: {
      icon: "text-cyan-400",
      bg: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
      shadow: "shadow-cyan-500/10",
      glow: "group-hover:border-cyan-500/30",
    },
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed throughout the project with clear communication, regular updates, and complete transparency.",
    icon: MessageSquare,
    color: {
      icon: "text-emerald-400",
      bg: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
      shadow: "shadow-emerald-500/10",
      glow: "group-hover:border-emerald-500/30",
    },
  },
  {
    title: "Dedicated Support",
    description:
      "Our team provides continuous support and maintenance to ensure your products remain secure, optimized, and always available.",
    icon: Headset,
    color: {
      icon: "text-orange-400",
      bg: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
      shadow: "shadow-orange-500/10",
      glow: "group-hover:border-orange-500/30",
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
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />

      {/* Heading */}
      <div className="relative mb-16 text-center">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-[11px] text-primary shadow-[0_0_20px_rgba(59,130,246,0.35)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px] shadow-primary" />
          Our Advantages
        </motion.span>

        <h2 className="mt-6 text-[26px] font-bold tracking-tight text-white">
          Why Businesses Choose{" "}
          <span className="gradient-text">TheCodiQ</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[12px] leading-7 text-secondary-text">
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
                className={`group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${feature.color.glow}`}
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

                <h3 className="relative mb-3  font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="relative text-[12px] leading-7 text-gray-400">
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