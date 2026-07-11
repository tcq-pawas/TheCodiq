"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a project cost?",
    answer:
      "Project costs depend on the scope, complexity, features, and technology requirements. After understanding your requirements, we provide a transparent quote with no hidden charges.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines vary based on project size. Small business websites may take a few weeks, while enterprise applications and AI solutions can take several months. We provide a clear project roadmap before development begins.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, performance optimization, bug fixes, security updates, and technical support after project deployment.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "Absolutely. We can upgrade, optimize, integrate, or extend existing software systems, APIs, databases, and third-party platforms without disrupting your operations.",
  },
  {
    question: "Do you sign NDA?",
    answer:
      "Yes. We fully respect client confidentiality and are happy to sign Non-Disclosure Agreements before discussing project details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md mb-6">
            <span className="text-sm font-medium text-silver-primary">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-silver-primary mb-6">
            Questions We Hear Most Often
          </h2>

          <p className="text-lg text-secondary-text max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our software development, AI solutions, project delivery process, and long-term support.
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left side - Premium Visual UI Showcase (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative h-[500px] rounded-[30px] border border-white/10 bg-bg-card/50 backdrop-blur-xl overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-gold/5" />
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-blue/20 blur-[60px]" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-brand-gold/20 blur-[60px]" />
              </div>

              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-brand-blue/40"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Main 3D Laptop with Code */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-[#0d1117] rounded-lg border border-white/10 shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Laptop screen */}
                <div className="p-3 space-y-2">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-[8px] space-y-1">
                    <div>
                      <span className="text-purple-400">class</span>
                      <span className="text-yellow-300"> Solution</span>
                      <span className="text-white">:</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-purple-400">def</span>
                      <span className="text-blue-300"> build</span>
                      <span className="text-white">(self):</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>
                      <span className="text-green-300"> "AI"</span>
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg" />
              </motion.div>

              {/* Floating Code Snippet - Python */}
              <motion.div
                className="absolute top-8 left-8 w-28 h-16 bg-bg-card/80 backdrop-blur border border-brand-blue/30 rounded-lg p-2 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="font-mono text-[9px] space-y-0.5">
                  <div>
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> ai</span>
                  </div>
                  <div>
                    <span className="text-blue-400">model</span>
                    <span className="text-white"> = </span>
                    <span className="text-green-300">AI()</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Code Snippet - JavaScript */}
              <motion.div
                className="absolute bottom-12 right-8 w-32 h-14 bg-bg-card/80 backdrop-blur border border-brand-gold/30 rounded-lg p-2 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="font-mono text-[9px] space-y-0.5">
                  <div>
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> cloud</span>
                    <span className="text-white"> = </span>
                    <span className="text-green-300">new</span>
                    <span className="text-white"> Cloud()</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Assistant Panel */}
              <motion.div
                className="absolute top-20 right-6 w-16 h-16 bg-brand-blue/20 rounded-xl flex items-center justify-center border border-brand-blue/40 backdrop-blur shadow-lg"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>

              {/* Dashboard Analytics Card */}
              <motion.div
                className="absolute bottom-24 left-6 w-24 h-20 bg-bg-card/80 backdrop-blur border border-brand-green/30 rounded-lg p-2 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="text-[8px] text-brand-green mb-1">Analytics</div>
                <div className="space-y-1">
                  <div className="h-1 w-full bg-brand-green/30 rounded">
                    <div className="h-full w-3/4 bg-brand-green rounded" />
                  </div>
                  <div className="h-1 w-full bg-brand-green/30 rounded">
                    <div className="h-full w-1/2 bg-brand-green rounded" />
                  </div>
                </div>
              </motion.div>

              {/* Cloud Deployment Card */}
              <motion.div
                className="absolute top-32 left-20 w-20 h-16 bg-bg-card/80 backdrop-blur border border-purple-400/30 rounded-lg p-2 shadow-lg"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <div className="text-[8px] text-purple-400 mb-1">Cloud</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-400/50" />
                  <div className="w-3 h-3 rounded-full bg-purple-400/50" />
                  <div className="w-3 h-3 rounded-full bg-purple-400/50" />
                </div>
              </motion.div>

              {/* API Response Card */}
              <motion.div
                className="absolute bottom-8 right-24 w-28 h-12 bg-bg-card/80 backdrop-blur border border-brand-blue/30 rounded-lg p-2 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <div className="font-mono text-[9px]">
                  <div className="text-brand-green mb-0.5">200 OK</div>
                  <div className="text-white">GET /api</div>
                </div>
              </motion.div>

              {/* Small Info Cards */}
              <motion.div
                className="absolute top-4 right-4 px-3 py-1.5 bg-brand-blue/20 backdrop-blur border border-brand-blue/40 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">🛟</span>
                  <span className="text-[10px] text-silver-primary font-medium">24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 px-3 py-1.5 bg-brand-gold/20 backdrop-blur border border-brand-gold/40 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">⚡</span>
                  <span className="text-[10px] text-silver-primary font-medium">Fast Delivery</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-4 px-3 py-1.5 bg-green-500/20 backdrop-blur border border-green-500/40 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">🔒</span>
                  <span className="text-[10px] text-silver-primary font-medium">Security</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-4 px-3 py-1.5 bg-purple-500/20 backdrop-blur border border-purple-500/40 rounded-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">👥</span>
                  <span className="text-[10px] text-silver-primary font-medium">Dedicated Team</span>
                </div>
              </motion.div>

              {/* Network Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#blueGradient)" strokeWidth="1" />
                <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#blueGradient)" strokeWidth="1" />
                <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="url(#blueGradient)" strokeWidth="1" />
                <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="url(#blueGradient)" strokeWidth="1" />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Right side - Accordion (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    openIndex === index
                      ? "border-brand-blue bg-bg-card/80 backdrop-blur-xl shadow-lg shadow-brand-blue/20"
                      : "border-white/8 bg-bg-card/30 backdrop-blur-sm hover:border-brand-blue/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10"
                  }`}
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIndex === index}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-lg font-bold transition-colors ${
                          openIndex === index ? "text-brand-blue" : "text-silver-primary"
                        }`}
                      >
                        {item.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-silver-secondary"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-secondary-text text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
