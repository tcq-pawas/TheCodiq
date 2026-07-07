"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import InnerPageBanner from "@/components/common/InnerPageBanner";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "10+", label: "Years Experience" },
];

const values = [
  {
    title: "Our Mission",
    tag: "Build",
    description:
      "To empower businesses with smart technology solutions that improve operations, unlock growth, and create lasting digital impact.",
  },
  {
    title: "Our Vision",
    tag: "Lead",
    description:
      "To become a trusted global technology partner known for innovation, quality, transparency, and customer-first delivery.",
  },
];

const team = [
  { name: "John Smith", role: "CEO & Founder", initials: "JS" },
  { name: "Sarah Johnson", role: "CTO", initials: "SJ" },
  { name: "Mike Chen", role: "Lead Developer", initials: "MC" },
  { name: "Emily Davis", role: "Design Lead", initials: "ED" },
];

const features = [
  {
    title: "Expert Team",
    description: "Experienced professionals who understand real business needs.",
    icon: "01",
  },
  {
    title: "Quality Work",
    description: "Clean execution, strong standards, and reliable delivery.",
    icon: "02",
  },
  {
    title: "24/7 Support",
    description: "Continuous assistance whenever your business needs help.",
    icon: "03",
  },
  {
    title: "Modern Tech",
    description: "Practical use of current tools, frameworks, and best practices.",
    icon: "04",
  },
  {
    title: "Transparent Pricing",
    description: "Clear project scopes with no confusing hidden costs.",
    icon: "05",
  },
  {
    title: "On-Time Delivery",
    description: "Structured project management focused on meeting deadlines.",
    icon: "06",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerPageBanner
        title="About Us"
        subtitle="Learn more about our company and mission"
      />

      <main className="relative overflow-hidden bg-background py-20 mb-20">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="animated-blob left-[-12rem] top-24 h-96 w-96 bg-primary/20" />
        <div
          className="animated-blob bottom-20 right-[-12rem] h-96 w-96 bg-accent/20"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <motion.section
            className="mb-24 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Digital growth partner
              </span>

              <h2 className="mb-6 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                We design and build digital products that help businesses move
                faster.
              </h2>

              <p className="mb-5 text-sm leading-8 text-gray-300">
                TheCodiQ is an IT solutions company helping brands transform
                their ideas into high-performing websites, mobile apps, AI
                solutions, UI/UX experiences, and marketing systems.
              </p>

              <p className="max-w-2xl leading-8 text-gray-400 text-sm">
                Our team combines strategy, design, development, and support so
                every project feels thoughtful, scalable, and ready for real
                users.
              </p>
            </div>

            <div className="glass-effect rounded-2xl border border-white/10 p-6 shadow-2xl shadow-primary/10">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center text-semibold"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                  >
                    <div className="gradient-text mb-2 text-3xl font-black">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10 text-center">
              <span className="gradient-text text-sm font-semibold uppercase tracking-wide">
                Purpose
              </span>
              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Mission & Vision
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((item) => (
                <Card key={item.title} hover>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-lg shadow-primary/20">
                    {item.tag}
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="leading-7 text-gray-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10 text-center">
              <span className="gradient-text text-sm font-semibold uppercase tracking-wide">
                People
              </span>
              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Meet Our Team
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <Card hover>
                    <div className="text-center">
                      <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/80 to-accent/80 text-2xl font-black text-white shadow-xl shadow-primary/20">
                        {member.initials}
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-white">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10 text-center">
              <span className="gradient-text text-sm font-semibold uppercase tracking-wide">
                Why TheCodiQ
              </span>
              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Why Choose Us
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <Card hover>
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="leading-7 text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}