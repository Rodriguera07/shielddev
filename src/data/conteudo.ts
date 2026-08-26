// Conteúdo central do portfólio — edite aqui para atualizar textos e links.

export const BRAND = "ShieldDev";

export const CONTATOS = {
  whatsapp: "https://wa.me/5513988286748",
  whatsappLabel: "(13) 98828-6748",
  github: "https://github.com/Rodriguera07",
  githubUser: "Rodriguera07",
  linkedin: "https://www.linkedin.com/in/rodrigo-batista-dantas-a74868348",
  email: "mailto:Rodrigodantas0495@hotmail.com",
  emailLabel: "Rodrigodantas0495@hotmail.com",
};

export const NAV = [
  { href: "#about", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Projetos" },
  { href: "#services", label: "Serviços" },
  { href: "#contact", label: "Contato", cta: true },
];

export const CHIPS = [
  "Sites & landing pages",
  "Portfólios",
  "Sistemas sob medida",
  "UI/UX & performance",
];

export const STATS = [
  { v: "20+", l: "Projetos entregues" },
  { v: "100%", l: "Feitos sob medida" },
  { v: "98", l: "Score de performance" },
  { v: "24h", l: "Tempo de resposta" },
];

// Palavras que giram no hero, reforçando o que é entregue
export const HERO_ROLES = [
  "sites institucionais.",
  "landing pages que convertem.",
  "sistemas sob medida.",
  "PWAs e painéis internos.",
];

export type StackGrupo = {
  grupo: string;
  itens: string[];
};

export const STACK: StackGrupo[] = [
  {
    grupo: "Frontend",
    itens: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    grupo: "Backend",
    itens: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    grupo: "Ferramentas",
    itens: ["Git & GitHub", "Vite", "Figma", "Vercel"],
  },
];

export type Projeto = {
  idx: string;
  categoria: string;
  titulo: string;
  descricao: string;
  tags: string[];
  href: string;
  hrefLabel: string;
  external?: boolean;
  // capa: imagem real OU mockup em gradiente
  imagem?: string;
  gradiente?: string;
  mock?: "browser" | "phone";
};

export const PROJETOS: Projeto[] = [
  {
    idx: "01",
    categoria: "Website",
    titulo: "Erivan Estacionamento",
    descricao:
      "Site institucional para estacionamento de praia em Bertioga — hero com vídeo de drone, reserva via WhatsApp, galeria, preços e localização.",
    tags: ["React", "Framer Motion", "Responsivo"],
    href: "https://www.erivanestacionamento.com.br",
    hrefLabel: "Visitar site",
    external: true,
    imagem: "/projetos/erivan.webp",
  },
  {
    idx: "02",
    categoria: "Web + App",
    titulo: "Go Ticket Park",
    descricao:
      "Plataforma de gestão de estacionamento: entradas e saídas, tickets, cobranças e faturamento em tempo real, com relatórios para impressão em bobina.",
    tags: ["React", "Node.js", "PWA"],
    href: "https://ticketpark-app.vercel.app/auth",
    hrefLabel: "Acessar app",
    external: true,
    imagem: "/projetos/go-ticket-park.webp",
  },
  {
    idx: "03",
    categoria: "App",
    titulo: "Quiosque PDV",
    descricao:
      "Ponto de venda para quiosques de praia — comandas, mesas e caixa em tempo real, com interface dark e densa em dados.",
    tags: ["Next.js", "daisyUI", "Tailwind"],
    href: "#",
    hrefLabel: "Em breve",
    gradiente: "linear-gradient(135deg,#1f2937,#0f172a)",
  },
  {
    idx: "04",
    categoria: "Marca + Site",
    titulo: "ShieldDev",
    descricao:
      "Portfólio e identidade da marca — engenharia de software e desenvolvimento web de alto desempenho.",
    tags: ["React", "Tailwind", "UI/UX"],
    href: "#top",
    hrefLabel: "Ver detalhes",
    imagem: "/projetos/shielddev.png",
  },
  {
    idx: "05",
    categoria: "Website",
    titulo: "Wistane Jhone",
    descricao:
      "Site institucional para mentoria e consultoria em investimentos de criptomoedas — metodologia, formatos de mentoria, corretoras recomendadas, depoimentos e FAQ.",
    tags: ["Next.js", "Tailwind", "Responsivo"],
    href: "https://jhoneinvest.vercel.app/",
    hrefLabel: "Visitar site",
    external: true,
    imagem: "/projetos/wistane-jhone.webp",
  },
  {
    idx: "06",
    categoria: "Website",
    titulo: "Felipe Elétrica",
    descricao:
      "Site institucional para eletricista na Baixada Santista — serviços residenciais, comerciais e prediais, painéis (QDC), padrões de entrada, portfólio de obras e contato via WhatsApp.",
    tags: ["React", "Tailwind", "Responsivo"],
    href: "https://felipeeletrica.vercel.app",
    hrefLabel: "Visitar site",
    external: true,
    imagem: "/projetos/felipe-eletrica.png",
  },
];

export type ProcessoEtapa = {
  num: string;
  titulo: string;
  descricao: string;
};

export const PROCESSO: ProcessoEtapa[] = [
  {
    num: "01",
    titulo: "Descoberta",
    descricao:
      "Entendo o seu negócio, objetivos e prazo antes de escrever qualquer linha de código.",
  },
  {
    num: "02",
    titulo: "Design & Protótipo",
    descricao:
      "Estruturo a interface e valido o fluxo com você antes de partir pro desenvolvimento.",
  },
  {
    num: "03",
    titulo: "Desenvolvimento",
    descricao:
      "Código limpo, performático e responsivo — com atualizações frequentes do progresso.",
  },
  {
    num: "04",
    titulo: "Deploy & Suporte",
    descricao:
      "Publicação, testes finais e acompanhamento próximo depois do lançamento.",
  },
];

export const SERVICOS = [
  {
    num: "01",
    titulo: "Desenvolvimento web",
    descricao:
      "Sites e aplicações web rápidos, acessíveis e prontos pra converter e escalar.",
  },
  {
    num: "02",
    titulo: "Portfólios & landing pages",
    descricao:
      "Páginas que apresentam sua marca ou trabalho com visual profissional e impacto.",
  },
  {
    num: "03",
    titulo: "UI/UX design",
    descricao:
      "Interfaces limpas e design system consistente, do protótipo à produção.",
  },
  {
    num: "04",
    titulo: "Sistemas sob medida",
    descricao:
      "Painéis, dashboards e sistemas feitos pra rotina do seu negócio.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "Depende do escopo — uma landing page costuma levar de 1 a 2 semanas; sistemas sob medida variam conforme a complexidade. No orçamento eu já passo um prazo estimado.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Geralmente combinamos uma entrada no início do projeto e o restante na entrega. Pra projetos maiores, dá pra dividir em etapas.",
  },
  {
    q: "Você atende fora de Bertioga-SP?",
    a: "Sim — trabalho remoto, com reuniões por chamada de vídeo e alinhamento constante durante todo o projeto.",
  },
  {
    q: "Depois de pronto, você dá suporte?",
    a: "Sim, ofereço um período de suporte pós-entrega pra ajustes e correções, além de manutenção sob demanda.",
  },
  {
    q: "Você também cuida do design?",
    a: "Sim — faço desde a interface até a implementação. Se você já tem um design pronto (Figma, por exemplo), também posso só desenvolver.",
  },
];
