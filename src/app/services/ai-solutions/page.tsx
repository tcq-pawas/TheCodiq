import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { BrainCircuit, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Machine Learning Development Services – TheCodiQ",
  description: "AI automation, NLP, computer vision & custom ML models for business. Build AI-powered products with an expert team.",
  alternates: {
    canonical: "https://thecodiq.com/services/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return (
    <>
      <InnerPageBanner
        title="AI Development Company"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Development Company
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              TheCodiQ helps businesses harness the power of artificial intelligence and machine learning. Our AI experts develop custom solutions that automate processes, extract insights from data, and create intelligent user experiences. From predictive analytics to computer vision, we transform how businesses operate and serve their customers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our AI development services span the full spectrum of machine learning technologies. We build custom ML models tailored to your specific business needs, implement natural language processing for text analysis and chatbots, and develop computer vision systems for image recognition and automated inspection. Our team stays at the forefront of AI research to bring you the most effective solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We take a practical approach to AI implementation, focusing on solving real business problems rather than chasing trends. Our process begins with understanding your objectives and data landscape, then designing and training models that deliver measurable results. We ensure our AI solutions integrate seamlessly with your existing systems and provide ongoing support for model maintenance and improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our AI Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Machine Learning Models - Custom algorithms for prediction and classification</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Natural Language Processing - Text analysis, sentiment analysis, chatbots</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Computer Vision - Image recognition, object detection, video analysis</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Predictive Analytics - Data-driven forecasting and decision support</span>
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
                  <span>Expert team with PhD-level researchers and experienced engineers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Focus on practical, business-driven AI solutions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>End-to-end development from data preparation to deployment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span>Ongoing model monitoring and optimization services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Discuss Your AI Project
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
            name: "AI & Machine Learning Development Services",
            description: "AI automation, NLP, computer vision & custom ML models for business. Build AI-powered products with an expert team.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Solutions Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Machine Learning Models",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Natural Language Processing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Computer Vision",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Predictive Analytics",
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
                name: "AI Solutions",
                item: "https://thecodiq.com/services/ai-solutions",
              },
            ],
          }),
        }}
      />
    </>
  );
}
