"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

function StarIcon({ active = true }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${active ? "text-brand-gold" : "text-brand-gold/60"}`}
      fill="currentColor"
    >
      <path d="m12 2.8 2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.36l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93L12 2.8Z" />
    </svg>
  );
}

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
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-24 pt-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_72px] opacity-40" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight text-silver-primary sm:text-4xl lg:text-4xl">
            Feedback from our clients
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-secondary-text sm:text-base">
            Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.
          </p>
        </motion.div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="p-4 sm:p-5 md:p-6 lg:p-7">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="hidden w-12 flex-col items-center justify-center lg:flex">
                  <div className="flex h-[170px] flex-col items-center justify-between">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`h-12 w-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-brand-blue shadow-[0_0_18px_rgba(59,130,246,0.55)]"
                            : "bg-white/20 hover:bg-white/35"
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
                        x: { type: "spring", stiffness: 260, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {[0, 1, 2].map((offset, i) => {
                          const idx = (currentIndex + offset) % testimonials.length;

                          return (
                            <div
                              key={`${idx}-${i}`}
                              className={`${i === 1 ? "hidden md:block" : ""} ${
                                i === 2 ? "hidden xl:block" : ""
                              }`}
                            >
                              <div
                                className={`h-full min-h-[245px] rounded-2xl border p-5 transition-all duration-300 ${
                                  i === 0
                                    ? "border-white/15 bg-white/[0.06] shadow-[0_18px_60px_rgba(56,189,248,0.08)]"
                                    : "border-white/8 bg-white/[0.035]"
                                }`}
                              >
                                <div className="mb-4 flex items-start gap-4">
                                  <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
                                      i === 0
                                        ? "bg-blue-gradient text-white"
                                        : "bg-white/[0.06] text-silver-primary"
                                    }`}
                                  >
                                    {testimonials[idx].name.charAt(0)}
                                  </div>

                                  <div className="min-w-0">
                                    <h4 className="mb-1 text-base font-bold leading-tight text-silver-primary">
                                      {testimonials[idx].name}
                                    </h4>
                                    <p className="text-xs leading-relaxed text-secondary-text sm:text-sm">
                                      {testimonials[idx].role} at {testimonials[idx].company}
                                    </p>
                                  </div>
                                </div>

                                <div className="mb-4 flex gap-1">
                                  {[...Array(testimonials[idx].rating)].map((_, s) => (
                                    <StarIcon key={s} active={i === 0} />
                                  ))}
                                </div>

                                <p className="text-sm font-medium leading-relaxed text-silver-secondary">
                                  &quot;{testimonials[idx].content}&quot;
                                </p>
                              </div>
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
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "w-7 bg-brand-blue" : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-7 flex justify-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.1]"
                      aria-label="Previous testimonials"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={nextTestimonial}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.1]"
                      aria-label="Next testimonials"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}