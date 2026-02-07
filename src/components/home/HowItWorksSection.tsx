import { motion } from "framer-motion";
import { UserPlus, Link2, Upload, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Event Registers",
    description: "Your event team registers attendees through your existing system.",
  },
  {
    icon: Link2,
    title: "Connect Frame Forge",
    description: "Integrate via API, embed link, or our custom website solution.",
  },
  {
    icon: Upload,
    title: "Attendee Uploads Photo",
    description: "Attendees upload their photo through the seamless interface.",
  },
  {
    icon: Sparkles,
    title: "AI Magic Happens",
    description: "Our AI instantly applies custom frames and generates badges.",
  },
  {
    icon: Share2,
    title: "Share & Amplify",
    description: "Attendees share branded content, boosting your event visibility.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative bg-muted/50">
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple 5-step process that transforms your event engagement in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className={`bg-card border border-border p-6 rounded-2xl inline-block shadow-sm ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Step Number & Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Empty Space for Alignment */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
