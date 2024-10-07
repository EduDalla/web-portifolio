# Meu Portfólio

Este portfólio foi desenvolvido em **React** e contém todos os tópicos solicitados no CP (Conteúdo Programático). O projeto utiliza o `react-router-dom` para navegação entre as páginas e inclui diversas seções que apresentam informações sobre mim, meus projetos e como entrar em contato.

```markdown
# Meu Projeto React

Este é um projeto React utilizando o React Router para navegação entre diferentes páginas.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

- **Node.js**: [Download Node.js](https://nodejs.org)
- **npm**: O npm é instalado automaticamente com o Node.js
```

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/EduDalla/web-portifolio.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd web-portifolio.
   ```

3. Instale as dependências necessárias:

   ```bash
   npm i
   ```

## Como executar

Para rodar o projeto localmente, execute o seguinte comando:

```bash
npm run dev
```

Isso abrirá o projeto em `http://localhost:3000/`.

## Estrutura do Projeto

- **App.jsx**: O componente principal que envolve todas as rotas.
- **index.js**: O arquivo de entrada onde o React e o React Router são configurados.
- **index.css**: Arquivo de estilo global do projeto.
- **/pages**: Contém as diferentes páginas do site (Home, Sobre, Projetos, Contato, e PageNotFound).

### Rotas Configuradas

As seguintes rotas estão configuradas usando o `createBrowserRouter` do `react-router-dom`:

- `/` - Página inicial que carrega o componente `Home`.
- `/sobre` - Página "Sobre" que carrega o componente `Sobre`.
- `/projetos` - Página de projetos que carrega o componente `Projetos`.
- `/contato` - Página de contato que carrega o componente `Contato`.
- `*` - Rota coringa que exibe a página de erro `PageNotFound` para rotas não encontradas.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Visualiza a aplicação após o build.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **React Router**: Biblioteca de roteamento para React.
- **Vite**: Ferramenta para empacotamento de projetos de front-end.
- **useState**: Hook do React utilizado para gerenciar o estado nos componentes funcionais.
- **PropTypes**: Biblioteca para validar as propriedades dos componentes React e garantir que os dados corretos sejam passados.
- **NavLink**: Componente do `react-router-dom` usado para navegação com estilos ativos entre as páginas.
