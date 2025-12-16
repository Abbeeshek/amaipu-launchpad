import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import EcosystemSection from "@/components/EcosystemSection";
import EthicsSection from "@/components/EthicsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <WhoWeServeSection />
      <EcosystemSection />
      <EthicsSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
