"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, ArrowRight, Sparkles } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development.",
    date: "2024-01-15",
    category: "Web Development",
    image: "🌐",
    readTime: "7 min read",
  },
  {
    id: "2",
    title: "AI Integration in Modern Applications",
    excerpt:
      "Learn how artificial intelligence is revolutionizing application development.",
    date: "2024-01-10",
    category: "AI Solutions",
    image: "🤖",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Mobile App Development Best Practices",
    excerpt:
      "Discover the best practices for building successful mobile applications.",
    date: "2024-01-05",
    category: "Mobile Development",
    image: "📱",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "UI/UX Design Trends to Watch",
    excerpt:
      "Stay ahead with the latest design trends and user experience innovations.",
    date: "2024-01-01",
    category: "Design",
    image: "🎨",
    readTime: "5 min read",
  },
  {
    id: "5",
    title: "Digital Marketing Strategies for 2024",
    excerpt:
      "Effective digital marketing strategies to grow your business online.",
    date: "2023-12-28",
    category: "Marketing",
    image: "📈",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Cloud Computing: A Complete Guide",
    excerpt:
      "Everything you need to know about cloud computing and its benefits.",
    date: "2023-12-20",
    category: "Cloud",
    image: "☁️",
    readTime: "9 min read",
  },
  {
    id: "7",
    title: "Cybersecurity Essentials for Growing Businesses",
    excerpt:
      "Practical steps to protect your applications, data, and customers as you scale.",
    date: "2023-12-15",
    category: "Cybersecurity",
    image: "🛡️",
    readTime: "6 min read",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function CoverCard({
  post,
  index,
  className = "",
}: {
  post: BlogPost;
  index: number;
  className?: string;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/25 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-24px_rgba(59,130,246,0.35)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-background">
        <span className="absolute inset-0 flex items-center justify-center text-[5.75rem] opacity-[0.12] blur-[1px] transition-transform duration-700 ease-out group-hover:scale-110">
          {post.image}
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-transparent" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <span className="h-1 w-1 rounded-full bg-primary" />
          {post.category}
        </span>

        <button
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? "Remove bookmark" : "Save article"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-background/50 backdrop-blur-md transition-colors duration-300 hover:border-primary/30"
        >
          <Bookmark
            className={`h-3 w-3 transition-colors ${
              saved ? "fill-primary text-primary" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-primary">
          {post.title}
        </h3>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-2 text-xs leading-5 text-gray-400">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-[8px] font-bold text-primary">
              TC
            </span>
            {formatDate(post.date)}
          </div>

          <span className="flex items-center gap-1 text-[11px] font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
            Read <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({
  post,
  index,
  className = "",
}: {
  post: BlogPost;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/25 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_24px_60px_-24px_rgba(59,130,246,0.3)] sm:flex-row ${className}`}
    >
      <div className="relative flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background sm:min-h-[170px] sm:w-[38%]">
        <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />

        <span className="relative text-6xl drop-shadow-lg transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-110">
          {post.image}
        </span>

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/60 px-2.5 py-0.5 text-[10px] font-medium text-primary backdrop-blur-md">
          <Sparkles className="h-3 w-3" />
          {post.category} Spotlight
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
          {post.category}
        </span>

        <h3 className="mt-2 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-primary md:text-2xl">
          {post.title}
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[9px] font-bold text-primary">
              TC
            </span>
            {formatDate(post.date)} · {post.readTime}
          </div>

          <span className="flex items-center gap-1 text-sm font-semibold text-primary">
            Read full article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function BlogGrid() {
  const posts = blogPosts.slice(1);

  return (
    <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        const isFirst = index === 0;
        const isLast = index === posts.length - 1;

        if (isFirst) {
          return (
            <FeatureCard
              key={post.id}
              post={post}
              index={index}
              className="sm:col-span-2 lg:col-span-2"
            />
          );
        }

        if (isLast) {
          return (
            <FeatureCard
              key={post.id}
              post={post}
              index={index}
              className="sm:col-span-2 lg:col-span-3"
            />
          );
        }

        return <CoverCard key={post.id} post={post} index={index} />;
      })}
    </div>
  );
}