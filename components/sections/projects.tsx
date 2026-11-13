import { getSelectedProjects } from '../../lib/github-projects';
import { ProjectCard } from '../ui/project-card';

export async function Projects() {
  const { projects: visibleProjects, usedFallback } = await getSelectedProjects();
  const hasExamples = visibleProjects.some((project) => project.fictional);
  return (
    <section id="projetos" className="section container">
      <div className="section-heading chapter-heading">
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
      </div>
      {usedFallback && (
        <div className="project-notice" role="status">
          <strong>Algumas informações não puderam ser atualizadas.</strong>
          <p>
            Na última atualização do portfólio, o GitHub estava indisponível. Os dados salvos
            continuam disponíveis abaixo.
          </p>
        </div>
      )}
      {visibleProjects.length === 0 && (
        <div className="project-notice">
          <strong>Os projetos estão sendo preparados.</strong>
          <p>Enquanto isso, você pode conhecer meus repositórios no GitHub.</p>
        </div>
      )}
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
