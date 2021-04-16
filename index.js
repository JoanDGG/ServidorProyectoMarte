// Archivo índice del servidor para el juego Proyecto Marte.
// Autores: 


// Importando la biblioteca para crear servidores.
const express = require('express');

// Importando biblioteca para manejar json.
const bodyParser = require('body-parser');

// importando el objeto de conexión a la base de datos.
const sequelize = require('./util/database');

// Importar las rutas relacionadas con la tabla Jugador.
const jugadorRoutes = require('./routes/jugador');

// Importar biblioteca para manejar rutas de archivos.
const path = require('path');

// Crear el servidor.
const app = express();

// Middleware permite que se reciban archivos json por medio de get. 
app.use(bodyParser.json());

// middleware para que se use /usuario como ruta principal para los metodos de alumnoRoutes.
app.use('/jugador', jugadorRoutes);

// Middleware permite que el folder public sea público. 
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({force: true})
    .then(resultado => {
        console.log("Conexión exitosa de sequelize.")
        // Atender peticiones en el puerto 8080.
        app.listen(8080, ()=>{
            console.log('Servidor en línea en el puerto 8080')
        });
    })
    .then(error => console.log(error))