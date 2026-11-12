import type { Metadata } from 'next';
import { ErrorPage } from '../../components/ui/error-page';

export const metadata: Metadata = {
  title: 'Página indisponível | Amanda Torres',
  robots: { index: false },
};

export default function Unavailable() {
  return (
    <ErrorPage
      label="UMA PAUSA NO CAMINHO"
      title="Voltamos em breve"
      description="O portfólio pode estar passando por uma pausa temporária."
      detail="Tente novamente mais tarde ou volte ao início."
    />
  );
}
