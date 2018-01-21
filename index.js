const express = require('express');
const app = express();
let Sequelize = require('sequelize');

global.db = new Sequelize('athene', 'athene', 'athene', {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: '3306',
  timezone: '+08:00',
  logging: undefined,
  pool: {
    maxConnections: 10
  }
});

const router = require('./router');
app.use(require('body-parser').text({type: 'application/graphql'}))

app.listen(8899, (err) => {
  if (err) {
    console.log(err)
  }else {
    console.log('graphql server start')
  }
})

router(app);