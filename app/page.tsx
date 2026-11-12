import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { Hero } from '../components/sections/hero';
import { Projects } from '../components/sections/projects';
import { Experience } from '../components/sections/experience';
import { About } from '../components/sections/about';
import { Contact } from '../components/sections/contact';

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
