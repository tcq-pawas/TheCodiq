"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceNodeProps {
  children: ReactNode;
}

export default function ServiceNode({ children }: ServiceNodeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative flex h-14 w-14 items-center justify-center rounded-full"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl"
      />

      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/25" />

      {/* Glass Card */}
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(56,189,248,0.25)]
        "
      >
        <div className="text-cyan-300">
          {children}
        </div>
      </div>

      {/* Small Highlight */}
      <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-white/70 blur-[1px]" />
    </motion.div>
  );
}