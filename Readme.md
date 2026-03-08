# TwiDIO API

API REST desenvolvida em **Node.js + TypeScript** utilizando
**arquitetura em camadas (Controller → Service → Repository)** e **Test
Driven Development (TDD)**.

Este projeto foi desenvolvido como parte de um desafio da **Digital
Innovation One (DIO)** com o objetivo de praticar testes unitários e
boas práticas de desenvolvimento backend.

------------------------------------------------------------------------

# Tecnologias utilizadas

-   Node.js
-   TypeScript
-   Express
-   TypeORM
-   SQLite
-   Jest
-   Swagger
-   TDD (Test Driven Development)

------------------------------------------------------------------------

# Arquitetura do projeto

Estrutura principal:

    src
     ├── controllers
     ├── services
     ├── repositories
     ├── entities
     ├── database
     ├── routes.ts
     ├── app.ts
     └── index.ts

### Controllers

Responsáveis por receber e responder requisições HTTP.

### Services

Contêm as regras de negócio da aplicação.

### Repositories

Responsáveis pela comunicação com o banco de dados.

### Entities

Definem os modelos de dados utilizados pelo TypeORM.

------------------------------------------------------------------------

# Instalação do projeto

Clone o repositório:

    git clone https://github.com/SEU-USUARIO/twidio.git

Entre na pasta:

    cd twidio

Instale as dependências:

    npm install

------------------------------------------------------------------------

# Executar o projeto

Compile o TypeScript:

    npx tsc

Inicie o servidor:

    node build/index.js

A API será executada em:

    http://localhost:5001

------------------------------------------------------------------------

# Documentação Swagger

Acesse:

    http://localhost:5001/doc

------------------------------------------------------------------------

# Endpoints da API

## Criar Post

POST

    /v1/posts

Body:

``` json
{
  "author": "Gio",
  "content": "Meu primeiro post"
}
```

Exemplo curl:

    curl -X POST http://localhost:5001/v1/posts -H "Content-Type: application/json" -d '{
      "author": "Gio",
      "content": "Meu primeiro post"
    }'

------------------------------------------------------------------------

## Listar todos os posts

GET

    /v1/posts

Exemplo:

    curl http://localhost:5001/v1/posts

------------------------------------------------------------------------

## Buscar posts por autor

GET

    /v1/posts/author/:author

Exemplo:

    curl http://localhost:5001/v1/posts/author/Gio

Resposta:

``` json
[
  {
    "post_id": "uuid",
    "author": "Gio",
    "content": "Meu primeiro post"
  }
]
```

------------------------------------------------------------------------

## Deletar post

DELETE

    /v1/posts/:post_id

Exemplo:

    curl -X DELETE http://localhost:5001/v1/posts/uuid

Resposta esperada:

    204 No Content

------------------------------------------------------------------------

# Executar testes

    npm test

------------------------------------------------------------------------

# Melhorias implementadas

-   Criação de posts
-   Busca por autor
-   Exclusão de posts
-   Arquitetura em camadas
-   Testes unitários com Jest
-   Documentação com Swagger

------------------------------------------------------------------------

# Autora

Projeto desenvolvido por **Giovanna Fernandes**
