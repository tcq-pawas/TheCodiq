"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaRobot,
  FaCloudUploadAlt,
  FaChartBar,
  FaCode,
  FaDollarSign,
  FaHeadset,
  FaLink,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaGlobe,
  FaLock,
  FaRegClock,
} from "react-icons/fa";

import { BsStars } from "react-icons/bs";

type Color = "emerald" | "blue" | "violet" | "amber";

type ColorConfig = {
  bg: string;
  text: string;
  border: string;
  dot: string;
};

const colorMap: Record<Color, ColorConfig> = {
  emerald: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-400/20",
    dot: "bg-emerald-400",
  },
  blue: {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-400/20",
    dot: "bg-blue-400",
  },
  violet: {
    bg: "bg-violet-500/15",
    text: "text-violet-400",
    border: "border-violet-400/20",
    dot: "bg-violet-400",
  },
  amber: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-400/20",
    dot: "bg-amber-400",
  },
};

const features = [
  {
    icon: FaCode,
    color: "emerald" as Color,
    title: "AI Code Generation",
    desc: "Write, refactor and debug code with AI assistance.",
  },
  {
    icon: FaCloudUploadAlt,
    color: "violet" as Color,
    title: "Cloud Deployment",
    desc: "One-click deploy to production with global infrastructure.",
  },
  {
    icon: FaChartBar,
    color: "emerald" as Color,
    title: "Real-time Analytics",
    desc: "Monitor performance and usage in real-time.",
  },
];

const faqItems = [
  {
    icon: FaDollarSign,
    color: "emerald" as Color,
    question: "How much does a project cost?",
    answer:
      "Project cost depends on the scope, complexity, and features you need. After understanding your requirements, we provide a detailed proposal with transparent pricing.",
    cta: "Get a free consultation and estimate within 24 hours.",
  },
  {
    icon: FaRegClock,
    color: "blue" as Color,
    question: "How long does development take?",
    answer:
      "Timelines vary based on project size. Small business websites may take a few weeks, while enterprise applications and AI solutions can take several months. We provide a clear project roadmap before development begins.",
  },
  {
    icon: FaHeadset,
    color: "violet" as Color,
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, performance optimization, bug fixes, security updates, and technical support after project deployment.",
  },
  {
    icon: FaLink,
    color: "amber" as Color,
    question: "Can you work with existing systems?",
    answer:
      "Absolutely. We can upgrade, optimize, integrate, or extend existing software systems, APIs, databases, and third-party platforms without disrupting your operations.",
  },
  {
    icon: FaShieldAlt,
    color: "emerald" as Color,
    question: "Do you sign NDA?",
    answer:
      "Yes. We fully respect client confidentiality and are happy to sign Non-Disclosure Agreements before discussing project details.",
  },
];

const stats = [
  { icon: FaUsers, color: "emerald" as Color, value: "500+", label: "Happy Clients" },
  { icon: FaRocket, color: "violet" as Color, value: "1200+", label: "Projects Delivered" },
  { icon: FaGlobe, color: "blue" as Color, value: "99.99%", label: "Uptime" },
  { icon: FaLock, color: "amber" as Color, value: "100%", label: "Secure & Reliable" },
];

