"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import InnerPageBanner from "@/components/common/InnerPageBanner";

const categories = ["All", "Web Development", "Mobile App", "AI Solutions", "UI/UX Design"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <InnerPageBanner
        title="Our Portfolio"
        subtitle="Explore our latest projects and success stories"
      />
      <div className="py-16 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
      <div className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48" style={{ animationDelay: "3s" }} />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow-blue"
                  : "glass-effect text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
              >
                <Card hover>
                  <div className="aspect-video glass-effect rounded-lg mb-4 flex items-center justify-center border border-primary/20">
                    <span className="text-6xl">🖼️</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-primary font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-gray-300 px-3 py-1 rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    View Project
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center glass-effect rounded-2xl p-12 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Get in touch with
            our team today.
          </p>
          <Button size="lg">Start Your Project</Button>
        </motion.div>
      </div>
    </div>
    </>
  );
}
