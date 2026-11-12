import { SectionNav } from '../../app/section-nav';
import { ThemeToggle } from '../../app/theme-toggle';

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#inicio">
          <svg
            aria-hidden="true"
            className="book"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 9c-4-3-8-3-12-2v18c4-1 8-1 12 2 4-3 8-3 12-2V7c-4-1-8-1-12 2Zm0 0v18M7 10c3-.5 5 0 7 1M25 10c-3-.5-5 0-7 1" />
          </svg>{' '}
          Amanda Torres<span className="brand-dot">.</span>
        </a>
        <SectionNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
