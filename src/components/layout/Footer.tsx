"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#050505] border-t border-white/8 relative top-20">
      {/* Floating CTA Banner */}
      <div className="relative -mt-32 mb-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-6xl mx-auto hidden lg:block ${pathname === "/contact" ? "hidden" : ""}`}
        >
          <div className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Background glow effects */}
            <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-blue/10 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px]" />
            <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-brand-green/10 blur-[100px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-4 items-center">
              {/* Left side - Content */}
              <div>
                <h2 className="text-3xl md:text-3xl font-bold text-silver-primary mb-4">
                  Let&apos;s Build Something Amazing Together
                </h2>
                <p className="text-secondary-text text-base md:text-base mb-6 leading-relaxed max-w-lg">
                  Transform your ideas into powerful digital products with TheCodiQ Global. From web applications and mobile apps to AI-powered platforms and enterprise solutions, we deliver end-to-end technology services.
                </p>
              </div>

              {/* Right side - Laptop mockup */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-full max-w-md h-58 bg-bg-panel/50 backdrop-blur-sm border border-white/10 rounded-2xl p-2 shadow-xl">
                    {/* Laptop screen mockup */}
                    <div className="w-full h-full bg-bg-card rounded-lg p-4 font-mono text-xs overflow-hidden">
                      <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-brand-red" />
                        <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                        <div className="w-3 h-3 rounded-full bg-brand-green" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-brand-blue">const</span>
                          <span className="text-brand-gold">project</span>
                          <span className="text-silver-secondary">=</span>
                          <span className="text-brand-green">new</span>
                          <span className="text-silver-primary">TheCodiQ();</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-blue">await</span>
                          <span className="text-silver-primary">project.</span>
                          <span className="text-brand-gold">build</span>
                          <span className="text-silver-secondary">();</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-silver-primary">console.</span>
                          <span className="text-brand-blue">log</span>
                          <span className="text-silver-secondary">(</span>
                          <span className="text-brand-green">&quot;Success&quot;</span>
                          <span className="text-silver-secondary">);</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center mb-4">
                <img src="/logo/logo.png" alt="TheCodiQ" className="h-12 w-auto" />
              </Link>
              <h3 className="text-xl font-bold text-silver-primary mb-2">TheCodiQ Global</h3>
            </div>
            <p className="text-sm text-secondary-text mb-6 leading-relaxed">
              Building innovative digital solutions, AI-powered applications, enterprise software, and scalable technology products for businesses worldwide.
            </p>
            <div className="space-y-2 text-sm text-secondary-text">
              <p>Gorakhpur, Uttar Pradesh, India</p>
              <p>+1 (555) 123-4567</p>
              <p>pawas.singh@thecodiq.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="lg:pt-[5rem]">
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-[5rem]">
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pt-[5rem]">
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Email</span>
                pawas.singh@thecodiq.com
              </li>
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Business Hours</span>
                Mon - Fri: 9AM - 6PM
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-silver-secondary hover:text-brand-blue hover:bg-brand-blue/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-6 border-t border-white/8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-text">
            © {new Date().getFullYear()} TheCodiQ Global. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
