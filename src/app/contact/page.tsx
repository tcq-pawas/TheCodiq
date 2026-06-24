"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { CONTACT_INFO } from "@/lib/constants";
import InnerPageBanner from "@/components/common/InnerPageBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <div className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48" style={{ animationDelay: "3s" }} />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  An error occurred. Please try again.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary mr-4 border border-primary/30">
                    📧
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary mr-4 border border-primary/30">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary mr-4 border border-primary/30">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">
                Working Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <div className="aspect-video glass-effect rounded-lg flex items-center justify-center border border-primary/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-400">Google Map Placeholder</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
