"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import Image from "next/image";

const iconOrder = [
  "web",
  "mobile",
  "ai",
  "cloud",
  "design",
  "commerce",
  "security",
  "strategy",
] as const;

type IconKey = (typeof iconOrder)[number];

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3.75" y="5" width="16.5" height="13.5" rx="2.2" stroke="currentColor" strokeWidth="1.55" />
      <path d="M3.75 8.75h16.5M7 12h4.2M7 15h7.7" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="7.4" y="3" width="9.2" height="18" rx="2.4" stroke="currentColor" strokeWidth="1.55" />
      <path d="M10.4 17.7h3.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M10.2 5.8h3.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M8.5 9.4a3.5 3.5 0 0 1 7 0v5.2a3.5 3.5 0 0 1-7 0V9.4Z" stroke="currentColor" strokeWidth="1.55" />
      <path d="M8.5 11.2H6.7a2 2 0 0 0 0 4h1.8M15.5 11.2h1.8a2 2 0 0 1 0 4h-1.8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M10.4 10.5h.01M13.6 10.5h.01M10.7 14.3c.8.7 1.8.7 2.6 0" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M7.2 18h9.25a4.05 4.05 0 0 0 .38-8.08A5.85 5.85 0 0 0 5.7 11.5 3.32 3.32 0 0 0 7.2 18Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.2 14.1h5.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4.5 16.3 15.7 5.1a2.05 2.05 0 0 1 2.9 2.9L7.4 19.2H4.5v-2.9Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14.3 6.5 3.2 3.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function CommerceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5.2 7.4h13.6l-1.15 7.4a2 2 0 0 1-1.98 1.7H8.33a2 2 0 0 1-1.98-1.7L5.2 7.4Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M9.3 7.4a2.7 2.7 0 0 1 5.4 0" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M9.2 19.8h.01M14.8 19.8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3.8 18.2 6v5.2c0 4.1-2.55 7.45-6.2 8.95-3.65-1.5-6.2-4.85-6.2-8.95V6L12 3.8Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="m9.6 12.1 1.6 1.6 3.4-3.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M5.2 18.8V6.2M5.2 6.2h6.5l.8 2.3h5.9v7.2h-6.6l-.8-2.25H5.2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function renderIcon(icon: IconKey) {
  const icons = {
    web: <MobileIcon />,
    mobile: <WebIcon />,
    ai: <AiIcon />,
    cloud: <CloudIcon />,
    design: <DesignIcon />,
    commerce: <CommerceIcon />,
    security: <SecurityIcon />,
    strategy: <StrategyIcon />,
  };

  return icons[icon];
}

function getIconPreferences(service: {
  id?: string | number;
  title?: string;
  description?: string;
}, index: number): IconKey[] {
  const text = `${service.id ?? ""} ${service.title ?? ""} ${service.description ?? ""}`.toLowerCase();
  const preferences: IconKey[] = [];

  if (text.includes("mobile") || text.includes("app") || text.includes("ios") || text.includes("android")) {
    preferences.push("mobile");
  }

  if (text.includes("ai") || text.includes("artificial") || text.includes("automation") || text.includes("machine")) {
    preferences.push("ai");
  }

  if (text.includes("cloud") || text.includes("infrastructure") || text.includes("devops") || text.includes("server")) {
    preferences.push("cloud");
  }

  if (text.includes("design") || text.includes("ui") || text.includes("ux") || text.includes("brand")) {
    preferences.push("design");
  }

  if (text.includes("commerce") || text.includes("shop") || text.includes("store") || text.includes("payment")) {
    preferences.push("commerce");
  }

  if (text.includes("security") || text.includes("secure") || text.includes("maintenance") || text.includes("support")) {
    preferences.push("security");
  }

  if (text.includes("strategy") || text.includes("digital") || text.includes("consulting") || text.includes("transformation")) {
    preferences.push("strategy");
  }

  if (text.includes("web") || text.includes("website") || text.includes("development") || text.includes("software")) {
    preferences.push("web");
  }

  preferences.push(iconOrder[index % iconOrder.length]);

  return preferences;
}

function getUniqueIconKey(
  service: {
    id?: string | number;
    title?: string;
    description?: string;
  },
  index: number,
  usedIcons: Set<IconKey>
) {
  const preferences = getIconPreferences(service, index);

  for (const icon of preferences) {
    if (!usedIcons.has(icon)) {
      usedIcons.add(icon);
      return icon;
    }
  }

  const fallbackIcon = iconOrder.find((icon) => !usedIcons.has(icon)) ?? iconOrder[index % iconOrder.length];
  usedIcons.add(fallbackIcon);
  return fallbackIcon;
}

export default function Services() {
  const featuredServices = services.slice(0, 4);
  const usedIcons = new Set<IconKey>();

  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-20 lg:py-24">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Service cards grid - moved to top */}
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:mb-20 lg:grid-cols-4 lg:gap-6">
          {featuredServices.map((service, index) => {
            const iconKey = getUniqueIconKey(service, index, usedIcons);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_24px_90px_rgba(255,255,255,0.08)] sm:p-7 lg:p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-300 group-hover:bg-white/[0.07]" />

                  <div className="mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.1] group-hover:text-white">
                      {renderIcon(iconKey)}
                    </div>
                  </div>

                  <h3 className="mb-4 text-lg font-bold leading-snug text-silver-primary sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-secondary-text">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* New title section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-5xl text-center sm:mb-12"
        >
          <h2 className="mb-5 text-3xl font-bold leading-tight text-silver-primary sm:text-4xl md:text-5xl lg:text-4xl">
            End-To-End Development Services
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary-text sm:text-me">
            Build powerful, scalable, and innovative digital solutions tailored to your business needs. From strategy and design to development, deployment, and maintenance, we provide complete technology services under one roof.
          </p>
        </motion.div>

        {/* Large illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[65rem]">
            <div className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-white/10 blur-[80px]" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/images/service.png"
                alt="End-To-End Development Services"
                width={900}
                height={500}
                className="mx-auto h-auto w-full max-w-[900px] object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}