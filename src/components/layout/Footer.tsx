"use client";

import { HiSparkles, HiBolt, HiCloud, HiChartBar, HiShieldCheck } from "react-icons/hi2";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const CTA_FEATURES = [
  {
    title: "AI Assistance",
    description: "Smart code generation & suggestions",
    icon: HiBolt,
    iconColor: "text-brand-green",
    borderColor: "border-brand-green/30",
    bgColor: "bg-brand-green/10",
  },
  {
    title: "Cloud Deploy",
    description: "One-click deployment to production",
    icon: HiCloud,
    iconColor: "text-brand-blue",
    borderColor: "border-brand-blue/30",
    bgColor: "bg-brand-blue/10",
  },
  {
    title: "Real-time Analytics",
    description: "Live metrics and performance insights",
    icon: HiChartBar,
    iconColor: "text-purple-400",
    borderColor: "border-purple-400/30",
  },
  {
    title: "Enterprise Ready",
    description: "Secure, scalable & reliable infrastructure",
    icon: HiShieldCheck,
    iconColor: "text-brand-gold",
    borderColor: "border-brand-gold/30",
    bgColor: "bg-brand-gold/10",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#050505] border-t border-white/8 relative top-20">
      {/* Floating CTA Banner */}
      <div className="relative mb-8 sm:mb-12 lg:-mt-32 lg:mb-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-6xl mx-auto ${pathname === "/contact" ? "hidden" : ""}`}
        >
          {/* Card 1: Hero content */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-bg-card/95 p-5 shadow-xl backdrop-blur-xl sm:rounded-[32px] sm:p-6 sm:shadow-2xl md:p-10 lg:p-12">
            {/* Background glow effects */}
            <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-blue/10 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px]" />
            <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-brand-green/10 blur-[100px]" />

            <div className="relative z-10 grid items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12 xl:gap-16">
              {/* Left: text content */}
              <div className="min-w-0">
                {/* Badge */}
                <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-3 py-1.5 sm:px-4 sm:py-2">
                  <HiSparkles className="h-4 w-4 shrink-0 text-brand-green" />
                  <span className="whitespace-nowrap text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-green">
                    AI-Powered Platform
                  </span>
                </div>

                {/* Headline */}
                <h2 className="mb-3 text-2xl sm:text-3xl font-bold leading-tight text-silver-primary xl:text-4xl">
                  Let's Build{" "}
                  <span className="bg-gradient-to-r from-brand-green via-brand-blue to-purple-400 bg-clip-text text-transparent">
                    Something Amazing Together
                  </span>
                </h2>

                {/* Decorative underline */}
                <div className="relative mb-4 sm:mb-6 h-3 w-20">
                  <span className="absolute left-0 top-0 h-[2px] w-16 rounded-full bg-brand-green" />
                </div>

                <p className="max-w-lg text-sm leading-relaxed text-secondary-text sm:text-base">
                  Transform your ideas into powerful digital products with modern technology, scalable architecture, and AI-enhanced development. We deliver exceptional solutions that accelerate growth and create lasting impact.
                </p>
              </div>

              {/* Right: code editor mockup */}
              <div className="flex w-full min-w-0 justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-md xl:max-w-lg"
                >
                  {/* Green ambient glow behind the code card */}
                  <div className="absolute -inset-4 -z-10 rounded-2xl bg-brand-green/25 blur-2xl" />

                  <div className="w-full rounded-2xl border border-brand-green/30 bg-black/80 p-3.5 shadow-xl backdrop-blur-sm sm:p-5">
                    {/* Window header */}
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <div className="flex shrink-0 gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] text-silver-secondary">
                        main.py
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      </div>
                    </div>

                    {/* Code lines */}
                    <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div className="min-w-max space-y-3 font-mono text-[10px] sm:text-xs">
                        <div className="flex gap-3 whitespace-nowrap">
                          <span className="w-4 shrink-0 select-none text-silver-secondary/40">1</span>
                          <span>
                            <span className="text-purple-400">import </span>
                            <span className="text-silver-primary">innovate </span>
                            <span className="text-purple-400">as </span>
                            <span className="text-brand-gold">engine</span>
                          </span>
                        </div>

                        <div className="flex gap-3 whitespace-nowrap">
                          <span className="w-4 shrink-0 select-none text-silver-secondary/40">2</span>
                          <div className="flex flex-col">
                            <span>
                              <span className="text-silver-primary">app </span>
                              <span className="text-silver-secondary">= </span>
                              <span className="text-silver-primary">engine.</span>
                              <span className="text-brand-blue">build</span>
                              <span className="text-silver-secondary">( </span>
                              <span className="text-sky-300">ideas=</span>
                              <span className="text-brand-green">'your_vision',</span>
                            </span>
                            <span className="pl-16">
                              <span className="text-sky-300">tech=</span>
                              <span className="text-brand-green">'modern_stack' </span>
                              <span className="text-silver-secondary">)</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3 whitespace-nowrap">
                          <span className="w-4 shrink-0 select-none text-silver-secondary/40">3</span>
                          <span>
                            <span className="text-silver-primary">app.</span>
                            <span className="text-brand-blue">deploy</span>
                            <span className="text-silver-secondary">( </span>
                            <span className="text-sky-300">to=</span>
                            <span className="text-brand-green">'success' </span>
                            <span className="text-silver-secondary">)</span>
                          </span>
                        </div>

                        <div className="flex gap-3 whitespace-nowrap">
                          <span className="w-4 shrink-0 select-none text-silver-secondary/40">4</span>
                          <span>
                            <span className="text-brand-gold">print</span>
                            <span className="text-silver-secondary">(</span>
                            <span className="text-brand-green">'Let's build amazing together! 🚀'</span>
                            <span className="text-silver-secondary">)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card 2: Feature strip — its own rounded box */}
          <div className="relative mt-4 sm:mt-6 overflow-hidden rounded-[18px] border border-white/10 bg-bg-card/95 p-4 shadow-xl backdrop-blur-xl sm:rounded-[28px] sm:p-6 sm:shadow-2xl lg:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/8">
              {CTA_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex min-w-0 items-start gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <div className="relative shrink-0">
                    <div className={`absolute -inset-2 -z-10 rounded-xl blur-md`} />
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${feature.borderColor} ${feature.bgColor}`}
                    >
                      <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h5 className="mb-1 text-sm font-semibold text-silver-primary">
                      {feature.title}
                    </h5>
                    <p className="text-xs leading-relaxed text-secondary-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Main Footer Area */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
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
              <p>Sports College, Chowk, Gorakhnath Rd, Gorakhpur, Uttar Pradesh, 273007</p>
              <p>+91 9935795796</p>
              <p>pawas.singh@thecodiq.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="lg:pt-[5rem]">
            <h4 className="text-sm font-semibold text-silver-primary mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
                  Digital Marketing
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
                <Link href="/careers" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
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
                +91 9935795796
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
            <Link href="/privacy-policy" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-sm text-secondary-text hover:text-brand-blue transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
