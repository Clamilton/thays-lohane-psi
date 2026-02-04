

## Site Portfólio - Psicóloga Thays Lohane

### 🎨 Design & Visual

**Paleta de Cores (Tons de Verde)**
- Verde sage suave como cor principal
- Verde menta para destaques
- Tons de branco e off-white para fundos
- Detalhes em verde escuro para textos

**Estilo Visual**
- Design clean e minimalista
- Tipografia moderna sem serifa
- Espaçamentos generosos para transmitir calma
- Cantos arredondados e elementos orgânicos

---

### 📄 Estrutura do Site

**1. Hero Section (Topo)**
- Headline acolhedora de boas-vindas
- Espaço para foto profissional da psicóloga
- Texto breve sobre a missão
- Botão destacado "Agendar Consulta"

**2. Seção Sobre Mim**
- Foto da profissional
- Descrição da experiência e formação
- Abordagem terapêutica
- CRP e credenciais

**3. Seção Serviços**
- Cards visuais para cada tipo de terapia:
  - Terapia Individual
  - Ansiedade e Estresse
  - Depressão
  - Terapia de Casal
  - Autoestima e Autoconhecimento

**4. Rodapé**
- Link para Instagram (@thayslohanepsi)
- Informações de contato
- Texto sobre atendimento online/presencial

---

### ⚙️ Funcionalidades Técnicas

**Banner de Cookies (LGPD)**
- Banner discreto na parte inferior
- Opções de aceitar/recusar
- Preferências salvas em localStorage

**Formulário de Agendamento Inteligente**
- Modal elegante com campos:
  - Nome completo
  - Email ou Telefone
- Design acolhedor e confiável

**Integração Supabase - Tabela `leads`**
Dados capturados:
- Nome do usuário
- Email/Telefone
- Data e hora do acesso
- User Agent (navegador/dispositivo)
- IP e localização aproximada (via API ipapi.co)
- Origem/referrer
- ID único do lead

**Fluxo de Redirecionamento**
1. Usuário preenche o formulário
2. Sistema captura todos os dados + IP/localização
3. Salva tudo no Supabase (tabela `leads`)
4. Após confirmação de sucesso → redireciona para WhatsApp
5. Link: `https://wa.me/5563992774658?text=Olá,%20quero%20marcar%20minha%20consulta`

---

### 📱 Responsividade

- Layout adaptativo para mobile, tablet e desktop
- Menu otimizado para dispositivos móveis
- Botões e formulários touch-friendly
- Imagens otimizadas para carregamento rápido

