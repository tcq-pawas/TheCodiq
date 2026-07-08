"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";

import { portfolioItems } from "@/data/portfolio";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "AI Solutions",
  "UI/UX Design",
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <>
      {/* Category Filter */}
      <motion.div
        className="mb-14 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
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

      {/* Portfolio Grid */}
      <motion.div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              layout
            >
              <Card
                hover
                className="group relative flex h-full flex-col overflow-hidden !p-0 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_25px_70px_-20px_rgba(59,130,246,0.35)]"
              >
                {/* THUMBNAIL AREA
                    When real images are ready, delete the "placeholder" block below
                    and drop this in its place — everything else (badge, overlay,
                    zoom, hover icon) keeps working with zero changes:
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-primary/15 via-background/60 to-background">
                  {/* --- placeholder start --- */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                    <ImageIcon className="h-12 w-12 text-primary/30" strokeWidth={1.5} />
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* --- placeholder end --- */}

                  {/* Keep this — ensures badges/text stay legible over any future photo */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                  {/* Category badge floats on top of the thumbnail */}
                  <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Hover affordance */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-background/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300 transition-colors duration-300 group-hover:border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full justify-center">
                    View Project
                  </Button>
                </div>

                {/* Top accent line on hover — matches Hero / WhyChooseUs */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}