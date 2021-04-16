// Archivo que contiene las rutas relacionadas con la tabla Jugador.

const router = require('express').Router();
const jugadorController = require('../controllers/jugador');

router.post('/insertarJugador', jugadorController.postInsertarJugador);

router.get('/registro', jugadorController.getMostrarFormulario);

router.get('/confirmacion', jugadorController.getConfirmacion);

module.exports = router;


