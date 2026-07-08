"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    emoji: "👨‍💼",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    emoji: "👩‍💻",
  },
  {
    name: "Mike Chen",
    role: "Lead Software Engineer",
    emoji: "👨‍💻",
  },
  {
    name: "Emily Davis",
    role: "Creative Design Lead",
    emoji: "👩‍🎨",
  },
];

export default function TeamSection() {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-3xl font-bold text-white">
          Meet Our Team
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-center text-sm md:text-sm">
          Behind every successful project is a passionate team of innovators,
          developers, designers, and strategists committed to delivering
          exceptional digital experiences.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Card hover>
              <div className="text-center">
                {/* Avatar */}
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl border border-primary/30 shadow-lg">
                  {member.emoji}
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm text-primary font-medium">
                  {member.role}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}