import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/blog/Hero";
import FeaturedPost from "@/app/blog/FeaturedPost";
import BlogGrid from "@/app/blog/BlogGrid";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "The CodiQ Blog",
  description: "Latest tech insights and development trends. Expert articles on software development, AI, mobile apps, web development, and digital marketing.",
  keywords: ["software development blog", "tech insights", "development trends", "AI blog", "web development articles"],
  openGraph: {
    title: "The CodiQ Blog | Tech Insights & Development Trends",
    description: "Latest tech insights and development trends. Expert articles on software development, AI, mobile apps, and web development.",
    url: "https://thecodiq.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://thecodiq.com/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "The CodiQ Blog",
  "description": "Latest tech insights and development trends. Expert articles on software development, AI, mobile apps, and web development.",
  "url": "https://thecodiq.com/blog"
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <InnerPageBanner
        title="Our Blog"
        subtitle="Insights and updates from the world of technology"
      />

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 20%, #fffdf8 45%, #f8fff9 70%, #ffffff 100%)' }}>
        {/* Background effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <Hero />
          <FeaturedPost />
          <BlogGrid />
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
                name: "Blog",
                item: "https://thecodiq.com/blog",
              },
            ],
          }),
        }}
      />
    </>
  );
}