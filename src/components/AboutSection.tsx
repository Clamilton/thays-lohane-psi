import { Award, BookOpen, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import thaysFoto from "@/assets/thays-foto.jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-mint/20 rounded-3xl" />

              <div className="relative bg-gradient-to-br from-sage-light to-mint-light rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                <img 
                  src={thaysFoto} 
                  alt="Thays Lohane - Psicóloga Clínica" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>

              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">CRP 23/002275</p>
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
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed md:leading-8">
                <p>
                  Sou psicóloga com mais de 5 anos de experiência no atendimento de adultos, auxiliando no desenvolvimento do autoconhecimento, na compreensão das emoções e no enfrentamento de desafios pessoais.
                </p>
                <p>
                  Atuo a partir da abordagem Histórico-Cultural, que considera a história de vida, as relações e o contexto social na construção de quem somos. Realizo atendimentos online, oferecendo um espaço de escuta ética, acolhedora e acessível, independentemente da localização.
                </p>
                <p>
                  Possuo pós-graduação em Avaliação Psicológica, o que contribui para uma compreensão técnica e aprofundada das demandas apresentadas no processo terapêutico. Meu compromisso é proporcionar um espaço seguro de diálogo e construção conjunta, respeitando a singularidade e o tempo de cada pessoa.
                </p>
              </div>
            </ScrollReveal>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: BookOpen, title: "Formação Sólida", desc: "Graduação em Psicologia e pós-graduação em Avaliação Psicológica" },
                { icon: Heart, title: "Atendimento Humanizado", desc: "Escuta empática e acolhimento genuíno" },
                { icon: Users, title: "Prática Clínica Consolidada", desc: "Atuação contínua no cuidado à saúde mental" },
                { icon: Award, title: "Atualização Constante", desc: "Cursos e supervisões regulares" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="flex items-start gap-4 p-4 bg-accent/50 rounded-2xl h-full">
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
