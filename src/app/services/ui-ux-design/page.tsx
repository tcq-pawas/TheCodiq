import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Product Design Agency – TheCodiQ",
  description: "User research, wireframing & high-conversion UI/UX design for web and mobile products.",
  alternates: {
    canonical: "https://thecodiq.com/services/ui-ux-design",
  },
};

export default function UIUXDesignPage() {
  return (
    <>
      <InnerPageBanner
        title="UI/UX Design Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              UI/UX Design Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              TheCodiQ creates intuitive, engaging digital experiences that users love. Our UI/UX design team combines user research, strategic thinking, and visual design to build products that are both beautiful and functional. We believe great design is about solving problems and creating seamless interactions that drive user engagement and business success.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our design process is rooted in understanding your users and their needs. We conduct user research, create personas, and map user journeys to ensure every design decision serves a purpose. From wireframing to high-fidelity prototypes, we iterate based on feedback to refine the experience. The result is a product that feels intuitive to use and aligns with your business objectives.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We design for all platforms and devices, ensuring consistency across web, mobile, and tablet experiences. Our design systems provide scalable foundations that maintain brand coherence while allowing for flexibility. Whether you need a complete product redesign or specific feature improvements, we deliver designs that convert users into loyal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Design Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>User Research - Understanding user needs through interviews and testing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Wireframing & Prototyping - Low and high-fidelity interactive prototypes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Visual Design - Beautiful, on-brand interfaces that engage users</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Design Systems - Scalable component libraries for consistent experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose TheCodiQ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>User-centered design approach backed by research</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Focus on conversion and business metrics</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Collaborative process with stakeholder involvement</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Design deliverables ready for development handoff</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Design Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "UI/UX Design Services",
            description: "User research, wireframing & high-conversion UI/UX design for web and mobile products.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "UI/UX Design Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "User Research",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wireframing & Prototyping",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Visual Design",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Design Systems",
                  },
                },
              ],
            },
          }),
        }}
      />
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
              {
                "@type": "ListItem",
                position: 3,
                name: "UI/UX Design",
                item: "https://thecodiq.com/services/ui-ux-design",
              },
            ],
          }),
        }}
      />
    </>
  );
}
