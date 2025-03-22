
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tech-blue-50 to-white py-24">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="absolute -top-24 right-0 hidden h-64 w-64 rounded-full bg-tech-blue-100 blur-3xl sm:block"></div>
      <div className="absolute -bottom-24 left-0 hidden h-64 w-64 rounded-full bg-tech-blue-100 blur-3xl sm:block"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-tech-blue-100 px-3 py-1 text-sm font-medium text-tech-blue-800">
            Comprehensive Tech Solutions
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-tech-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-tech-gray-600">
            From web and app development to IT consulting and cloud solutions, we provide a full range of technology services to help your business thrive.
          </p>
          <div className="mt-8">
            <Button
              className="animate-fade-in rounded-full bg-tech-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-lg"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
