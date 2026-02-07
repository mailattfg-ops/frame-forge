import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductsSection />
        <BenefitsSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
