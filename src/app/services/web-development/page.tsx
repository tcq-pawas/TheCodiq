import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Company India | Custom Web Apps – TheCodiQ",
  description: "Custom web application development using React, Next.js & modern stacks. E-commerce, PWAs & enterprise portals. Get a free quote today.",
  alternates: {
    canonical: "https://thecodiq.com/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <InnerPageBanner
        title="Web Development Company for Global Businesses"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-[26px] font-bold text-white mb-6">
              Web Development Company for Global Businesses
            </h1>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              At TheCodiQ, we build custom web applications that drive business growth. Our team of expert developers specializes in creating high-performance, scalable web solutions using modern technologies like React, Next.js, and Node.js. Whether you need an e-commerce platform, a progressive web app (PWA), or an enterprise portal, we deliver solutions that meet your specific requirements.
            </p>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              Our web development process focuses on user experience, performance optimization, and seamless integration with your existing systems. We follow industry best practices to ensure your web application is secure, maintainable, and built to scale. From startups to enterprises, we&apos;ve helped businesses across industries establish a strong digital presence.
            </p>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              We understand that every business has unique needs. That&apos;s why we take a consultative approach, working closely with you to understand your goals, target audience, and technical requirements. Our agile development methodology ensures transparency throughout the project, with regular updates and iterative improvements based on your feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-[20px] font-bold text-white mb-6">Our Web Development Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">React & Next.js Applications - Modern, fast, and SEO-friendly web apps</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">E-commerce Solutions - Custom online stores with secure payment integration</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Progressive Web Apps - Installable web apps with native-like experience</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">API Development - RESTful and GraphQL APIs for seamless integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-[20px] font-bold text-white mb-6">Why Choose TheCodiQ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Expert team with 5+ years of experience in modern web technologies</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Agile development process with regular updates and transparency</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Focus on performance, security, and scalability from day one</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Comprehensive support and maintenance post-launch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Get a Free Quote
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
            name: "Web Development Services",
            description: "Custom web application development using React, Next.js & modern stacks. E-commerce, PWAs & enterprise portals.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "React & Next.js Applications",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Solutions",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Progressive Web Apps",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "API Development",
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
                name: "Web Development",
                item: "https://thecodiq.com/services/web-development",
              },
            ],
          }),
        }}
      />
    </>
  );
}
