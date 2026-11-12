import { Tags } from '../ui/tags';

export function About() {
  return (
    <section id="sobre" className="section container">
      <div className="about">
        <div className="about-opening">
          <span className="section-number">03 / SOBRE MIM</span>
          <h2>
            Além do código<span className="brand-dot">.</span>
          </h2>
          <p className="about-lead">Cada solução começa com uma boa pergunta.</p>
          <div className="about-note">
            <span className="about-note-label">anotações de trabalho</span>
            <p>Curiosidade para entender. Cuidado para criar. Troca para evoluir.</p>
          </div>
          <span className="about-page-number" aria-hidden="true">
            — 01
          </span>
        </div>
        <div className="about-story">
          <span className="about-bookmark" aria-hidden="true">
            ✦
          </span>
          <p>
            Sou Amanda, desenvolvedora Full Stack. Gosto de transformar ideias em aplicações úteis e
            bem estruturadas, com atenção à experiência de quem está do outro lado da tela.
          </p>
          <p>
            Minha trajetória reúne desenvolvimento de interfaces e soluções internas, trabalho em
            equipe, mentoria e a busca constante por aprender e compartilhar conhecimento.
          </p>
          <div className="about-principles">
            <div>
              <strong>01. Pensar</strong>
              <span>Prototipação e experiência de uso</span>
            </div>
            <div>
              <strong>02. Construir</strong>
              <span>Interfaces e aplicações web</span>
            </div>
            <div>
              <strong>03. Compartilhar</strong>
              <span>Colaboração e mentoria</span>
            </div>
          </div>
          <Tags
            items={['Front-end', 'Back-end', 'Cloud', 'Mentoria', 'Prototipação', 'UI', 'UX']}
          />
          <span className="about-page-number" aria-hidden="true">
            02 —
          </span>
        </div>
      </div>
    </section>
  );
}
