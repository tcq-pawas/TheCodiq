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
  },
  {
    title: "AI-First Approach",
    description:
      "We leverage AI and automation to create intelligent, data-driven solutions that help businesses innovate faster and work smarter.",
    icon: Brain,
  },
  {
    title: "Fast Delivery",
    description:
      "Our agile development process enables rapid delivery while maintaining exceptional quality, reliability, and performance.",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    description:
      "Every solution is designed with future growth in mind, ensuring flexibility, maintainability, and long-term success.",
    icon: Layers3,
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed throughout the project with clear communication, regular updates, and complete transparency.",
    icon: MessageSquare,
  },
  {
    title: "Dedicated Support",
    description:
      "Our team provides continuous support and maintenance to ensure your products remain secure, optimized, and always available.",
    icon: Headset,
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
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_-5px] shadow-primary/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          Our Advantages
        </motion.span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-3xl">
          Why Businesses Choose{" "}
          <span className="gradient-text">TheCodiQ</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-sm">
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
                className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30"
              >
                {/* top accent line that draws in on hover */}
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* faded decorative index number */}

                <div className="relative flex items-start justify-between">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 shadow-inner shadow-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <ArrowUpRight className="mt-1 h-5 w-5 -translate-x-1 translate-y-1 text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
                </div>

                <h3 className="relative mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="relative text-sm leading-7 text-gray-400">
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