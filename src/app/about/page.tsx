import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/about/Hero";
import MissionVision from "@/app/about/MissionVision";
import TeamSection from "@/app/about/TeamSection";
import WhyChooseUs from "@/app/about/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | TheCodiQ Global - IT Solutions Company",
  description: "Learn about TheCodiQ Global - our mission, vision, team, and why businesses choose us for web development, mobile apps, AI solutions, and digital marketing services.",
  alternates: {
    canonical: "https://thecodiq.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <InnerPageBanner
        title="About Us"
        subtitle="Learn more about our company and mission"
      />

      <div className="py-16 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
        <div
          className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48"
          style={{ animationDelay: "3s" }}
        />

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
                item: "https://thecodiq.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://thecodiq.com/about",
              },
            ],
          }),
        }}
      />
    </>
  );
}