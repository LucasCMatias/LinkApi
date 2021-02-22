## Requisitos

- [Node v10+](https://nodejs.org/en/docs/) ou [Docker](https://docs.docker.com/)/[Docker-Compose](https://docs.docker.com/compose/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/en/docs/).
- API KEY nas plataformas [Bling](https://www.bling.com.br/home) e [Pipedrive]()

## Instruções

```bash
# Clone o repositório
git clone https://github.com/lucas-felinto/pipedrive-bling-integration

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