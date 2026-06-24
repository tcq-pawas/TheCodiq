import { Metadata } from "next";
import { services } from "@/data/services";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";
import InnerPageBanner from "@/components/common/InnerPageBanner";

export const metadata: Metadata = {
  title: "Services | TheCodiQ",
  description:
    "Explore our comprehensive IT services including web development, mobile apps, AI solutions, UI/UX design, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <InnerPageBanner
        title="Our Services"
        subtitle="Technology solutions for your business growth"
      />
      <div className="py-16 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} hover>
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl border border-primary/20">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Our Process
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a roadmap",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Launching your project",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div
                  className="relative mx-auto w-full h-full"
                  style={{ perspective: 900 }}
                >
                  <div
                    className="relative rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent p-6 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-[-6deg] group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                    aria-hidden
                  >
                    <div className="text-6xl font-bold text-primary/20 mb-4 select-none">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      {item.description}
                    </p>

                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </div>
    </>
  );
}
