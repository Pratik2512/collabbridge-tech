
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content:
      "CollabCraze Tech transformed our online presence with a stunning new website that perfectly captures our brand. Their team was professional, responsive, and delivered exactly what we needed.",
    author: "Sarah Johnson",
    role: "CEO, Brightpath Marketing",
  },
  {
    content:
      "Working with CollabCraze Tech on our mobile app was an excellent experience. They took our concept and turned it into a polished, user-friendly application that our customers love.",
    author: "Michael Chen",
    role: "Product Manager, NexGen Solutions",
  },
  {
    content:
      "The IT consulting services from CollabCraze Tech helped us modernize our infrastructure and streamline our operations. Their expertise was invaluable to our digital transformation journey.",
    author: "Emily Rodriguez",
    role: "CTO, Innovate Financial",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative bg-tech-blue-50 py-24">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with CollabCraze Tech.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="mx-auto max-w-3xl rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
                    <svg
                      className="h-12 w-12 text-tech-blue-300"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-lg text-tech-gray-700">
                      {testimonial.content}
                    </p>
                    <div className="mt-8 flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-tech-blue-600">
                        <div className="flex h-full w-full items-center justify-center text-white">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-tech-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-tech-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-tech-blue-600 w-6"
                    : "bg-tech-gray-300"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
