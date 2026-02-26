import { Award, BookOpen, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-mint/20 rounded-3xl" />

              <div className="relative bg-gradient-to-br from-sage-light to-mint-light rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Foto profissional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CRP 23/XXXXX</p>
                    <p className="text-sm text-muted-foreground">Registro ativo</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-8">
            <ScrollReveal direction="right">
              <p className="text-primary font-medium mb-2">Sobre Mim</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Prazer, sou a <span className="text-primary">Thays Lohane</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou psicóloga clínica formada com especialização em Terapia Cognitivo-Comportamental (TCC), apaixonada
                  por ajudar pessoas a encontrarem seu equilíbrio emocional e viverem de forma mais plena e consciente.
                </p>
                <p>
                  Minha abordagem é baseada no acolhimento, na escuta empática e no uso de técnicas cientificamente
                  comprovadas para promover mudanças reais na vida dos meus pacientes. Acredito que cada pessoa é única
                  e merece um atendimento personalizado às suas necessidades.
                </p>
                <p>
                  Atendendo online, sempre buscando criar um espaço seguro onde você possa se expressar livremente e
                  trabalhar suas questões emocionais com o suporte necessário.
                </p>
              </div>
            </ScrollReveal>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: BookOpen, title: "Formação Sólida", desc: "Graduação em Psicologia e pós-graduação em TCC" },
                { icon: Heart, title: "Atendimento Humanizado", desc: "Escuta empática e acolhimento genuíno" },
                { icon: Users, title: "Experiência Comprovada", desc: "Mais de 500 pacientes atendidos" },
                { icon: Award, title: "Atualização Constante", desc: "Cursos e supervisões regulares" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="flex items-start gap-4 p-4 bg-accent/50 rounded-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
