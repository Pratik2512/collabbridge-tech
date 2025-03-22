
import { Clock, Award, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description: "CollabCraze Tech was founded with a mission to bridge the gap between businesses and technology.",
    icon: Clock,
    color: "bg-blue-100 text-blue-600",
  },
  {
    year: "2021",
    title: "First Major Clients",
    description: "Secured our first major clients and expanded our development team to meet growing demand.",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    year: "2022",
    title: "Service Expansion",
    description: "Expanded our service offerings to include mobile app development and cloud solutions.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received industry recognition for our innovative solutions and client-focused approach.",
    icon: Award,
    color: "bg-purple-100 text-purple-600",
  },
];

export function JourneySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600">
            From our founding to the present day, we've been dedicated to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-tech-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div
                    className={cn(
                      "absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white shadow-sm",
                      milestone.color
                    )}
                  >
                    <milestone.icon className="h-5 w-5" />
                  </div>

                  <div
                    className={cn(
                      "flex flex-col items-center lg:flex-row",
                      index % 2 === 0
                        ? "lg:flex-row-reverse"
                        : "lg:flex-row"
                    )}
                  >
                    <div
                      className={cn(
                        "lg:w-1/2",
                        index % 2 === 0 ? "lg:pl-16" : "lg:pr-16",
                        "flex justify-center lg:block"
                      )}
                    >
                      <div className="text-center lg:text-right">
                        <span className="inline-block rounded-full bg-tech-blue-100 px-3 py-1 text-sm font-medium text-tech-blue-800">
                          {milestone.year}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-tech-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "mt-4 lg:mt-0 lg:w-1/2",
                        index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-lg bg-white p-6 shadow-sm",
                          "text-center lg:text-left"
                        )}
                      >
                        <p className="text-tech-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
