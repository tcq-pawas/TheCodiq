import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

import Hero from "@/app/contact/Hero";
import ContactSection from "@/app/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | TheCodiQ Global - Get in Touch",
  description: "Contact TheCodiQ Global for web development, mobile apps, AI solutions, and digital marketing services. Get a free quote for your next project.",
  alternates: {
    canonical: "https://thecodiq.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <InnerPageBanner
        title="Contact Us"
        subtitle="Let's discuss your next project"
      />

      <div className="py-16 bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none opacity-10 grid-pattern" />
        <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
        <div
          className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48"
          style={{ animationDelay: "3s" }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
  <Hero />

  <div className="mb-16">
    <ContactSection />
  </div>
</div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TheCodiQ Global",
            image: "https://thecodiq.com/logo/logo.png",
            telephone: "+91 9935795796",
            email: "pawas.singh@thecodiq.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gorakhpur",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            url: "https://thecodiq.com",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
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
                name: "Contact",
                item: "https://thecodiq.com/contact",
              },
            ],
          }),
        }}
      />
    </>
  );
}