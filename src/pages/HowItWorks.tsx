import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, Link2, Upload, Sparkles, Share2, Code, Globe, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register Your Event",
    description: "Set up your event in Frame Forge by providing basic details like event name, date, branding assets, and design preferences. Our team will help you get started.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Choose Integration Method",
    description: "Connect Frame Forge to your event using our flexible integration options: API, embeddable link, or custom website. Pick what works best for your workflow.",
  },
  {
    number: "03",
    icon: Upload,
    title: "Attendees Upload Photos",
    description: "Through your chosen integration, attendees easily upload their photos. Our interface is mobile-friendly and requires no app downloads.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Applies Magic",
    description: "Our AI instantly processes the photo, applying your custom frame design and generating any additional visual elements you've configured.",
  },
  {
    number: "05",
    icon: Share2,
    title: "Share & Amplify",
    description: "Attendees receive their branded photo ready to share on social media. Every share extends your event's reach and visibility organically.",
  },
];

const integrationMethods = [
  {
    icon: Code,
    title: "API Integration",
    description: "Full programmatic control with our RESTful API. Perfect for custom applications and complex workflows.",
    features: ["RESTful endpoints", "Webhook support", "SDK libraries", "Full documentation"],
  },
  {
    icon: Globe,
    title: "Embeddable Link",
    description: "Simple link-based integration that works anywhere. Share a URL and let attendees access Frame Forge directly.",
    features: ["No coding required", "Works on any platform", "Customizable landing page", "Analytics included"],
  },
  {
    icon: Plug,
    title: "Website Embed",
    description: "Embed Frame Forge directly into your event website with a simple code snippet. Seamless user experience.",
    features: ["Simple embed code", "Responsive design", "Style customization", "Brand matching"],
  },
];

const HowItWorks = () => {
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
                How It <span className="text-primary">Works</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From event setup to viral sharing, see how Frame Forge transforms 
                your attendee experience in just five simple steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex gap-8 mb-16 last:mb-0"
                >
                  {/* Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-border hidden md:block" />
                  )}

                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Methods */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Integration <span className="text-primary">Options</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the integration method that best fits your event's needs and technical requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <method.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/integration">
                  View Integration Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
