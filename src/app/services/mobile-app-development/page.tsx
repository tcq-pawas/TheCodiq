import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { Smartphone, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Company | iOS & Android – TheCodiQ",
  description: "Native & cross-platform mobile app development with React Native & Flutter. Launch your app in weeks, not months.",
  alternates: {
    canonical: "https://thecodiq.com/services/mobile-app-development",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <InnerPageBanner
        title="Mobile App Development Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mobile App Development Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              TheCodiQ delivers high-quality mobile applications for iOS and Android platforms. Our experienced team specializes in both native and cross-platform development, ensuring your app performs flawlessly across all devices. Whether you need a consumer-facing app or an enterprise solution, we have the expertise to bring your vision to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We leverage modern frameworks like React Native and Flutter to build cross-platform apps that offer native-like performance while reducing development time and cost. For projects requiring platform-specific features, our native development team delivers optimized experiences using Swift for iOS and Kotlin for Android.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our mobile app development process covers the entire lifecycle from concept to launch and beyond. We handle UI/UX design, development, testing, app store submission, and ongoing maintenance. Our goal is to help you launch a successful mobile app that engages users and drives business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mobile App Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>React Native Development - Build once, deploy on iOS and Android</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Flutter Applications - Beautiful, fast, and expressive mobile apps</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>iOS & Android Native - Platform-specific optimized applications</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>App Store Optimization - Maximize visibility and downloads</span>
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
                  <span>Rapid development with cross-platform frameworks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Experienced team with 50+ successful app launches</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Full-cycle development from design to deployment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Ongoing support and updates post-launch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your App Project
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
            name: "Mobile App Development Services",
            description: "Native & cross-platform mobile app development with React Native & Flutter. Launch your app in weeks, not months.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Mobile App Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "React Native Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flutter Applications",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "iOS & Android Native",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "App Store Optimization",
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
                name: "Mobile App Development",
                item: "https://thecodiq.com/services/mobile-app-development",
              },
            ],
          }),
        }}
      />
    </>
  );
}
