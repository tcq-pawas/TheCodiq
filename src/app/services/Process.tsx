"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { IconType } from "react-icons";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineClipboardDocumentList,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

type Step = {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  outcome: string;
  icon: IconType;
};

const steps: Step[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We clarify your goals, audience, competitors, core features, and success metrics so the project starts with the right direction.",
    duration: "1-3 Days",
    deliverables: ["Requirements brief", "Feature priorities", "Project scope"],
    outcome: "A clear roadmap before design or development begins.",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    step: "02",
    title: "Planning & UI Design",
    description:
      "We turn the strategy into user flows, wireframes, polished interface designs, and a practical technical plan.",
    duration: "2-5 Days",
    deliverables: ["User flows", "UI/UX screens", "Development roadmap"],
    outcome: "A validated design and build plan ready for execution.",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "We build the frontend, backend, database, APIs, and integrations with clean code, responsive layouts, and scalable architecture.",
    duration: "1-6 Weeks",
    deliverables: ["Frontend build", "Backend APIs", "Database integration"],
    outcome: "A functional product prepared for testing and refinement.",
    icon: HiOutlineCodeBracket,
  },
  {
    step: "04",
    title: "Testing, Launch & Support",
    description:
      "We test every key flow, fix issues, deploy the product, and support the launch so everything goes live smoothly.",
    duration: "2-4 Days",
    deliverables: ["QA testing", "Deployment", "Post-launch support"],
    outcome: "A stable, launched product with confidence after release.",
    icon: HiOutlineRocketLaunch,
  },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative mb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />

      <motion.div
        className="relative mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_-5px] shadow-primary/30">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
          How We Work
        </span>

        <h3 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Our <span className="gradient-text">Process</span>
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
          A clear, proven path from idea to launch - every step designed to keep
          you informed and confident along the way.
        </p>
      </motion.div>

      <div ref={trackRef} className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <motion.div
          className="absolute left-6 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary to-primary/40 shadow-[0_0_12px_1px] shadow-primary/50 md:left-1/2 md:-translate-x-1/2"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-14 md:gap-0">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.step}
                className={`relative flex items-start gap-6 md:items-center md:gap-0 md:py-10 ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <motion.div
                  className="absolute left-6 top-12 z-10 -translate-x-1/2 md:left-1/2"
                  initial="rest"
                  whileInView="active"
                  viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                  variants={{
                    rest: { scale: 0.7, opacity: 0.45 },
                    active: { scale: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="absolute -inset-1.5 rounded-full bg-primary/30 blur-sm" />
                  <span className="relative block h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/60 ring-4 ring-background" />
                </motion.div>

                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-16 flex-1 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.35)]">
                    <div
                      className={`mb-5 flex items-center gap-4 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 shadow-inner shadow-primary/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <div>
                        <span className="block font-mono text-sm font-semibold text-primary">
                          Step {item.step}
                        </span>
                        <span className="block text-xs text-gray-500">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    <h4 className="mb-3 text-xl font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Deliverables
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {item.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Key Outcome
                      </p>
                      <p className="text-sm font-medium leading-6 text-white">
                        {item.outcome}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}