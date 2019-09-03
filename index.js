const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = new Sequelize('prueba','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = sequelize;

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use(require('./routes/persona'))

app.listen(4000, ()=> {
    console.log('Servidor Corriendo')
})
sequelize.authenticate()
.then(() => {
    console.log('Conectado a la BD')
}).catch(() => {
    console.log('No conectado a la BD')
})