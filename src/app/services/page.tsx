import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/services/Hero";
import ServicesGrid from "@/app/services/ServicesGrid";
import Process from "@/app/services/Process";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive software development services including web development, mobile apps, AI solutions, UI/UX design, and digital marketing for business growth.",
  keywords: ["software development services", "IT services", "web development services", "mobile app development", "AI solutions"],
  openGraph: {
    title: "Our Services | The CodiQ Global",
    description: "Explore our comprehensive software development services including web development, mobile apps, AI solutions, and digital marketing.",
    url: "https://thecodiq.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://thecodiq.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Services",
  "description": "Explore our comprehensive software development services including web development, mobile apps, AI solutions, UI/UX design, and digital marketing.",
  "url": "https://thecodiq.com/services"
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <InnerPageBanner
        title="Our Services"
        subtitle="Technology solutions for your business growth"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-7xl px-4 mx-auto">
          <Hero />
          <ServicesGrid />
          <Process />
        </div>
      </div>
    </>
  );
}