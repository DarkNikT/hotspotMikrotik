const express = require("express");
const bodyParser = require('body-parser');

const cors = require("cors");
// const mongoose = require("mongoose");
// const database = require("./database");
const morgan = require('morgan');
// const path = require('path');

//CARGA DE VARIABLES DE ENTORNO
const config = require('./config.js');
const port = config.PORT;

//RUTAS

// Ruta de login 
const loginRoute = require("./routes/login.route");


// INICIALIZACION OBJETO DE EXPRESS
const app = express();

// MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(cors());// Actualmente permite la conexión desde cualquier IP


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// serve static public site files
app.use(express.static('public'));

/* Página de ingreso invitados*/
app.post("/", function(req, res) {
//    res.sendfile('public/index.html')
    console.log("mac")
    console.log(req.mac)
});



app.listen(port, function() {
  console.log("Listening on " + port);
});
