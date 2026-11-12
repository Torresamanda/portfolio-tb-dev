import { getSelectedProjects } from '../../lib/github-projects';
import { ProjectCard } from '../ui/project-card';

export async function Projects() {
  const visibleProjects = await getSelectedProjects();
  const hasExamples = visibleProjects.some((project) => project.fictional);
  return (
    <section id="projetos" className="section container">
      <div className="section-heading chapter-heading">
        <span className="section-number">01 / PROJETOS</span>
        <h2>
          Projetos em destaque<span className="brand-dot">.</span>
        </h2>
        <p>
          {hasExamples
            ? 'Esta seleção inclui conceitos fictícios, identificados nos cartões.'
            : 'Uma seleção de projetos que reúne tecnologia, cuidado com interfaces e soluções para pessoas.'}
        </p>
        <p>
          Minha trajetória com plataformas internas, arquitetura e prototipação inspira a forma como
          penso cada solução.
        </p>
        <span className="chapter-tab" aria-hidden="true">
          01
        </span>
      </div>
      <div className={`project-grid${visibleProjects.length === 2 ? ' project-grid--two' : ''}`}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <a
        className="text-link"
        href="https://github.com/Torresamanda"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conheça meu GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
