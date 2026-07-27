"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  linkedin: "https://www.linkedin.com/in/pawas-kumar-singh-b00156100",
  email: "pawas.singh@thecodiq.com",
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
      className="relative mb-12 sm:mb-16 md:mb-20 overflow-hidden px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-14">
        {/* ---------- Image column ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-amber-400 to-emerald-400 p-[1.5px]">
              <div className="relative overflow-hidden rounded-2xl bg-background">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={"/images/Boss.png"}
                    alt={`${founder.firstName} ${founder.lastName}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 60vw, 80vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* logo badge overlapping the bottom of the image */}
                <div className="absolute inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 flex items-center gap-2 sm:gap-2.5 rounded-xl border border-white/10 bg-background/85 px-2.5 sm:px-3 py-2 sm:py-2.5 backdrop-blur">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xs sm:text-sm font-bold text-primary">
                    {founder.company
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[12px] sm:text-[13px] font-bold text-white">TheCodiQ</p>
                    <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Global
                    </p>
                  </div>
                </div>
              </div>
            </div>

          {/* contact actions, aligned to the image width */}
          <div className="mt-4 flex flex-col xs:flex-row sm:flex-row items-stretch gap-2.5">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.firstName} ${founder.lastName} on LinkedIn`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-4 py-2.5 text-[12px] font-semibold text-brand-blue transition duration-300 hover:bg-brand-blue/15"
            >
              <FaLinkedinIn className="h-3.5 w-3.5 shrink-0" />
              LinkedIn
            </a>
            <a
              href={`mailto:${founder.email}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 sm:px-4 py-2.5 text-[11px] sm:text-[12px] font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400/15 whitespace-nowrap"
            >
              <FaEnvelope className="h-3.5 w-3.5 shrink-0" />
              <span>{founder.email}</span>
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

          <h2 className="mt-2 sm:mt-2 text-[22px] sm:text-[24px] md:text-[26px] leading-tight font-bold text-white">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Founder
            </span>
          </h2>

          <div className="mt-1 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-blue via-amber-400 to-emerald-400" />

          <p className="mt-2 text-[14px] sm:text-[14px] font-semibold leading-6 text-gray-300">
            Building innovative digital products with a vision for the future.
          </p>

          <p className="mt-3 max-w-2xl text-[11px] sm:text-[12px] leading-6 sm:leading-7 text-secondary-text">
            TheCodiQ Global was founded with a mission to help businesses
            transform ideas into powerful digital solutions. With a focus on
            quality, innovation, and growth, we deliver technology that
            drives real impact.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_260px] md:items-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white lg:text-[28px]">
                {founder.firstName}{" "}
                <span className="text-brand-blue">{founder.lastName}</span>
              </h3>
              <div className="mt-3 h-[2px] w-10 rounded-full bg-brand-blue" />
              <p className="mt-2 text-[12px] sm:text-[13px] font-bold text-amber-400">
                {founder.role}
              </p>
              <p className="text-[11px] sm:text-[12px] text-gray-400">{founder.company}</p>

              <div className="mt-6 sm:mt-7 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <FaAward className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] sm:text-[13px] font-bold text-white">10+ Years</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-400">
                    of Industry Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:mr-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                Expertise
              </p>
              <ul className="mt-2.5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-[7px]">
                {expertise.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[11px] leading-tight text-gray-300 sm:tracking-[0.5px]"
                  >
                    <FaCheckCircle
                      className={`h-3 w-3 shrink-0 ${expertiseAccents[index % expertiseAccents.length]}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 pl-10 sm:pl-12">
            <FaQuoteLeft className="absolute left-4 top-5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-blue/40" />
            <p className="text-[12px] sm:text-[13px] italic leading-6 sm:leading-7 text-gray-300">
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