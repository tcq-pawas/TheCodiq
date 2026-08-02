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
        background: "#05070A",
        foreground: "rgba(255,255,255,0.82)",
        border: "rgba(255,255,255,0.05)",
        
        // TheCodiQ logo-inspired brand colors
        "brand-blue": "#2D9CFF",
        "brand-gold": "#F2C94C",
        "brand-green": "#6FCF4A",
        
        // Deep-black layered backgrounds
        "bg-primary": "#05070A",
        "bg-secondary": "#0A0E12",
        "bg-section": "#090B0F",
        "bg-card": "#10151A",
        "bg-panel": "#0C1015",
        
        // Metallic silver / text
        "silver-primary": "rgba(255,255,255,0.92)",
        "silver-secondary": "rgba(255,255,255,0.60)",
        
        // Secondary backgrounds
        "secondary-bg": "#0A0E12",
        "card-bg": "#10151A",
        
        // Text colors
        "primary-text": "rgba(255,255,255,0.92)",
        "secondary-text": "rgba(255,255,255,0.60)",
        "muted-text": "rgba(255,255,255,0.45)",
        "body-text": "rgba(255,255,255,0.82)",
        
        // Accent gradient colors
        "accent-start": "#2D9CFF",
        "accent-end": "#6FCF4A",
        
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
        
        // Brand gradients (logo colors)
        "blue-gradient": "linear-gradient(135deg, #2D9CFF 0%, #1A7ACC 100%)",
        "gold-gradient": "linear-gradient(135deg, #F2C94C 0%, #D4A82E 100%)",
        "green-gradient": "linear-gradient(135deg, #6FCF4A 0%, #4FA832 100%)",
        
        // Accent gradient — blue → leaf green
        "accent-gradient": "linear-gradient(135deg, #2D9CFF 0%, #6FCF4A 100%)",
        
        // Primary button: dark with blue accent
        "primary-btn": "linear-gradient(135deg, #0C1015 0%, #10151A 55%, #0A2840 100%)",
        "primary-btn-hover": "linear-gradient(135deg, #2D9CFF 0%, #6FCF4A 100%)",
        
        // Layered depth backgrounds
        "canvas-depth":
          "radial-gradient(ellipse 80% 60% at 50% 0%, #06080D 0%, #05070A 45%, #040404 100%)",
        "section-depth":
          "linear-gradient(180deg, #05070A 0%, #090B0F 50%, #05070A 100%)",
        
        // Radial glow
        "radial-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 156, 255, 0.12), transparent)",
        
        // Glass gradient
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
      },
      
      boxShadow: {
        "glow-blue": "0 0 20px rgba(45, 156, 255, 0.28), 0 0 40px rgba(45, 156, 255, 0.14)",
        "glow-gold": "0 0 20px rgba(242, 201, 76, 0.28), 0 0 40px rgba(242, 201, 76, 0.14)",
        "glow-green": "0 0 20px rgba(111, 207, 74, 0.28), 0 0 40px rgba(111, 207, 74, 0.14)",
        "glow-accent": "0 0 20px rgba(45, 156, 255, 0.28), 0 0 40px rgba(111, 207, 74, 0.14)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "premium": "0 25px 50px -12px rgba(0, 0, 0, 0.55)",
        "card": "0 1px 3px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 32px rgba(45, 156, 255, 0.12), 0 0 24px rgba(111, 207, 74, 0.06)",
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
