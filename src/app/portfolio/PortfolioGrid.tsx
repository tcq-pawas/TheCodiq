"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { portfolioItems } from "@/data/portfolio";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

const categories = ["All", "Web Development", "Mobile App", "AI Solutions", "UI/UX Design"];

const projectImages: Record<string, string> = {
  "1": "/images/portfolio/web-development.png",
  "2": "/images/portfolio/health.png",
  "3": "/images/portfolio/chatbot.png",
  "4": "/images/portfolio/dashboard.png",
  "5": "/images/portfolio/food.png",
  "6": "/images/portfolio/brand.png",
};

const categoryImages: Record<string, string> = {
  "Web Development": "/images/portfolio/web-development.png",
  "Mobile App": "/images/portfolio/health.png",
  "AI Solutions": "/images/portfolio/chatbot.png",
  "UI/UX Design": "/images/portfolio/dashboard.png",
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <motion.div className="mb-14 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_25px_-5px] shadow-primary/50"
                : "glass-effect border-white/10 text-gray-300 hover:border-primary/20 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const image =
              projectImages[item.id] ??
              projectImages[String(index + 1)] ??
              categoryImages[item.category] ??
              "/images/portfolio/web-development.png";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                layout
              >
                <Card hover className="group relative flex h-full flex-col overflow-hidden !p-0">
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-background">
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                      {item.category}
                    </span>

                    <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-background/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mb-5 flex-1 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full justify-center">
                      View Project
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}