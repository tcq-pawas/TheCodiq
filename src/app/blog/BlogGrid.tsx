"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  CheckCircle2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

type AuthCard = {
  id: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  proof: string;
  icon: ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
};

const authCards: AuthCard[] = [
  {
    id: "verified-identity",
    label: "Verified access",
    title: "Authentic identity checks",
    summary: "Confirm real users before they enter sensitive areas.",
    detail:
      "Passkeys, device checks, and email verification help reduce fake access while keeping sign-in simple.",
    proof: "Trusted user flow",
    icon: ShieldCheck,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
  },
  {
    id: "secure-login",
    label: "Secure login",
    title: "Protected authentication",
    summary: "Keep credentials safer with guarded sign-in controls.",
    detail:
      "Session protection, encrypted tokens, and retry limits help defend accounts from common attacks.",
    proof: "Encrypted sessions",
    icon: LockKeyhole,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
  },
  {
    id: "passwordless",
    label: "Passwordless",
    title: "Faster reliable access",
    summary: "Let trusted users sign in with less friction.",
    detail:
      "Magic links and passkeys make the login experience faster without weakening your security posture.",
    proof: "Low-friction entry",
    icon: KeyRound,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/20",
  },
  {
    id: "biometric-ready",
    label: "Identity signal",
    title: "Device-aware protection",
    summary: "Recognize trusted devices and flag risky attempts.",
    detail:
      "Fingerprint-style device signals add context before a session is approved or challenged.",
    proof: "Risk-based checks",
    icon: Fingerprint,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    iconBorder: "border-pink-500/20",
  },
  {
    id: "reliable-sessions",
    label: "Reliable sessions",
    title: "Stable account access",
    summary: "Keep users connected with clear, dependable sessions.",
    detail:
      "Refresh handling and server-side validation reduce unexpected logouts and stale session issues.",
    proof: "Always validated",
    icon: ServerCog,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
  },
  {
    id: "account-alerts",
    label: "Account alerts",
    title: "Clear security notices",
    summary: "Notify users when important account activity happens.",
    detail:
      "Login alerts and recovery notices build confidence by making account activity easy to verify.",
    proof: "User confidence",
    icon: BellRing,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
  },
];

function AuthFeatureCard({
  card,
  index,
}: {
  card: AuthCard;
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.42 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-background/80 p-4 shadow-lg shadow-black/20 transition-all duration-500 sm:min-h-[236px] sm:p-5 md:hover:-translate-y-1 md:hover:border-primary/35 md:hover:bg-white/[0.04] md:hover:shadow-[0_22px_55px_-28px_rgba(59,130,246,0.45)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg border ${card.iconBorder} ${card.iconBg} ${card.iconColor} transition-all duration-500`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-5 sm:mt-7">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/80 ">
          {card.label}
        </span>

        <h3 className="mt-2 text-[15px] font-bold leading-snug text-white transition-colors duration-300 md:group-hover:text-primary ">
          {card.title}
        </h3>

        <p className="mt-2 text-[12px] leading-6 text-gray-400">{card.summary}</p>
      </div>

      {/*
        Mobile: detail panel is always visible, stacked in normal flow (no hover on touch devices).
        From sm/md up: reverts to the absolute, hover-revealed slide-up panel.
      */}
      <div className="relative mt-4 border-t border-white/10 pt-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:mt-0 sm:translate-y-5 sm:bg-background/95 sm:px-5 sm:pb-5 sm:pt-4 sm:opacity-0 sm:shadow-[0_-18px_45px_-30px_rgba(0,0,0,0.85)] sm:backdrop-blur-md sm:transition-all sm:duration-500 sm:ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <p className="text-[12px] leading-6 text-gray-300">{card.detail}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
            <CheckCircle2 className="h-3 w-3 text-primary" />
            {card.proof}
          </span>

          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 md:group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function AuthCardGrid() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {authCards.map((card, index) => (
        <AuthFeatureCard key={card.id} card={card} index={index} />
      ))}
    </section>
  );
}