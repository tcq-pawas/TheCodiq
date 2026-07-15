import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

export const metadata: Metadata = {
  title: "Terms & Conditions | TheCodiQ Global",
  description: "TheCodiQ Global's terms and conditions govern your use of our website and services. Read our legal terms here.",
  alternates: {
    canonical: "https://thecodiq.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <InnerPageBanner
        title="Terms & Conditions"
        subtitle="Terms governing use of our services"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl px-4 mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <p className="text-yellow-400 text-sm mb-6 font-semibold">
                ⚠️ LEGAL NOTICE: This is a placeholder terms and conditions document. A lawyer should review this document before it goes live.
              </p>

              <h1 className="text-3xl font-bold text-white mb-6">Terms & Conditions</h1>
              <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing or using TheCodiQ Global's website and services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Services</h2>
              <p className="text-gray-300 mb-4">
                TheCodiQ Global provides web development, mobile app development, AI solutions, UI/UX design, digital marketing, and cloud & DevOps services. Specific terms for each project will be outlined in separate service agreements.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">Users agree to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Not use our services for illegal purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to compromise our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content on our website, including text, graphics, logos, and software, is the property of TheCodiQ Global or its licensors and is protected by copyright and other intellectual property laws.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms for specific projects will be outlined in project agreements. Generally, we require a deposit before project commencement with milestone payments throughout the project lifecycle.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                TheCodiQ Global shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, to the maximum extent permitted by law.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to terminate or suspend access to our services at any time, with or without cause, with or without notice.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-gray-300 mb-4">
                Email: <a href="mailto:legal@thecodiq.com" className="text-primary hover:underline">legal@thecodiq.com</a>
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
                name: "Terms & Conditions",
                item: "https://thecodiq.com/terms-and-conditions",
              },
            ],
          }),
        }}
      />
    </>
  );
}
