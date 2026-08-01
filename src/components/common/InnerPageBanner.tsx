import { cn } from '@/lib/helper';

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function InnerPageBanner({
  title,
  subtitle,
  className = '',
}: InnerPageBannerProps) {
  return (
    <section
      className={cn(
        'relative mt-[90px] h-[300px] w-full overflow-hidden md:h-[350px] lg:h-[400px]',
        className
      )}
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
        
        {/* Secondary gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-transparent to-brand-gold/10" />
        
        {/* Abstract decorative shapes with stronger blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern for 3D surface effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'rotateX(10deg) rotateY(-5deg)',
        }} />
        
        {/* Glass-like surface layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm" />
      </div>

      {/* Background Image - Prominent and Large */}
      <div className="absolute inset-0 flex items-center justify-center transform preserve-3d" style={{
        transform: 'translateZ(20px)',
      }}>
        <div className="relative w-full h-full">
          <img
            src="/images/banner.png"
            alt=""
            className="w-full h-full object-cover opacity-70"
            style={{
              filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
              transform: 'scale(1.05)',
            }}
          />
        </div>
      </div>

      {/* Strong shadow overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent shadow-[0_0_20px_rgba(30,136,255,0.5)]" />
      
      {/* Bottom shadow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/60 to-transparent shadow-[0_0_20px_rgba(0,0,0,0.5)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-brand-blue/50 rounded-full blur-md animate-pulse shadow-[0_0_15px_rgba(30,136,255,0.6)]" />
      <div className="absolute top-3/4 right-16 w-4 h-4 bg-brand-gold/50 rounded-full blur-md animate-pulse shadow-[0_0_15px_rgba(247,166,0,0.6)]" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-blue/40 rounded-full blur-md animate-pulse shadow-[0_0_15px_rgba(30,136,255,0.5)]" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12" style={{
        transform: 'translateZ(30px)',
      }}>
        <div>
          <h1 className="text-3xl font-bold leading-none text-white md:text-4xl lg:text-5xl drop-shadow-2xl" style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(30,136,255,0.3)',
          }}>
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-lg text-sm text-gray-200 md:text-base lg:text-lg drop-shadow-xl" style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}