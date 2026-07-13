import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/portfolio/Hero";
import PortfolioGrid from "@/app/portfolio/PortfolioGrid";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects across industries.",
  keywords: ["software development case studies", "client success stories", "portfolio", "software development projects"],
  openGraph: {
    title: "Case Studies | The CodiQ Global",
    description: "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects.",
    url: "https://thecodiq.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://thecodiq.com/portfolio",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies",
  "description": "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects.",
  "url": "https://thecodiq.com/portfolio"
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <InnerPageBanner
        title="Our Portfolio"
        subtitle="Explore our latest projects and success stories"
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
          <PortfolioGrid />
        </div>
      </div>
    </>
  );
}