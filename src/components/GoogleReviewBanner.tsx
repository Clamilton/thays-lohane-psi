import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";

const REVIEW_URL = "https://g.page/r/CTheyeweanZ9EBM/review";

const GoogleReviewBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("google-review-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("google-review-dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 animate-slide-up max-w-sm">
      <div className="bg-card border shadow-2xl rounded-2xl p-5 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-start gap-3 pr-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-1">
              Avalie no Google ⭐
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Sua avaliação é muito importante! Deixe seu feedback no Google Maps e ajude outras pessoas a me encontrarem.
            </p>
            <Button
              size="sm"
              className="rounded-full text-xs"
              onClick={() => window.open(REVIEW_URL, "_blank")}
            >
              Avaliar agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewBanner;
