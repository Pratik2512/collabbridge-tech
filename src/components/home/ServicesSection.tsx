
import { ArrowRight, Code, Smartphone, Lightbulb, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and SaaS solutions tailored to your business needs.",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
    link: "/services",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android and iOS devices.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600",
    link: "/services",
  },
  {
    title: "IT Consulting",
    description: "Strategic technology planning and digital transformation roadmaps for your business.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
    link: "/services",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
    icon: Cloud,
    color: "bg-sky-100 text-sky-600",
    link: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white dark:bg-tech-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600 dark:text-tech-gray-400">
            Comprehensive technology solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-hover group flex flex-col rounded-xl border border-gray-200 dark:border-tech-gray-700 bg-white dark:bg-tech-gray-800 p-6 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("mb-4 rounded-full p-3", service.color)}>
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-tech-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mb-4 flex-1 text-tech-gray-600 dark:text-tech-gray-300">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="mt-auto inline-flex items-center text-sm font-medium text-tech-blue-600 transition-colors group-hover:text-tech-blue-800"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-tech-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-tech-gray-700 shadow-sm transition-all duration-300 hover:border-tech-blue-600 hover:bg-tech-blue-50 hover:text-tech-blue-600"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
