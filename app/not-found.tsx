import { ErrorPage } from '../components/ui/error-page';

export default function NotFound() {
  return (
    <ErrorPage
      label="404 / PÁGINA NÃO ENCONTRADA"
      title="Esta página se perdeu"
      description="Parece que este endereço não faz parte do meu portfólio."
      detail="Que tal voltar ao início e escolher outro capítulo?"
    />
  );
}
