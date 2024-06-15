# Boilerplate de Next.JS versão 14

<div>
  <a href="https://github.com/Henrique0498/boilerplate_nextjs">
    <image  height="160" width="180" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Logo.svg" align="center"/>
  </a>

  >Esse projeto é um boilerplate de [Next.JS](https://nextjs.org/), um framework de [React](https://pt-br.reactjs.org/), feito na versão 14, com o intuito de facilitar a criação de projetos com as tecnologias mais atuais do mercado, tais como [Styled-components](https://styled-components.com/), [Storybook](https://storybook.js.org/), [TypeScript](https://www.typescriptlang.org/pt/) e [Jest](https://jestjs.io/pt-BR/). A ideia desse boilerplate é gerar um boileplate completo com todas as tecnologias iniciais de um projeto ja configurada, a partir disso a ideia de 3 fontes de CSS nele.
</div>

## Tecnologias usadas nesse projeto

<div>
  <a href="https://www.typescriptlang.org/pt/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/TypeScript.svg" title="Typescript" alt="Typescript"/>
  </a>
  <a href="https://pt-br.reactjs.org/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/React.svg" title="React" alt="React"/>
  </a>
  <a href="https://nextjs.org/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Next.svg" title="Next.js" alt="Next.js"/>
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Jest.svg" title="Jest" alt="Jest"/>
  </a>
  <a href="https://testing-library.com/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Testing%20Libory.svg" title="Testing Libory" alt="Testing Libory"/>
  </a>
  <a href="https://storybook.js.org/docs/react/why-storybook">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Storybook.svg" title="Storybook" alt="Storybook"/>
  </a>
  <a href="https://styled-components.com/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Styled-Components.svg" title="styled-components" alt="styled-components"/>
  </a>
  <a href="https://sass-lang.com/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Sass.svg" title="Sass" alt="Sass"/>
  </a>
  <a href="https://tailwindcss.com/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Tailwind.svg" title="Tailwind" alt="Tailwind"/>
  </a>
  <a href="https://plopjs.com/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Plopjs.svg" title="Plopjs" alt="Plopjs"/>
  </a>
  <a href="https://typicode.github.io/husky/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Husky.svg" title="Husky" alt="Husky"/>
  </a>
  <a href="https://github.com/lint-staged/lint-staged">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Lint-Staged.svg" title="Lint-Staged" alt="Lint-Staged"/>
  </a>
  <a href="https://eslint.org/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Eslint.svg" title="Eslint" alt="Eslint"/>
  </a>
  <a href="https://prettier.io/">
    <img height="40" width="52" src="https://github.com/Henrique0498/Henrique0498/blob/main/img/Prettier.svg" title="Prettier" alt="Prettier"/>
  </a>
</div>

> Para mais informações sobre essas tecnologias, clique nela.

## Iniciar o projeto

#### Npm

```bash
npx create-next-app -e https://github.com/Henrique0498/boilerplate_nextjs
```

#### Yarn

```bash
yarn create next-app -e https://github.com/Henrique0498/boilerplate_nextjs
```

## Comandos

- `dev`: inicia aplicação no [localhost:3000](http://localhost:3000);
- `build`: compila uma build da aplicação para uma versão de produção;
- `start`: inicia a versão de produção que foi feita com o comando `build` no [localhost:3000](http://localhost:3000);
- `generate`: cria components de forma padronizada a partir dos templates que esta na pasta generators;
- `storybook`: inicia o storybook;
- `build-storybook`: compila uma build do storybook em uma versão de produção;
- `test`: executa o jest pra ele validar os testes.
- `test:watch`: executa o jest pra ele ficar monitorando os testes feitos.
- `test:ci`: executa o jest pra rodar todos os testes do sistema.
- `prepare`: executa o husk.
- `lint`: executa o linting integrado do Next.js para verificar e corrigir problemas de formatação e código.

## Retirando partes do projeto

### Styled components

Rode o comando a baixo

```
  npm uninstall styled-components
  # ou
  yarn remove styled-components
```

- No component Titles, existe a utilização de styled component, certifique-se de retiralo;
- No arquivo `next.config.js` remova o trecho `compiler: {    styledComponents: true  },`;
- Na pasta generators, existe a configuração para o styled component ser usado na criação de components futuros, remova o arquivo `styles.ts.hbs` localizada na templates;
- Na pasta generators, no arquivo `plopfile.js` remova o trecho `{ type: 'add', path: '../src/components/{{atomic}}/{{pascalCase name}}/styles.ts', templateFile: 'templates/styles.ts.hbs' },` localizado na linha 28-32;
- Na pasta templates, localidada na pasta generators, existe o arquivo `Component.tsx.hbs`, remova o styled-componets dele;
- Na pasta .jest, existe o arquivo `setup.ts`, remova import do `jest-styled-components`;
- Na pasta types, existe o arquivo `jest-styled-components.d.ts`, remova ele;
- Na pasta .storybook, no arquivo `preview.ts`, remova o GlobalStyles.

### Sass

Rode o comando a baixo

```
  npm uninstall styled-components
  # ou
  yarn remove styled-components
```

- No arquivo layout, existe a utilização de Sass, certifique-se de retiralo;
- No arquivo `next.config.js` remova o trecho `sassOptions: { includePaths: [path.join(__dirname, 'styles')] },`;
- Na pasta generators, existe a configuração para o sass ser usado na criação de components futuros, remova o arquivo `styles.scss.hbs` localizada na templates;
- Na pasta generators, existe a configuração para o styled component ser usado na criação de components futuros, remova o arquivo `styles.ts.hbs` localizada na templates;
- Na pasta generators, no arquivo `plopfile.js` remova o trecho `{ type: 'add', path: '../src/components/{{atomic}}/{{pascalCase name}}/styles.module.scss', templateFile: 'templates/styles.scss.hbs' },` localizado na linha 33-37;
- Na pasta templates, localidada na pasta generators, existe o arquivo `Component.tsx.hbs`, remova o sass dele;
- Na pasta .storybook, no arquivo `preview.ts`, remova o estilo global do sass.

## Publicar na vercel

A maneira mais facil de publicar sua aplicação Next.js é usar a [plataforma vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), a propria criadora do Next.js.

> Para mais detalhes sobre como publicar, consulte a [documentação do Next.js](https://nextjs.org/docs/deployment)

## Mais informações

> Nota: para mais informações, consulte a [documentação oficial](https://nextjs.org/docs) do Next.js
