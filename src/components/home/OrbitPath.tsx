"use client";

import { motion } from "framer-motion";

interface OrbitPathProps {
  width: number;
  height: number;
  rotate?: number;
  duration: number;
  reverse?: boolean;
}

export default function OrbitPath({
  width,
  height,
  rotate = 0,
  duration,
  reverse = false,
}: OrbitPathProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
        rotate,
      }}
      animate={{
        rotate: reverse ? rotate - 360 : rotate + 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        width={width}
        height={height}
        className="overflow-visible"
      >
        {/* Glow */}
        <ellipse
          cx={width / 2}
          cy={height / 2}
          rx={width / 2 - 2}
          ry={height / 2 - 2}
          fill="none"
          stroke="rgba(59,130,246,.12)"
          strokeWidth="6"
          filter="blur(5px)"
        />

        {/* Orbit */}
        <ellipse
          cx={width / 2}
          cy={height / 2}
          rx={width / 2 - 2}
          ry={height / 2 - 2}
          fill="none"
          stroke="rgba(96,165,250,.28)"
          strokeWidth="1.2"
          strokeDasharray="10 12"
        />

        {/* Moving Glow Dot */}
        <motion.circle
          r="4"
          fill="#67E8F9"
          filter="url(#glow)"
          animate={{
            pathLength: [0, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            rotate="auto"
            path={`
                M ${width / 2},2
                a ${width / 2 - 2},${height / 2 - 2} 0 1,1 0,${
              height - 4
            }
                a ${width / 2 - 2},${height / 2 - 2} 0 1,1 0,-${height - 4}
            `}
          />
        </motion.circle>

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}