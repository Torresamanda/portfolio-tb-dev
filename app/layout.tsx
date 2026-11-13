import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://amanda-torres-portfolio.pages.dev'),
  title: 'Amanda Torres | Desenvolvedora Full Stack',
  description:
    'Portfólio de Amanda Torres, desenvolvedora Full Stack com experiência em React, Next.js, Node.js e prototipação de interfaces.',
  openGraph: {
    title: 'Amanda Torres | Desenvolvedora Full Stack',
    description: 'Conheça minha trajetória e meus projetos em desenvolvimento web.',
    url: '/',
    siteName: 'Portfólio de Amanda Torres',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/preview-social.png',
        width: 1200,
        height: 630,
        alt: 'Portfólio de Amanda Torres, desenvolvedora Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Torres | Desenvolvedora Full Stack',
    description: 'Conheça minha trajetória e meus projetos em desenvolvimento web.',
    images: ['/preview-social.png'],
  },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
