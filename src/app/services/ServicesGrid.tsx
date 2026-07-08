"use client";

import { services } from "@/data/services";
import Button from "@/components/common/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesGrid() {
  return (
    <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.06]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-2xl">
              {service.icon}
            </div>

            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white">
            {service.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
            {service.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start gap-2.5 text-sm leading-5 text-gray-300"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>

            <ArrowRight className="h-4 w-4 text-gray-500 transition duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}