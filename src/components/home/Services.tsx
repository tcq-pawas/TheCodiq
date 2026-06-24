"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Service cards grid - moved to top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-white/8 bg-bg-card/50 backdrop-blur-xl hover:border-brand-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-glow-blue">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-gradient rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-silver-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-text text-sm mb-6 leading-relaxed">{service.description}</p>
                <span className="text-sm text-brand-blue font-medium group-hover:text-brand-blue transition-colors inline-flex items-center gap-2">
                  Learn More 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New title section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-silver-primary mb-6">
            End-To-End Development Services
          </h2>
          <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
            Build powerful, scalable, and innovative digital solutions tailored to your business needs. From strategy and design to development, deployment, and maintenance, we provide complete technology services under one roof.
          </p>
        </motion.div>

        {/* Large illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[65rem]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/service.png"
                alt="End-To-End Development Services"
                width={900}
                height={500}
                className="mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
