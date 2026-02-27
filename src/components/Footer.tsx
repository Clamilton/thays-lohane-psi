import { Instagram, Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold">Thays Lohane</h3>
            <p className="text-white/70 leading-relaxed">
              Psicóloga clínica dedicada a promover saúde mental e bem-estar através de um atendimento humanizado e
              acolhedor.
            </p>
            <p className="text-white/50 text-sm">CRP 23/002275</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thayslohanepsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Somente atendimento Online</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(63) 99277-4658</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>thayslohane.psi@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Redes Sociais</h4>
            <p className="text-white/70">Me siga no Instagram para dicas de saúde mental e bem-estar.</p>
            <a
              href="https://www.instagram.com/thayslohanepsi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@thayslohanepsi</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {currentYear} Thays Lohane - Psicóloga. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Criado e Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/mouracloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline"
            >
              Moura Cloud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
