import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0F12",
        foreground: "#D6D6D6",
        border: "rgba(255,255,255,0.08)",
        
        // Premium SaaS Color Palette
        "primary-blue": "#2563EB",
        "premium-yellow": "#FBBF24",
        "leaf-green": "#22C55E",
        "dark-navbar": "#0B1220",
        "page-background": "#F8FAFC",
        "heading-color": "#111827",
        "body-text": "#6B7280",
        
        // TheCodiQ Global brand colors (keeping for compatibility)
        "brand-blue": "#2563EB",
        "brand-gold": "#FBBF24",
        "brand-green": "#22C55E",
        
        // Dark graphite backgrounds
        "bg-primary": "#0B1220",
        "bg-secondary": "#151A21",
        "bg-card": "#1B2028",
        "bg-panel": "#222831",
        
        // Metallic silver
        "silver-primary": "#D6D6D6",
        "silver-secondary": "#A8A8A8",
        
        // Secondary backgrounds
        "secondary-bg": "#151A21",
        "card-bg": "#1B2028",
        
        // Text colors
        "primary-text": "#D6D6D6",
        "secondary-text": "#A8A8A8",
        
        // Accent gradient colors
        "accent-start": "#2563EB",
        "accent-end": "#FBBF24",
        
        // Dark theme colors
        dark: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
        // Brand gradients
        "blue-gradient": "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
        "gold-gradient": "linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)",
        "green-gradient": "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)",
        
        // Accent gradient
        "accent-gradient": "linear-gradient(135deg, #2563EB 0%, #FBBF24 100%)",
        
        // Section-specific gradients
        "hero-gradient": "linear-gradient(180deg, #EFF6FF 0%, #F0F9FF 20%, #FEFCE8 45%, #F0FDF4 70%, #F8FAFC 100%)",
        "services-gradient": "linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 20%, #FFFFFF 45%, #F0FDF4 70%, #FFFFFF 100%)",
        "why-choose-gradient": "linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 20%, #FFFFFF 45%, #EFF6FF 70%, #FFFFFF 100%)",
        "testimonials-gradient": "linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 20%, #DBEAFE 45%, #FFFFFF 70%, #EFF6FF 100%)",
        "faq-gradient": "linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 20%, #FFFFFF 45%, #F0F9FF 70%, #FFFFFF 100%)",
        "cta-gradient": "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #2563EB 100%)",
        
        // Radial glow
        "radial-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30, 136, 255, 0.15), transparent)",
        
        // Glass gradient
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      
      boxShadow: {
        "glow-blue": "0 0 20px rgba(30, 136, 255, 0.3), 0 0 40px rgba(77, 163, 255, 0.2)",
        "glow-gold": "0 0 20px rgba(247, 166, 0, 0.3), 0 0 40px rgba(255, 201, 77, 0.2)",
        "glow-green": "0 0 20px rgba(105, 179, 59, 0.3), 0 0 40px rgba(141, 216, 90, 0.2)",
        "glow-accent": "0 0 20px rgba(30, 136, 255, 0.3), 0 0 40px rgba(247, 166, 0, 0.2)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "premium": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.3)",
      },
      
      backdropBlur: {
        "xs": "2px",
      },
      
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 3s",
        "fade-up": "fadeUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
