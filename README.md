# GraphQL Fastify Example With Nexus and Prisma2

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/mohamedElsonny/fastify-nexus-prisma
```

Install npm dependencies:

```
cd fastify-nexus-prisma
yarn install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
yarn run dev
```

Navigate to [http://localhost:4000/playground](http://localhost:4000/playground) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).