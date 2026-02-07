import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Frame, BadgeCheck, Wand2, Palette, TicketCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    id: "frames",
    icon: Frame,
    title: "AI Event Frames",
    subtitle: "Custom Photo Frames Powered by AI",
    description: "Transform ordinary photos into shareable branded content with our AI-powered frame generation. Each frame is uniquely designed to match your event's theme, colors, and messaging.",
    benefits: [
      "Instant frame generation in seconds",
      "Unlimited design variations",
      "Perfect brand alignment",
      "Social media optimized sizes",
      "High-resolution output",
      "Custom templates available",
    ],
    useCases: ["Product launches", "Award ceremonies", "Team celebrations", "Brand activations"],
  },
  {
    id: "badges",
    icon: BadgeCheck,
    title: "Smart Event Badges",
    subtitle: "Digital Identity That Travels",
    description: "Go beyond traditional name badges with smart digital credentials that attendees proudly share. Our badges integrate seamlessly with your event branding and encourage organic social amplification.",
    benefits: [
      "Digital-first design approach",
      "QR code integration",
      "Social sharing ready",
      "Custom data fields",
      "Multiple format options",
      "Real-time generation",
    ],
    useCases: ["Conferences", "Networking events", "Workshops", "Corporate meetings"],
  },
  {
    id: "ai-visuals",
    icon: Wand2,
    title: "AI Image Generation",
    subtitle: "Stunning Visuals on Demand",
    description: "Harness cutting-edge AI to create unique, eye-catching visuals for your event. From promotional materials to venue displays, generate imagery that captures attention and reinforces your brand.",
    benefits: [
      "Unique AI-generated artwork",
      "Brand-aligned outputs",
      "Fast turnaround times",
      "Unlimited revisions",
      "Multiple style options",
      "Print and digital ready",
    ],
    useCases: ["Marketing materials", "Social media content", "Venue signage", "Promotional campaigns"],
  },
  {
    id: "custom-design",
    icon: Palette,
    title: "Custom Creative Design",
    subtitle: "Bespoke Design Excellence",
    description: "For events that demand perfection, our expert design team crafts completely custom visual experiences. From concept to execution, we bring your vision to life with precision and creativity.",
    benefits: [
      "Dedicated design team",
      "Full creative control",
      "End-to-end support",
      "Unlimited revisions",
      "Premium quality output",
      "Strategic brand guidance",
    ],
    useCases: ["High-profile events", "Brand campaigns", "Executive summits", "Special occasions"],
  },
  {
    id: "integration",
    icon: TicketCheck,
    title: "Ticketing Integration",
    subtitle: "Seamless System Connectivity",
    description: "Connect Frame Forge with your existing event management and ticketing platforms. Automated workflows ensure a smooth attendee experience from registration to photo sharing.",
    benefits: [
      "API-first integration",
      "Major platform support",
      "Automated data sync",
      "Real-time updates",
      "Custom webhooks",
      "Developer documentation",
    ],
    useCases: ["Large-scale events", "Multi-venue events", "Recurring events", "Complex registrations"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A complete suite of AI-powered tools and creative services designed to 
                transform your events into unforgettable, shareable experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${index % 2 === 1 ? "bg-card/50" : ""}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 glow-primary">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                  <p className="text-lg text-primary mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="gradient-bg hover:opacity-90">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <div className="flex-1 w-full">
                  <div className="glass-card rounded-2xl p-8">
                    <h4 className="font-semibold text-foreground mb-4">Perfect for:</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-primary/10 text-primary"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
