export function Contact() {
  return (
    <section id="contato" className="section container contact">
      <div className="contact-card">
        <span className="contact-stamp" aria-hidden="true">
          ✳
        </span>
        <span className="section-number">04 / CONTATO</span>
        <h2>
          Vamos conversar<span className="brand-dot">?</span>
        </h2>
        <p>Tem uma oportunidade, um projeto ou uma ideia? Vou gostar de ouvir você.</p>
        <p className="contact-note">Toda boa história começa com uma conversa.</p>
        <div className="contact-links">
          <a className="button primary" href="mailto:amandakaia@hotmail.com">
            Enviar e-mail ↗
          </a>
          <a
            className="button secondary"
            href="https://www.linkedin.com/in/torresamandab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="button secondary"
            href="https://github.com/Torresamanda"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
