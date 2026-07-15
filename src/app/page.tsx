import { Metadata } from "next";
import Hero from "@/app/home/Hero";
import Services from "@/app/home/Services";
import About from "@/app/home/About";
import Testimonials from "@/app/home/Testimonials";
import FAQ from "@/app/home/FAQ";
import JsonLd from "@/components/seo/JsonLd";


export const metadata: Metadata = {
  title: "Home | TheCodiQ - Premium IT Solutions",
  description:
    "Transform your business with premium IT solutions. Expert web development, mobile apps, AI solutions, and digital marketing services.",
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
  "logo": "https://thecodiq.com/logo/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (555) 123-4567", // TODO: Replace with real phone number
    "contactType": "sales",
    "email": "pawas.singh@thecodiq.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Uttar Pradesh",
    "addressLocality": "Gorakhpur"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does a project cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Project costs depend on the scope, complexity, features, and technology requirements. After understanding your requirements, we provide a transparent quote with no hidden charges.",
                },
              },
              {
                "@type": "Question",
                name: "How long does development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Timelines vary based on project size. Small business websites may take a few weeks, while enterprise applications and AI solutions can take several months. We provide a clear project roadmap before development begins.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide support after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We offer ongoing maintenance, monitoring, performance optimization, bug fixes, security updates, and technical support after project deployment.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work with existing systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We can upgrade, optimize, integrate, or extend existing software systems, APIs, databases, and third-party platforms without disrupting your operations.",
                },
              },
              {
                "@type": "Question",
                name: "Do you sign NDA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We fully respect client confidentiality and are happy to sign Non-Disclosure Agreements before discussing project details.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TheCodiQ Global",
            image: "https://thecodiq.com/logo/logo.png",
            telephone: "+1 (555) 123-4567", // TODO: Replace with real phone number
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
    </>
  );
}

