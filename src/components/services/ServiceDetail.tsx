
import { ArrowRight, Code, Smartphone, Lightbulb, Cloud, Brain, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and SaaS solutions tailored to your business needs.",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "SaaS platform development",
      "Web application development",
      "Website maintenance and support",
      "Performance optimization",
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android and iOS devices.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform app development",
      "UI/UX design for mobile",
      "App maintenance and updates",
      "App store optimization",
    ],
    image: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic technology planning and digital transformation roadmaps for your business.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
    features: [
      "Technology strategy development",
      "Digital transformation consulting",
      "IT infrastructure assessment",
      "Business process optimization",
      "Technology vendor selection",
      "IT cost optimization",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
    icon: Cloud,
    color: "bg-sky-100 text-sky-600",
    features: [
      "Cloud infrastructure setup",
      "Cloud migration services",
      "Cloud security implementation",
      "Serverless architecture",
      "DevOps and CI/CD pipelines",
      "Cloud cost management",
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions to help your business automate processes and gain insights from data.",
    icon: Brain,
    color: "bg-indigo-100 text-indigo-600",
    features: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "AI integration with existing systems",
      "Data analytics dashboards",
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Streamline your business processes with custom automation solutions that save time and reduce errors.",
    icon: Cog,
    color: "bg-green-100 text-green-600",
    features: [
      "Business process automation",
      "Workflow optimization",
      "RPA (Robotic Process Automation)",
      "Custom automation scripts",
      "Integration of existing systems",
      "Automated testing solutions",
    ],
    image: "https://images.unsplash.com/photo-1563770660941-10a2b3654e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export function ServiceDetail() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={cn(
                "grid gap-12 md:grid-cols-2 md:items-center",
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              )}
            >
              <div
                className={cn(
                  "animate-fade-in",
                  index % 2 === 1 ? "md:col-start-1" : ""
                )}
              >
                <div className={cn("mb-4 inline-flex rounded-full p-3", service.color)}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-tech-gray-600">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-tech-blue-100 text-tech-blue-600">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-tech-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    className="rounded-full bg-tech-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-md"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="animate-scale-in">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
