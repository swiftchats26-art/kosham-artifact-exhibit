import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RaritySection from "@/components/RaritySection";
import EngineeringSection from "@/components/EngineeringSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WaitlistDialog from "@/components/WaitlistDialog";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenWaitlist={() => setWaitlistOpen(true)} />
      <HeroSection />
      <RaritySection />
      <EngineeringSection />
      <CtaSection onOpenWaitlist={() => setWaitlistOpen(true)} />
      <Footer />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
