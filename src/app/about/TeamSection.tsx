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
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "/images/team/sarah.png",
  },
  {
    name: "Mike Chen",
    role: "Lead Software Engineer",
    image: "/images/team/chen.png",
  },
  {
    name: "Emily Davis",
    role: "Creative Design Lead",
    image: "/images/team/chen.png",
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
    if (!slider) return;

    const center = slider.scrollLeft + slider.clientWidth / 2;
    const slides = Array.from(slider.children) as HTMLElement[];
    if (!slides.length) return;

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
      className="relative mb-16 sm:mb-20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative text-center mb-10 sm:mb-12">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 sm:px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-primary">
          Leadership Team
        </span>

        <h2 className="mt-4 sm:mt-5 text-[26px] leading-tight sm:text-3xl md:text-4xl font-bold text-white">
          Meet Our Team
        </h2>

        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-gray-400 text-center text-sm leading-6 sm:leading-7">
          Behind every successful project is a passionate team of innovators,
          developers, designers, and strategists committed to delivering
          exceptional digital experiences.
        </p>
      </div>

      <div className="relative">
        <div
          ref={sliderRef}
          onScroll={syncActiveSlide}
          className="-mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group min-w-full snap-center sm:min-w-0"
            >
              <div className="mx-auto h-full w-full max-w-[320px] sm:max-w-none">
                <Card>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-background">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center transition duration-500 sm:group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:py-5 text-center">
                      <h3 className="min-h-[1.5rem] sm:min-h-[1.75rem] text-base sm:text-lg font-semibold leading-tight text-white line-clamp-1">
                        {member.name}
                      </h3>

                      <p className="mt-1 min-h-[1.25rem] text-xs sm:text-sm font-medium leading-snug text-primary line-clamp-1">
                        {member.role}
                      </p>
                    </div>
                  </article>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous team member"
            onClick={() => goToSlide(activeIndex - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
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
                  activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next team member"
            onClick={() => goToSlide(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
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