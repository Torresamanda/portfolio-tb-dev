import Image from 'next/image';
import { Tags } from '../ui/tags';
import { skills } from '../../data/portfolio';

export function Hero() {
  return (
    <section id="inicio" className="container hero">
      <div className="hero-copy">
        <span className="chapter-kicker">portfólio / capítulo de abertura</span>
        <span className="eyebrow">Desenvolvedora Full Stack</span>
        <h1>
          Amanda Torres<span className="brand-dot">.</span>
        </h1>
        <p className="hero-phrase">Do primeiro rascunho ao código.</p>
        <p className="intro">
          Desenvolvo aplicações web com React, Next.js e Node.js, da prototipação à entrega. Uno
          experiência em front-end, atenção à usabilidade e código bem estruturado para criar
          soluções que fazem sentido para as pessoas.
        </p>
        <Tags items={skills} />
        <a className="button primary" href="#projetos">
          Ver projetos <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="portrait-wrap">
        <span className="portrait-tape" aria-hidden="true">
          ♡
        </span>
        <span className="portrait-tabs" aria-hidden="true">
          <span>♡</span>
          <span>✦</span>
        </span>
        <Image
          src="/amanda.jpeg"
          alt="Ilustração de Amanda sorrindo, com cabelos cacheados escuros, óculos e blusa lilás"
          width={480}
          height={480}
          priority
          className="portrait"
        />
        <span className="portrait-signature" aria-hidden="true">
          ♡
        </span>
      </div>
    </section>
  );
}
