import { cn } from "@/lib/helper";

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const GradientTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className={
            index === 0
              ? "text-white"
              : "bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#22C55E] bg-clip-text text-transparent"
          }
        >
          {word}
          {index !== words.length - 1 && " "}
        </span>
      ))}
    </>
  );
};

export default function InnerPageBanner({
  title,
  subtitle,
  className = "",
}: InnerPageBannerProps) {
  return (
    <section
      className={cn(
        "relative mt-[80px] w-full overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(180deg,#EFF6FF 0%,#FFFFFF 100%)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          boxShadow:
            "0 12px 35px rgba(0,0,0,.18), 0 6px 15px rgba(0,0,0,.12)",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/banner1.0.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081B3A]/85 via-[#081B3A]/55 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[260px] items-center px-8 ">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-tight ">
              <GradientTitle text={title} />
            </h1>

            {subtitle && (
              <p className="mt-3 max-w-2xl text-[12px] leading-relaxed text-slate-200 ">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}