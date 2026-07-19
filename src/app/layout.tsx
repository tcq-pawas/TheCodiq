import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheCodiQ - Premium IT Solutions",
  description:
    "Premium IT solutions including web development, mobile apps, AI solutions, and digital marketing services for modern businesses.",
  keywords: [
    "web development",
    "mobile apps",
    "AI solutions",
    "digital marketing",
    "IT services",
    "software development",
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
                telephone: "+91 9935795796",
                contactType: "customer service",
                email: "pawas.singh@thecodiq.com",
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
