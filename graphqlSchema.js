const {graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt} = require('graphql');

// const Sequelize = require('sequelize');

// global.db = new Sequelize('athene', 'athene', 'athene', {
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: '3306',
//   timezone: '+08:00',
//   logging: undefined,
//   pool: {
//     maxConnections: 10
//   }
// });

// // const graphqlQuery = require('./graphqlQuery');
const dbSchema = require('./dbSchema');


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'config',
    fields: {
      info: {
        type: GraphQLObjectType,
        description: '名称',
        args: {
          query: {type: GraphQLObjectType}
        },
        async resolve(root, params, options) {
          const data = await dbSchema.find({where: params.query, raw: true});
          return data;
        }
      },
      id: {
        type: GraphQLInt,
        description: 'id',
        async resolve() {
          return 1;
        }
      },
    }
  })
});




// const query = '{ hello }'
const query = '{name, id}'
graphql(schema, query).then(result => {
  console.log(result);
})


module.exports = schema;
