import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";


export const metadata: Metadata = {
  title: "Home | TheCodiQ - Premium IT Solutions",
  description:
    "Transform your business with premium IT solutions. Expert web development, mobile apps, AI solutions, and digital marketing services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
    </>
  );
}

