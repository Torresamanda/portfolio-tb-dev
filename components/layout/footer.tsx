import { Copyright } from './copyright';

export function Footer() {
  return (
    <footer className="container footer">
      <span>
        <strong>Amanda Torres.</strong>{' '}
        <span className="footer-role">Desenvolvedora Full Stack</span>
      </span>
      <Copyright />
      <a href="#inicio">Voltar ao topo ↑</a>
    </footer>
  );
}
