import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

export default new GraphQLObjectType({
  name: 'Sample',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}
  })
})