// Faint background "code" lines for the left panel
const bgCodeLines = [
  "function deploy(app) {",
  "  const build = await compile(app);",
  "  if (build.success) {",
  "    return ship(build);",
  "  }",
  "}",
  "",
  "class Assistant extends AI {",
  "  generate(prompt) {",
  "    return this.model.run(prompt);",
  "  }",
  "}",
  "",
  "export const config = {",
  "  runtime: 'edge',",
  "  regions: ['auto'],",
  "};",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* ---------------- LEFT PANEL ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080b13] p-8 lg:col-span-6 lg:p-10 xl:col-span-5"
          >
            {/* Background glows */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[110px]" />

            {/* Coding-themed background texture */}
            <div className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
              <pre className="p-6 font-mono text-[11px] leading-relaxed text-blue-200">
                {bgCodeLines.join("\n").repeat(3)}
              </pre>
            </div>

            {/* Faint watermark </> mark */}
            <FaCode className="pointer-events-none absolute -right-6 -top-6 text-[160px] text-white/[0.03]" />

            {/* Drifting binary specks */}
            {[
              { top: "18%", left: "8%", delay: 0 },
              { top: "62%", left: "4%", delay: 1.2 },
              { top: "40%", left: "92%", delay: 0.6 },
              { top: "78%", left: "88%", delay: 1.8 },
            ].map((p, i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute select-none font-mono text-[10px] text-blue-300/20"
                style={{ top: p.top, left: p.left }}
                animate={{ y: [0, -10, 0], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 5, repeat: Infinity, delay: p.delay }}
              >
                {i % 2 === 0 ? "01001" : "{ }"}
              </motion.span>
            ))}

            <div className="relative">
              {/* Top badges */}
              <div className="mb-10 flex flex-wrap items-center gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <FaRobot className="text-lg" />
                  </div>
                  <div>
                    <div className="text-[11px] text-blue-400">AI ASSISTANT</div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-white">
                      GPT-5
                      <BsStars className="text-xs text-yellow-400" />
                    </div>
                    <div className="text-[10px] text-white/50">Thinking...</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="flex items-center gap-3 rounded-2xl border border-violet-400/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                    <FaCloudUploadAlt className="text-lg" />
                  </div>
                  <div>
                    <div className="text-[11px] text-violet-400">Cloud Deploy</div>
                    <div className="mt-1 h-1.5 w-28 rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-violet-500"
                        animate={{ width: ["25%", "100%", "60%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    <div className="mt-1 text-[10px] text-white/50">Production Ready</div>
                  </div>
                </motion.div>
              </div>

              {/* Heading + copy */}
              <h3 className="mb-4 text-4xl font-bold leading-tight text-white">
                Build <span className="text-emerald-400">Smarter.</span>
                <br />
                Ship <span className="text-violet-400">Faster.</span>
              </h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-white/60">
                AI-powered development platform that helps you build,
                deploy and scale with confidence.
              </p>

              {/* Feature list — laid out horizontally so it doesn't feel cramped */}
              <div className="grid gap-5 sm:grid-cols-3">
                {features.map((f) => {
                  const c = colorMap[f.color];
                  return (
                    <div key={f.title}>
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}
                      >
                        <f.icon className="text-base" />
                      </div>
                      <div className="mb-1 text-sm font-semibold text-white">
                        {f.title}
                      </div>
                      <div className="text-xs leading-relaxed text-white/50">
                        {f.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ---------------- RIGHT PANEL: FAQ ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-6 xl:col-span-7"
          >
            {faqItems.map((item, index) => {
              const c = colorMap[item.color];
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div
                    className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? `${c.border} bg-[#0a0e18]`
                        : "border-white/8 bg-[#0a0e18]/60 hover:border-white/20"
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
                    aria-expanded={isOpen}
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.text}`}
                          >
                            <item.icon className="text-base" />
                          </div>
                          <h4 className="font-semibold text-white">
                            {item.question}
                          </h4>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0 text-xl font-light text-white/40"
                        >
                          +
                        </motion.span>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 sm:pl-[60px]">
                          <p className="text-sm leading-relaxed text-white/50">
                            {item.answer}
                          </p>

                          {item.cta && (
                            <div
                              className={`mt-4 flex items-center gap-2 rounded-xl border ${c.border} ${c.bg} px-4 py-3`}
                            >
                              <BsStars className={`text-sm ${c.text}`} />
                              <span className="text-sm text-white/70">
                                {item.cta}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ---------------- STATS BAR ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-2 gap-8 rounded-[28px] border border-white/10 bg-[#080b13] p-8 sm:grid-cols-4"
        >
          {stats.map((s) => {
            const c = colorMap[s.color];
            return (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className={`text-2xl ${c.text}`} />
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/50">{s.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
