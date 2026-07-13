import { Metadata } from "next";
import Hero from "@/app/home/Hero";
import Services from "@/app/home/Services";
import About from "@/app/home/About";
import Testimonials from "@/app/home/Testimonials";
import FAQ from "@/app/home/FAQ";
import JsonLd from "@/components/seo/JsonLd";


export const metadata: Metadata = {
  title: "The CodiQ Global",
  description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services for modern businesses.",
  keywords: ["software development company", "mobile app development", "web development", "AI solutions", "digital marketing"],
  openGraph: {
    title: "The CodiQ Global | Premium Software Development & AI Solutions",
    description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services.",
    url: "https://thecodiq.com",
    type: "website",
  },
  alternates: {
    canonical: "https://thecodiq.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "name": "The CodiQ Global Pvt. Ltd.",
  "description": "Premium software development company specializing in mobile apps, web applications, AI solutions, machine learning, and digital marketing services.",
  "url": "https://thecodiq.com",
  "logo": "https://thecodiq.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales",
    "email": "pawas.singh@thecodiq.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Uttar Pradesh",
    "addressLocality": "Your City"
  },
  "sameAs": [
    "https://linkedin.com/company/thecodiq",
    "https://twitter.com/thecodiq",
    "https://facebook.com/thecodiq"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The CodiQ Global",
  "url": "https://thecodiq.com",
  "description": "Premium software development and AI solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://thecodiq.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
    </>
  );
}

