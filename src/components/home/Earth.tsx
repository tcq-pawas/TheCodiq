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
  { Icon: Globe, angle: 0 },
  { Icon: Code2, angle: 60 },
  { Icon: Smartphone, angle: 120 },
  { Icon: Cloud, angle: 180 },
  { Icon: ShieldCheck, angle: 240 },
  { Icon: Cpu, angle: 300 },
];

export default function Orbit({
  size,
  duration,
  delay = 0,
}: OrbitProps) {
  const radius = size / 2 - 28;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
    >
      {/* Orbit Ring */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(56,189,248,.22)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />
      </svg>

      {icons.map(({ Icon, angle }, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            delay: delay + index * 0.4,
          }}
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: "center",
            }}
          >
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
                <Icon size={22} />
              </ServiceNode>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}