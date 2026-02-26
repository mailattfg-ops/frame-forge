import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Plug, FileCode, Webhook, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/home/CTASection";

const integrations = [
  {
    id: "api",
    icon: Code,
    title: "API Integration",
    description: "Our RESTful API gives you complete programmatic control over Frame Forge. Build custom experiences, automate workflows, and integrate deeply with your existing systems.",
    features: [
      { icon: FileCode, text: "RESTful API with comprehensive documentation" },
      { icon: Webhook, text: "Webhooks for real-time event notifications" },
      { icon: Shield, text: "Secure authentication with API keys" },
      { icon: Zap, text: "Rate limiting with generous quotas" },
    ],
    codeExample: `// Example: Generate a frame for an attendee
const response = await fetch('https://api.frameforge.one/v1/frames', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    event_id: 'evt_123',
    photo_url: 'https://example.com/photo.jpg',
    template_id: 'tmpl_456'
  })
});`,
  },
  {
    id: "link",
    icon: Globe,
    title: "Link-Based System",
    description: "The simplest way to get started. Generate a unique link for your event that you can share anywhere - email, SMS, QR codes, or social media. No coding required.",
    features: [
      { icon: Zap, text: "Set up in under 5 minutes" },
      { icon: Globe, text: "Works on any device or platform" },
      { icon: Shield, text: "Custom branded landing pages" },
      { icon: FileCode, text: "Built-in analytics dashboard" },
    ],
    example: "https://frames.frameforge.one/your-event-name",
  },
  {
    id: "embed",
    icon: Plug,
    title: "Website Embedding",
    description: "Embed Frame Forge directly into your event website for a seamless user experience. A simple code snippet is all you need to add full functionality.",
    features: [
      { icon: FileCode, text: "One-line embed code" },
      { icon: Globe, text: "Fully responsive design" },
      { icon: Shield, text: "CSS customization options" },
      { icon: Zap, text: "Lazy loading for performance" },
    ],
    codeExample: `<!-- Add Frameforge.one to your website -->
<div id="frameforge-widget"></div>
<script src="https://cdn.frameforge.one/widget.js"></script>
<script>
  Frameforge.init({
    eventId: 'your-event-id',
    container: '#frameforge-widget',
    theme: 'dark'
  });
</script>`,
  },
];

const platforms = [
  "Eventbrite",
  "Ticketmaster",
  "Cvent",
  "Hopin",
  "Zoom Events",
  "Bizzabo",
  "Splash",
  "Swoogo",
  "Whova",
  "Airmeet",
  "Custom Platforms",
  "And More...",
];

const Integration = () => {
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
                Seamless <span className="text-primary">Integration</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect Frame Forge to your existing event infrastructure with our 
                flexible integration options. From simple links to full API access.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Integration Options */}
        {integrations.map((integration, index) => (
          <section
            key={integration.id}
            id={integration.id}
            className={`py-20 ${index % 2 === 1 ? "bg-muted/50" : ""}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                    <integration.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{integration.title}</h2>
                    <p className="text-muted-foreground text-lg">{integration.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div className="space-y-4">
                    {integration.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code Example or Link */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    {integration.codeExample ? (
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-destructive" />
                          <div className="w-3 h-3 rounded-full bg-secondary" />
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>
                        <pre className="text-sm text-muted-foreground overflow-x-auto">
                          <code>{integration.codeExample}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col items-center justify-center h-full">
                        <p className="text-muted-foreground mb-4">Your event link:</p>
                        <div className="px-6 py-3 bg-muted rounded-lg text-primary font-mono text-sm">
                          {integration.example}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Compatible Platforms */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compatible <span className="text-primary">Platforms</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Frame Forge integrates with all major event and ticketing platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card border border-border rounded-full text-foreground"
                >
                  {platform}
                </div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your platform? We can build a custom integration for you.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
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

export default Integration;
