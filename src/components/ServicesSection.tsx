import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, HeartHandshake, Sparkles, Users, Flower2 } from "lucide-react";
import AnimatedLeaves from "@/components/AnimatedLeaves";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicesSectionProps {
  onScheduleClick: () => void;
}

const services = [
  {
    icon: Brain,
    title: "Ansiedade",
    description: "Compreensão e manejo dos sintomas de ansiedade, buscando formas de lidar com as demandas do cotidiano de maneira mais equilibrada.",
    color: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Acompanhamento acolhedor para elaboração do sofrimento emocional, resgate de sentido e reconstrução do bem-estar.",
    color: "bg-mint/20",
  },
  {
    icon: Sparkles,
    title: "Medos e Inseguranças",
    description: "Trabalho terapêutico voltado à compreensão das origens dos medos e inseguranças, promovendo maior segurança e autonomia.",
    color: "bg-sage-light",
  },
  {
    icon: HeartHandshake,
    title: "Dificuldades Emocionais",
    description: "Espaço de escuta e elaboração para lidar com emoções intensas, promovendo autoconhecimento e regulação emocional.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Conflitos nos Relacionamentos",
    description: "Reflexão sobre padrões relacionais, comunicação e construção de vínculos mais saudáveis e conscientes.",
    color: "bg-primary/10",
  },
  {
    icon: Flower2,
    title: "Autoconhecimento e Desenvolvimento Pessoal",
    description: "Jornada de descoberta pessoal para compreender sua história, seus valores e construir novos caminhos de vida.",
    color: "bg-mint/20",
  },
];

const ServicesSection = ({ onScheduleClick }: ServicesSectionProps) => {
  return (
    <section id="servicos" className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-mint-light/30 to-background overflow-hidden">
      <AnimatedLeaves />
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Serviços</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Em que posso te <span className="text-primary">ajudar</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Disponibilizo diferentes formas de atendimento psicológico, organizadas para atender às suas 
            necessidades de forma ética, responsável e personalizada. O processo terapêutico é conduzido 
            com base teórica sólida e foco na promoção do bem-estar emocional, da autonomia e da construção 
            de novos sentidos para a sua vida.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card h-full">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-16">
          <div className="inline-block p-8 bg-card rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Pronta para começar sua jornada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Dê o primeiro passo rumo ao seu bem-estar. Estou aqui para te acolher.
            </p>
            <Button 
              size="lg" 
              onClick={onScheduleClick}
              className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Agendar minha consulta
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
