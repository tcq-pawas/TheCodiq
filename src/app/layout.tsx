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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
