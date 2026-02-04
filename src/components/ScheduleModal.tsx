import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Loader2, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  timezone: string;
  org: string;
}

const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getUserAgent = () => {
    return navigator.userAgent;
  };

  const getReferrer = () => {
    return document.referrer || "direct";
  };

  const getLocationData = async (): Promise<LocationData | null> => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Failed to fetch location");
      return await response.json();
    } catch (error) {
      console.error("Error fetching location data:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !contact.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e contato.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Collect all data
      const userAgent = getUserAgent();
      const referrer = getReferrer();
      const locationData = await getLocationData();

      const leadData = {
        name: name.trim(),
        contact: contact.trim(),
        user_agent: userAgent,
        referrer: referrer,
        ip: locationData?.ip || null,
        city: locationData?.city || null,
        region: locationData?.region || null,
        country: locationData?.country_name || null,
        timezone: locationData?.timezone || null,
        isp: locationData?.org || null,
        created_at: new Date().toISOString(),
      };

      console.log("Lead data collected:", leadData);
      
      // TODO: Save to Supabase when connected
      // const { error } = await supabase.from('leads').insert(leadData);
      // if (error) throw error;

      // For now, simulate saving
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Redirecionando para o WhatsApp...",
        description: "Em instantes você será redirecionado.",
      });

      // Clear form
      setName("");
      setContact("");
      onClose();

      // Redirect to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Olá, meu nome é ${name.trim()}. Quero marcar minha consulta!`
      );
      const whatsappUrl = `https://wa.me/5563992774658?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, "_blank");

    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        title: "Erro ao processar",
        description: "Ocorreu um erro. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-3xl border-none shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-serif">
            Agende sua consulta
          </DialogTitle>
          <DialogDescription className="text-base">
            Preencha seus dados abaixo e em seguida você será direcionada 
            para o WhatsApp para confirmar o agendamento.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-xl border-2 focus:border-primary"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact" className="text-foreground">
              WhatsApp ou E-mail
            </Label>
            <Input
              id="contact"
              type="text"
              placeholder="(00) 00000-0000 ou seu@email.com"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="h-12 rounded-xl border-2 focus:border-primary"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Continuar no WhatsApp
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            <Heart className="w-3 h-3 inline mr-1" />
            Seus dados estão seguros e protegidos pela LGPD
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
