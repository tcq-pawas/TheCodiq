"use client";

import SectionTitle from "@/components/common/SectionTitle";

type HeroProps = {
  badge?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero({
  badge = "WORK WITH US",
  title = "Let's Build Something Amazing Together",
  subtitle = "Have a project in mind or need expert guidance? Connect with our team to discuss your ideas, explore tailored solutions, and turn your vision into reality.",
}: HeroProps) {
  return (
    <div
      className="relative mb-16"
      style={{
        perspective: "1000px",
        boxShadow:
          "0 25px 50px rgba(0,0,0,0.5), 0 0 100px rgba(30,136,255,0.1)",
      }}
    >
      {/* 3D Background container */}
      <div className="pointer-events-none absolute inset-0 -mx-8 -my-4 overflow-hidden rounded-3xl">
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-gold/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />

        {/* Strong ambient glow effects */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-brand-blue/30 blur-[120px]" />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 animate-pulse rounded-full bg-brand-gold/30 blur-[120px]"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern for 3D surface effect */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: "rotateX(15deg) rotateY(-10deg)",
          }}
        />

        {/* Glass-like overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute top-4 right-16 h-4 w-4 animate-pulse rounded-full bg-brand-blue/60 blur-md shadow-[0_0_25px_rgba(30,136,255,0.8)]" />
      <div
        className="pointer-events-none absolute bottom-8 left-12 h-5 w-5 animate-pulse rounded-full bg-brand-gold/60 blur-md shadow-[0_0_25px_rgba(247,166,0,0.8)]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        <SectionTitle badge={badge} title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
