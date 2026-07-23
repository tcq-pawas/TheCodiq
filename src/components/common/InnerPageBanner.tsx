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
        'relative mt-[90px] h-[180px] w-full overflow-hidden md:h-[200px]',
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundPosition: 'center center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div>
          <h1 className="text-3xl font-bold leading-none text-white md:text-4xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-lg text-sm text-gray-200 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}