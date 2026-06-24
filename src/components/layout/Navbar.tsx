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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollY > 50
          ? "bg-bg-primary/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
      style={{ height: "120px" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <img src="/logo/logo.png" alt="TheCodiQ" className="h-24 w-auto" />
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-lg">
              <div className="flex items-center space-x-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      pathname === link.href
                        ? "bg-brand-blue text-white shadow-md"
                        : "text-silver-secondary hover:text-brand-blue hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-sm py-2 px-4 rounded-full transition-colors",
                      pathname === link.href
                        ? "bg-brand-blue text-white"
                        : "text-silver-secondary hover:text-brand-blue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
