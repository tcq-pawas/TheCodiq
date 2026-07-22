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
        marginTop: '90px',
        height: '200px',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(images/banner2.png)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-4xl">{title}</h1>

        {subtitle && <p className="text-[14px] text-white/80 ">{subtitle}</p>}
      </div>
    </section>
  );
}
