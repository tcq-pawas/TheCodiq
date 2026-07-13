"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaRobot,
  FaCloudUploadAlt,
  FaChartBar,
} from "react-icons/fa";

import {
  HiOutlineStatusOnline,
} from "react-icons/hi";

import {
  BsStars,
} from "react-icons/bs";


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
            <div className="relative h-[430px] overflow-hidden rounded-[32px] border border-white/10 bg-[#070b14]/80 backdrop-blur-2xl">

              {/* Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb22,transparent_40%),radial-gradient(circle_at_bottom_right,#8b5cf622,transparent_45%)]" />

                <div className="absolute left-8 top-8 h-44 w-44 rounded-full bg-blue-500/20 blur-[90px]" />

                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-violet-500/20 blur-[90px]" />
              </div>

              {/* Floating particles */}

              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute h-1 w-1 rounded-full bg-blue-400"
                  initial={{
                    x: `${particle.x}%`,
                    y: `${particle.y}%`,
                  }}
                  animate={{
                    y: [0, -25, 0],
                    opacity: [.2, .8, .2],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}

              {/* Main Laptop */}

              <motion.div
                className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >

                <div className="rounded-xl border border-white/10 bg-[#0d1117] shadow-[0_25px_60px_rgba(37,99,235,.25)]">

                  {/* Window */}

                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />

                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />

                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

                    <div className="ml-3 h-2 w-20 rounded-full bg-white/10" />

                  </div>

                  <div className="space-y-2 p-4 font-mono text-[10px]">

                    <div>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-blue-400">OpenAI</span>
                    </div>

                    <div>
                      <span className="text-blue-300">const</span>{" "}
                      <span className="text-white">assistant</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-green-400">new AI()</span>
                    </div>

                    <div>
                      <span className="text-purple-400">await</span>{" "}
                      <span className="text-yellow-300">assistant</span>
                      <span className="text-white">.generate()</span>
                    </div>

                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                        animate={{
                          width: ["20%", "80%", "35%"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                      />
                    </div>

                  </div>

                </div>

                <div className="mx-auto h-2 w-64 rounded-b-xl bg-gradient-to-b from-slate-600 to-slate-800" />
              </motion.div>



              {/* AI Card */}

              <motion.div
                className="absolute left-8 top-8 rounded-2xl border border-blue-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <FaRobot className="text-lg" />
                  </div>

                  <div>
                    <div className="text-xs text-blue-400">
                      AI Assistant
                    </div>

                    <div className="mt-0.5 flex items-center gap-1 text-lg font-semibold text-white">
                      GPT-5
                      <BsStars className="text-sm text-yellow-400" />
                    </div>

                    <div className="text-[11px] text-white/60">
                      Thinking...
                    </div>
                  </div>
                </div>
              </motion.div>


              {/* Deploy */}

              <motion.div
                className="absolute right-8 top-10 rounded-2xl border border-violet-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <FaCloudUploadAlt className="text-lg" />
                  </div>

                  <div>
                    <div className="text-xs text-violet-400">
                      Cloud Deploy
                    </div>

                    <div className="mt-2 h-1.5 w-28 rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-violet-500"
                        animate={{
                          width: ["25%", "100%", "60%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />
                    </div>

                    <div className="mt-2 text-[11px] text-white/60">
                      Production Ready
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Analytics */}

              <motion.div
                className="absolute bottom-8 left-8 rounded-2xl border border-emerald-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <FaChartBar className="text-lg" />
                  </div>

                  <div>
                    <div className="text-xs text-emerald-400">
                      Analytics
                    </div>

                    <div className="text-[11px] text-white/60">
                      Live Metrics
                    </div>
                  </div>
                </div>

                <div className="flex items-end gap-1">
                  {[18, 26, 16, 38, 22, 44].map((h, index) => (
                    <motion.div
                      key={index}
                      className="w-2 rounded bg-emerald-400"
                      animate={{
                        height: [h, h + 8, h],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      style={{ height: h }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* API */}

              <motion.div
                className="absolute bottom-8 right-8 rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    <HiOutlineStatusOnline className="text-lg" />
                  </div>

                  <div>
                    <div className="text-xs text-cyan-400">
                      API Status
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <motion.div
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [0.9, 1.2, 0.9],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-green-400"
                      />

                      <span className="text-xs text-white">
                        99.99% Online
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connection Lines */}

              <svg className="absolute inset-0 h-full w-full opacity-30">

                <defs>

                  <linearGradient id="line">

                    <stop offset="0%" stopColor="#2563EB" />

                    <stop offset="100%" stopColor="#8B5CF6" />

                  </linearGradient>

                </defs>

                <line x1="25%" y1="18%" x2="50%" y2="50%" stroke="url(#line)" strokeWidth="1" />

                <line x1="75%" y1="18%" x2="50%" y2="50%" stroke="url(#line)" strokeWidth="1" />

                <line x1="25%" y1="82%" x2="50%" y2="50%" stroke="url(#line)" strokeWidth="1" />

                <line x1="75%" y1="82%" x2="50%" y2="50%" stroke="url(#line)" strokeWidth="1" />

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
                  className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${openIndex === index
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
                        className={` font-semibold transition-colors ${openIndex === index ? "text-brand-blue" : "text-silver-primary"
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