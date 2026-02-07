import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import frameforgelogo from "@/assets/frameforge-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Integration", href: "/integration" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={frameforgelogo} alt="Frameforge.one" className="h-5 w-auto invert" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-2">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
