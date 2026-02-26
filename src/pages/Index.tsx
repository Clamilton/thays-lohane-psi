import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const WHATSAPP_URL = "https://wa.me/5563992774658?text=Olá,%20quero%20marcar%20minha%20consulta";

const Index = () => {
  const handleScheduleClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <main className="min-h-screen">
      <HeroSection onScheduleClick={handleScheduleClick} />
      <AboutSection />
      <ServicesSection onScheduleClick={handleScheduleClick} />
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Index;
