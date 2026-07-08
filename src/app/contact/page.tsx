"use client";

import InnerPageBanner from "@/components/common/InnerPageBanner";

import Hero from "@/app/contact/Hero";
import ContactForm from "@/app/contact/ContactForm";
import ContactInfo from "@/app/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <InnerPageBanner
        title="Contact Us"
        subtitle="Let's discuss your next project"
      />

      <div className="py-16 bg-background relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
        <div
          className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48"
          style={{ animationDelay: "3s" }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <Hero />

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}