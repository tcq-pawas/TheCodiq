// Single source of truth for portfolio content.
//
// To add a project: copy the commented template inside `portfolioItems`
// below and fill it in — nothing else in the app needs to change.
// To remove a project: delete its object from `portfolioItems`.

export type PortfolioItem = {
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

export const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "AI Solutions",
  "UI/UX Design",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: `HeyDay Realty`,
    category: "Web Development",
    description:
      "A modern real estate website built with Next.js and TypeScript — fast, SEO-optimized, and easy to browse for property seekers.",
    technologies: ["React.js", "Tailwind CSS", "API"],
    showcase: "desktop",
    liveUrl: "https://www.heydayrealty.in/",
    previewImage: "/images/portfolio/image.png",
    images: [
      "/images/portfolio/heyday/HeyDay.png",
      "/images/portfolio/heyday/HeyDay2.png",
      "/images/portfolio/heyday/HeyDay3.png",
      "/images/portfolio/heyday/HeyDay4.png",
      "/images/portfolio/heyday/HeyDay5.png",
    ],
  },

  {
    id: "2",
    title: `HHectare`,
    category: "Web Development",
    description:
      "A modern real estate management dashboard designed to streamline property listings, manage project information, and provide an intuitive experience for real estate teams and customers.",
    technologies: ["Django","Python"],
    showcase: "desktop",
    liveUrl: "https://www.heydayrealty.in/",
    previewImage: "/images/portfolio/hhectare/image copy.png",
    images: [
      "/images/portfolio/hhectare/image copy.png",
      "/images/portfolio/hhectare/image1.png",
      "/images/portfolio/hhectare/image2.png",
      "/images/portfolio/hhectare/image3.png",
    ],
  },

  // --- Copy this block to add a new project ------------------------------
  // {
  //   id: "2",
  //   title: "Project Name",
  //   category: "Web Development", // must match a value in `categories`
  //   description: "One or two sentences about the project.",
  //   technologies: ["Next.js", "TypeScript"],
  //   showcase: "desktop", // or "image" for a plain screenshot card
  //   liveUrl: "https://example.com",
  //   previewImage: "/images/portfolio/example/poster.png",
  //   images: [
  //     "/images/portfolio/example/1.png",
  //     "/images/portfolio/example/2.png",
  //   ],
  // },
  // -------------------------------------------------------------------------
];

// Fallback image for the plain "image" showcase card, keyed by item id.
export const projectImages: Record<string, string> = {
  "1": "/images/portfolio/web-development.png",
};

// Fallback image by category, used when an item has no entry in projectImages.
export const categoryImages: Record<string, string> = {
  "Web Development": "/images/portfolio/web-development.png",
  "Mobile App": "/images/portfolio/web-development.png",
  "AI Solutions": "/images/portfolio/web-development.png",
  "UI/UX Design": "/images/portfolio/web-development.png",
};
