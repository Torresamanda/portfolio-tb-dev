import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amanda Torres | Desenvolvedora Full Stack',
  description:
    'Portfólio de Amanda Torres, desenvolvedora Full Stack com experiência em React, Next.js, Node.js e prototipação de interfaces.',
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
