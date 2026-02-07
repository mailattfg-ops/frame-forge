import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-8">
            <Zap className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground/90">Ready to Transform Your Events?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Start Creating Unforgettable Event Experiences Today
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Join hundreds of event organizers who trust Frame Forge to elevate their events. 
            Get started in minutes with our easy setup process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6">
              <Link to="/contact">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link to="/how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
