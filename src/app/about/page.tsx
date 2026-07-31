import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/about/Hero";
import MissionVision from "@/app/about/MissionVision";
import TeamSection from "@/app/about/TeamSection";
import WhyChooseUs from "@/app/about/WhyChooseUs";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const organizationName = process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'The CodiQ Global Pvt. Ltd.';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';

export const metadata: Metadata = {
  title: "About Us | IT Solutions Company",
  description: "Learn about TheCodiQ Global - our mission, vision, team, and why businesses choose us for web development, mobile apps, AI solutions, and digital marketing services.",
  keywords: ["software company profile", "about software company", "IT company profile", "software development company", "company mission", "company vision"],
  openGraph: {
    title: `About Us | ${siteName}`,
    description: "Learn about TheCodiQ Global - our mission, vision, team, and why businesses choose us for software development services.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `About ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteName}`,
    description: "Learn about TheCodiQ Global - our mission, vision, team, and why businesses choose us for software development services.",
    images: [twitterImage],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": `About ${siteName}`,
  "description": "Learn about The CodiQ Global - a leading software development company building innovative digital solutions.",
  "url": `${siteUrl}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": organizationName,
    "description": "Premium software development company specializing in mobile apps, web applications, AI solutions, and digital marketing services."
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <InnerPageBanner
        title="About Us"
        subtitle="Learn more about our company and mission"
      />

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)' }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <Hero />
          <MissionVision />
          <TeamSection />
          <WhyChooseUs />
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
                name: "About",
                item: `${siteUrl}/about`,
              },
            ],
          }),
        }}
      />
    </>
  );
}