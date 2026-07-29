import { Metadata } from "next";
import Hero from "@/app/home/Hero";
import Services from "@/app/home/Services";
import About from "@/app/home/About";
import Testimonials from "@/app/home/Testimonials";
import FAQ from "@/app/home/FAQ";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const organizationName = process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'The CodiQ Global Pvt. Ltd.';
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'pawas.singh@thecodiq.com';
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9621315796';
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/thecodiq/';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/thecodiq';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';
const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || '/logo/logo.png';

export const metadata: Metadata = {
  title: "Home | Premium IT Solutions",
  description:
    "Transform your business with premium IT solutions. Expert web development, mobile apps, AI solutions, and digital marketing services.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "AI solutions",
    "digital marketing",
    "software development",
    "custom software",
    "cloud services"
  ],
  openGraph: {
    title: `Home | ${siteName} - Premium IT Solutions`,
    description: "Transform your business with premium IT solutions. Expert web development, mobile apps, AI solutions, and digital marketing services.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} - Premium IT Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${siteName} - Premium IT Solutions`,
    description: "Transform your business with premium IT solutions. Expert web development, mobile apps, AI solutions, and digital marketing services.",
    images: [twitterImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "name": organizationName,
  "description": "Premium software development company specializing in mobile apps, web applications, AI solutions, machine learning, and digital marketing services.",
  "url": siteUrl,
  "logo": `${siteUrl}${logoUrl}`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": contactPhone,
    "contactType": "sales",
    "email": contactEmail,
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "IN",
    "addressRegion": process.env.NEXT_PUBLIC_ADDRESS_REGION || "Uttar Pradesh",
    "addressLocality": process.env.NEXT_PUBLIC_ADDRESS_LOCALITY || "Gorakhpur"
  },
  "sameAs": [
    instagramUrl,
    linkedinUrl
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteName,
  "url": siteUrl,
  "description": "Premium software development and AI solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteUrl}/search?q={search_term_string}`,
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
            name: siteName,
            image: `${siteUrl}${logoUrl}`,
            telephone: contactPhone,
            email: contactEmail,
            address: {
              "@type": "PostalAddress",
              addressLocality: process.env.NEXT_PUBLIC_ADDRESS_LOCALITY || "Gorakhpur",
              addressRegion: process.env.NEXT_PUBLIC_ADDRESS_REGION || "Uttar Pradesh",
              addressCountry: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "IN",
            },
            url: siteUrl,
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

