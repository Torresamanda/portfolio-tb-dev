import Image from 'next/image';
import type { Project } from '../../data/portfolio';
import { Tags } from './tags';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card-featured' : ''}`}>
      <div className="project-preview">
        {project.preview ? (
          project.website ? (
            <a
              className="project-preview-link"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir o site de ${project.name}`}
            >
              <Image
                src={project.preview}
                alt={project.previewAlt || `Prévia do projeto ${project.name}`}
                width={800}
                height={500}
              />
            </a>
          ) : (
            <Image
              src={project.preview}
              alt={project.previewAlt || `Prévia do projeto ${project.name}`}
              width={800}
              height={500}
            />
          )
        ) : (
          <div className="preview-placeholder">
            <svg aria-hidden="true" viewBox="0 0 128 90" fill="none" className="preview-art">
              <path d="M17 17h94v60H17z" rx="6" stroke="currentColor" strokeWidth="2" />
              <path
                d="M17 29h94M25 23h2m5 0h2m5 0h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M43 45l-8 7 8 7m42-14 8 7-8 7M70 41l-10 23"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Prévia em breve</span>
          </div>
        )}
      </div>
      <div className="project-badges">
        {project.fictional && <span className="project-label">Projeto fictício</span>}
        {project.featured && <span className="project-status">Destaque</span>}
        {project.status && (
          <span className="project-status">
            {project.status === 'published' ? 'Publicado' : 'Em andamento'}
          </span>
        )}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.contribution && <p className="project-contribution">{project.contribution}</p>}
      <Tags items={project.tags} />
      {(project.website || project.repository) && (
        <div className="project-actions">
          {project.website && (
            <a
              className="project-link"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar site ↗<span className="sr-only"> de {project.name}</span>
            </a>
          )}
          {project.repository && (
            <a
              className="project-link"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório ↗<span className="sr-only"> de {project.name}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
