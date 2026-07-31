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
    <div className="relative mb-24 px-4 sm:px-0">
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px] sm:block" />

      <motion.div
        className="relative mb-14 text-center sm:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-1.5 text-xs font-medium text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)] sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px] shadow-[#2563EB]" />
          How We Work
        </span>

        <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#111827] sm:mt-6 sm:text-3xl md:text-4xl">
          Our <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] via-[#F59E0B] to-[#22C55E] bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Process</span>
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#475569] sm:mt-4 sm:leading-7 md:text-base">
          A clear, proven path from idea to launch - every step designed to keep
          you informed and confident along the way.
        </p>
      </motion.div>

      <div ref={trackRef} className="relative">
        {/* Timeline line — desktop/tablet only. Mobile uses standalone cards instead. */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-[#C5D5EB] md:block" />

        <motion.div
          className="absolute left-1/2 top-0 hidden w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[#2563EB] via-[#2563EB] to-[#2563EB]/50 shadow-[0_0_16px_2px] shadow-[#2563EB]/60 md:block"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-0">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.step}
                className={` relative flex justify-center items-center md:gap-0 md:py-10 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
              >
                {/* Dot — desktop/tablet only, perfectly centered on the line */}


                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full max-w-md flex-1 mx-auto md:max-w-none md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-5 shadow-[0_18px_60px_rgba(37,99,235,.08)] transition-all duration-500 hover:border-[#2563EB]/40 hover:shadow-[0_24px_70px_rgba(37,99,235,.12)] sm:p-6">
                    {/* Large faded step number — decorative accent for the standalone mobile card look */}
                    <span
                      className={`pointer-events-none absolute -top-3 text-6xl font-black text-[#2563EB]/[0.08] sm:text-7xl ${isLeft ? "md:right-3" : "right-3"
                        } ${isLeft ? "md:left-auto" : ""} left-3 md:left-auto`}
                    >
                    </span>

                    <div className="relative mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-gradient-to-br from-[#2563EB]/15 to-[#2563EB]/5 shadow-inner shadow-[#2563EB]/10 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-[#2563EB] sm:h-6 sm:w-6" />
                      </div>

                      <div>
                        <span className="block font-mono text-xs font-semibold text-[#2563EB] sm:text-sm">
                          Step {item.step}
                        </span>
                        <span className="block text-[11px] text-[#64748B] sm:text-xs">
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    <h4 className="relative mb-2.5 text-lg font-bold text-[#111827] sm:mb-3 sm:text-xl ">
                      {item.title}
                    </h4>

                    <p className="relative text-sm leading-6 text-[#475569] sm:leading-7">
                      {item.description}
                    </p>

                    <div className="relative mt-4 border-t border-[#C5D5EB] pt-4 sm:mt-5 sm:pt-5">
                      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-[#2563EB]/60 sm:mb-3 sm:text-xs">
                        Deliverables
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-2.5 py-1 text-[11px] font-medium text-[#2563EB] sm:px-3 sm:text-xs"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-4 rounded-xl border border-[#C5D5EB] bg-[#F8FAFC] p-3.5 sm:mt-5 sm:p-4">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#2563EB]/60 sm:text-xs">
                        Key Outcome
                      </p>
                      <p className="text-sm font-medium leading-6 text-[#111827]">
                        {item.outcome}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
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