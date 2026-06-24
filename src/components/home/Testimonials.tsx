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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="pt-24 pb-28 bg-bg-primary relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-silver-primary mb-6">
            Feedback from our clients
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto leading-relaxed">
            Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.
          </p>
        </motion.div>

        {/* Section Container */}
        <div className="max-w-[1600px] w-[95%] mx-auto">
          {/* Testimonial Showcase Box */}
          <div
            className="bg-bg-card/50 backdrop-blur-xl border border-white/10 rounded-4xl overflow-hidden shadow-lg"
            style={{ minHeight: 600 }}
          >
            <div className="h-full p-6 md:p-8 lg:p-12 xl:p-[48px]">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left indicator panel */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-4 w-[80px]">
                  <div className="h-[220px] w-[10px] flex flex-col items-center justify-between">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`w-[10px] h-24 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-brand-blue shadow-[0_0_18px_rgba(59,130,246,0.55)]"
                            : "bg-white/20 hover:bg-white/35"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial cards */}
                <div className="flex-1">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      {/* Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
                        {[0, 1, 2].map((offset, i) => {
                          const idx = (currentIndex + offset) % testimonials.length;

                          // Content must remain unchanged; only presentation changes.
                          // On tablet/mobile we naturally hide extra columns via grid breakpoints.
                          return (
                            <div
                              key={`${idx}-${i}`}
                              className={i === 2 ? "hidden xl:block" : ""}
                            >
                              <div
                                className={
                                  i === 0
                                    ? "bg-bg-panel/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                                    : "bg-bg-panel/35 backdrop-blur-sm border border-white/6 rounded-3xl p-8"
                                }
                                style={{ minHeight: 320 }}
                              >
                                <div className="flex items-start gap-5 mb-6">
                                  <div
                                    className={
                                      i === 0
                                        ? "w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center text-white font-bold text-3xl flex-shrink-0"
                                        : "w-16 h-16 bg-bg-card rounded-full flex items-center justify-center text-silver-primary font-bold text-3xl flex-shrink-0"
                                    }
                                  >
                                    {testimonials[idx].name.charAt(0)}
                                  </div>

                                  <div>
                                    <h4 className="text-silver-primary font-bold text-[22px] leading-tight mb-2">
                                      {testimonials[idx].name}
                                    </h4>
                                    <p className="text-secondary-text text-[15px]">
                                      {testimonials[idx].role} at {testimonials[idx].company}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex mb-6">
                                  {[...Array(testimonials[idx].rating)].map((_, s) => (
                                    <span
                                      key={s}
                                      className={
                                        i === 0 ? "text-brand-gold text-2xl" : "text-brand-gold/60 text-2xl"
                                      }
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>

                                <p className="text-silver-secondary text-[18px] leading-[1.8] font-medium">
                                  "{testimonials[idx].content}"
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Mobile indicators */}
                  <div className="lg:hidden flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-brand-blue w-8"
                            : "bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Controls (below cards) */}
                  <div className="flex justify-center gap-6 mt-10">
                    <button
                      onClick={prevTestimonial}
                      className="w-[56px] h-[56px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-[1.04]"
                      aria-label="Previous testimonials"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div className="w-[10px]" />

                    <button
                      onClick={nextTestimonial}
                      className="w-[56px] h-[56px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-[1.04]"
                      aria-label="Next testimonials"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
