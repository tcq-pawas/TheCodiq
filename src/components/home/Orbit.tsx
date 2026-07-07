"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import ServiceNode from "../home/ServiceNode";

interface OrbitProps {
  size: number;
  duration: number;
  delay?: number;
}

const icons = [
  { icon: Globe, angle: 0 },
  { icon: Code2, angle: 60 },
  { icon: Smartphone, angle: 120 },
  { icon: Cloud, angle: 180 },
  { icon: ShieldCheck, angle: 240 },
  { icon: Cpu, angle: 300 },
];

export default function Orbit({
  size,
  duration,
  delay = 0,
}: OrbitProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {/* Orbit Ring */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 2}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Orbiting Icons */}
      {icons.map(({ icon: Icon, angle }, index) => {
        const radius = size / 2;

        const x =
          radius +
          Math.cos((angle * Math.PI) / 180) * (radius - 10);

        const y =
          radius +
          Math.sin((angle * Math.PI) / 180) * (radius - 10);

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Keep icon upright */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <ServiceNode>
                <Icon size={20} />
              </ServiceNode>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}