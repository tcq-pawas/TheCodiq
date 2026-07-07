import { cn } from '@/lib/helper';

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function InnerPageBanner({ title, subtitle, className = '' }: InnerPageBannerProps) {
  return (
    <section
      className={cn('relative w-full overflow-hidden', className)}
      style={{
        marginTop: '120px',
        height: '200px',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(images/aboutbg.png)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
        <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">{title}</h1>

        {subtitle && <p className="text-sm text-white/80 md:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}
