import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import Hero from "@/app/contact/Hero";
import ContactSection from "@/app/contact/ContactSection";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const organizationName = process.env.NEXT_PUBLIC_ORGANIZATION_NAME || 'The CodiQ Global Pvt. Ltd.';
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'pawas.singh@thecodiq.com';
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9621315796';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';
const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || '/logo/logo.png';

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Contact TheCodiQ Global for web development, mobile apps, AI solutions, and digital marketing services. Get a free quote for your next project.",
  keywords: ["contact software company", "get quote", "software development consultation", "IT services contact", "free consultation"],
  openGraph: {
    title: `Contact Us | ${siteName}`,
    description: "Contact TheCodiQ Global for web development, mobile apps, AI solutions, and digital marketing services. Get a free quote for your next project.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `Contact ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteName}`,
    description: "Contact TheCodiQ Global for web development, mobile apps, AI solutions, and digital marketing services. Get a free quote for your next project.",
    images: [twitterImage],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact ${siteName}`,
  "description": "Get free consultation for your software project. Contact The CodiQ Global for expert software development services.",
  "url": `${siteUrl}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": organizationName,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactPhone,
      "contactType": "sales",
      "email": contactEmail,
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
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: `${siteUrl}/contact`,
              },
            ],
          }),
        }}
      />
    </>
  );
}