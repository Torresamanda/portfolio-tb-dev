# Portfólio de Amanda Torres

## Tecnologias

- **Aplicação:** Next.js, React e TypeScript.
- **Estilos:** Tailwind CSS e folhas CSS organizadas por responsabilidade.
- **Qualidade:** Prettier, Husky e lint-staged.
- **Distribuição:** exportação estática gerada pelo Next.js.

## Como rodar

### Pré-requisitos

- Node.js **22.22.1 ou mais recente**, para atender à versão instalada do lint-staged.
- npm.

### Instalação

No terminal, entre na pasta do projeto e instale as dependências registradas no arquivo de bloqueio:

```bash
npm ci
```

Se a pasta ainda não for um repositório Git, a aplicação funciona normalmente, mas o Husky só poderá instalar os ganchos depois que o projeto estiver em um repositório. Nesse caso, execute `npm run prepare` depois de configurar o Git.

### Desenvolvimento

```bash
npm run dev
```

Abra no navegador o endereço exibido no terminal, normalmente [http://localhost:3000](http://localhost:3000). Se a porta estiver ocupada, o Next.js pode indicar outra. As alterações nos arquivos são refletidas durante o desenvolvimento.

### Verificação e formatação

```bash
npm run format:check
npm run build
```

O primeiro comando verifica a formatação sem alterar arquivos. O segundo compila a aplicação, verifica os tipos e gera a versão estática. Para aplicar a formatação aos arquivos do projeto, execute:

```bash
npm run format
```

### Versão de produção

O comando `npm run build` gera os arquivos estáticos na pasta `out/`. Essa pasta pode ser servida por um servidor de arquivos estáticos ou publicada em uma hospedagem compatível com sites estáticos. Como o projeto usa `output: 'export'`, `npm run start` não é o comando adequado para servir essa exportação.

Não há arquivo `.env` necessário para executar a versão atual. A publicação, o domínio definitivo e os metadados de compartilhamento ainda precisam ser definidos.

## Organização

```text
app/                  página principal, estrutura global, navegação e tema
components/layout/    cabeçalho e rodapé
components/sections/  seções da página
components/ui/        componentes reutilizáveis, como cartões e tags
data/                 dados de projetos, tecnologias e trajetória
public/               imagem da autora e outros arquivos públicos
styles/               estilos globais, das seções e responsivos
.husky/               gancho de pré-commit
GUIA.md               orientações de atualização e itens pendentes
```


## Contribuindo

O projeto adota **Conventional Commits**, no formato `tipo(escopo): descrição`. Por exemplo:

```text
feat(projects): add project repository link
fix(navigation): correct active section
docs: update setup instructions
```
