# Pipedrive Bling Integration
<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
    <img src="https://img.shields.io/github/languages/top/lucas-felinto/pipedrive-bling-integration"/>
    <img src="https://img.shields.io/node/v/nodemon"/>
    <img src="https://img.shields.io/github/last-commit/lucas-felinto/pipedrive-bling-integration"/>
  </a>
</p>

---
## Sumário
<h4 align="center">
  <a href="#sobre-o-projeto">Sobre</a>&nbsp;|&nbsp;
  <a href="#requisitos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#instruções">Instruções</a>&nbsp;|&nbsp;
  <a href="#iniciando-a-integração">Integração</a>&nbsp;|&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;|&nbsp;
  <a href="#tecnologias-usadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#license">License</a>
</h4>

## Sobre o projeto
O projeto tem como objetivo integrar as plataformas [Bling](https://www.bling.com.br/home) e [Pipedrive](https://www.pipedrive.com/pt) através de um API RESTFul, salvando Negócios Ganhos (Won Deals) da plataforma Pipedrive como Pedidos (Orders) na plataforma Bling, além de salvar essas informações em uma collection do MongoDB.
## Requisitos

- [Node v10+](https://nodejs.org/en/docs/) ou [Docker](https://docs.docker.com/)/[Docker-Compose](https://docs.docker.com/compose/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/en/docs/)
- API KEY nas plataformas [Bling](https://www.bling.com.br/home) e [Pipedrive](https://www.pipedrive.com/pt)

## Instruções

```bash
# Clone o repositório
git clone https://github.com/lucas-felinto/pipedrive-bling-integration.git

# Instale as dependências
npm install

# Crie um arquivo .env e modifique as variaveis de ambiente
touch "DB_STRING=
PIPEDRIVE_API_KEY=
BLING_API_KEY=" >> .env
# ou
cp .env.example .env
nano .env

# Inicie no modo Desenvolvimento
npm run dev

# Inicie no modo Produção
npm start

# Iniciando com Docker
docker build -t seunome/seuapp .

docker run -d -p 3030:3030 --name seuapp

# Iniciando com Docker-Compose
docker-compose up
```

## Iniciando a Integração
:arrow_right_hook: GET `/integration` 
- Iniciará a integração salvando todos os negócios ganhos na plataforma Pipedrive na plataforma Bling como pedido, além de salvar na collection "Deals" e retornando os pedidos para o usuário com o status 200.

## Endpoints
:arrow_right_hook: GET `/deals` 
- Retorna todos os deals realizados
- Preview: 
```json
[
  {
    "_id": "603396f6d73d01411cd965f4",
    "title": "Negócio LinkApi",
    "organization": "Negócio LinkApi",
    "volumes": [
      {
        "_id": "603396f6d73d01411cd965f5",
        "service": "SEDEX - CONTRATO",
        "tracking": "RX32084021"
      }
    ],
    "value": 10000,
    "__v": 0
  },
  {
    "_id": "603396f6d73d01411cd965f7",
    "title": "Negócio Organização Teste",
    "organization": "Negócio Organização Teste",
    "volumes": [
      {
        "_id": "603396f6d73d01411cd965f8",
        "service": "SEDEX - CONTRATO",
        "tracking": "RX32084021"
      }
    ],
    "value": 500,
    "__v": 0
  }
]
```

:arrow_right_hook: GET `/total-deals` 
- Retorna o valor total somado dos deals na última data de integração
- Preview: 
```json
[
  {
    "_id": "603396f6d73d01411cd965fa",
    "total_value": 10500,
    "date": "2021-02-22T11:35:18.955Z",
    "__v": 0
  }
]
```
:arrow_right_hook: GET `/pipedrive-deals` 
- Retorna todos os negócios ganhos na Pipedrive

## Tecnologias Usadas

- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/pt-br/)
- [MongoDB](https://docs.mongodb.com/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/compose-file/)
## License 

This project is under MIT license. See the documentation [LICENSE](LICENSE) for details.