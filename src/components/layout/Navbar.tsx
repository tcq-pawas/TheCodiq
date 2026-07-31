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
        scrollY > 50 ? "backdrop-blur-xl" : ""
      )}
      style={{ height: "80px", background: scrollY > 50 ? "rgba(11, 18, 32, 0.9)" : "#0B1220" }}
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
                width={80} 
                height={80} 
                className="h-12 w-auto"
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
                      ? "bg-[#2563EB] text-white shadow-[0_8px_24px_rgba(37,99,235,0.3)] px-5"
                      : "text-white hover:text-white hover:bg-white/10 hover:px-5"
                  )}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#2563EB] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-xs font-medium text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
              style={{ 
                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                boxShadow: '0 4px 14px rgba(37,99,235,0.3)'
              }}
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
            className="md:hidden glass-navbar border-t border-white/10 overflow-hidden"
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
                        ? "bg-[#2563EB] text-white"
                        : "text-white hover:bg-white/10"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="block text-sm py-3 px-4 rounded-full text-center text-white transition-colors"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
