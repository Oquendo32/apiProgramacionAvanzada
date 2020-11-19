//Express
const express = require('express');
const app = express();
//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Mongoose
const mongoose = require('mongoose');
//Controlador
app.use(require('./controladorReserva'));
//Mongo
mongoose.connect('mongodb://localhost:27017/bdreserva', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Conecxiones BD
mongoose.connection
  .once('open', () => console.log("Se ha establecido conexion con Mongo "))
  .on('error', (error) => console.log(error));
//Puerto de enlace
app.listen(3000, () => {
  console.log("El localhost:3000 esta habilitado ");
});