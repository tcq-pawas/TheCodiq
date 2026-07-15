import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | TheCodiQ Global",
  description: "TheCodiQ Global's privacy policy explains how we collect, use, and protect your personal information when you use our services.",
  alternates: {
    canonical: "https://thecodiq.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <InnerPageBanner
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl px-4 mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <p className="text-yellow-400 text-sm mb-6 font-semibold">
                ⚠️ LEGAL NOTICE: This is a placeholder privacy policy. A lawyer should review this document before it goes live.
              </p>

              <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                TheCodiQ Global ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Business information (Company name, job title, business requirements)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (Pages visited, time spent, features used)</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300 mb-4">
                Email: <a href="mailto:privacy@thecodiq.com" className="text-primary hover:underline">privacy@thecodiq.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

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
                name: "Privacy Policy",
                item: "https://thecodiq.com/privacy-policy",
              },
            ],
          }),
        }}
      />
    </>
  );
}
