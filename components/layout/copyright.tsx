'use client';

import { useEffect, useState } from 'react';

export function Copyright() {
  const [year, setYear] = useState(() => new Date().getUTCFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <span className="footer-copyright">© {year} Amanda Torres. Todos os direitos reservados.</span>
  );
}
