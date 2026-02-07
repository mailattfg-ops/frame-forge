import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { name: "AI Frames", href: "/services#frames" },
    { name: "Smart Badges", href: "/services#badges" },
    { name: "AI Visuals", href: "/services#ai-visuals" },
    { name: "Custom Design", href: "/services#custom-design" },
  ],
  company: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Integration", href: "/integration" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold gradient-text">Frame Forge</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your events with AI-powered visual engagement. Custom frames, smart badges, and stunning visuals.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <span>hello@frameforge.ai</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Frame Forge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
