import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto">
        <div className="bg-card border shadow-2xl rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Utilizamos cookies 🍪
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Este site utiliza cookies para melhorar sua experiência de navegação, 
                  análise de tráfego e personalização de conteúdo. Ao continuar navegando, 
                  você concorda com nossa{" "}
                  <button className="text-primary hover:underline">
                    Política de Privacidade
                  </button>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={handleReject}
                className="flex-1 md:flex-none rounded-full"
              >
                Recusar
              </Button>
              <Button 
                onClick={handleAccept}
                className="flex-1 md:flex-none rounded-full"
              >
                Aceitar
              </Button>
            </div>
            <button 
              onClick={handleReject}
              className="absolute top-4 right-4 md:static text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
