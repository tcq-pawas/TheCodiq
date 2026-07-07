"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OrbitIconProps {
  Icon: LucideIcon;
  label: string;
  progress: number;
  width: number;
  height: number;
  duration: number;
  reverse?: boolean;
}

export default function OrbitIcon({
  Icon,
  label,
  progress,
  width,
  height,
  duration,
  reverse = false,
}: OrbitIconProps) {
  // Ellipse radius
  const rx = width / 2;
  const ry = height / 2;

  // Starting angle
  const angle = progress * Math.PI * 2;

  const x = Math.cos(angle) * rx;
  const y = Math.sin(angle) * ry;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
      }}
    >
      {/* Orbit Item */}
      <motion.div
        className="absolute"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          rotate: reverse ? 360 : -360,
          y: [0, -3, 0],
        }}
        transition={{
          rotate: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl scale-150" />

        {/* Icon Circle */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-[#081426]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.35)]">
          <Icon
            size={28}
            className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </div>

        {/* Label */}
        <p className="mt-3 text-center text-sm font-medium text-slate-200 whitespace-nowrap">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}