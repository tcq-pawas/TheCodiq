"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

import { CONTACT_INFO } from "@/lib/constants";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.308113742979!2d83.37288567453193!3d26.798316264999027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b795d2cae9%3A0x98b3202d1e49fd25!2sHeyDay%20Realty%20Private%20Limited!5e0!3m2!1sen!2sin!4v1783511426153!5m2!1sen!2sin";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function AuthenticContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactItems = [
    {
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`,
      icon: Phone,
    },
    {
      label: "Office",
      value: CONTACT_INFO.address,
      href: "https://www.google.com/maps/search/?api=1&query=HeyDay%20Realty%20Private%20Limited",
      icon: MapPin,
      external: true,
    },
  ];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Reset form
    setFormData(initialFormState);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Show thank you alert
    alert("🎉 Thank you! Your message has been submitted successfully.");
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 pl-11 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10";

  return (
    <section className="w-full max-w-none overflow-hidden rounded-lg border border-white/10 bg-background shadow-2xl shadow-black/25">
      <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="mb-8 max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-4 w-4" />
              Verified business contact
            </span>

            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Let us help you move with confidence
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Share a few details and our team will respond with clear,
              reliable guidance for your inquiry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-300">
                  Full name
                </span>
                <span className="relative block">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                    type="text"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-300">
                  Email address
                </span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                    type="email"
                  />
                </span>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-300">
                Phone number
              </span>
              <span className="relative block">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your phone number"
                  type="tel"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </span>
              <span className="relative block">
                <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-gray-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} min-h-[150px] resize-none`}
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </span>
            </label>

            {isSubmitted && (
              <div className="flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Your message has been received. We will contact you soon.</span>
              </div>
            )}
            <button
              type="submit"
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit
                </>
              )}
            </button>


          </form>
        </div>

        <aside className="w-full border-t border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Contact details</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Use the details below for direct communication or office
                directions.
              </p>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
          </div>

          <div className="grid gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm leading-6 text-gray-400 group-hover:text-gray-300">
                      {item.value}
                    </span>
                  </span>

                  {item.external ? (
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors duration-300 group-hover:text-primary" />
                  ) : (
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors duration-300 group-hover:text-primary" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-primary/20 bg-white/[0.035]">
            <iframe
              src={mapSrc}
              title="HeyDay Realty Private Limited Location"
              className="h-[260px] w-full sm:h-[320px] lg:h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
