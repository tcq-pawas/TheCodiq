"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Rocket, Award, Globe, Code, Smartphone, Cpu, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    label: "Happy Clients",
    color: "blue",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-[#2563EB]",
    borderColor: "border-[#2563EB]/20",
  },
  {
    icon: Rocket,
    value: 1200,
    label: "Projects Delivered",
    color: "yellow",
    bgColor: "from-yellow-50 to-yellow-100",
    textColor: "text-[#FBBF24]",
    borderColor: "border-[#FBBF24]/20",
  },
  {
    icon: Award,
    value: 50,
    label: "Expert Developers",
    color: "green",
    bgColor: "from-green-50 to-green-100",
    textColor: "text-[#22C55E]",
    borderColor: "border-[#22C55E]/20",
  },
  {
    icon: Globe,
    value: 25,
    label: "Countries Served",
    color: "blue",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-[#2563EB]",
    borderColor: "border-[#2563EB]/20",
  },
  {
    icon: Code,
    value: 98,
    label: "Code Quality Score",
    color: "yellow",
    bgColor: "from-yellow-50 to-yellow-100",
    textColor: "text-[#FBBF24]",
    borderColor: "border-[#FBBF24]/20",
  },
  {
    icon: Smartphone,
    value: 150,
    label: "Mobile Apps",
    color: "green",
    bgColor: "from-green-50 to-green-100",
    textColor: "text-[#22C55E]",
    borderColor: "border-[#22C55E]/20",
  },
  {
    icon: Cpu,
    value: 75,
    label: "AI Solutions",
    color: "blue",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-[#2563EB]",
    borderColor: "border-[#2563EB]/20",
  },
  {
    icon: Shield,
    value: 100,
    label: "Security Compliance",
    color: "green",
    bgColor: "from-green-50 to-green-100",
    textColor: "text-[#22C55E]",
    borderColor: "border-[#22C55E]/20",
  },
];

const Counter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = duration / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default function Statistics() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden section-spacing-mobile sm:section-spacing-tablet lg:section-spacing-desktop" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 20%, #FEF3C7 45%, #F0FDF4 70%, #FFFFFF 100%)' }}>
      {/* Soft radial gradients */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[150px]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#FBBF24]/5 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#22C55E]/5 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="mb-4 inline-flex items-center rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(37,99,235,.12)]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[9px] text-[#2563EB] tracking-wide font-semibold">
              OUR IMPACT
            </span>
          </motion.div>
          <h2 className="text-4xl text-2xl lg:text-3xl font-bold text-[#111827] mb-6">
            Numbers That Speak
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto leading-relaxed text-[12px]">
            Our track record of success speaks for itself. We've helped businesses across industries achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className={`h-full p-6 rounded-[18px] border ${stat.borderColor} bg-white shadow-[0_20px_60px_rgba(37,99,235,.08)] hover:shadow-[0_25px_70px_rgba(37,99,235,.12)] transition-all duration-300`}>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${stat.bgColor} ${stat.textColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`text-3xl sm:text-4xl font-bold ${stat.textColor} mb-2`}>
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-[#6B7280] text-[12px] font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}