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
        'relative mt-[120px] w-full overflow-hidden',
        className
      )}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div 
          className="relative overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-xl sm:rounded-[32px]"
          style={{
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
            transform: 'perspective(1000px) rotateX(1deg) translateY(-2px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fcfdff] to-white" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl md:text-5xl">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6B7280] sm:text-base lg:text-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}