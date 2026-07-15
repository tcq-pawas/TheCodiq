import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://thecodiq.com'),
  title: {
    default: "The CodiQ Global | Premium Software Development & AI Solutions",
    template: "%s | The CodiQ Global"
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
  authors: [{ name: "TheCodiQ" }],
  icons: {
    icon: "/logo/codiqi-favicon.png",
    shortcut: "/logo/codiqi-favicon.png",
    apple: "/logo/codiqi-favicon.png",
  },
  openGraph: {
    title: "TheCodiQ - Premium IT Solutions",
    description:
      "Premium IT solutions including web development, mobile apps, AI solutions, and digital marketing services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheCodiQ - Premium IT Solutions",
    description:
      "Premium IT solutions including web development, mobile apps, AI solutions, and digital marketing services.",
  },
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
    url: "https://thecodiq.com",
    title: "The CodiQ Global | Premium Software Development & AI Solutions",
    description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services.",
    siteName: "The CodiQ Global",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The CodiQ Global - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The CodiQ Global | Premium Software Development & AI Solutions",
    description: "Transform your business with AI-powered software solutions. Expert mobile app development, web development, and digital marketing services.",
    images: ["/twitter-image.jpg"],
    creator: "@thecodiq",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://thecodiq.com",
  },
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
              name: "TheCodiQ Global",
              url: "https://thecodiq.com",
              logo: "https://thecodiq.com/logo/logo.png",
              sameAs: [
                "https://twitter.com",
                "https://linkedin.com",
                "https://github.com",
                "https://instagram.com",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1 (555) 123-4567",
                contactType: "customer service",
                email: "contact@thecodiq.com",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
