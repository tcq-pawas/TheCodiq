import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/portfolio/Hero";
import PortfolioGrid from "@/app/portfolio/PortfolioGrid";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';

export const metadata: Metadata = {
  title: "Case Studies | Client Success Stories",
  description: "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects across industries.",
  keywords: ["software development case studies", "client success stories", "portfolio", "software development projects", "work samples", "project showcase"],
  openGraph: {
    title: `Case Studies | ${siteName}`,
    description: "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects.",
    url: `${siteUrl}/portfolio`,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} Case Studies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies | ${siteName}`,
    description: "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects.",
    images: [twitterImage],
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies",
  "description": "Explore our client success stories and portfolio. See how The CodiQ Global delivers exceptional software development projects.",
  "url": `${siteUrl}/portfolio`
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
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: `${siteUrl}/portfolio`,
              },
            ],
          }),
        }}
      />
    </>
  );
}