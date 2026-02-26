import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Frame, BadgeCheck, Wand2, Palette, TicketCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Frame,
    title: "AI Event Frames",
    description: "Custom-designed photo frames powered by AI that perfectly capture your event's identity. From corporate conferences to music festivals, we create frames that attendees love to share.",
    features: ["Custom branding", "Multiple templates", "Instant generation", "Social-ready sizes"],
    href: "/services#frames",
  },
  {
    icon: BadgeCheck,
    title: "Smart Event Badges",
    description: "Digital badges that go beyond identification. Our smart badges integrate with your event theme and encourage social sharing to maximize your event's reach.",
    features: ["Digital-first design", "QR integration", "Social shareable", "Custom layouts"],
    href: "/services#badges",
  },
  {
    icon: Wand2,
    title: "AI Image Generation",
    description: "Harness the power of AI to create stunning event visuals. From promotional materials to on-site displays, generate unique imagery that captures attention.",
    features: ["Unique visuals", "Brand-aligned", "Fast turnaround", "Unlimited variations"],
    href: "/services#ai-visuals",
  },
  {
    icon: Palette,
    title: "Custom Creative Design",
    description: "Full-service creative design for events that demand excellence. Our team crafts bespoke visual experiences tailored to your specific requirements.",
    features: ["Bespoke design", "Full-service", "Expert team", "End-to-end support"],
    href: "/services#custom-design",
  },
  {
    icon: TicketCheck,
    title: "Ticketing Integration",
    description: "Seamlessly connect Frame Forge with your existing ticketing and registration platforms. Automated workflows that enhance the attendee journey.",
    features: ["API integration", "Major platforms", "Automated sync", "Real-time updates"],
    href: "/services#integration",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Product Offerings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete suite of AI-powered tools designed to elevate your event experience.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button asChild variant="ghost" className="group/btn hover:text-primary">
                  <Link to={product.href}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
