"use client";

import {
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import Card from "@/components/common/Card";
import { CONTACT_INFO } from "@/lib/constants";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.308113742979!2d83.37288567453193!3d26.798316264999027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b795d2cae9%3A0x98b3202d1e49fd25!2sHeyDay%20Realty%20Private%20Limited!5e0!3m2!1sen!2sin!4v1783511426153!5m2!1sen!2sin";

export default function ContactInfo() {
  const contactItems = [
    {
      title: "Email",
      value: CONTACT_INFO.email,
      icon: Mail,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      title: "Phone",
      value: CONTACT_INFO.phone,
      icon: Phone,
      href: `tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      title: "Address",
      value: CONTACT_INFO.address,
      icon: MapPin,
      href: "https://www.google.com/maps/search/?api=1&query=HeyDay%20Realty%20Private%20Limited",
    },
  ];

  const workingHours = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 4:00 PM",
    },
    {
      day: "Sunday",
      time: "Closed",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Navigation className="h-5 w-5" />
          </span>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Reach us through any of these channels.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Address" ? "_blank" : undefined}
                rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="mb-1 block font-semibold text-white">
                    {item.title}
                  </span>

                  <span className="block break-words text-sm leading-6 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Card>

      <Card>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Clock3 className="h-5 w-5" />
          </span>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Working Hours
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Our team is available during these hours.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {workingHours.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="text-sm text-gray-400">
                {item.day}
              </span>

              <span
                className={`text-sm font-semibold ${
                  item.time === "Closed" ? "text-red-400" : "text-white"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Find Us
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Visit our office location on Google Maps.
            </p>
          </div>

          <span className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary sm:flex">
            <MapPin className="h-5 w-5" />
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white/[0.03]">
          <iframe
            src={mapSrc}
            title="HeyDay Realty Private Limited Location"
            className="h-[280px] w-full sm:h-[340px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Card>
    </div>
  );
}