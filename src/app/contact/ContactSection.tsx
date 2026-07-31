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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (!formData.name.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10 digit phone number.");
    return;
  }

  setIsSubmitting(true);
  setIsSubmitted(false);

  try {
    const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    website: "thecodiq",
    full_name: formData.name.trim(),
    phone_number: formData.phone,
    email: formData.email.trim(),
    message: formData.message.trim(),
  }),
});

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    setIsSubmitted(true);
    setFormData(initialFormState);
  } catch (error) {
    console.error("Contact form error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const inputClass =
    "w-full rounded-lg border border-[#C5D5EB] bg-white px-4 py-3 pl-11 text-sm text-[#111827] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#2563EB]/60 focus:bg-[#F8FAFC] focus:ring-4 focus:ring-[#2563EB]/10";

  return (
    <section className="w-full max-w-none overflow-hidden rounded-lg border border-[#C5D5EB] bg-white shadow-[0_18px_60px_rgba(37,99,235,.08)]">
      <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
        <div className="p-5 lg:p-8">
          <div className="mb-8 max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#2563EB] shadow-[0_8px_24px_rgba(37,99,235,.12)]">
              <ShieldCheck className="h-3 w-3" />
              Verified business contact
            </span>

            <h2 className="text-[24px] font-bold leading-tight text-[#111827]">
              Let us help you move with confidence
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-[#475569]">
              Share a few details and our team will respond with clear,
              reliable guidance for your inquiry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#475569]">
                  Full name
                </span>
                <span className="relative block">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
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
                <span className="mb-2 block text-sm font-medium text-[#475569]">
                  Email address
                </span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
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
              <span className="mb-2 block text-sm font-medium text-[#475569]">
                Phone number
              </span>
              <span className="relative block">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
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
              <span className="mb-2 block text-sm font-medium text-[#475569]">
                Message
              </span>
              <span className="relative block">
                <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[#94A3B8]" />
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', boxShadow: '0 20px 60px rgba(37,99,235,.08)' }}
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

            {isSubmitted && (
              <div className="flex items-center gap-3 rounded-lg border border-[#22C55E]/20 bg-[#22C55E]/[0.06] px-4 py-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22C55E]" />
                <p className="text-[12px] font-medium text-[#22C55E]">
                  Message sent — we'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>

        <aside className="w-full border-t border-[#C5D5EB] bg-gradient-to-br from-white to-[#fbfdff] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#111827]">Contact details</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#475569]">
                Use the details below for direct communication or office
                directions.
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]">
              <MapPin className="h-4 w-4" />
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
                  className="group flex items-start gap-4 rounded-lg border border-[#C5D5EB] bg-white p-4 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_rgba(37,99,235,.12)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#111827]">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-[12px] leading-6 text-[#475569] group-hover:text-[#64748B]">
                      {item.value}
                    </span>
                  </span>

                  {item.external ? (
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#94A3B8] transition-colors duration-300 group-hover:text-[#2563EB]" />
                  ) : (
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#94A3B8] transition-colors duration-300 group-hover:text-[#2563EB]" />
                  )}
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}