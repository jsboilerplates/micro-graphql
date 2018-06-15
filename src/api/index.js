import graphqlHTTP from 'express-graphql'
import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql'
import sampleQueryType from './sample/sample.schema'
import sampleApi from './sample/sample.api'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      samples: {
        type: new GraphQLList(sampleQueryType),
        args: {keyword: {type: GraphQLString}},
        resolve (parent, args) {
          return sampleApi.all(parent, args)
        }
      }
    }
  })
})

export default graphqlHTTP({
  schema: schema,
  graphiql: true
})
