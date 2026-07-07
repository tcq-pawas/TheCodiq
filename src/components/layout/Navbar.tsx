"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/helper";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScroll();
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-17 transition-all duration-500 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24",
        scrollY > 50
          ? "bg-[#070C14]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto h-full ">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo/logo.png"
              alt="TheCodiQ"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-[13px] transition-all duration-300",
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}

                {pathname === link.href && (
                  <span className="absolute left-1/2 bottom-0 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#00BFFF]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-gradient px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-blue-700 glow-button"
            >
              Start a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M9 7h8v8"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 bg-[#070C14]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 transition-all duration-300",
                    pathname === link.href
                      ? "bg-[#3D63F5] text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-4 rounded-full bg-gradient-to-r from-[#4B6FFF] to-[#3D63F5] px-6 py-3 text-center font-semibold text-white"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}