export const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Prototipação', 'UI e UX'];
export type Project = {
  name: string;
  description: string;
  tags: string[];
  preview?: string;
  previewAlt?: string;
  website?: string;
  repository?: string;
  status?: 'published' | 'in-progress';
  contribution?: string;
  featured?: boolean;
  fictional?: boolean;
};

export type SelectedProject = {
  repositoryName: string;
  name: string;
  description: string;
  tags: string[];
  status: 'published' | 'in-progress';
  website?: string;
  preview?: string;
  previewAlt?: string;
  contribution?: string;
  featured?: boolean;
};

export const selectedProjects: SelectedProject[] = [
  {
    repositoryName: 'investigation-game',
    name: 'Cidade das Brumas',
    description:
      'Jogo investigativo por turnos no navegador, com locais, cartas e um diário de descobertas.',
    tags: ['TypeScript'],
    status: 'in-progress',
    website: 'https://game.arquivoslimiar.workers.dev/',
    preview: '/cidade-das-brumas.png',
    previewAlt: 'Mapa da cidade cercada por névoa, arte do jogo Cidade das Brumas',
  },
  {
    repositoryName: 'kryptomepg-app',
    name: 'Kryptomepg App',
    description: 'Aplicação em desenvolvimento. Mais detalhes serão adicionados em breve.',
    tags: ['TypeScript'],
    status: 'in-progress',
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
