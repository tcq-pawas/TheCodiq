import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/contact/Hero";
import ContactSection from "@/app/contact/ContactSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact The CodiQ Global",
  description: "Get free consultation for your software project. Contact The CodiQ Global for expert mobile app development, web development, and AI solutions.",
  keywords: ["software development contact", "contact software company", "get free consultation", "software development inquiry"],
  openGraph: {
    title: "Contact The CodiQ Global",
    description: "Get free consultation for your software project. Contact The CodiQ Global for expert software development services.",
    url: "https://thecodiq.com/contact",
    type: "website",
  },
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
      "telephone": "+1-555-123-4567",
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

  <div className="mb-16">
    <ContactSection />
  </div>
</div>
      </div>
    </>
  );
}