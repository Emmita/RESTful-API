var Report = require('../Modelos/pelicula');
var express = require('express');
var fs = require('fs');

var router = express.Router();

router.route('/caracteristicas/titulo').get(function(req, res){
	res.json({titulo: "Coco"});
});

router.route('/caracteristicas/clasificacion').get(function(req, res){
	res.json({clasificacion: "A"});
});

router.route('/caracteristicas/version').get(function(req, res){
	res.json({version: "Español"});
});

router.route('/caracteristicas/dia').get(function(req, res){
	res.json({dia: "Viernes 27 d eoctubre"});
});

router.route('/caracteristicas/horario').get(function(req, res){
	res.json({horario: "09:30 PM"});
});


module.exports = router; 