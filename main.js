//Dependencias
var express = require('express');
var bodyParser = require('body-parser');
var mogoose = require('mongoose');
var características = require('./Rutas/características');

var app = express();


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', características);


//Iniciamos el servidor
var port  = process.env.PORT || 3000;

app.listen(port);
console.log('Server listenign in the port: ' +port);