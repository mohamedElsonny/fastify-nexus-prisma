import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from '@nexus/schema'

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.body()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.post()
    t.crud.posts({
      filtering: true,
      ordering: true,
      pagination: true
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.deleteOnePost()
    t.crud.createOnePost({
      alias: 'addPost'
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Post],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
