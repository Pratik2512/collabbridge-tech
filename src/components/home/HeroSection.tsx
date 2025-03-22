
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tech-blue-50 to-white pb-16 pt-20 sm:pb-24 sm:pt-32">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="absolute -top-24 right-0 hidden h-[500px] w-[500px] rounded-full bg-gradient-radial from-tech-blue-400/20 to-transparent opacity-70 blur-3xl md:block"></div>
      <div className="absolute -bottom-24 left-0 hidden h-[400px] w-[400px] rounded-full bg-gradient-radial from-tech-blue-400/20 to-transparent opacity-70 blur-3xl md:block"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start space-y-8">
            <div className="animate-fade-in space-y-4">
              <span className="inline-flex items-center rounded-full bg-tech-blue-100 px-3 py-1 text-sm font-medium text-tech-blue-800">
                Innovative Tech Solutions
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-tech-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Bridging Business</span>
                <span className="block text-tech-blue-600">
                  <span className="text-glow">&</span> Tech
                </span>
                <span className="block">for a Smarter Future</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-tech-gray-600">
                CollabCraze Tech helps businesses grow and thrive in the digital age with sustainable web development, app development, and IT consulting solutions.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                className="animate-fade-in rounded-full bg-tech-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-lg"
                asChild
              >
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                className="animate-fade-in group rounded-full border-tech-gray-300 px-8 py-3 text-base font-medium text-tech-gray-700 transition-all duration-300 hover:border-tech-blue-600 hover:bg-white hover:text-tech-blue-600"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="animate-scale-in hidden justify-end lg:flex">
            <div className="relative h-[500px] w-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-blue-500 to-tech-blue-300 opacity-20 blur-3xl"></div>
              <div className="absolute inset-10 rounded-2xl bg-white/80 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-r from-tech-blue-500 to-tech-blue-700 shadow-xl">
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
