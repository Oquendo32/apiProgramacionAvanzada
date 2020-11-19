
const mongoose = require('mongoose');

let esquema = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'Apellido es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'Telefono es obligatorio']
    },
    fechaInicio: {
        type: String,
        required: [true, 'Fecha de inicio es obligatoria']
    },
    fechaFinal: {
        type: String,
        required: [true, 'Fecha de final es obligatoria']
    },
    cantidadPersonas: {
        type: String,
        required: [true, 'Ingrese la cantidad de personas']
    },
    tipoPaquete: {
        type: String,
        required: [true, 'Defina el tipo de paquete']
    }
});
module.exports = mongoose.model('modeloReserva', esquema);