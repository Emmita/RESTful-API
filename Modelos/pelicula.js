var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
	titulo: String, 
	clasificación: String, 
	version: String,
	dia: String, 
	horario: String, 
	cine: String,
	sala: String,
	precio: {precioMasterPass: String, Adulto: String, MayorSesenta: String, Menor: String}
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
