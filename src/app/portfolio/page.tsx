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

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #D4D4D4 0%, #D8E0D8 20%, #D4D4D4 40%, #E0E0D8 60%, #D4D4D4 80%, #E8E0D8 100%)' }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
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