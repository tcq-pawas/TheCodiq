import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/services/Hero";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import {
  BrainCircuit,
  Layers,
  Code2,
  Smartphone,
  CloudCog,
  Database,
  Palette,
  Settings,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';

export const metadata: Metadata = {
  title: "Ideas to Execution | Web, Mobile, AI & Cloud Solutions",
  description: "Comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cloud infrastructure.",
  keywords: [
    "IT services",
    "web development services",
    "mobile app development",
    "AI solutions",
    "UI/UX design services",
    "digital marketing services",
    "cloud infrastructure",
    "DevOps services",
    "software development"
  ],
  openGraph: {
    title: `Ideas to Execution | ${siteName}`,
    description: "Comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cloud infrastructure.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `Ideas to Execution by ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ideas to Execution | ${siteName}`,
    description: "Comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cloud infrastructure.",
    images: [twitterImage],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Ideas to Execution",
  "description": "Comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cloud infrastructure.",
  "url": `${siteUrl}/services`
};

// NOTE: id/href values below are aligned 1:1 with the 9 slugs defined in
// data/services.ts (and used by the [slug]/page.tsx dynamic route from the PDF).
// Card UI/markup is unchanged — only data (title, description, icon, href, color) was fixed.
const services = [
  {
    id: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    description: "AI agents, generative AI, computer vision & workflow automation for business efficiency.",
    icon: BrainCircuit,
    href: "/services/ai-intelligent-automation",
    color: {
      icon: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/35",
      hoverText: "group-hover:text-purple-400",
    },
  },
  {
    id: "digital-product-engineering",
    title: "Digital Product Engineering",
    description: "End-to-end product design, architecture & engineering for scalable digital products.",
    icon: Layers,
    href: "/services/digital-product-engineering",
    color: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/35",
      hoverText: "group-hover:text-blue-400",
    },
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Tailored software solutions built with modern stacks for your unique business needs.",
    icon: Code2,
    href: "/services/custom-software-development",
    color: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      hoverBorder: "hover:border-amber-500/35",
      hoverText: "group-hover:text-amber-400",
    },
  },
  {
    id: "web-mobile-experience",
    title: "Web & Mobile Experience",
    description: "Custom web applications, PWAs, and native/cross-platform mobile apps for iOS & Android.",
    icon: Smartphone,
    href: "/services/web-mobile-experience",
    color: {
      icon: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/35",
      hoverText: "group-hover:text-emerald-400",
    },
  },
  {
    id: "cloud-infrastructure-engineering",
    title: "Cloud Infrastructure Engineering",
    description: "Scalable cloud infrastructure, DevOps automation & microservices architecture setup.",
    icon: CloudCog,
    href: "/services/cloud-infrastructure-engineering",
    color: {
      icon: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/35",
      hoverText: "group-hover:text-cyan-400",
    },
  },
  {
    id: "integration-data-solutions",
    title: "Integration & Data Solutions",
    description: "Seamless system integrations, data pipelines & API solutions connecting your business.",
    icon: Database,
    href: "/services/integration-data-solutions",
    color: {
      icon: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      hoverBorder: "hover:border-indigo-500/35",
      hoverText: "group-hover:text-indigo-400",
    },
  },
  {
    id: "experience-design-digital-transformation",
    title: "Experience Design & Digital Transformation",
    description: "User research, wireframing & high-conversion UI/UX design for web and mobile products.",
    icon: Palette,
    href: "/services/experience-design-digital-transformation",
    color: {
      icon: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      hoverBorder: "hover:border-pink-500/35",
      hoverText: "group-hover:text-pink-400",
    },
  },
  {
    id: "managed-technology-services",
    title: "Managed Technology Services",
    description: "Ongoing support, monitoring & maintenance to keep your technology running smoothly.",
    icon: Settings,
    href: "/services/managed-technology-services",
    color: {
      icon: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      hoverBorder: "hover:border-orange-500/35",
      hoverText: "group-hover:text-orange-400",
    },
  },
  {
    id: "technology-consulting-innovation",
    title: "Technology Consulting & Innovation",
    description: "Strategic technology consulting & innovation roadmaps to drive digital transformation.",
    icon: Lightbulb,
    href: "/services/technology-consulting-innovation",
    color: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      hoverBorder: "hover:border-rose-500/35",
      hoverText: "group-hover:text-rose-400",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <InnerPageBanner
        title="Ideas to Execution"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
        <div
          className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48"
          style={{ animationDelay: "3s" }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <Hero />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.065] ${service.color.hoverBorder}`}
                >
                  <div className="relative mb-6 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-lg shadow-black/10 transition duration-300 group-hover:scale-105 ${service.color.border} ${service.color.bg} ${service.color.icon}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1 ${service.color.hoverText}`}
                    />
                  </div>

                  <div className="relative">
                    <h3
                      className={`text-medium font-bold text-white transition duration-300 ${service.color.hoverText}`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
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
                name: "Services",
                item: `${siteUrl}/services`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
