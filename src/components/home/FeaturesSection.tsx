import { motion } from "framer-motion";
import { Frame, BadgeCheck, Wand2, Palette } from "lucide-react";

const features = [
  {
    icon: Frame,
    title: "AI Event Frames",
    description: "Custom-designed photo frames that perfectly match your event branding and theme.",
  },
  {
    icon: BadgeCheck,
    title: "Smart Badges",
    description: "Digital badges that attendees can share across social platforms to amplify reach.",
  },
  {
    icon: Wand2,
    title: "AI Visuals",
    description: "Generate stunning AI-powered graphics and imagery for your event materials.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Full-service creative design tailored to your brand and event requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
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
            What <span className="gradient-text">Frame Forge</span> Does
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to create memorable, shareable event experiences that drive engagement.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:glow-primary transition-shadow duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
