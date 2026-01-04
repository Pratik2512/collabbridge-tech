import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Get API key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      toast.error("Configuration Error", {
        description: "Contact form is not properly configured. Please contact the administrator.",
      });
      setIsSubmitting(false);
      return;
    }
    
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("message", data.message);
    formData.append("subject", `${data.name} sent you a message`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. We will get back to you soon.",
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or contact us directly via email.",
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please try again later or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-tech-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-tech-gray-600">
            Have a question or ready to start your project? Get in touch with our team today.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="animate-fade-in rounded-2xl bg-tech-blue-50 p-8">
            <h2 className="text-2xl font-bold text-tech-gray-900">
              Get in Touch
            </h2>
            <p className="mt-2 text-tech-gray-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full rounded-full bg-tech-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-tech-blue-700 hover:shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="animate-fade-in">
            <div className="h-full rounded-2xl bg-tech-gray-900 p-8 text-white">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-tech-gray-300">
                Reach out to us directly through any of these channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-tech-blue-400" />
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="mt-1 text-tech-gray-300">
                      Opp. Jogeshwari Misal, Sant Tukaram,<br/>
                      Pimpri, Pune 411018
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 flex-shrink-0 text-tech-blue-400" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="mt-1 text-tech-gray-300">collabcraze.tech@gmail.com</p>
                    <p className="text-tech-gray-300">help.collabcraze@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 flex-shrink-0 text-tech-blue-400" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="mt-1 text-tech-gray-300">+91-7066908355</p>
                    <p className="text-tech-gray-300">+91-9022246734</p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-12">
                <h3 className="font-semibold">Business Hours</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-tech-gray-300">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray-300">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tech-gray-300">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
