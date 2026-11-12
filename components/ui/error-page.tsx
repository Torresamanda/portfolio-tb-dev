import Link from 'next/link';
import { ThemeToggle } from '../../app/theme-toggle';

type ErrorPageProps = {
  label: string;
  title: string;
  description: string;
  detail: string;
};

export function ErrorPage({ label, title, description, detail }: ErrorPageProps) {
  return (
    <div className="error-page">
      <header className="error-header container">
        <Link className="brand" href="/">
          Amanda Torres<span className="brand-dot">.</span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="error-main container" id="conteudo">
        <div className="error-sheet">
          <span className="error-bookmark" aria-hidden="true">
            ✦
          </span>
          <span className="section-number">{label}</span>
          <div className="error-layout">
            <div>
              <h1>
                {title}
                <span className="brand-dot">.</span>
              </h1>
              <p className="error-description">{description}</p>
              <p className="error-detail">{detail}</p>
              <Link className="button primary" href="/">
                Voltar ao início <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="error-illustration" aria-hidden="true">
              <span className="error-illustration-label">anotações de viagem</span>
              <svg viewBox="0 0 200 140" fill="none">
                <path
                  d="M100 35c-24-15-48-16-73-9v76c25-7 49-6 73 9 24-15 48-16 73-9V26c-25-7-49-6-73 9Zm0 0v76M38 39c18-4 34-2 51 6m-51 8c18-4 34-2 51 6m73-20c-18-4-34-2-51 6m51 8c-18-4-34-2-51 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>sempre há uma próxima página</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
