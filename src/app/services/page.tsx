import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Link from "next/link";
import { ArrowRight, Globe2, Smartphone, BrainCircuit, Palette, Megaphone, CloudCog } from "lucide-react";

import Hero from "@/app/services/Hero";
import ServicesGrid from "@/app/services/ServicesGrid";
import Process from "@/app/services/Process";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IT Services | Web, Mobile, AI & Cloud Solutions – TheCodiQ",
  description: "Comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cloud infrastructure.",
  alternates: {
    canonical: "https://thecodiq.com/services",
  },
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications using React, Next.js & modern stacks. E-commerce, PWAs & enterprise portals.",
    icon: Globe2,
    href: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native & cross-platform mobile apps with React Native & Flutter. iOS & Android development.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "AI automation, NLP, computer vision & custom ML models for business automation.",
    icon: BrainCircuit,
    href: "/services/ai-solutions",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User research, wireframing & high-conversion UI/UX design for web and mobile products.",
    icon: Palette,
    href: "/services/ui-ux-design",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, content marketing & social media growth strategies for tech and e-commerce brands.",
    icon: Megaphone,
    href: "/services/digital-marketing",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, DevOps automation & microservices architecture setup.",
    icon: CloudCog,
    href: "/services/cloud-devops",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <InnerPageBanner
        title="Our Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              We deliver comprehensive technology solutions tailored to your business needs. Explore our services below to learn how we can help transform your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:bg-white/[0.065]"
                >
                  <div className="relative mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-black/10 transition duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>

                  <div className="relative">
                    <h3 className="text-lg font-bold text-white transition duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
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
                item: "https://thecodiq.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://thecodiq.com/services",
              },
            ],
          }),
        }}
      />
    </>
  );
}