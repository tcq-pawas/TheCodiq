"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 29) % 100,
  duration: 3 + ((i * 17) % 20) / 10,
  delay: ((i * 11) % 20) / 10,
}));

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[120px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 backdrop-blur-md">
            <span className="text-sm  text-silver-primary">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-silver-primary md:text-4xl lg:text-4xl">
            Questions We Hear Most Often
          </h2>

          <p className="mx-auto max-w-3xl  leading-relaxed text-secondary-text">
            Everything you need to know about our software development, AI solutions, project delivery process, and long-term support.
          </p>
        </motion.div>

        <div className="mb-16 grid items-start gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:col-span-2 lg:block"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[30px] border border-white/10 bg-bg-card/50 backdrop-blur-xl">
              <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-gold/5" />
                <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-brand-blue/20 blur-[60px]" />
                <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-brand-gold/20 blur-[60px]" />
              </div>

              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute h-1 w-1 rounded-full bg-brand-blue/40"
                  initial={{
                    x: `${particle.x}%`,
                    y: `${particle.y}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 h-32 w-48 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="space-y-2 p-3">
                  <div className="mb-2 flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-1 font-mono text-[8px]">
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
                      <span className="text-green-300"> &quot;AI&quot;</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 h-2 w-56 -translate-x-1/2 rounded-b-lg bg-gradient-to-b from-gray-700 to-gray-800" />
              </motion.div>

              <motion.div
                className="absolute left-8 top-8 h-16 w-28 rounded-lg border border-brand-blue/30 bg-bg-card/80 p-2 shadow-lg backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="space-y-0.5 font-mono text-[9px]">
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

              <motion.div
                className="absolute bottom-12 right-8 h-14 w-32 rounded-lg border border-brand-gold/30 bg-bg-card/80 p-2 shadow-lg backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="space-y-0.5 font-mono text-[9px]">
                  <div>
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> cloud = </span>
                    <span className="text-green-300">new</span>
                    <span className="text-white"> Cloud()</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-6 top-20 flex h-16 w-16 items-center justify-center rounded-xl border border-brand-blue/40 bg-brand-blue/20 shadow-lg backdrop-blur"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-2xl">AI</span>
              </motion.div>

              <motion.div
                className="absolute bottom-24 left-6 h-20 w-24 rounded-lg border border-brand-green/30 bg-bg-card/80 p-2 shadow-lg backdrop-blur"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="mb-1 text-[8px] text-brand-green">Analytics</div>
                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-brand-green/30">
                    <div className="h-full w-3/4 rounded bg-brand-green" />
                  </div>
                  <div className="h-1 w-full rounded bg-brand-green/30">
                    <div className="h-full w-1/2 rounded bg-brand-green" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-20 top-32 h-16 w-20 rounded-lg border border-purple-400/30 bg-bg-card/80 p-2 shadow-lg backdrop-blur"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <div className="mb-1 text-[8px] text-purple-400">Cloud</div>
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-purple-400/50" />
                  <div className="h-3 w-3 rounded-full bg-purple-400/50" />
                  <div className="h-3 w-3 rounded-full bg-purple-400/50" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-24 h-12 w-28 rounded-lg border border-brand-blue/30 bg-bg-card/80 p-2 shadow-lg backdrop-blur"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <div className="font-mono text-[9px]">
                  <div className="mb-0.5 text-brand-green">200 OK</div>
                  <div className="text-white">GET /api</div>
                </div>
              </motion.div>

              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-3"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-brand-blue bg-bg-card/80 shadow-lg shadow-brand-blue/20 backdrop-blur-xl"
                      : "border-white/8 bg-bg-card/30 backdrop-blur-sm hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10"
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
                    <div className="flex items-center justify-between gap-4">
                      <h4
                        className={` font-semibold transition-colors ${
                          openIndex === index ? "text-brand-blue" : "text-silver-primary"
                        }`}
                      >
                        {item.question}
                      </h4>

                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 text-silver-secondary"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
                      <p className="pt-4 text-sm leading-relaxed text-secondary-text">
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