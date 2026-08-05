import type { ReactNode } from "react";
import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/contact/Hero";
import { CONTACT_INFO, SITE_URL } from "@/lib/constants";
import {
  Cloud,
  Cookie,
  Database,
  FileText,
  Globe,
  Lock,
  Mail,
  MapPin,
  Settings,
  Shield,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thecodiq.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "TheCodiQ Global's privacy policy explains how we collect, use, and protect your personal information when you use our services, in accordance with Indian IT and DPDP laws.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
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

function PolicyCard({
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <InnerPageBanner
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
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
            badge="PRIVACY POLICY"
            title="Your Privacy Is Important to Us"
            subtitle="Learn how TheCodiQ Global collects, uses, and protects your information when you visit our website or engage our services — published in line with applicable Indian data protection laws."
          />

          {/* One premium card per row */}
          <div className="flex flex-col gap-5">
            <PolicyCard
              Icon={Shield}
              title="Introduction"
              accent={accents.blue}
            >
              <p>
                <strong className="text-white">TheCodiQ Global Pvt. Ltd.</strong>{" "}
                (&quot;TheCodiQ Global,&quot; &quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is a software development and IT services company based in{" "}
                <strong className="text-white">Gorakhpur, Uttar Pradesh, India</strong>,
                providing web development, mobile apps, AI solutions, digital marketing,
                CRM, cloud/DevOps, and digital transformation services.
              </p>
              <p className="mt-3">
                This Policy explains how we collect, use, disclose, and safeguard your
                information, and is published under the{" "}
                <strong className="text-white">IT Act, 2000</strong>,{" "}
                <strong className="text-white">SPDI Rules, 2011</strong>, and the{" "}
                <strong className="text-white">DPDP Act, 2023</strong>, as applicable. By
                using our website or services, you consent to this Policy.
              </p>
            </PolicyCard>

            <PolicyCard
              Icon={Database}
              title="Information We Collect"
              accent={accents.sky}
            >
              <p className="mb-3">We may collect information about you in several ways:</p>
              <ul className="space-y-2">
                <Bullet>
                  <strong className="text-white">Personal identification</strong> — name,
                  email, phone, and postal address
                </Bullet>
                <Bullet>
                  <strong className="text-white">Business information</strong> — company,
                  job title, requirements, and project details
                </Bullet>
                <Bullet>
                  <strong className="text-white">SPDI</strong> — financial/billing details
                  only with <strong className="text-white">explicit consent</strong> for
                  invoicing. We do not collect passwords, health, biometric, or sexual
                  orientation data unless strictly required and disclosed separately
                </Bullet>
                <Bullet>
                  <strong className="text-white">Technical data</strong> — IP address,
                  browser, device, and OS
                </Bullet>
                <Bullet>
                  <strong className="text-white">Usage data</strong> — pages visited, time
                  spent, referring URLs, and features used (via cookies)
                </Bullet>
              </ul>
            </PolicyCard>

            <PolicyCard
              Icon={Settings}
              title="How We Use Information"
              accent={accents.cyan}
            >
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="space-y-2">
                <Bullet>Provide, maintain, and improve our services</Bullet>
                <Bullet>Respond to inquiries, proposals, and support requests</Bullet>
                <Bullet>Process payments and invoicing</Bullet>
                <Bullet>
                  Send marketing communications (with consent; opt out anytime)
                </Bullet>
                <Bullet>Analyze usage patterns to improve experience</Bullet>
                <Bullet>Comply with applicable legal obligations under Indian law</Bullet>
              </ul>
            </PolicyCard>

            <PolicyCard
              Icon={Cookie}
              title="Cookies & Tracking"
              accent={accents.orange}
            >
              <p>
                Our website may use cookies and similar technologies to enhance user
                experience, analyze traffic, and remember preferences. You may{" "}
                <strong className="text-white">disable cookies</strong> through your
                browser settings, though this may affect certain website functionality.
              </p>
            </PolicyCard>

            <PolicyCard
              Icon={Users}
              title="Information Sharing"
              accent={accents.sky}
            >
              <p className="mb-3">
                We do <strong className="text-white">not sell</strong> your personal
                information. We may share your information with:
              </p>
              <ul className="space-y-2">
                <Bullet>
                  Employees, contractors, or affiliates under confidentiality obligations
                </Bullet>
                <Bullet>
                  Third-party service providers (hosting, payment processing, analytics)
                </Bullet>
                <Bullet>Government or regulatory authorities where required by law</Bullet>
                <Bullet>
                  A successor entity in the event of a merger, acquisition, or sale
                </Bullet>
              </ul>
            </PolicyCard>

            <PolicyCard
              Icon={Cloud}
              title="Data Retention"
              accent={accents.cyan}
            >
              <p>
                We retain personal information only as long as necessary to fulfill the
                purposes outlined in this Policy, or as required by applicable law, after
                which it is{" "}
                <strong className="text-white">securely deleted or anonymized</strong>.
              </p>
            </PolicyCard>

            <PolicyCard
              Icon={Lock}
              title="Data Security"
              accent={accents.emerald}
            >
              <p className="mb-4">
                We implement <strong className="text-white">reasonable security practices
                and procedures</strong>, including technical and organizational measures, to
                protect your personal information against unauthorized access, alteration,
                disclosure, or destruction, in line with the{" "}
                <strong className="text-white">SPDI Rules</strong>.
              </p>
              <div className="rounded-2xl border border-brand-green/40 bg-brand-green/10 p-4 shadow-[0_0_20px_rgba(111,207,74,0.12)]">
                <div className="mb-1.5 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-brand-green" strokeWidth={2} aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-green">Security Commitment</p>
                </div>
                <p>
                  No method of transmission over the Internet is{" "}
                  <strong className="text-white">100% secure</strong>. We cannot guarantee
                  absolute security, but we continuously apply industry-aligned safeguards.
                </p>
              </div>
            </PolicyCard>

            <PolicyCard
              Icon={ShieldCheck}
              title="Your Rights"
              accent={accents.violet}
            >
              <p className="mb-3">Subject to applicable law, you have the right to:</p>
              <ul className="space-y-2">
                <Bullet>Access the personal information we hold about you</Bullet>
                <Bullet>Correct inaccurate or outdated information</Bullet>
                <Bullet>
                  Request deletion of your information (&quot;right to erasure&quot;)
                </Bullet>
                <Bullet>Withdraw consent and opt out of marketing at any time</Bullet>
                <Bullet>Object to or restrict certain processing of your information</Bullet>
                <Bullet>Contact us about how we handle your data</Bullet>
              </ul>
            </PolicyCard>

            <PolicyCard
              Icon={Globe}
              title="International Transfers"
              accent={accents.violet}
            >
              <p>
                Where your information is transferred{" "}
                <strong className="text-white">outside India</strong>, we take reasonable
                steps to ensure it receives a comparable level of protection.
              </p>
            </PolicyCard>

            <PolicyCard
              Icon={FileText}
              title="Policy Updates"
              accent={accents.amber}
            >
              <p>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or legal requirements. The updated version will be posted on
                this page with a revised{" "}
                <strong className="text-white">&quot;Last updated&quot;</strong> date.
                Continued use of our website or services after changes constitutes
                acceptance of the updated Policy.
              </p>
            </PolicyCard>

            <PolicyCard
              Icon={Mail}
              title="Contact Us"
              accent={accents.indigo}
            >
              <p className="mb-4">
                If you have questions about this Privacy Policy or wish to exercise your
                rights, please contact us at:
              </p>
              <div className="space-y-2.5">
                <a
                  href="mailto:privacy@thecodiq.com"
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
                      privacy@thecodiq.com
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
            </PolicyCard>
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
                name: "Privacy Policy",
                item: `${siteUrl}/privacy-policy`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
