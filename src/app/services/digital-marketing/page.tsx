import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { Megaphone, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO & Growth – TheCodiQ",
  description: "SEO, content marketing & social media growth strategies for tech and e-commerce brands.",
  alternates: {
    canonical: "https://thecodiq.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <InnerPageBanner
        title="Digital Marketing Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              TheCodiQ helps technology and e-commerce businesses grow their online presence through strategic digital marketing. Our data-driven approach combines SEO, content marketing, and social media strategies to attract qualified traffic and convert visitors into customers. We understand the unique challenges of marketing tech products and craft campaigns that resonate with your target audience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our digital marketing services are designed to deliver measurable results. We start with a comprehensive audit of your current digital presence, then develop a customized strategy aligned with your business goals. From technical SEO optimization to content creation and paid advertising, we execute campaigns that drive growth while providing transparent reporting on performance metrics.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We believe in sustainable growth through organic channels complemented by strategic paid campaigns. Our team stays current with search algorithm updates and platform changes to ensure your marketing efforts remain effective. Whether you're launching a new product or scaling an established brand, we provide the expertise and execution to accelerate your digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Marketing Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>SEO Optimization - Technical SEO, on-page optimization, and link building</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Content Marketing - Strategic content that attracts and engages your audience</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Social Media Marketing - Build brand presence and engage followers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>PPC Advertising - Targeted paid campaigns for immediate results</span>
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
                  <span>Specialized expertise in tech and e-commerce marketing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Data-driven strategies with clear ROI measurement</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Integrated approach combining organic and paid channels</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Transparent reporting and regular strategy reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Grow Your Business
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
            name: "Digital Marketing Services",
            description: "SEO, content marketing & social media growth strategies for tech and e-commerce brands.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Optimization",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Content Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "PPC Advertising",
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
                name: "Digital Marketing",
                item: "https://thecodiq.com/services/digital-marketing",
              },
            ],
          }),
        }}
      />
    </>
  );
}
