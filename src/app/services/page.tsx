import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

import Hero from "@/app/services/Hero";
import ServicesGrid from "@/app/services/ServicesGrid";
import Process from "@/app/services/Process";

export const metadata: Metadata = {
  title: "Services | TheCodiQ",
  description:
    "Explore our comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
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