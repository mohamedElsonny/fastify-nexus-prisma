import Fastify, { FastifyInstance } from 'fastify'
import GQL from 'fastify-gql'
import { schema } from './schema'
import { createContext } from './context'

const app: FastifyInstance = Fastify()

app.register(GQL, {
  schema,
  context: createContext,
  path: '/',
  graphiql: 'playground'
})

export default app