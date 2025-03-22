
import { CircleCheck } from "lucide-react";

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tech-blue-50 to-white py-24">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative animate-fade-in lg:order-2">
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-tech-blue-500/10 blur-3xl"></div>
            <div className="relative rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
                Our Mission & Vision
              </h2>
              <p className="mt-6 text-lg text-tech-gray-600">
                At CollabCraze Tech, we're on a mission to bridge the gap between businesses and technology, creating sustainable solutions that drive growth and innovation.
              </p>
              <p className="mt-4 text-lg text-tech-gray-600">
                Our vision is to be the trusted technology partner for businesses of all sizes, empowering them to thrive in an increasingly digital world through accessible, cutting-edge solutions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CircleCheck className="mr-3 h-6 w-6 flex-shrink-0 text-tech-blue-600" />
                  <p className="text-tech-gray-600">
                    <span className="font-semibold">Innovation</span> - We continuously explore new technologies and approaches to deliver the best solutions.
                  </p>
                </div>
                <div className="flex items-start">
                  <CircleCheck className="mr-3 h-6 w-6 flex-shrink-0 text-tech-blue-600" />
                  <p className="text-tech-gray-600">
                    <span className="font-semibold">Collaboration</span> - We work closely with our clients, forming true partnerships that drive success.
                  </p>
                </div>
                <div className="flex items-start">
                  <CircleCheck className="mr-3 h-6 w-6 flex-shrink-0 text-tech-blue-600" />
                  <p className="text-tech-gray-600">
                    <span className="font-semibold">Excellence</span> - We strive for excellence in everything we do, from code quality to client communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square overflow-hidden rounded-2xl bg-tech-blue-700 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Team working together"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-tech-blue-500 shadow-lg">
              <div className="flex h-full w-full items-center justify-center text-center text-white">
                <span className="text-xl font-bold">Since<br />2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
