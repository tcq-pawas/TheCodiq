import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | AWS, Azure, CI/CD – TheCodiQ",
  description: "Scalable cloud infrastructure, DevOps automation & microservices architecture setup.",
  alternates: {
    canonical: "https://thecodiq.com/services/cloud-devops",
  },
};

export default function CloudDevOpsPage() {
  return (
    <>
      <InnerPageBanner
        title="Cloud & DevOps Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-[26px] font-bold text-white mb-6">
              Cloud & DevOps Services
            </h1>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              TheCodiQ helps businesses modernize their infrastructure and streamline deployment processes with cloud and DevOps solutions. Our certified engineers design scalable cloud architectures on AWS and Azure, implement CI/CD pipelines, and adopt DevOps best practices to accelerate your delivery cycles. We transform how you build, deploy, and operate applications.
            </p>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              Our cloud services cover the full spectrum of infrastructure modernization. We assess your current setup, design cloud-native architectures, and migrate workloads with minimal disruption. Whether you need a simple cloud deployment or a complex microservices architecture, we ensure your infrastructure is secure, cost-optimized, and built to handle growth. Our DevOps automation eliminates manual processes and reduces deployment risks.
            </p>
            <p className="text-[12px] text-gray-300 leading-relaxed mb-8">
              We implement infrastructure as code using tools like Terraform and CloudFormation, ensuring consistency and reproducibility across environments. Our CI/CD pipelines automate testing and deployment, enabling faster iterations and higher code quality. We also provide ongoing monitoring and optimization to ensure your cloud operations run efficiently and cost-effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-[20px] font-bold text-white mb-6">Our Cloud & DevOps Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">AWS & Azure - Cloud architecture design, migration, and management</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className=" flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">DevOps & CI/CD - Automated pipelines for continuous integration and deployment</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Microservices Architecture - Scalable, resilient application design patterns</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Serverless Computing - Event-driven architectures for optimal cost efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-[20px] font-bold text-white mb-6">Why Choose TheCodiQ?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Certified cloud engineers with AWS and Azure expertise</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Infrastructure as code for consistency and reproducibility</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">Focus on security, scalability, and cost optimization</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-[12px]">24/7 monitoring and support for production environments</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Modernize Your Infrastructure
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
            name: "Cloud & DevOps Services",
            description: "Scalable cloud infrastructure, DevOps automation & microservices architecture setup.",
            provider: {
              "@type": "Organization",
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
            },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Cloud & DevOps Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AWS & Azure",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "DevOps & CI/CD",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Microservices Architecture",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Serverless Computing",
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
                name: "Cloud & DevOps",
                item: "https://thecodiq.com/services/cloud-devops",
              },
            ],
          }),
        }}
      />
    </>
  );
}
