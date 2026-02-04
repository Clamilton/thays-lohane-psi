import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, HeartHandshake, Sparkles, Users, Flower2 } from "lucide-react";

interface ServicesSectionProps {
  onScheduleClick: () => void;
}

const services = [
  {
    icon: Brain,
    title: "Terapia Individual",
    description: "Sessões personalizadas focadas nas suas necessidades específicas, promovendo autoconhecimento e desenvolvimento pessoal.",
    color: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Ansiedade e Estresse",
    description: "Técnicas comprovadas para gerenciar sintomas de ansiedade, ataques de pânico e estresse do dia a dia.",
    color: "bg-mint/20",
  },
  {
    icon: Sparkles,
    title: "Depressão",
    description: "Acompanhamento acolhedor para superar momentos difíceis, recuperar a energia vital e reencontrar o prazer de viver.",
    color: "bg-sage-light",
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    description: "Sessões para melhorar a comunicação, resolver conflitos e fortalecer o vínculo entre parceiros.",
    color: "bg-accent",
  },
  {
    icon: Flower2,
    title: "Autoestima",
    description: "Trabalho focado em desenvolver amor próprio, autoconfiança e uma relação mais saudável consigo mesma.",
    color: "bg-primary/10",
  },
  {
    icon: HeartHandshake,
    title: "Autoconhecimento",
    description: "Jornada de descoberta pessoal para entender seus padrões, valores e encontrar seu propósito de vida.",
    color: "bg-mint/20",
  },
];

const ServicesSection = ({ onScheduleClick }: ServicesSectionProps) => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-to-b from-background via-mint-light/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2">Serviços</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Como posso te <span className="text-primary">ajudar</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofereço diferentes modalidades de atendimento psicológico, sempre com foco no seu 
            bem-estar e na construção de uma vida mais equilibrada e significativa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
