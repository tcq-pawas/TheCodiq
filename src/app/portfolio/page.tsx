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