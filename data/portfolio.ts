export const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Prototipação', 'UI e UX'];
export const education = [
  {
    institution: 'Descomplica Faculdade Digital',
    course: 'Pós-graduação Lato Sensu em Desenvolvimento Full Stack',
    period: 'mai. 2024 — fev. 2025',
    skills: ['Docker', 'AWS'],
  },
  {
    institution: 'UNIASSELVI',
    course: 'Ensino Técnico · Computer Systems Analysis',
    period: 'mai. 2021 — dez. 2023',
    skills: ['Trabalho em equipe', 'Desenvolvimento web'],
  },
];
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

type Experience = {
  role: string;
  company?: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'Technology Specialist',
    company: 'Monks',
    period: 'mar. 2026 — atual',
    highlights: [
      'Definição de padrões de front-end, arquitetura e componentes reutilizáveis para aplicações em Next.js.',
      'Mentoria, revisões de código e apoio à documentação técnica e às decisões de projeto.',
    ],
  },
  {
    role: 'Technology Analyst II',
    company: 'Monks',
    period: 'jan. 2025 — mar. 2026',
    highlights: [
      'Desenvolvimento de plataformas internas com Next.js, da prototipação no Figma à entrega.',
      'Participação em revisões de código e gerenciamento de repositórios, pipelines e deploys na Google Cloud.',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Monks',
    period: 'fev. 2024 — jan. 2025',
    highlights: [
      'Desenvolvimento e sustentação do portal interno e de sistemas com React, Next.js e Node.js.',
      'Criação de extratores para plataformas como Amazon Ads, Google Analytics, Search Console e TikTok.',
    ],
  },
  {
    role: 'Internal Projects Strategist',
    company: 'Media.Monks Brasil · Estágio',
    period: 'jan. 2023 — dez. 2023',
    highlights: [
      'Desenvolvimento e manutenção de site interno com React e de extratores de dados com Node.js.',
      'Uso de GitHub, integração contínua e serviços da Google Cloud no fluxo dos projetos.',
    ],
  },
  {
    role: 'Internal Projects Strategist',
    company: 'Rocky.Monks · Estágio',
    period: 'abr. 2022 — abr. 2023',
    highlights: [
      'Desenvolvimento de interfaces internas em React e de extratores para Amazon Ads e Search Console.',
      'Organização das demandas no Jira e contato com Firebase, Firestore, BigQuery e Cloud Functions.',
    ],
  },
];
