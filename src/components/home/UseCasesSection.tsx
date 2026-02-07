import { motion } from "framer-motion";
import { Building2, GraduationCap, Users, Presentation } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Elevate company conferences, product launches, and team events with professional branded frames that reinforce corporate identity.",
    examples: ["Annual conferences", "Product launches", "Team building events", "Award ceremonies"],
  },
  {
    icon: GraduationCap,
    title: "College & University",
    description: "Make campus events memorable with custom frames for fests, graduations, and student activities that students love to share.",
    examples: ["College fests", "Graduation ceremonies", "Sports events", "Cultural programs"],
  },
  {
    icon: Users,
    title: "Conferences & Summits",
    description: "Professional frames and badges for industry conferences that help attendees network and showcase their participation.",
    examples: ["Tech conferences", "Industry summits", "Workshops", "Networking events"],
  },
  {
    icon: Presentation,
    title: "Expos & Trade Shows",
    description: "Stand out on the exhibition floor with eye-catching frames that draw visitors and amplify your brand presence.",
    examples: ["Trade shows", "Product expos", "Industry exhibitions", "Brand activations"],
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 relative bg-card/50">
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
            Perfect for <span className="gradient-text">Every Event Type</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate gatherings to massive expos, Frame Forge adapts to your event's unique needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
