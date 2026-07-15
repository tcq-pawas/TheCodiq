import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/portfolio/Hero";
import PortfolioGrid from "@/app/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | TheCodiQ - Our Latest Projects & Case Studies",
  description: "Explore TheCodiQ's portfolio of successful web development, mobile app, AI, and digital marketing projects. See our work and client success stories.",
  alternates: {
    canonical: "https://thecodiq.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
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
                name: "Portfolio",
                item: "https://thecodiq.com/portfolio",
              },
            ],
          }),
        }}
      />
    </>
  );
}