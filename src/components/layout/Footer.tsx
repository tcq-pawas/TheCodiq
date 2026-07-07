"use client";

import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/8 relative top-20">
      {/* Floating CTA Banner */}
      <div className="relative -mt-36 mb-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-bg-card/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-3 md:p-6 shadow-2xl overflow-hidden relative">
            {/* Background glow effects */}
            <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-blue/10 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px]" />
            <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-brand-green/10 blur-[100px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div>
                <h2 className="text-2xl  font-semibold text-silver-primary mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-secondary-text text-sm md:text-sm mb-6 leading-relaxed max-w-lg">
                  Transform your ideas into powerful digital products with TheCodiQ Global. From web applications and mobile apps to AI-powered platforms and enterprise solutions, we deliver end-to-end technology services.
                </p>
                <Link href="/contact">
                  <button className="px-6 py-2 bg-blue-gradient text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 glow-button">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Right side - Laptop mockup */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-full max-w-md h-60 bg-bg-panel/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl">
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
                          <span className="text-brand-green">"Success"</span>
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
              <p>123 Tech Street, Silicon Valley, CA 94025</p>
              <p>+1 (555) 123-4567</p>
              <p>contact@thecodiq.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider md:pt-16">Services</h4>
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
          <div>
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider md:pt-16">Quick Links</h4>
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
          <div>
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider md:pt-16">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Email</span>
                contact@thecodiq.com
              </li>
              <li className="text-sm text-secondary-text">
                <span className="block text-silver-primary mb-1">Business Hours</span>
                Mon - Fri: 9AM - 6PM
              </li>
            </ul>
            <div className="flex space-x-4 mt-6 " >
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
