import { Metadata } from "next";
import InnerPageBanner from "@/components/common/InnerPageBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';

export const metadata: Metadata = {
  title: "Careers | Join Our Team",
  description: "Explore career opportunities at TheCodiQ Global. We're always looking for talented developers, designers, and marketers to join our growing team.",
  keywords: ["software development jobs", "tech careers", "developer jobs", "designer careers", "IT job openings", "work at tech company"],
  openGraph: {
    title: `Careers | ${siteName}`,
    description: "Explore career opportunities at TheCodiQ Global. We're always looking for talented developers, designers, and marketers to join our growing team.",
    url: `${siteUrl}/careers`,
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
};

export default function CareersPage() {
  return (
    <>
      <InnerPageBanner
        title="Careers"
        subtitle="Join our team and build the future"
      />

      <div className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #D4D4D4 0%, #D8E0D8 20%, #D4D4D4 40%, #E0E0D8 60%, #D4D4D4 80%, #E8E0D8 100%)' }}>
        {/* Background Effects */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-top-40 sm:-left-40 rounded-full bg-blue-500/5 blur-[90px] sm:blur-[150px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[260px] w-[260px] sm:h-[500px] sm:w-[500px] sm:-bottom-40 sm:-right-40 rounded-full bg-orange-500/5 blur-[90px] sm:blur-[150px]" />

        <div className="relative z-10 container max-w-4xl px-4 mx-auto text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-4 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]">
            <span className="text-[11px] text-[#2563EB] tracking-wide font-semibold">
              CAREERS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            We&apos;re always looking for talented individuals who are passionate about technology and innovation. While we don&apos;t have any open positions right now, we&apos;re always interested in connecting with exceptional talent.
          </p>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            If you&apos;re a developer, designer, or marketer who loves solving complex problems and creating impactful solutions, we&apos;d love to hear from you. Send your resume and portfolio to our team, and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="bg-white border border-[#C5D5EB] rounded-2xl p-8 mt-12 shadow-[0_18px_60px_rgba(37,99,235,.08)]">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Get in Touch</h2>
            <p className="text-[#475569] mb-6">
              Email your resume and portfolio to: <a href="mailto:careers@thecodiq.com" className="text-[#2563EB] hover:underline">careers@thecodiq.com</a>
            </p>
            <p className="text-sm text-[#64748B]">
              We&apos;ll review your application and reach out if there&apos;s a potential match for upcoming positions.
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
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Careers",
                item: `${siteUrl}/careers`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
