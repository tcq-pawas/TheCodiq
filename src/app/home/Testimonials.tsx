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
    <section className="relative overflow-hidden bg-bg-primary py-20">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-silver-primary md:text-4xl">
            Feedback from our clients
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-secondary-text md:text-base">
            Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-6xl gap-6">
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {[0, 1, 2].map((offset, i) => {
                    const idx = (currentIndex + offset) % testimonials.length;
                    const isFeatured = i === 0;

                    return (
                      <div
                        key={`${idx}-${i}`}
                        className={i === 1 ? "hidden md:block" : i === 2 ? "hidden xl:block" : ""}
                      >
                        <article
                          className={`relative flex min-h-[260px] flex-col overflow-hidden rounded-lg border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
                            isFeatured
                              ? "border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))]"
                              : "border-white/[0.08] bg-white/[0.045]"
                          }`}
                        >
                          {isFeatured && (
                            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)]" />
                          )}

                          <div className="mb-5 flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
                                isFeatured
                                  ? "bg-blue-gradient text-white shadow-[0_12px_26px_rgba(59,130,246,0.25)]"
                                  : "bg-white/[0.08] text-silver-primary"
                              }`}
                            >
                              {testimonials[idx].name.charAt(0)}
                            </div>

                            <div className="min-w-0">
                              <h4 className="truncate text-lg font-semibold leading-tight text-silver-primary">
                                {testimonials[idx].name}
                              </h4>
                              <p className="mt-1 text-sm leading-5 text-secondary-text">
                                {testimonials[idx].role} at {testimonials[idx].company}
                              </p>
                            </div>
                          </div>

                          <div className="mb-4 flex gap-0.5">
                            {[...Array(testimonials[idx].rating)].map((_, s) => (
                              <span
                                key={s}
                                className={isFeatured ? "text-lg text-brand-gold" : "text-lg text-brand-gold/60"}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>

                          <p className="text-[15px] font-medium leading-7 text-silver-secondary">
                            &ldquo;{testimonials[idx].content}&rdquo;
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-2 lg:hidden">
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

            <div className="mt-7 flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.12]"
                aria-label="Previous testimonials"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.12]"
                aria-label="Next testimonials"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
