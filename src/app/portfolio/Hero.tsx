"use client";

import SectionTitle from "@/components/common/SectionTitle";

export default function Hero() {
  return (
    <div className="mb-16 relative" style={{ 
      perspective: '1000px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 100px rgba(30,136,255,0.1)',
    }}>
      {/* 3D Background container */}
      <div className="absolute inset-0 -mx-8 -my-4 rounded-3xl overflow-hidden pointer-events-none">
        {/* Multi-layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-gold/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
        
        {/* Strong ambient glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/30 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern for 3D surface effect */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'rotateX(15deg) rotateY(-10deg)',
        }} />
        
        {/* Glass-like overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-4 right-16 w-4 h-4 bg-brand-blue/60 rounded-full blur-md animate-pulse pointer-events-none shadow-[0_0_25px_rgba(30,136,255,0.8)]" />
      <div className="absolute bottom-8 left-12 w-5 h-5 bg-brand-gold/60 rounded-full blur-md animate-pulse pointer-events-none shadow-[0_0_25px_rgba(247,166,0,0.8)]" style={{ animationDelay: '1.5s' }} />

      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        <SectionTitle
          badge="SUCCESS STORIES"
          title="Showcasing Our Best Work"
          subtitle="Explore a collection of successful projects that reflect our expertise, creativity, and commitment to delivering exceptional digital solutions."
        />
      </div>
    </div>
  );
}