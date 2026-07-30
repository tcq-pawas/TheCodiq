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

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 20%, #fffdf8 45%, #f8fff9 70%, #ffffff 100%)' }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="relative z-10 container max-w-4xl px-4 mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-white border border-[#C5D5EB] rounded-2xl p-8 shadow-[0_18px_60px_rgba(37,99,235,.08)]">
              <p className="text-[#F59E0B] text-sm mb-6 font-semibold">
                ⚠️ LEGAL NOTICE: This is a placeholder privacy policy. A lawyer should review this document before it goes live.
              </p>

              <h1 className="text-3xl font-bold text-[#111827] mb-6">Privacy Policy</h1>
              <p className="text-[#475569] mb-4">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">1. Introduction</h2>
              <p className="text-[#475569] mb-4">
                TheCodiQ Global (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-[#475569] mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside text-[#475569] mb-4 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Business information (Company name, job title, business requirements)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (Pages visited, time spent, features used)</li>
              </ul>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-[#475569] mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-[#475569] mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">4. Data Security</h2>
              <p className="text-[#475569] mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">5. Your Rights</h2>
              <p className="text-[#475569] mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-[#475569] mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>

              <h2 className="text-xl font-bold text-[#111827] mt-8 mb-4">6. Contact Us</h2>
              <p className="text-[#475569] mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-[#475569] mb-4">
                Email: <a href="mailto:privacy@thecodiq.com" className="text-[#2563EB] hover:underline">privacy@thecodiq.com</a>
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
