const schema = require('./graphqlSchema');
const {graphql} = require('graphql');

// const graphqlQuery = require('./graphqlQuery');
module.exports = (app) => {
  app.post('/graphql', async (req, res) => {
    // console.log(req.body);
    const result = await graphql(schema, req.body);
    res.send(JSON.stringify(result, undefined, 2));
  })
}



