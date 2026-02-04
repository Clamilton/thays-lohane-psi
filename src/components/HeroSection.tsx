import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onScheduleClick: () => void;
}

const HeroSection = ({ onScheduleClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-mint-light to-accent">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-mint/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-sage-light/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Psicóloga Clínica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
              Cuidar da mente é um ato de{" "}
              <span className="text-primary relative">
                amor próprio
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Olá, sou Thays Lohane. Estou aqui para te acompanhar em uma jornada de 
              autoconhecimento, acolhimento e transformação. Juntos, podemos construir 
              um caminho mais leve para a sua saúde mental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={onScheduleClick}
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer mais
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-primary">5 anos</p>
                <p className="text-sm text-muted-foreground">De experiência</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-primary">Online</p>
                <p className="text-sm text-muted-foreground">& Presencial</p>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Background decorative shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-mint/30 rounded-full transform rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-tr from-sage-light to-accent rounded-full" />
              
              {/* Image container */}
              <div className="absolute inset-8 bg-gradient-to-br from-primary/10 to-mint/20 rounded-full overflow-hidden border-4 border-background shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Foto profissional</p>
                  <p className="text-muted-foreground text-xs">da psicóloga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
