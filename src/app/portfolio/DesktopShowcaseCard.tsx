"use client";

import { TbApi } from "react-icons/tb";
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
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiPython,
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
    ? "absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0f1720]/90 text-primary backdrop-blur-xl shadow-lg transition-all duration-300 opacity-100"
    : "absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0f1720]/90 text-primary backdrop-blur-xl shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100";

  type TechMeta = {
    icon: JSX.Element;
    boxClass: string;
    iconClass: string;
  };

  const fallbackTech: TechMeta = {
    icon: <TbApi />,
    boxClass: "border-emerald-400/25 bg-emerald-400/10",
    iconClass: "text-emerald-300",
  };

  const techMeta: Record<string, TechMeta> = {
    "Next.js": {
      icon: <SiNextdotjs />,
      boxClass: "border-white/70 bg-white text-black",
      iconClass: "text-[#0B1117]",
    },
    NextJS: {
      icon: <SiNextdotjs />,
      boxClass: "border-white/70 bg-white text-black",
      iconClass: "text-[#0B1117]",
    },
    TypeScript: {
      icon: <SiTypescript />,
      boxClass: "border-[#3178C6]/60 bg-[#3178C6]",
      iconClass: "text-white",
    },
    JavaScript: {
      icon: <SiJavascript />,
      boxClass: "border-[#D97706]/50 bg-[#D97706]/20",
      iconClass: "text-[#FBBF24]",
    },

    JS: {
      icon: <SiJavascript />,
      boxClass: "border-[#D97706]/50 bg-[#D97706]/20",
      iconClass: "text-[#FBBF24]",
    },
    HTML: {
      icon: <SiHtml5 />,
      boxClass: "border-[#E34F26]/25 bg-[#E34F26]/10",
      iconClass: "text-[#E34F26]",
    },
    HTML5: {
      icon: <SiHtml5 />,
      boxClass: "border-[#E34F26]/25 bg-[#E34F26]/10",
      iconClass: "text-[#E34F26]",
    },
    CSS: {
      icon: <SiCss />,
      boxClass: "border-[#1572B6]/25 bg-[#1572B6]/10",
      iconClass: "text-[#1572B6]",
    },

    CSS3: {
      icon: <SiCss />,
      boxClass: "border-[#1572B6]/25 bg-[#1572B6]/10",
      iconClass: "text-[#1572B6]",
    },
    React: {
      icon: <FaReact />,
      boxClass: "border-[#61DAFB]/25 bg-[#61DAFB]/10",
      iconClass: "text-[#61DAFB]",
    },
    "React.js": {
      icon: <FaReact />,
      boxClass: "border-[#61DAFB]/25 bg-[#61DAFB]/10",
      iconClass: "text-[#61DAFB]",
    },
    Tailwind: {
      icon: <SiTailwindcss />,
      boxClass: "border-[#38BDF8]/25 bg-[#38BDF8]/10",
      iconClass: "text-[#38BDF8]",
    },
    "Tailwind CSS": {
      icon: <SiTailwindcss />,
      boxClass: "border-[#38BDF8]/25 bg-[#38BDF8]/10",
      iconClass: "text-[#38BDF8]",
    },
    Node: {
      icon: <FaNodeJs />,
      boxClass: "border-[#68A063]/25 bg-[#68A063]/10",
      iconClass: "text-[#68A063]",
    },
    "Node.js": {
      icon: <FaNodeJs />,
      boxClass: "border-[#68A063]/25 bg-[#68A063]/10",
      iconClass: "text-[#68A063]",
    },
    Django: {
      icon: <SiDjango />,
      boxClass: "border-[#092E20]/25 bg-[#092E20]/10",
      iconClass: "text-[#44B78B]",
    },
    Python: {
      icon: <SiPython />,
      boxClass: "border-[#3776AB]/30 bg-[#3776AB]/10",
      iconClass: "text-[#3776AB]",
    },
    MongoDB: {
      icon: <SiMongodb />,
      boxClass: "border-[#47A248]/25 bg-[#47A248]/10",
      iconClass: "text-[#47A248]",
    },
    PostgreSQL: {
      icon: <SiPostgresql />,
      boxClass: "border-[#4169E1]/25 bg-[#4169E1]/10",
      iconClass: "text-[#4169E1]",
    },
    Postgres: {
      icon: <SiPostgresql />,
      boxClass: "border-[#4169E1]/25 bg-[#4169E1]/10",
      iconClass: "text-[#4169E1]",
    },
    Firebase: {
      icon: <SiFirebase />,
      boxClass: "border-[#FFCA28]/25 bg-[#FFCA28]/10",
      iconClass: "text-[#FFCA28]",
    },
    WordPress: {
      icon: <FaWordpress />,
      boxClass: "border-[#21759B]/25 bg-[#21759B]/10",
      iconClass: "text-[#4CB3D4]",
    },
  };

  return (
    <div className="group relative flex h-full flex-col gap-4 bg-transparent">
      {/* Monitor Container */}
      <div className="relative overflow-hidden rounded-[26px] border border-[#6F93E0]/45 bg-[linear-gradient(135deg,rgba(23,44,90,0.72)_0%,rgba(7,16,21,0.78)_45%,rgba(5,14,18,0.92)_100%)] px-4 pb-6 pt-8 shadow-[0_24px_70px_rgba(0,0,0,.35)] backdrop-blur-xl sm:px-6 sm:pb-8 sm:pt-10 md:px-4 md:pb-5 md:pt-6 lg:px-5 lg:pb-6 lg:pt-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" />

        {badge && (
          <div className="absolute right-4 top-4 z-30 rounded-xl border border-blue-500/35 bg-[#101a14]/90 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <HiOutlineStatusOnline className="text-lg text-blue-400" />
              <span
                className={`font-medium text-white ${portfolioTextSizes.categoryBadge}`}
              >
                {badge}
              </span>
            </div>
          </div>
        )}

        <div className="relative mx-auto w-full max-w-[420px] md:max-w-[300px] lg:max-w-[340px]">
          <div className="absolute -inset-4 bg-primary/10 blur-2xl" />

          <div className="relative rounded-[10px] border border-white/10 bg-[#11181f] p-[8px] shadow-[0_25px_60px_rgba(0,0,0,.55)]">
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="relative isolate aspect-[16/10] overflow-hidden rounded-[7px] border border-white/10 bg-black"
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


            </div>
          </div>

          <div className="mx-auto h-5 w-16 rounded-b-md bg-gradient-to-b from-[#404a55] to-[#222b35]" />
          <div className="mx-auto h-[7px] w-28 rounded-full bg-[#2b3540]" />
        </div>
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col rounded-[22px] border border-[#6F93E0]/45 bg-[linear-gradient(135deg,rgba(8,20,24,0.94)_0%,rgba(7,16,21,0.88)_48%,rgba(18,43,66,0.72)_100%)] p-4 shadow-[0_18px_55px_rgba(0,0,0,.28)] backdrop-blur-xl sm:p-5 md:p-2.5 lg:p-3">
        <span
          className={`mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 uppercase tracking-wider text-blue-500 ${portfolioTextSizes.categoryBadge}`}
        >
          {category}
        </span>

        <h4
          className={`mb-1 mt-0.5 font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-primary ${portfolioTextSizes.cardTitle}`}
        >
          {title}
        </h4>

        <p
          className={`mb-1 line-clamp-2 text-gray-400 ${portfolioTextSizes.cardDescription}`}
        >
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => {
            const meta = techMeta[tech] ?? fallbackTech;

            return (
              <span
                key={tech}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-gray-200 transition-all duration-300 hover:scale-105 ${meta.boxClass} ${portfolioTextSizes.techPill}`}
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
