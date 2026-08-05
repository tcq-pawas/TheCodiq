import type { ReactNode } from "react";
import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/contact/Hero";
import { CONTACT_INFO, SITE_URL } from "@/lib/constants";
import {
  AlertTriangle,
  Ban,
  Briefcase,
  Copyright,
  CreditCard,
  FileCheck,
  FileText,
  Gavel,
  Globe,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thecodiq.com";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "TheCodiQ Global's terms and conditions govern your use of our website and services. Read our legal terms here.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/terms-and-conditions`,
  },
};

const cardBase =
  "group relative flex w-full flex-col overflow-hidden rounded-[20px] border bg-[linear-gradient(165deg,#0F172A_0%,#0A1220_50%,#070D18_100%)] p-7 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-[6px]";

type Accent = {
  iconWrap: string;
  icon: string;
  divider: string;
  border: string;
  glow: string;
  hoverBorder: string;
  hoverGlow: string;
  topLine: string;
};

const accents = {
  blue: {
    iconWrap: "border-brand-blue/40 bg-brand-blue/15",
    icon: "text-brand-blue",
    divider: "from-brand-blue/60",
    border: "border-brand-blue/25",
    glow: "shadow-[0_0_28px_rgba(30,136,255,0.12)]",
    hoverBorder: "hover:border-brand-blue/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(30,136,255,0.28)]",
    topLine: "from-brand-blue via-sky-400 to-transparent",
  },
  sky: {
    iconWrap: "border-sky-400/40 bg-sky-400/15",
    icon: "text-sky-300",
    divider: "from-sky-400/60",
    border: "border-sky-400/25",
    glow: "shadow-[0_0_28px_rgba(56,189,248,0.12)]",
    hoverBorder: "hover:border-sky-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(56,189,248,0.28)]",
    topLine: "from-sky-400 via-cyan-300 to-transparent",
  },
  cyan: {
    iconWrap: "border-cyan-400/40 bg-cyan-400/15",
    icon: "text-cyan-300",
    divider: "from-cyan-400/60",
    border: "border-cyan-400/25",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.12)]",
    hoverBorder: "hover:border-cyan-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(34,211,238,0.28)]",
    topLine: "from-cyan-400 via-teal-300 to-transparent",
  },
  emerald: {
    iconWrap: "border-emerald-400/40 bg-emerald-400/15",
    icon: "text-emerald-300",
    divider: "from-emerald-400/60",
    border: "border-emerald-400/25",
    glow: "shadow-[0_0_28px_rgba(52,211,153,0.12)]",
    hoverBorder: "hover:border-emerald-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(52,211,153,0.28)]",
    topLine: "from-emerald-400 via-brand-green to-transparent",
  },
  violet: {
    iconWrap: "border-violet-400/40 bg-violet-400/15",
    icon: "text-violet-300",
    divider: "from-violet-400/60",
    border: "border-violet-400/25",
    glow: "shadow-[0_0_28px_rgba(167,139,250,0.12)]",
    hoverBorder: "hover:border-violet-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(167,139,250,0.28)]",
    topLine: "from-violet-400 via-fuchsia-300 to-transparent",
  },
  indigo: {
    iconWrap: "border-indigo-400/40 bg-indigo-400/15",
    icon: "text-indigo-300",
    divider: "from-indigo-400/60",
    border: "border-indigo-400/25",
    glow: "shadow-[0_0_28px_rgba(129,140,248,0.12)]",
    hoverBorder: "hover:border-indigo-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(129,140,248,0.28)]",
    topLine: "from-indigo-400 via-brand-blue to-transparent",
  },
  orange: {
    iconWrap: "border-orange-400/40 bg-orange-400/15",
    icon: "text-orange-300",
    divider: "from-orange-400/60",
    border: "border-orange-400/25",
    glow: "shadow-[0_0_28px_rgba(251,146,60,0.12)]",
    hoverBorder: "hover:border-orange-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(251,146,60,0.28)]",
    topLine: "from-orange-400 via-amber-300 to-transparent",
  },
  amber: {
    iconWrap: "border-amber-400/40 bg-amber-400/15",
    icon: "text-amber-300",
    divider: "from-amber-400/60",
    border: "border-amber-400/25",
    glow: "shadow-[0_0_28px_rgba(251,191,36,0.12)]",
    hoverBorder: "hover:border-amber-400/50",
    hoverGlow: "hover:shadow-[0_12px_40px_rgba(251,191,36,0.28)]",
    topLine: "from-amber-400 via-yellow-300 to-transparent",
  },
} as const satisfies Record<string, Accent>;

