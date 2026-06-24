"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";
import InnerPageBanner from "@/components/common/InnerPageBanner";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development.",
    date: "2024-01-15",
    category: "Web Development",
    image: "🌐",
  },
  {
    id: "2",
    title: "AI Integration in Modern Applications",
    excerpt:
      "Learn how artificial intelligence is revolutionizing application development.",
    date: "2024-01-10",
    category: "AI Solutions",
    image: "🤖",
  },
  {
    id: "3",
    title: "Mobile App Development Best Practices",
    excerpt:
      "Discover the best practices for building successful mobile applications.",
    date: "2024-01-05",
    category: "Mobile Development",
    image: "📱",
  },
  {
    id: "4",
    title: "UI/UX Design Trends to Watch",
    excerpt:
      "Stay ahead with the latest design trends and user experience innovations.",
    date: "2024-01-01",
    category: "Design",
    image: "🎨",
  },
  {
    id: "5",
    title: "Digital Marketing Strategies for 2024",
    excerpt:
      "Effective digital marketing strategies to grow your business online.",
    date: "2023-12-28",
    category: "Marketing",
    image: "📈",
  },
  {
    id: "6",
    title: "Cloud Computing: A Complete Guide",
    excerpt:
      "Everything you need to know about cloud computing and its benefits.",
    date: "2023-12-20",
    category: "Cloud",
    image: "☁️",
  },
];

export default function BlogPage() {
  return (
    <>
      <InnerPageBanner
        title="Our Blog"
        subtitle="Insights and updates from the world of technology"
      />
      <div className="py-16 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
      <div className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48" style={{ animationDelay: "3s" }} />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card hover>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video glass-effect rounded-lg flex items-center justify-center border border-primary/20">
                <span className="text-8xl">🌐</span>
              </div>
              <div>
                <div className="mb-3">
                  <span className="text-xs bg-gradient-to-r from-primary to-accent text-white font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  The Future of Web Development in 2024
                </h3>
                <p className="text-gray-400 mb-4">
                  Explore the latest trends and technologies shaping the future
                  of web development, from AI integration to new frameworks and
                  best practices.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Jan 15, 2024</span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover>
                <div className="aspect-video glass-effect rounded-lg mb-4 flex items-center justify-center border border-primary/20">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="mb-3">
                  <span className="text-xs text-primary font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center glass-effect rounded-2xl p-12 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles and updates
            delivered to your inbox.
          </p>
          <Button size="lg">Subscribe Now</Button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
