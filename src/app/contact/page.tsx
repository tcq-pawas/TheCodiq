import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/contact/Hero";
import ContactSection from "@/app/contact/ContactSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | TheCodiQ Global - Get in Touch",
  description: "Contact TheCodiQ Global for web development, mobile apps, AI solutions, and digital marketing services. Get a free quote for your next project.",
  alternates: {
    canonical: "https://thecodiq.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact The CodiQ Global",
  "description": "Get free consultation for your software project. Contact The CodiQ Global for expert software development services.",
  "url": "https://thecodiq.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "The CodiQ Global Pvt. Ltd.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (555) 123-4567", // TODO: Replace with real phone number
      "contactType": "sales",
      "email": "pawas.singh@thecodiq.com",
      "availableLanguage": ["English"]
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <InnerPageBanner
        title="Contact Us"
        subtitle="Let's discuss your next project"
      />

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #D4D4D4 0%, #D8E0D8 20%, #D4D4D4 40%, #E0E0D8 60%, #D4D4D4 80%, #E8E0D8 100%)' }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
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