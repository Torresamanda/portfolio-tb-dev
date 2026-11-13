import { education } from '../../data/portfolio';

export function Education() {
  return (
    <section id="formacao" className="section container">
      <div className="section-heading chapter-heading">
        <h2>
          Formação acadêmica<span className="brand-dot">.</span>
        </h2>
        <p>Aprendizado que acompanha minha trajetória em tecnologia.</p>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.institution} className="education-card">
            <span className="education-bookmark" aria-hidden="true">
              ✦
            </span>
            <p className="education-period">{item.period}</p>
            <h3>{item.institution}</h3>
            <p className="education-course">{item.course}</p>
            <ul className="tags" aria-label={`Competências de ${item.institution}`}>
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
