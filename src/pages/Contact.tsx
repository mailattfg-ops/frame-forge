import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  organization: z.string().trim().min(2, "Organization must be at least 2 characters").max(100, "Organization must be less than 100 characters"),
  eventName: z.string().trim().min(2, "Event name must be at least 2 characters").max(100, "Event name must be less than 100 characters"),
  eventDate: z.string().min(1, "Event date is required"),
  expectedAttendees: z.string().min(1, "Expected attendees is required"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone must be less than 20 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
  services: z.object({
    frames: z.boolean().default(false),
    badges: z.boolean().default(false),
    aiVisuals: z.boolean().default(false),
    customDesign: z.boolean().default(false),
    integration: z.boolean().default(false),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  { id: "frames", label: "AI Event Frames" },
  { id: "badges", label: "Smart Event Badges" },
  { id: "aiVisuals", label: "AI Image Generation" },
  { id: "customDesign", label: "Custom Creative Design" },
  { id: "integration", label: "Ticketing Integration" },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      eventName: "",
      eventDate: "",
      expectedAttendees: "",
      email: "",
      phone: "",
      message: "",
      services: {
        frames: false,
        badges: false,
        aiVisuals: false,
        customDesign: false,
        integration: false,
      },
    },
  });

  const onSubmit = async (data: FormValues) => {
    // For now, just show success. Backend integration will be added later.
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg mx-auto text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-md">
                  <Check className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  We've received your message and will get back to you within 24 hours.
                  Our team is excited to help you transform your event!
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Submit Another Request
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden bg-muted/30">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-secondary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your event? Fill out the form below and our team 
                will reach out within 24 hours to discuss your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} className="bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Organization *</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} className="bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Event Name & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Annual Tech Summit 2025" {...field} className="bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} className="bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Expected Attendees */}
                    <FormField
                      control={form.control}
                      name="expectedAttendees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Attendees *</FormLabel>
                          <FormControl>
                            <Input placeholder="500" {...field} className="bg-muted/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Services */}
                    <div>
                      <FormLabel className="mb-4 block">Services Interested In</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <FormField
                            key={service.id}
                            control={form.control}
                            name={`services.${service.id as keyof FormValues["services"]}`}
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@acme.com" {...field} className="bg-muted/50" />
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
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} className="bg-muted/50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your event and requirements..."
                              rows={4}
                              {...field}
                              className="bg-muted/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
