const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema
    // GraphQLID, 
    // GraphQLInt,
    // GraphQLList,
    // GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        id: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})