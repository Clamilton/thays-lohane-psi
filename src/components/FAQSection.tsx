import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Qual a duração de cada sessão de terapia?",
    answer:
      "As sessões de terapia costumam ter duração média de 50 minutos. Em alguns casos, esse tempo pode variar um pouco, sendo ajustado conforme as necessidades individuais e o andamento do processo terapêutico.",
  },
  {
    question: "Preciso fazer terapia toda semana?",
    answer:
      "Geralmente, o mais indicado é que as sessões aconteçam uma vez por semana, principalmente no início, pois isso ajuda a dar continuidade ao processo e favorece melhores resultados. Com o tempo, a frequência pode ser ajustada conforme as necessidades e a evolução de cada pessoa.",
  },
  {
    question: "Qual o valor da sessão?",
    answer:
      "De acordo com as orientações do Conselho Federal de Psicologia, os profissionais não podem divulgar valores de atendimento de forma ampla. Por isso, o valor da sessão é informado de forma individual, durante o primeiro contato, para que possamos alinhar todas as informações sobre o acompanhamento psicoterapêutico.",
  },
  {
    question: "Qual a faixa etária que você atende?",
    answer: "Realizo atendimentos psicológicos com adultos, a partir dos 18 anos.",
  },
  {
    question: "Você aceita plano de saúde?",
    answer: "No momento, os atendimentos são realizados apenas de forma particular.",
  },
  {
    question: "Em quanto tempo começo a perceber resultados?",
    answer:
      "Não há um tempo determinado que seja igual para todas as pessoas, já que a psicoterapia é um processo individual. As mudanças dependem das demandas trabalhadas, do envolvimento no acompanhamento e dos objetivos construídos ao longo das sessões. Algumas pessoas percebem mudanças após algumas sessões, enquanto outras podem precisar de mais tempo, podendo levar meses ou anos. Cada processo acontece de maneira única, respeitando o ritmo de cada pessoa.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full">
      <ScrollReveal>
        <p className="text-primary font-medium mb-2">Dúvidas Frequentes</p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
          Perguntas e <span className="text-primary">Respostas</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/60 rounded-2xl px-6 bg-card shadow-sm data-[state=open]:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  );
};

export default FAQSection;
