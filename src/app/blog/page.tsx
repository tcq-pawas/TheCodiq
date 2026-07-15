import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

import Hero from "@/app/blog/Hero";
import FeaturedPost from "@/app/blog/FeaturedPost";
import BlogGrid from "@/app/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | TheCodiQ - Technology Insights & Updates",
  description: "Read the latest insights, tutorials, and updates from TheCodiQ on web development, mobile apps, AI solutions, and digital marketing trends.",
  alternates: {
    canonical: "https://thecodiq.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <InnerPageBanner
        title="Our Blog"
        subtitle="Insights and updates from the world of technology"
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