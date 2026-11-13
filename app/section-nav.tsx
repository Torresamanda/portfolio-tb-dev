'use client';

import { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'formacao', label: 'Formação' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

export function SectionNav() {
  const [active, setActive] = useState('');
  const clicked = useRef(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (clicked.current) return;
        const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
        const marker = headerHeight + window.innerHeight * 0.25;
        let current = '';
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= marker) current = section.id;
        }
        setActive(current);
      });
    };
    update();
    const resumeTracking = () => {
      clicked.current = false;
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('wheel', resumeTracking, { passive: true });
    window.addEventListener('touchstart', resumeTracking, { passive: true });
    window.addEventListener('pointerdown', resumeTracking, { passive: true });
    window.addEventListener('keydown', resumeTracking);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('wheel', resumeTracking);
      window.removeEventListener('touchstart', resumeTracking);
      window.removeEventListener('pointerdown', resumeTracking);
      window.removeEventListener('keydown', resumeTracking);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav aria-label="Navegação principal">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? 'location' : undefined}
          onClick={() => {
            clicked.current = true;
            setActive(id);
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
