import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

export const metadata: Metadata = {
  title: "Careers | TheCodiQ Global - Join Our Team",
  description: "Explore career opportunities at TheCodiQ Global. We're always looking for talented developers, designers, and marketers to join our growing team.",
  alternates: {
    canonical: "https://thecodiq.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <InnerPageBanner
        title="Careers"
        subtitle="Join our team and build the future"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation. While we don't have any open positions right now, we're always interested in connecting with exceptional talent.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            If you're a developer, designer, or marketer who loves solving complex problems and creating impactful solutions, we'd love to hear from you. Send your resume and portfolio to our team, and we'll keep you in mind for future opportunities.
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Email your resume and portfolio to: <a href="mailto:careers@thecodiq.com" className="text-primary hover:underline">careers@thecodiq.com</a>
            </p>
            <p className="text-sm text-gray-500">
              We'll review your application and reach out if there's a potential match for upcoming positions.
            </p>
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
                name: "Careers",
                item: "https://thecodiq.com/careers",
              },
            ],
          }),
        }}
      />
    </>
  );
}
