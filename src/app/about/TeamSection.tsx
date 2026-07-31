"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaAward,
  FaCheckCircle,
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
  "Product Strategy",
  "Team Leadership",
  "Project Management",
];

// cycles blue -> amber -> emerald, matching the check-icon colors in the reference
const expertiseAccents = ["text-blue-500", "text-amber-500", "text-emerald-500"];

const stats = [
  {
    icon: FaBriefcase,
    value: "150+",
    label: "Projects Delivered",
    color: "text-blue-500",
    bg: "bg-blue-500/15",
  },
  {
    icon: FaUsers,
    value: "50+",
    label: "Happy Clients",
    color: "text-amber-500",
    bg: "bg-amber-500/15",
  },
  {
    icon: FaCode,
    value: "20+",
    label: "Technologies",
    color: "text-emerald-500",
    bg: "bg-emerald-500/15",
  },
  {
    icon: FaTrophy,
    value: "10+",
    label: "Years Experience",
    color: "text-blue-500",
    bg: "bg-blue-500/15",
  },
];

export default function FounderSection() {
  return (
    <motion.section
      className="relative overflow-hidden px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft radial gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-green-500/5 blur-[90px] sm:blur-[150px]" />
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-14">
        {/* ---------- Image column ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-amber-500 to-emerald-500 p-[2px]">
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={"/images/Boss.png"}
                    alt={`${founder.firstName} ${founder.lastName}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 60vw, 80vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-white/90 to-transparent" />
                </div>

                {/* logo badge overlapping the bottom of the image */}
                <div className="absolute inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 flex items-center gap-2 sm:gap-2.5 rounded-xl border border-[#C5D5EB] bg-white/85 px-2.5 sm:px-3 py-2 sm:py-2.5 backdrop-blur shadow-[0_8px_24px_rgba(37,99,235,.08)]">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-white/90 text-xs sm:text-sm font-bold text-blue-500">
                    {founder.company
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="leading-tight">
                    <p className="text-[12px] sm:text-[13px] font-bold text-[#111827]">TheCodiQ</p>
                    <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-500">
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
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#C5D5EB] bg-white px-4 py-2.5 text-[12px] font-semibold text-blue-500 transition duration-300 hover:bg-blue-50 hover:shadow-[0_8px_24px_rgba(59,130,246,.12)]"
            >
              <FaLinkedinIn className="h-3.5 w-3.5 shrink-0" />
              LinkedIn
            </a>
            <a
              href={`mailto:${founder.email}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#C5D5EB] bg-white px-3 sm:px-4 py-2.5 text-[11px] sm:text-[12px] font-semibold text-emerald-500 transition duration-300 hover:bg-emerald-50 hover:shadow-[0_8px_24px_rgba(16,185,129,.12)] whitespace-nowrap"
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
          <span className="inline-flex rounded-full border border-[#C5D5EB] bg-gradient-to-r from-blue-500/10 to-blue-400/10 px-3.5 py-1.5 sm:px-4 text-[9px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-blue-500 shadow-[0_8px_24px_rgba(59,130,246,.12)]">
            Leadership
          </span>

          <h2 className="mt-2 sm:mt-2 text-[22px] sm:text-[24px] md:text-[26px] leading-tight font-bold text-[#111827]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
              Founder
            </span>
          </h2>

          <div className="mt-1 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500" />

          <p className="mt-2 text-[14px] sm:text-[14px] font-semibold leading-6 text-[#475569]">
            Building innovative digital products with a vision for the future.
          </p>

          <p className="mt-3 max-w-2xl text-[11px] sm:text-[12px] leading-6 sm:leading-7 text-[#475569]">
            TheCodiQ Global was founded with a mission to help businesses
            transform ideas into powerful digital solutions. With a focus on
            quality, innovation, and growth, we deliver technology that
            drives real impact.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_340px] md:items-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] lg:text-[28px]">
                {founder.firstName}{" "}
                <span className="text-blue-500">{founder.lastName}</span>
              </h3>
              <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500" />
              <p className="mt-2 text-[12px] sm:text-[13px] font-bold text-amber-400">
                {founder.role}
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#475569]">{founder.company}</p>

              <div className="mt-6 sm:mt-7 inline-flex items-center gap-3 rounded-xl border border-[#C5D5EB] bg-white px-4 py-3 shadow-[0_15px_45px_rgba(30,64,175,.08)]">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-500">
                  <FaAward className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] sm:text-[13px] font-bold text-[#111827]">10+ Years</p>
                  <p className="text-[10px] sm:text-[11px] text-[#475569]">
                    of Industry Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C5D5EB] bg-white p-4 md:mr-2 shadow-[0_15px_45px_rgba(30,64,175,.08)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-500">
                Expertise
              </p>
              <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1.5 flex-1">
                {expertise.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[11px] leading-tight text-[#475569] sm:tracking-[0.5px]"
                  >
                    <FaCheckCircle
                      className={`h-3 w-3 shrink-0 ${expertiseAccents[index % expertiseAccents.length]}`}
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 relative rounded-2xl border border-[#C5D5EB] bg-white p-4 sm:p-5 pl-10 sm:pl-12 shadow-[0_15px_45px_rgba(30,64,175,.08)]">
            <FaQuoteLeft className="absolute left-4 top-5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-blue/40" />
            <p className="text-[12px] sm:text-[13px] italic leading-6 sm:leading-7 text-[#475569]">
              Technology is not just about writing code—it&apos;s about
              building solutions that create lasting business value and make
              a difference.
            </p>
          </div>
        </motion.div>
      </div>
      {/* </Card> */}
    </motion.section>
  );
}