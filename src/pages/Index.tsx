import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScheduleModal from "@/components/ScheduleModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <HeroSection onScheduleClick={handleScheduleClick} />
      <AboutSection />
      <ServicesSection onScheduleClick={handleScheduleClick} />
      <Footer />
      <CookieBanner />
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Index;
