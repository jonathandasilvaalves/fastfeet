# Projeto 🚀 Fast Feet(Aplicação mobile, web, back-end)

Fast Feet é um projeto desenvolvido utilizando React, React Native e Node, para auxiliar no gerenciamento das entregas e controle das encomendas.

## Getting Started

`git@github.com:jonathandasilvaalves/fastfeet.git`

### Backend
1 - Necessário criar os bancos Redis e Postgres, podendo utilizar o docker
Ex: docker run --name redisfast -p 6379:6379 -d -t redis:alpine
2 - Dentro do projeto execute `yarn` ou `npm install` para instalar as dependências
3 - Execute `yarn dev` para iniciar o projeto.

### Front
1 - Dentro da pasta front execute `yarn` ou `npm install` para instalar as dependências
2 - Execute `yarn start`

### Mobile
1 - Dentro da pasta mobile execute `yarn` ou `npm install` para instalar as dependências
2 - Execute `npm run android` ou `yarn android` com seu emulador já preparado.
3 - Execute `npm run start` ou `yarn start`

OBS: O Ip informado no arquivo services/api.js na varivel baseURL pode se alterar.

<div style='display: flex; flex-direction: column'>
<strong>Exemplos</strong>
<br />
<img src='maskPage.jpeg' style='height: 80; width: 50;'>

<br />
<img src='login.jpeg'>
<br />
</div>

<i>Obs.:</i> Projeto mobile desenvolvido apenas para a plataforma <strong>Android</strong>.
## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