function TermsCard({
  Icon,
  title,
  accent,
  children,
}: {
  Icon: LucideIcon;
  title: string;
  accent: Accent;
  children: ReactNode;
}) {
  return (
    <article
      className={`${cardBase} ${accent.border} ${accent.glow} ${accent.hoverBorder} ${accent.hoverGlow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.topLine} opacity-70`}
      />
      <div className="mb-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_0_18px_rgba(30,136,255,0.15)] ${accent.iconWrap}`}
        >
          <Icon className={`h-5 w-5 ${accent.icon}`} strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>
      <h2 className="mb-2 text-base font-bold text-white sm:text-lg">{title}</h2>
      <div
        className={`mb-3 h-px w-full bg-gradient-to-r ${accent.divider} via-white/15 to-transparent`}
      />
      <div className="text-sm leading-relaxed text-gray-200">{children}</div>
    </article>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
      <span>{children}</span>
    </li>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <InnerPageBanner
        title="Terms & Conditions"
        subtitle="Terms governing use of our services"
      />

      <div className="relative overflow-hidden bg-background py-16">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-10" />
        <div className="animated-blob top-1/4 -left-48 h-96 w-96 bg-primary/20" />
        <div
          className="animated-blob bottom-1/4 -right-48 h-96 w-96 bg-accent/20"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero
            badge="TERMS & CONDITIONS"
            title="Terms & Conditions – TheCodiQ Global Pvt. Ltd."
            subtitle="Please read these Terms & Conditions carefully before using TheCodiQ Global's website or engaging our services. By accessing our platform, you agree to be bound by these terms."
          />

          <div className="flex flex-col gap-5">
            <TermsCard
              Icon={FileCheck}
              title="Acceptance of Terms"
              accent={accents.blue}
            >
              <p>
                By accessing or using{" "}
                <strong className="text-white">TheCodiQ Global</strong>&apos;s website,
                applications, or services, you agree to be bound by these Terms &amp;
                Conditions. If you do not agree, please discontinue use immediately.
              </p>
              <p className="mt-3">
                These Terms form a{" "}
                <strong className="text-white">legally binding agreement</strong> between
                you and TheCodiQ Global Pvt. Ltd.
              </p>
            </TermsCard>

            <TermsCard
              Icon={Briefcase}
              title="Services"
              accent={accents.sky}
            >
              <p>
                TheCodiQ Global provides{" "}
                <strong className="text-white">web development</strong>, mobile app
                development, AI solutions, UI/UX design, digital marketing, and cloud &amp;
                DevOps services. Specific deliverables, timelines, and payment terms will
                be outlined in separate{" "}
                <strong className="text-white">project agreements</strong>.
              </p>
            </TermsCard>

            <TermsCard
              Icon={UserCheck}
              title="User Responsibilities"
              accent={accents.cyan}
            >
              <p className="mb-3">Users agree to:</p>
              <ul className="space-y-2">
                <Bullet>
                  Provide <strong className="text-white">accurate and complete</strong>{" "}
                  information when engaging with our services
                </Bullet>
                <Bullet>
                  Not use our services for illegal, harmful, or fraudulent purposes
                </Bullet>
                <Bullet>
                  Respect intellectual property rights of TheCodiQ Global and third
                  parties
                </Bullet>
                <Bullet>
                  Not attempt to compromise, hack, or disrupt our systems
                </Bullet>
                <Bullet>Comply with all applicable laws and regulations</Bullet>
              </ul>
            </TermsCard>

            <TermsCard
              Icon={Copyright}
              title="Intellectual Property"
              accent={accents.violet}
            >
              <p>
                All content, including text, graphics, logos, software, and designs, is the
                property of <strong className="text-white">TheCodiQ Global</strong> or its
                licensors. Unauthorized use, reproduction, or distribution is{" "}
                <strong className="text-white">strictly prohibited</strong>.
              </p>
            </TermsCard>

            <TermsCard
              Icon={CreditCard}
              title="Payment Terms"
              accent={accents.orange}
            >
              <ul className="space-y-2">
                <Bullet>
                  A <strong className="text-white">deposit</strong> is required before
                  project commencement
                </Bullet>
                <Bullet>
                  <strong className="text-white">Milestone-based payments</strong> will be
                  scheduled throughout the project lifecycle
                </Bullet>
                <Bullet>
                  Late payments may result in{" "}
                  <strong className="text-white">suspension of services</strong> until dues
                  are cleared
                </Bullet>
              </ul>
            </TermsCard>

            <TermsCard
              Icon={AlertTriangle}
              title="Limitation of Liability"
              accent={accents.amber}
            >
              <p className="mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2">
                <Bullet>
                  TheCodiQ Global shall not be liable for{" "}
                  <strong className="text-white">
                    indirect, incidental, special, or consequential damages
                  </strong>
                </Bullet>
                <Bullet>
                  Liability is capped at the{" "}
                  <strong className="text-white">
                    amount paid by the client
                  </strong>{" "}
                  for the specific project/service
                </Bullet>
              </ul>
            </TermsCard>

            <TermsCard
              Icon={Ban}
              title="Termination"
              accent={accents.orange}
            >
              <p>
                We reserve the right to{" "}
                <strong className="text-white">suspend or terminate</strong> services at
                any time, with or without cause, and with or without notice, particularly
                in cases of misuse or breach of these Terms.
              </p>
            </TermsCard>

            <TermsCard
              Icon={ShieldCheck}
              title="Data Protection & Privacy"
              accent={accents.emerald}
            >
              <ul className="space-y-2">
                <Bullet>
                  We comply with applicable data protection laws (including{" "}
                  <strong className="text-white">GDPR</strong> where relevant)
                </Bullet>
                <Bullet>
                  User data will be handled in accordance with our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-brand-blue hover:underline"
                  >
                    Privacy Policy
                  </a>
                </Bullet>
                <Bullet>
                  Users are responsible for maintaining the confidentiality of login
                  credentials
                </Bullet>
              </ul>
            </TermsCard>

            <TermsCard
              Icon={Gavel}
              title="Dispute Resolution"
              accent={accents.violet}
            >
              <ul className="space-y-2">
                <Bullet>
                  Any disputes shall first be attempted to be resolved through{" "}
                  <strong className="text-white">good-faith negotiation</strong>
                </Bullet>
                <Bullet>
                  If unresolved, disputes will be subject to{" "}
                  <strong className="text-white">binding arbitration</strong> in
                  Gorakhpur, Uttar Pradesh, India
                </Bullet>
                <Bullet>
                  Users waive the right to participate in{" "}
                  <strong className="text-white">class-action lawsuits</strong> against
                  TheCodiQ Global
                </Bullet>
              </ul>
            </TermsCard>

            <TermsCard
              Icon={Scale}
              title="Governing Law"
              accent={accents.cyan}
            >
              <p>
                These Terms shall be governed by and construed in accordance with the laws
                of <strong className="text-white">India</strong>, without regard to
                conflict of law principles.
              </p>
            </TermsCard>

            <TermsCard
              Icon={FileText}
              title="Changes to Terms"
              accent={accents.amber}
            >
              <p>
                We may update these Terms at any time.{" "}
                <strong className="text-white">Continued use</strong> of our services after
                changes constitutes acceptance of the revised Terms. The{" "}
                <strong className="text-white">&quot;Last Updated&quot;</strong> date will
                be displayed at the top of this document.
              </p>
            </TermsCard>

            <TermsCard
              Icon={Mail}
              title="Contact Us"
              accent={accents.indigo}
            >
              <p className="mb-4">
                For questions regarding these Terms &amp; Conditions:
              </p>
              <div className="space-y-2.5">
                <a
                  href="mailto:legal@thecodiq.com"
                  className="flex items-start gap-3 rounded-xl border border-indigo-400/20 bg-indigo-400/[0.07] px-3.5 py-3 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-indigo-400/10"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-300">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-gray-500">
                      Email
                    </span>
                    <span className="break-all text-sm text-gray-200">
                      legal@thecodiq.com
                    </span>
                  </span>
                </a>

                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-indigo-400/20 bg-indigo-400/[0.07] px-3.5 py-3 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-indigo-400/10"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-300">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-gray-500">
                      Website
                    </span>
                    <span className="break-all text-sm text-gray-200">thecodiq.com</span>
                  </span>
                </a>

                <div className="flex items-start gap-3 rounded-xl border border-indigo-400/20 bg-indigo-400/[0.07] px-3.5 py-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-300">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-gray-500">
                      Registered Office
                    </span>
                    <span className="text-sm leading-snug text-gray-200">
                      TheCodiQ Global Pvt. Ltd., {CONTACT_INFO.address}
                    </span>
                  </span>
                </div>
              </div>
            </TermsCard>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Terms & Conditions",
                item: `${siteUrl}/terms-and-conditions`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
