const {GraphQLList, GraphQLString} = require('graphql')

const dbSchema = require('./dbSchema');

const graphqlSchema = require('./graphqlSchema');

const config = {
  type: new GraphQLList(graphqlSchema),
  async resolve (root, params, options) {
    let config = await dbSchema.find({});
    return config;
  }
}

module.exports = config;
