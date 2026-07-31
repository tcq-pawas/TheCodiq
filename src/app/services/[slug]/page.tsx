import { notFound } from "next/navigation";
import { Metadata } from "next";
import { serviceDetails, footerCTA } from "@/data/serviceDetails";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import {
    CheckCircle2,
    Layers,
    Sparkles,
    Building2,
    Cpu,
    GitBranch,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thecodiq.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'The CodiQ Global';
const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || '/og-image.jpg';
const twitterImage = process.env.NEXT_PUBLIC_TWITTER_IMAGE || '/twitter-image.jpg';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceDetails.find((item) => item.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | ${siteName}`,
        description: service.description,
        keywords: [
            service.title.toLowerCase(),
            "IT services",
            "software development",
            "technology solutions",
            "digital transformation",
            ...service.deliverables.slice(0, 3).map(d => d.toLowerCase())
        ],
        openGraph: {
            title: `${service.title} | ${siteName}`,
            description: service.description,
            url: `${siteUrl}/services/${service.slug}`,
            type: "website",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} | ${siteName}`,
            description: service.description,
            images: [twitterImage],
        },
        alternates: {
            canonical: `${siteUrl}/services/${service.slug}`,
        },
    };
}

const sectionMeta = {
    deliverables: {
        title: "Deliverables",
        icon: Layers,
        color: {
            icon: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
        },
    },
    benefits: {
        title: "Benefits",
        icon: Sparkles,
        color: {
            icon: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
        },
    },
    industries: {
        title: "Industries",
        icon: Building2,
        color: {
            icon: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
        },
    },
    technologies: {
        title: "Technologies",
        icon: Cpu,
        color: {
            icon: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
        },
    },
    process: {
        title: "Development Process",
        icon: GitBranch,
        color: {
            icon: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20",
        },
    },
    whyChooseUs: {
        title: "Why Choose Us",
        icon: ShieldCheck,
        color: {
            icon: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
        },
    },
} as const;

function SectionCard({
    title,
    icon: Icon,
    color,
    items,
}: {
    title: string;
    icon: React.ElementType;
    color: { icon: string; bg: string; border: string };
    items: string[];
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 shadow-xl shadow-black/20 sm:rounded-2xl sm:p-6">
            <div className="flex items-center gap-2.5 mb-4 sm:gap-3 sm:mb-5">
                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border shadow-lg shadow-black/10 sm:h-10 sm:w-10 sm:rounded-xl ${color.border} ${color.bg} ${color.icon}`}
                >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h2 className="text-base font-bold tracking-tight text-white sm:text-[18px]">
                    {title}
                </h2>
            </div>

            <ul className="space-y-2.5 sm:space-y-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 sm:gap-2.5">
                        <CheckCircle2
                            className={`h-4 w-4 mt-0.5 shrink-0 ${color.icon}`}
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                        <span className="text-[12px] leading-6 text-gray-400">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;

    const service = serviceDetails.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    const sections: Array<keyof typeof sectionMeta> = [
        "deliverables",
        "benefits",
        "industries",
        "technologies",
        "process",
        "whyChooseUs",
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": siteName,
            "url": siteUrl,
        },
        "url": `${siteUrl}/services/${service.slug}`,
    };

    const breadcrumbSchema = {
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
                name: "Services",
                item: `${siteUrl}/services`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `${siteUrl}/services/${service.slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <InnerPageBanner title={service.title} subtitle={service.subtitle} />

            <div className="py-10 sm:py-12 md:py-16" style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)' }}>
                <div className="container max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                    {/* Hero */}
                    <div className="relative mb-10 text-center sm:mb-12 md:mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 text-[10px] text-primary shadow-[0_0_20px_rgba(59,130,246,0.35)] sm:px-4 sm:text-[11px]">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px] shadow-primary" />
                            Our Service
                        </span>

                        <h1 className="mt-5 text-xl font-bold tracking-tight text-white sm:mt-6 sm:text-2xl md:text-[26px]">
                            {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="gradient-text">
                                {service.title.split(" ").slice(-1)}
                            </span>
                        </h1>

                        <p className="mx-auto mt-3 max-w-2xl text-[12px] leading-6 text-secondary-text sm:mt-4 sm:leading-7">
                            {service.heroIntro}
                        </p>
                    </div>

                    {/* Overview */}
                    <div className="mb-10 rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-xl shadow-black/20 sm:mb-12 sm:rounded-2xl sm:p-6 md:mb-16 md:p-8">
                        <h2 className="text-lg font-bold tracking-tight text-white sm:text-[20px]">
                            Overview
                        </h2>
                        <p className="mt-3 text-[12px] leading-6 text-gray-400 sm:mt-4 sm:leading-7">
                            {service.overview}
                        </p>
                    </div>

                    {/* Sections grid */}
                    <div className="grid grid-cols-1 gap-4 mb-10 sm:gap-5 sm:mb-12 md:grid-cols-2 md:gap-6 md:mb-16">
                        {sections.map((key) => {
                            const meta = sectionMeta[key];
                            const items = service[key] as string[];
                            if (!items?.length) return null;
                            return (
                                <SectionCard
                                    key={key}
                                    title={meta.title}
                                    icon={meta.icon}
                                    color={meta.color}
                                    items={items}
                                />
                            );
                        })}
                    </div>

                    {/* Footer CTA */}
                    <div className="relative overflow-hidden rounded-xl border border-brand-blue/20 bg-gradient-to-br from-blue-500/10 via-white/[0.035] to-purple-500/10 p-6 shadow-xl shadow-black/20 text-center sm:rounded-2xl sm:p-8 md:p-10">
                        <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-[24px]">
                            {footerCTA.heading}
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-[12px] leading-6 text-secondary-text sm:mt-4 sm:leading-7">
                            {footerCTA.description}
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-[12px] font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 hover:-translate-y-0.5 sm:mt-8 sm:px-6"
                        >
                            Get in Touch
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}