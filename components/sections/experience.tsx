import { experience } from '../../data/portfolio';

export function Experience() {
  return (
    <section id="trajetoria" className="section container">
      <div className="section-heading chapter-heading">
        <h2>
          Uma história em construção<span className="brand-dot">.</span>
        </h2>
        <p>Um pouco do caminho que venho percorrendo em tecnologia.</p>
      </div>
      <div className="timeline-paper">
        <span className="timeline-paper-label" aria-hidden="true">
          anotações de percurso
        </span>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.role}-${job.period}`}>
              <div>
                <h3>{job.role}</h3>
                {job.company && <p className="timeline-company">{job.company}</p>}
                <p className="timeline-period">{job.period}</p>
              </div>
              <ul className="timeline-highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <a
        className="text-link"
        href="https://www.linkedin.com/in/torresamandab/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver trajetória no LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
