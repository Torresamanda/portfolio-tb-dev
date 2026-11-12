export const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Prototipação', 'UI e UX'];
export type Project = {
  name: string;
  description: string;
  tags: string[];
  preview?: string;
  website?: string;
  repository?: string;
  status?: 'published' | 'in-progress';
  contribution?: string;
  featured?: boolean;
  fictional?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Ler Mais',
    description:
      'Conceito de plataforma para leitores que desejam organizar livros, registrar resenhas e acompanhar metas de leitura em um só lugar.',
    contribution: 'Proposta: prototipação da interface e desenvolvimento da aplicação.',
    tags: ['React', 'Next.js', 'TypeScript'],
    fictional: true,
  },
  {
    name: 'Caderno Criativo',
    description:
      'Conceito de espaço para pessoas criativas reunirem ideias e projetos, com cadernos, tags e favoritos para facilitar a organização.',
    contribution: 'Proposta: criação da experiência e desenvolvimento da aplicação.',
    tags: ['React', 'Node.js', 'TypeScript'],
    fictional: true,
  },
  {
    name: 'Rotina em Foco',
    description:
      'Conceito de ferramenta para pessoas organizarem tarefas e acompanharem prioridades em uma rotina de trabalho.',
    contribution: 'Proposta: prototipação e desenvolvimento da interface e da aplicação.',
    tags: ['Next.js', 'TypeScript', 'Node.js'],
    fictional: true,
  },
  {
    name: 'Painel de Ideias',
    description:
      'Conceito de painel para equipes reunirem sugestões e acompanharem ideias em diferentes etapas.',
    contribution: 'Proposta: desenho da experiência e criação de componentes reutilizáveis.',
    tags: ['React', 'TypeScript', 'UI e UX'],
    fictional: true,
  },
];

export const experience = [
  {
    role: 'Technology Specialist',
    period: 'mar. 2026 — atual',
    text: 'Referência técnica em front-end: desenvolve aplicações com Next.js, define padrões e componentes reutilizáveis, revisa código e apoia a equipe com mentoria.',
  },
  {
    role: 'Technology Analyst II',
    period: 'jan. 2025 — mar. 2026',
    text: 'Desenvolvimento de plataformas internas com Next.js, da prototipação no Figma à entrega, com participação em arquitetura, revisão de código e deploys na Google Cloud.',
  },
  {
    role: 'Technology Analyst',
    period: 'fev. 2024 — jan. 2025',
    text: 'Desenvolvimento e manutenção de aplicações com React, Next.js e Node.js, além de extratores de dados para plataformas de anúncios e analytics.',
  },
  {
    role: 'Internal Projects Strategist',
    period: undefined,
    text: 'Desenvolvimento de aplicações internas com React e extratores com Node.js para Amazon Ads e Search Console, usando serviços da Google Cloud.',
  },
];
