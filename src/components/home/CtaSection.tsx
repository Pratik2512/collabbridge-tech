
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-tech-blue-700 py-24 text-white">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-tech-blue-600 opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-tech-blue-600 opacity-50 blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your business with technology?
          </h2>
          <p className="mt-4 text-lg text-tech-blue-100">
            Get in touch with our team today for a free consultation and discover how CollabCraze Tech can help your business thrive.
          </p>
          <div className="mt-8">
            <Button
              className="animate-fade-in rounded-full bg-white px-8 py-3 text-base font-medium text-tech-blue-700 shadow-lg transition-all duration-300 hover:bg-tech-gray-100 hover:shadow-xl"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
