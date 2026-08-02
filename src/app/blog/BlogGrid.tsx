"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  accent: "blue" | "green" | "gold";
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2026",
    excerpt:
      "Explore the latest trends and technologies shaping modern web products, from AI-assisted workflows to performance-first frameworks.",
    date: "2026-01-15",
    category: "Web Development",
    image: "/images/portfolio/web-development.png",
    author: "The CodiQ Team",
    readTime: "7 min read",
    accent: "blue",
  },
  {
    id: "2",
    title: "AI Integration in Modern Applications",
    excerpt:
      "Learn how artificial intelligence is transforming product development, automation, and user experiences across digital platforms.",
    date: "2026-01-10",
    category: "AI Solutions",
    image: "/images/portfolio/chatbot.png",
    author: "The CodiQ Team",
    readTime: "8 min read",
    accent: "green",
  },
  {
    id: "3",
    title: "Mobile App Development Best Practices",
    excerpt:
      "Discover practical patterns for building reliable, scalable, and delightful mobile applications that users return to.",
    date: "2026-01-05",
    category: "Mobile Development",
    image: "/images/portfolio/health.png",
    author: "The CodiQ Team",
    readTime: "6 min read",
    accent: "gold",
  },
  {
    id: "4",
    title: "UI/UX Design Trends to Watch",
    excerpt:
      "Stay ahead with design systems, interaction patterns, and experience innovations shaping premium digital products.",
    date: "2026-01-01",
    category: "Design",
    image: "/images/portfolio/brand.png",
    author: "The CodiQ Team",
    readTime: "5 min read",
    accent: "blue",
  },
  {
    id: "5",
    title: "Digital Marketing Strategies That Convert",
    excerpt:
      "Effective digital marketing approaches to grow visibility, acquire customers, and build lasting brand presence online.",
    date: "2025-12-28",
    category: "Marketing",
    image: "/images/portfolio/food.png",
    author: "The CodiQ Team",
    readTime: "6 min read",
    accent: "green",
  },
  {
    id: "6",
    title: "Cloud Computing: A Practical Guide",
    excerpt:
      "Everything teams need to know about cloud architecture, reliability, cost control, and shipping with confidence.",
    date: "2025-12-20",
    category: "Cloud",
    image: "/images/portfolio/dashboard.png",
    author: "The CodiQ Team",
    readTime: "9 min read",
    accent: "gold",
  },
];

const accentStyles = {
  blue: {
    badge: "border-[#2D9CFF]/25 bg-[#2D9CFF]/10 text-[#2D9CFF]",
    dot: "bg-[#2D9CFF]",
  },
  green: {
    badge: "border-[#6FCF4A]/25 bg-[#6FCF4A]/10 text-[#6FCF4A]",
    dot: "bg-[#6FCF4A]",
  },
  gold: {
    badge: "border-[#F2C94C]/25 bg-[#F2C94C]/10 text-[#F2C94C]",
    dot: "bg-[#F2C94C]",
  },
} as const;

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const accent = accentStyles[post.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.42 }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#11161D] p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] transition-all duration-[250ms] ease-out will-change-transform hover:-translate-y-1 hover:bg-[#151C24] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.55)]"
    >
      {/* Featured image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#0B0F14]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[250ms] ease-out will-change-transform group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <span
          className={`inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${accent.badge}`}
        >
          <span className={`h-1 w-1 rounded-full ${accent.dot}`} />
          {post.category}
        </span>

        <h3 className="mt-3 line-clamp-2 text-[15px] font-bold leading-snug text-white transition-colors duration-[250ms] ease-out group-hover:text-[#2D9CFF]">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-[12px] leading-6 text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium text-gray-300">
              {post.author}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-500">
              {formatDate(post.date)} · {post.readTime}
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-[#2D9CFF] opacity-80 transition-all duration-[250ms] ease-out group-hover:translate-x-0.5 group-hover:opacity-100">
            Read
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogGrid() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-8 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </section>
  );
}
