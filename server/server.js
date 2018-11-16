const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller')
const config = require('./../config');

const app = express();
app.use(bodyParser.json())

app.get('/api/test', controller.test)






app.listen(config.port, ()=>{
    console.log(`yall hear this port: ${config.port}`)
})