"use client";

import { motion } from "framer-motion";
import HeroContent from "../home/HeroContent";
import Earth from "../home/Earth";
import BackgroundStars from "../home/BackgroundStars";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030712]">
      {/* Animated Background */}
      <BackgroundStars />

      {/* Left Glow */}
      <div className="absolute -left-44 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[170px]" />

      {/* Right Glow */}
      <div className="absolute -right-44 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[200px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-10 xl:px-16">
        <div className="grid min-h-[100vh] items-center gap-16 pt-28 pb-14 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center"
          >
            <Earth />
          </motion.div>

        </div>
      </div>
    </section>
  );
}