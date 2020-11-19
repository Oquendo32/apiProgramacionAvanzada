//Express
const express = require('express');
const app = express();
//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Modelo
const ReservaModelo = require('./modeloReserva');

//Uso de verbos en la API
//GET
app.get('/reservas/:id', function (req, res) {
  let Id = req.params.id;
  ReservaModelo.findById(Id, (err, resul) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        estado: false
      })
    } else {
      res.json({
        resul: resul
      })
    }
  })
});
//POST
app.post('/reservas', function (req, res) {
  let datos = req.body;
  let reservaPost = new ReservaModelo({
    nombre: datos.nombre,
    apellido: datos.apellido,
    telefono: datos.telefono,
    fechaInicio: datos.fechaInicio,
    fechaFinal: datos.fechaFinal,
    cantidadPersonas: datos.cantidadPersonas,
    tipoPaquete: datos.tipoPaquete
  });
  reservaPost.save((err, resultado) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        estado: false
      })
    } else {
      res.json({
        mensaje: 'Reserva Exitosa'
      })
    }
  })
});
//DELETE
app.delete('/reservas/:id', function (req, res) {
  let deleId = req.params.id;
  ReservaModelo.findByIdAndDelete(deleId, (err, resultado) => {
    if (err) {
      res.status(400).json({
        mensaje: err,
        estado: false
      })
    } else {
      res.json({
        mensaje: 'Reserva Eliminada'
      })
    }
  })
});
//PUT
const underScore = require('underscore')
app.put('/reservas/:id', function (req, res) {
  let datos = req.body;
  let identification = req.params.id;
  let under = underScore.pick(datos, ["nombre", "apellido", "telefono", "fechaInicio", "fechaFinal", "cantidadPersonas", "tipoPaquete"]);
  ReservaModelo.findOneAndUpdate(identification, under, (err, resul) => {
    if (err) {
      res.status(400).json({
        ok: false,
        mensaje: err,
        estado: false
      })
    } else {
      res.json({
        ok: true,
        resul: resul
      })
    }
  });
});
module.exports = app;