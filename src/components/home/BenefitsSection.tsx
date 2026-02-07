import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, Share2 } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    value: "10x",
    label: "Visibility Increase",
    description: "Events using Frame Forge see up to 10x more social impressions.",
  },
  {
    icon: Share2,
    value: "85%",
    label: "Share Rate",
    description: "Of attendees share their branded frames on social media.",
  },
  {
    icon: Users,
    value: "3x",
    label: "Engagement Boost",
    description: "Higher attendee engagement compared to traditional events.",
  },
  {
    icon: TrendingUp,
    value: "50%",
    label: "Brand Recall",
    description: "Improvement in post-event brand recall metrics.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Maximize Your <span className="gradient-text">Event Visibility</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real events. See how Frame Forge transforms engagement metrics.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 glow-primary">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {benefit.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {benefit.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
