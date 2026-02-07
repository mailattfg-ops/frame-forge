import { motion } from "framer-motion";
import { Frame, BadgeCheck, Wand2, Palette } from "lucide-react";
import sampleFrame from "@/assets/sample-frame-1.jpg";

const features = [
  {
    icon: Frame,
    title: "AI Event Frames",
    description: "Custom-designed photo frames that perfectly match your event branding and theme.",
    image: sampleFrame,
  },
  {
    icon: BadgeCheck,
    title: "Smart Badges",
    description: "Digital badges that attendees can share across social platforms to amplify reach.",
    image: sampleFrame,
  },
  {
    icon: Wand2,
    title: "AI Visuals",
    description: "Generate stunning AI-powered graphics and imagery for your event materials.",
    image: sampleFrame,
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Full-service creative design tailored to your brand and event requirements.",
    image: sampleFrame,
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
            What <span className="text-primary">Frame Forge</span> Does
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
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Sample Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
