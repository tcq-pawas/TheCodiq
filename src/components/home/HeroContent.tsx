"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const avatars = [
  "/images/avatars/avatar-1.png",
  "/images/avatars/avatar-2.png",
  "/images/avatars/avatar-3.png",
  "/images/avatars/avatar-4.png",
  "/images/avatars/avatar-5.png",
];

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
        <span className="text-sm font-medium uppercase tracking-wider text-blue-300">
          We Build Digital Excellence
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
      >
        Empower Your
        <br />
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Digital
        </span>{" "}
        Future
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
      >
        We build innovative web, mobile, AI and cloud solutions that help
        businesses grow, scale and lead in the digital world.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)]"
        >
          Start Your Project
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/services"
          className="group inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800"
        >
          Explore Services

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/40">
            <Play
              size={14}
              className="fill-blue-500 text-blue-500 ml-0.5"
            />
          </span>
        </Link>
      </motion.div>

      {/* Clients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center"
      >
        <div className="flex -space-x-4">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#030712]"
            >
              <Image
                src={avatar}
                alt="Client"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">
            Trusted by{" "}
            <span className="text-blue-400">150+</span> global clients
          </p>

          <div className="mt-2 flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}