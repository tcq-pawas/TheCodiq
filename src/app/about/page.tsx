"use client";

import { motion } from "framer-motion";
import Card from "@/components/common/Card";

import InnerPageBanner from "@/components/common/InnerPageBanner";

export default function AboutPage() {
  return (
    <>
      <InnerPageBanner
        title="About Us"
        subtitle="Learn more about our company and mission"
      />
      <div className="py-16 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="animated-blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
      <div className="animated-blob w-96 h-96 bg-accent/20 bottom-1/4 -right-48" style={{ animationDelay: "3s" }} />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        {/* Company Overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Who We Are
              </h3>
              <p className="text-gray-400 mb-4">
                TheCodiQ is a leading IT solutions provider dedicated to
                helping businesses transform their digital presence. With years
                of experience and a team of skilled professionals, we deliver
                innovative solutions that drive growth and success.
              </p>
              <p className="text-gray-400">
                We specialize in web development, mobile applications, AI
                solutions, UI/UX design, and digital marketing services. Our
                commitment to excellence and customer satisfaction sets us
                apart in the industry.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    500+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    200+
                  </div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    10+
                  </div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Mission & Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-gray-400">
                To empower businesses with cutting-edge technology solutions
                that drive innovation, efficiency, and sustainable growth. We
                strive to be the bridge between complex technology and business
                success.
              </p>
            </Card>
            <Card hover>
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
              <p className="text-gray-400">
                To be the global leader in IT solutions, recognized for our
                innovation, quality, and customer-centric approach. We envision
                a world where technology seamlessly enhances every aspect of
                business operations.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Our Team
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "John Smith", role: "CEO & Founder", emoji: "👨‍💼" },
              { name: "Sarah Johnson", role: "CTO", emoji: "👩‍💻" },
              { name: "Mike Chen", role: "Lead Developer", emoji: "👨‍💻" },
              { name: "Emily Davis", role: "Design Lead", emoji: "👩‍🎨" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-primary/30">
                      {member.emoji}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Team",
                description:
                  "Highly skilled professionals with years of industry experience",
                icon: "✨",
              },
              {
                title: "Quality Work",
                description:
                  "Delivering excellence through rigorous quality standards",
                icon: "🏆",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance for all your technical needs",
                icon: "🛟",
              },
              {
                title: "Modern Tech",
                description:
                  "Latest technologies and best practices for optimal results",
                icon: "⚡",
              },
              {
                title: "Transparent Pricing",
                description:
                  "Clear, competitive pricing with no hidden costs",
                icon: "💰",
              },
              {
                title: "On-Time Delivery",
                description:
                  "Meeting deadlines consistently with efficient project management",
                icon: "📅",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover>
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
    </>
  );
}
