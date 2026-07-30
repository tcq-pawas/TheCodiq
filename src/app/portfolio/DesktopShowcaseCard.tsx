"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiDjango,
} from "react-icons/si";

import { HiOutlineStatusOnline } from "react-icons/hi";

export const portfolioTextSizes = {
  categoryBadge: "text-[9px]",

  cardTitle: "text-[14px]",

  cardDescription:
    "text-[12px]",

  techPill: "text-[12px]",
};

export type DesktopShowcaseCardProps = {
  title: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  previewImage: string;
  images?: string[];
  description: string;
  badge?: string;
  slideDurationMs?: number;
  slideTransitionMs?: number;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function DesktopShowcaseCard({
  title,
  category,
  technologies,
  liveUrl,
  previewImage,
  images,
  description,
  badge = "Live Preview",
  slideDurationMs = 1800,
  slideTransitionMs = 600,
}: DesktopShowcaseCardProps) {
  const slides = images && images.length > 0 ? images : [previewImage];

  const [isHovering, setIsHovering] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);

    const onChange = () => setCanHover(mq.matches);
    mq.addEventListener("change", onChange);

    return () => mq.removeEventListener("change", onChange);
  }, []);

  const clearTimer = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const handleEnter = () => {
    if (!canHover || slides.length <= 1) return;
    if (prefersReducedMotion()) return;

    setIsHovering(true);
    clearTimer();

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, slideDurationMs);
  };

  const handleLeave = () => {
    setIsHovering(false);
    clearTimer();
  };

  const linkIconClass = isHovering
    ? "absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#C5D5EB] bg-white/90 text-[#2563EB] backdrop-blur-xl shadow-lg transition-all duration-300 opacity-100"
    : "absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#C5D5EB] bg-white/90 text-[#2563EB] backdrop-blur-xl shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100";

  type TechMeta = {
    icon: JSX.Element;
    boxClass: string;
    iconClass: string;
  };

  const fallbackTech: TechMeta = {
    icon: <FaReact />,
    boxClass: "border-emerald-500/40 bg-emerald-500/15",
    iconClass: "text-emerald-500",
  };

  const techMeta: Record<string, TechMeta> = {
    "Next.js": {
      icon: <SiNextdotjs />,
      boxClass: "border-white/40 bg-white text-black",
      iconClass: "text-[#0B1117]",
    },
    NextJS: {
      icon: <SiNextdotjs />,
      boxClass: "border-white/40 bg-white text-black",
      iconClass: "text-[#0B1117]",
    },
    TypeScript: {
      icon: <SiTypescript />,
      boxClass: "border-[#3178C6]/40 bg-[#3178C6]/15",
      iconClass: "text-[#3178C6]",
    },
    JavaScript: {
      icon: <SiJavascript />,
      boxClass: "border-[#F7DF1E]/40 bg-[#F7DF1E]/15",
      iconClass: "text-[#F7DF1E]",
    },
    React: {
      icon: <FaReact />,
      boxClass: "border-[#61DAFB]/40 bg-[#61DAFB]/15",
      iconClass: "text-[#61DAFB]",
    },
    "React.js": {
      icon: <FaReact />,
      boxClass: "border-[#61DAFB]/40 bg-[#61DAFB]/15",
      iconClass: "text-[#61DAFB]",
    },
    Tailwind: {
      icon: <SiTailwindcss />,
      boxClass: "border-[#38BDF8]/40 bg-[#38BDF8]/15",
      iconClass: "text-[#38BDF8]",
    },
    "Tailwind CSS": {
      icon: <SiTailwindcss />,
      boxClass: "border-[#38BDF8]/40 bg-[#38BDF8]/15",
      iconClass: "text-[#38BDF8]",
    },
    Node: {
      icon: <FaNodeJs />,
      boxClass: "border-[#68A063]/40 bg-[#68A063]/15",
      iconClass: "text-[#68A063]",
    },
    "Node.js": {
      icon: <FaNodeJs />,
      boxClass: "border-[#68A063]/40 bg-[#68A063]/15",
      iconClass: "text-[#68A063]",
    },
    Django: {
      icon: <SiDjango />,
      boxClass: "border-[#092E20]/40 bg-[#092E20]/15",
      iconClass: "text-[#44B78B]",
    },
    MongoDB: {
      icon: <SiMongodb />,
      boxClass: "border-[#47A248]/40 bg-[#47A248]/15",
      iconClass: "text-[#47A248]",
    },
    Firebase: {
      icon: <SiFirebase />,
      boxClass: "border-[#FFCA28]/40 bg-[#FFCA28]/15",
      iconClass: "text-[#FFCA28]",
    },
    WordPress: {
      icon: <FaWordpress />,
      boxClass: "border-[#21759B]/40 bg-[#21759B]/15",
      iconClass: "text-[#4CB3D4]",
    },
  };

  return (
    <div className="group relative flex h-full flex-col gap-4 bg-transparent">
      {/* Monitor Container */}
      <div className="relative overflow-hidden rounded-[26px] border border-[#C5D5EB] bg-white px-4 pb-6 pt-8 shadow-[0_18px_60px_rgba(37,99,235,.08)] backdrop-blur-xl sm:px-6 sm:pb-8 sm:pt-10 md:px-4 md:pb-5 md:pt-6 lg:px-5 lg:pb-6 lg:pt-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.05),transparent_70%)]" />
        <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-[#2563EB]/5 blur-[90px]" />

        {badge && (
          <div className="absolute right-4 top-4 z-30 rounded-xl border border-[#2563EB]/35 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(37,99,235,.12)] backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <HiOutlineStatusOnline className="text-lg text-[#2563EB]" />
              <span
                className={`font-medium text-[#111827] ${portfolioTextSizes.categoryBadge}`}
              >
                {badge}
              </span>
            </div>
          </div>
        )}

        <div className="relative mx-auto w-full max-w-[420px] md:max-w-[300px] lg:max-w-[340px]">
          <div className="absolute -inset-4 bg-primary/10 blur-2xl" />

          <div className="relative rounded-[10px] border border-[#C5D5EB] bg-[#F8FAFC] p-[8px] shadow-[0_25px_60px_rgba(37,99,235,.15)]">
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="relative isolate aspect-[16/10] overflow-hidden rounded-[7px] border border-[#C5D5EB] bg-white"
            >
              <div
                className="flex h-full"
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${activeIndex * (100 / slides.length)
                    }%)`,
                  transition: `transform ${slideTransitionMs}ms ease-in-out`,
                }}
              >
                {slides.map((src, i) => (
                  <div
                    key={src + i}
                    className="relative h-full flex-shrink-0"
                    style={{ width: `${100 / slides.length}%` }}
                  >
                    <Image
                      src={src}
                      alt={`${title} preview ${i + 1}`}
                      fill
                      priority={i === 0}
                      className="object-cover object-top"
                      sizes="420px"
                    />
                  </div>
                ))}
              </div>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={linkIconClass}
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mx-auto h-5 w-16 rounded-b-md bg-gradient-to-b from-[#C5D5EB] to-[#94A3B8]" />
          <div className="mx-auto h-[7px] w-28 rounded-full bg-[#94A3B8]" />
        </div>
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col rounded-[22px] border border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-4 shadow-[0_18px_60px_rgba(37,99,235,.08)] backdrop-blur-xl sm:p-5 md:p-2.5 lg:p-3">
        <span
          className={`mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-3 py-1 uppercase tracking-wider text-[#2563EB] ${portfolioTextSizes.categoryBadge}`}
        >
          {category}
        </span>

        <h4
          className={`mb-1 mt-0.5 font-semibold leading-tight text-[#111827] transition-colors duration-300 group-hover:text-[#2563EB] ${portfolioTextSizes.cardTitle}`}
        >
          {title}
        </h4>

        <p
          className={`mb-1 line-clamp-2 text-[#475569] ${portfolioTextSizes.cardDescription}`}
        >
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => {
            const meta = techMeta[tech] ?? fallbackTech;

            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-[#475569] transition-all duration-300 hover:scale-105 ${meta.boxClass} ${portfolioTextSizes.techPill}`}
              >
                <span className={`text-base ${meta.iconClass}`}>
                  {meta.icon}
                </span>
                <span>{tech}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}