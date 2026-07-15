"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/images/team/smith.png",
    accent: "from-primary/40 via-cyan-300/20 to-transparent",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "/images/team/sarah.png",
    accent: "from-cyan-300/40 via-primary/20 to-transparent",
  },
  {
    name: "Mike Chen",
    role: "Lead Software Engineer",
    image: "/images/team/chen.png",
    accent: "from-blue-400/40 via-primary/20 to-transparent",
  },
  {
    name: "Emily Davis",
    role: "Creative Design Lead",
    image: "/images/team/chen.png",
    accent: "from-violet-400/35 via-primary/20 to-transparent",
  },
];

export default function TeamSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const nextIndex = (index + teamMembers.length) % teamMembers.length;
    const slider = sliderRef.current;
    const slide = slider?.children[nextIndex] as HTMLElement | undefined;

    setActiveIndex(nextIndex);
    slider?.scrollTo({
      left: slide?.offsetLeft ?? 0,
      behavior: "smooth",
    });
  };

  const syncActiveSlide = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const center = slider.scrollLeft + slider.clientWidth / 2;
    const slides = Array.from(slider.children) as HTMLElement[];

    if (!slides.length) {
      return;
    }

    const closestIndex = slides.reduce((closest, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const closestSlide = slides[closest];
      const closestCenter =
        closestSlide.offsetLeft + closestSlide.offsetWidth / 2;

      return Math.abs(slideCenter - center) < Math.abs(closestCenter - center)
        ? index
        : closest;
    }, 0);

    setActiveIndex(closestIndex);
  };

  return (
    <motion.section
      className="relative mb-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative text-center mb-12">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Leadership Team
        </span>

        <h2 className="mt-5 text-3xl md:text-3xl font-bold text-white">
          Meet Our Team
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-center text-sm md:text-sm leading-7">
          Behind every successful project is a passionate team of innovators,
          developers, designers, and strategists committed to delivering
          exceptional digital experiences.
        </p>
      </div>

      <div className="relative">
        <div
          ref={sliderRef}
          onScroll={syncActiveSlide}
          className="-mx-4 flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group min-w-[88%] snap-center pr-4 sm:min-w-0 sm:pr-0"
            >
              <div className="mx-auto max-w-sm sm:max-w-none">
                <Card hover>
                  <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/20 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:bg-white/[0.06]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative p-4">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-background">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.role} at TheCodiQ Global`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 88vw"
                          loading="lazy"
                          className="object-cover object-center transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="relative -mt-12 px-3 pb-4">
                        <div className="rounded-2xl border border-white/10 bg-background/85 p-4 text-center shadow-lg shadow-black/20 backdrop-blur-xl">
                          <h3 className="text-lg font-semibold text-white">
                            {member.name}
                          </h3>

                          <p className="mt-2 text-sm font-medium text-primary">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous team member"
            onClick={() => goToSlide(activeIndex - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {teamMembers.map((member, index) => (
              <button
                key={member.name}
                type="button"
                aria-label={`Show ${member.name}`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next team member"
            onClick={() => goToSlide(activeIndex + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
