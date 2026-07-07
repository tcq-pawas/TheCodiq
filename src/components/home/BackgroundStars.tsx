"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const stars = [
  { x: "5%", y: "12%", size: 2, delay: 0 },
  { x: "12%", y: "70%", size: 3, delay: 1 },
  { x: "18%", y: "35%", size: 2, delay: 2 },
  { x: "26%", y: "82%", size: 1, delay: 0.5 },
  { x: "33%", y: "18%", size: 3, delay: 1.8 },
  { x: "40%", y: "55%", size: 2, delay: 1.2 },
  { x: "48%", y: "8%", size: 2, delay: 0.8 },
  { x: "55%", y: "72%", size: 3, delay: 2.5 },
  { x: "63%", y: "28%", size: 2, delay: 0.4 },
  { x: "70%", y: "15%", size: 3, delay: 1.5 },
  { x: "76%", y: "48%", size: 2, delay: 0.9 },
  { x: "83%", y: "84%", size: 2, delay: 1.9 },
  { x: "91%", y: "38%", size: 3, delay: 0.3 },
  { x: "95%", y: "10%", size: 2, delay: 1.1 },
  { x: "88%", y: "63%", size: 2, delay: 2.3 },
];

export default function BackgroundStars() {
  const blurredStars = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 3,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, index) => ({
        left: `${5 + index * 6}%`,
        top: `${Math.random() * 100}%`,
        duration: 8 + index,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 2.5,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Blurred Stars */}
      {blurredStars.map((star, index) => (
        <motion.div
          key={`blur-${index}`}
          className="absolute rounded-full bg-cyan-300/30 blur-sm"
          style={{
            left: star.left,
            top: star.top,
            width: 5,
            height: 5,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: 3,
            height: 3,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}