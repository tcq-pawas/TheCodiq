"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 120 : -120,
      opacity: 0,
      filter: "blur(6px)",
    }),
  };

  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-24">
      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[240px] w-[240px] sm:h-[420px] sm:w-[420px] rounded-full bg-brand-blue/10 blur-[90px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[240px] w-[240px] sm:h-[420px] sm:w-[420px] rounded-full bg-brand-gold/10 blur-[90px] sm:blur-[140px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 sm:mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md">
            <span className="text-[9px] text-silver-primary tracking-wide">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[26px] leading-tight sm:text-3xl md:text-3xl font-bold text-silver-primary">
            Feedback from our clients
          </h2>
          <p className="mx-auto max-w-xl text-[12px] leading-6 sm:leading-7 text-secondary-text ">
            Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-6xl gap-4 sm:gap-6">
          <div className="hidden w-8 shrink-0 items-center justify-center lg:flex">
            <div className="flex flex-col items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "h-10 bg-brand-blue shadow-[0_0_16px_rgba(59,130,246,0.5)]"
                      : "h-6 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 28 },
                  opacity: { duration: 0.18 },
                  filter: { duration: 0.18 },
                }}
              >
                {/*
                  items-stretch (grid's default is already stretch, made
                  explicit here) + h-full on every article guarantees all
                  visible cards in the row match height regardless of how
                  long each testimonial's text is — quote text is clamped
                  so it never pushes one card taller than its neighbors.
                */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:items-stretch xl:grid-cols-3">
                  {[0, 1, 2].map((offset, i) => {
                    const idx = (currentIndex + offset) % testimonials.length;
                    const isFeatured = i === 0;

                    return (
                      <div
                        key={`${idx}-${i}`}
                        className={`h-full ${
                          i === 1 ? "hidden md:block" : i === 2 ? "hidden xl:block" : ""
                        }`}
                      >
                        <article
                          className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                            isFeatured
                              ? "border-brand-blue/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)]"
                              : "border-white/[0.08] bg-white/[0.045] hover:border-white/[0.16]"
                          }`}
                        >
                          {isFeatured && (
                            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)]" />
                          )}

                          {/* Decorative quote mark */}
                          <svg
                            className={`absolute -right-1 -top-1 h-16 w-16 sm:h-20 sm:w-20 ${
                              isFeatured ? "text-brand-blue/10" : "text-white/[0.05]"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M9.5 8C6.5 8 4 10.5 4 13.5S6.5 19 9.5 19c.3 0 .5 0 .8-.1-.5 1.5-1.8 2.6-3.5 2.9-.4.1-.6.5-.5.9.1.3.4.5.7.5h.1c3.2-.6 5.4-3.3 5.4-6.7V13c0-2.8-2.3-5-5-5zm10 0c-3 0-5.5 2.5-5.5 5.5S16.5 19 19.5 19c.3 0 .5 0 .8-.1-.5 1.5-1.8 2.6-3.5 2.9-.4.1-.6.5-.5.9.1.3.4.5.7.5h.1c3.2-.6 5.4-3.3 5.4-6.7V13c0-2.8-2.3-5-5-5z" />
                          </svg>

                          <div className="relative mb-3 flex items-start gap-3">
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-gradient text-white text-lg font-bold ring-2 ring-brand-blue/30 ring-offset-2 ring-offset-transparent shadow-[0_12px_26px_rgba(59,130,246,0.25)] sm:text-xl">
                              {testimonials[idx].name.charAt(0)}
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="truncate text-[14px] font-semibold leading-tight text-silver-primary">
                                {testimonials[idx].name}
                              </h4>
                              <p className="mt-0.5 truncate text-[12px] leading-5 text-white">
                                {testimonials[idx].role} at {testimonials[idx].company}
                              </p>
                            </div>
                          </div>

                          <div className="relative mb-2 flex gap-0.5">
                            {[...Array(testimonials[idx].rating)].map((_, s) => (
                              <span
                                key={s}
                                className={`text-base sm:text-lg ${
                                  isFeatured ? "text-brand-gold" : "text-brand-gold/60"
                                }`}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>

                          {/*
                            Quote clamped to 4 lines by default so every
                            card in the row stays the same height — this
                            is what keeps the slide animation looking
                            clean instead of jumping card sizes. On small
                            screens (lg:hidden), a toggle lets the user
                            read the full quote without affecting layout,
                            since only one card is visible at a time there.
                          */}
                          <p
                            className="relative flex-1 text-[12px] sm:text-[12px] font-medium leading-6 sm:leading-7 text-silver-secondary line-clamp-4"
                          >
                            &ldquo;{testimonials[idx].content}&rdquo;
                          </p>

                         
                        </article>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 sm:mt-6 flex justify-center gap-2 lg:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-7 bg-brand-blue" : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-5 sm:mt-6 flex justify-center gap-3 sm:gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:border-brand-blue/40 hover:bg-white/[0.12]"
                aria-label="Previous testimonials"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:border-brand-blue/40 hover:bg-white/[0.12]"
                aria-label="Next testimonials"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}