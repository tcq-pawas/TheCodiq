import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TechBackground from "@/components/background/TechBackground";

const inter = Inter({ subsets: ["latin"] });

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
const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || '/logo/codiqi-favicon.png';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Software Development & AI Solutions`,
    template: `%s | ${siteName}`
  },
  description: "Premium software development company specializing in mobile apps, web applications, AI solutions, machine learning, and digital marketing services for businesses worldwide.",
  keywords: [
    "software development company",
    "mobile app development",
    "web development",
    "AI development",
    "machine learning",
    "digital marketing",
    "SEO services",
    "custom software",
    "IT services"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: organizationName,
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteName} | Premium Software Development & AI Solutions`,
    description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services.",
    siteName: siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} - Software Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Software Development & AI Solutions`,
    description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services.",
    images: [twitterImage],
  },
  verification: googleVerification ? {
    google: googleVerification,
  } : undefined,
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: organizationName,
              url: siteUrl,
              logo: `${siteUrl}${logoUrl}`,
              sameAs: [
                instagramUrl,
                linkedinUrl,
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: contactPhone,
                contactType: "customer service",
                email: contactEmail,
                availableLanguage: ["English"]
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "IN",
                addressRegion: process.env.NEXT_PUBLIC_ADDRESS_REGION || "Uttar Pradesh",
                addressLocality: process.env.NEXT_PUBLIC_ADDRESS_LOCALITY || "Gorakhpur"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <TechBackground />
        <div className="app-shell">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
