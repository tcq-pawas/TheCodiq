import { Metadata } from "next";
import Hero from "@/app/home/Hero";
import Services from "@/app/home/Services";
import About from "@/app/home/About";
import Testimonials from "@/app/home/Testimonials";
import FAQ from "@/app/home/FAQ";


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

