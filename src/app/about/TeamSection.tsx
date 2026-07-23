"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaAward,
  FaCheckCircle,
  FaBriefcase,
  FaUsers,
  FaCode,
  FaTrophy,
  FaQuoteLeft,
} from "react-icons/fa";

const founder = {
  firstName: "Pawas",
  lastName: "Kr. Singh",
  role: "Founder & CEO",
  company: "TheCodiQ Global",
  image: "/images/team/amit.png",
  linkedin: "https://linkedin.com/in/amitsingh",
  email: "pawas.singh@gmail.com",
};

const expertise = [
  "Software Architecture",
  "AI & Automation Solutions",
  "Web & Mobile Applications",
  "Cloud Infrastructure",
  "Digital Transformation",
  "Product Strategy & Development",
  "Team Leadership",
  "Project Management",
];

// cycles blue -> amber -> emerald, matching the check-icon colors in the reference
const expertiseAccents = ["text-brand-blue", "text-amber-400", "text-emerald-400"];

const stats = [
  {
    icon: FaBriefcase,
    value: "150+",
    label: "Projects Delivered",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: FaUsers,
    value: "50+",
    label: "Happy Clients",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: FaCode,
    value: "20+",
    label: "Technologies",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: FaTrophy,
    value: "10+",
    label: "Years Experience",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
];

export default function FounderSection() {
  return (
    <motion.section
      className="relative mb-16 sm:mb-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-14">
        {/* ---------- Image column ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none"
        >
          <Card>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-amber-400 to-emerald-400 p-[1.5px]">
              <div className="relative overflow-hidden rounded-2xl bg-background">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={"/images/Boss.png"}
                    alt={`${founder.firstName} ${founder.lastName}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 60vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* logo badge overlapping the bottom of the image */}
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-background/85 px-3 py-2.5 backdrop-blur">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-sm font-bold text-primary">
                    {founder.company
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-white">TheCodiQ</p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Global
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* contact actions, aligned to the image width */}
          <div className="mt-4 flex items-center gap-2.5">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.firstName} ${founder.lastName} on LinkedIn`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-4 py-2.5 text-[12px] font-semibold text-brand-blue transition duration-300 hover:bg-brand-blue/15"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${founder.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-[12px] font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400/15"
            >
              <FaEnvelope className="h-3.5 w-3.5" />
              <span className="truncate">{founder.email}</span>
            </a>
          </div>
        </motion.div>

        {/* ---------- Content column ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 sm:px-4 text-[9px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-primary">
            Leadership
          </span>

          <h2 className="mt-4 sm:mt-5 text-[26px] leading-tight font-bold text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Founder
            </span>
          </h2>

          <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400" />

          <p className="mt-4 text-[12px] font-semibold leading-6 text-gray-300">
            Building innovative digital products with a vision for the future.
          </p>

          <p className="mt-3 max-w-2xl text-[12px] leading-6 sm:leading-7 text-gray-400">
            TheCodiQ Global was founded with a mission to help businesses
            transform ideas into powerful digital solutions. With a focus on
            quality, innovation, and growth, we deliver technology that
            drives real impact.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_260px] lg:items-start">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-[28px]">
                {founder.firstName}{" "}
                <span className="text-brand-blue">{founder.lastName}</span>
              </h3>
              <div className="mt-2 h-[2px] w-10 rounded-full bg-brand-blue" />
              <p className="mt-2 text-[13px] font-bold text-amber-400">
                {founder.role}
              </p>
              <p className="text-[12px] text-gray-400">{founder.company}</p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <FaAward className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-bold text-white">10+ Years</p>
                  <p className="text-[11px] text-gray-400">
                    of Industry Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                Expertise
              </p>
              <ul className="mt-2.5 flex flex-col gap-[7px]">
                {expertise.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[11px] leading-none text-gray-300"
                  >
                    <FaCheckCircle
                      className={`h-3 w-3 shrink-0 ${expertiseAccents[index % expertiseAccents.length]}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 pl-12">
            <FaQuoteLeft className="absolute left-4 top-5 h-4 w-4 text-brand-blue/40" />
            <p className="text-[13px] italic leading-6 sm:leading-7 text-gray-300">
              Technology is not just about writing code—it&apos;s about
              building solutions that create lasting business value and make
              a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
