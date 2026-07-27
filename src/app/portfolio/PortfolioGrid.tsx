"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import DesktopShowcaseCard, {
  portfolioTextSizes,
} from "@/app/portfolio/DesktopShowcaseCard";

const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "AI Solutions",
  "UI/UX Design",
];

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /**
   * "desktop" -> monitor mockup with a hover-to-slide screenshot preview.
   * "image"   -> the original plain screenshot card. Default when omitted.
   */
  showcase?: "desktop" | "image";
  liveUrl?: string; // required when showcase === "desktop"
  previewImage?: string; // poster shown before hover / permanently on touch devices
  previewBadge?: string; // small label on the monitor's top-right corner, default "Live Preview"
  /**
   * 5 screenshots the monitor slides through on hover, in order. Replace
   * the placeholder paths below with real screenshots of each page.
   */
  images?: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: `HeyDay RealEstate`,
    category: "Web Development",
    description:
      "A modern real estate website built with Next.js and TypeScript — fast, SEO-optimized, and easy to browse for property seekers.",
    technologies: ["React.js", "Tailwind CSS", "Django"],
    showcase: "desktop",
    liveUrl: "https://www.heydayrealty.in/",
    previewImage: "/images/portfolio/image.png",
    // TODO: replace with 5 real screenshots of the site's pages
    images: [
      "/images/portfolio/heyday/HeyDay.png",
      "/images/portfolio/heyday/HeyDay2.png",
      "/images/portfolio/heyday/HeyDay3.png",
      "/images/portfolio/heyday/HeyDay4.png",
      "/images/portfolio/heyday/HeyDay5.png",
    ],
  },
];

const projectImages: Record<string, string> = {
  "1": "/images/portfolio/web-development.png",
};

const categoryImages: Record<string, string> = {
  "Web Development": "/images/portfolio/web-development.png",
  "Mobile App": "/images/portfolio/web-development.png",
  "AI Solutions": "/images/portfolio/web-development.png",
  "UI/UX Design": "/images/portfolio/web-development.png",
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Filters */}
      <motion.div className="mb-8 flex flex-nowrap justify-start gap-2 overflow-x-auto px-4 pb-2 sm:mb-10 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 md:mb-14 [scrollbar-width:thin] [scrollbar-color:white_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:hover:bg-white/80">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm ${
              selectedCategory === category
                ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_25px_-5px] shadow-primary/50"
                : "glass-effect border-white/10 text-gray-300 hover:border-primary/20 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            // ---- Live "desktop mockup" card ----
            if (item.showcase === "desktop" && item.liveUrl && item.previewImage) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  layout
                  className="h-full"
                >
                  <DesktopShowcaseCard
                    title={item.title}
                    category={item.category}
                    technologies={item.technologies}
                    liveUrl={item.liveUrl}
                    previewImage={item.previewImage}
                    images={item.images}
                    description={item.description}
                    badge={item.previewBadge}
                  />
                </motion.div>
              );
            }

            // ---- Original plain-image card (unchanged) ----
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
                className="h-full"
              >
                <Card
                  hover
                  className="group relative flex h-full flex-col overflow-hidden !p-0"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-background sm:aspect-video">
                    <Image
                      src={image}
                      alt={`TheCodiQ ${item.category} project: ${item.title} - ${item.description}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    <span
                      className={`absolute left-3 top-3 rounded-full border border-primary/30 bg-background/70 px-2.5 py-1 font-medium text-primary backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 ${portfolioTextSizes.categoryBadge}`}
                    >
                      {item.category}
                    </span>

                    <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-background/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-9 sm:w-9 md:translate-y-0 md:opacity-100">
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                    <h3
                      className={`mb-2 font-bold leading-snug text-white group-hover:text-primary ${portfolioTextSizes.cardTitle}`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mb-4 flex-1 text-gray-400 sm:mb-5 ${portfolioTextSizes.cardDescription}`}
                    >
                      {item.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-5 sm:gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-gray-300 sm:px-3 sm:py-1 ${portfolioTextSizes.techPill}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                    >
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