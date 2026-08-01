"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-navbar",
        scrollY > 50 ? "backdrop-blur-xl shadow-[0_4px_24px_rgba(15,23,42,0.08)]" : ""
      )}
      style={{ height: "80px", background: scrollY > 50 ? "rgba(255, 255, 255, 0.9)" : "#FFFFFF" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/logo/logo.png" 
                alt="TheCodiQ Global - Software Development Company Logo" 
                width={120} 
                height={120} 
                sizes="120px"
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-[16px] font-medium transition-all duration-300 relative group whitespace-nowrap",
                    pathname === link.href
                      ? "text-[#2563EB]"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-blue-50"
                  )}
                >
                  {pathname === link.href && (
                    <motion.div
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#2563EB] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <button
            className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
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
            className="md:hidden glass-navbar border-t border-slate-200 overflow-hidden"
            style={{ background: "#FFFFFF" }}
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
                      "block text-sm py-3 px-4 rounded-full transition-colors",
                      pathname === link.href
                        ? "text-[#2563EB] bg-blue-50 font-medium"
                        : "text-slate-700 hover:bg-slate-100"
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
