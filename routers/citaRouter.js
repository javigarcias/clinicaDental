const router = require('express').Router();
const CitaController = require('../controllers/citaController');
const { route } = require('./clienteRouter');


router.post('/nuevacita', CitaController.nuevacita);
router.delete('/cancelar/:_id', CitaController.cancelar);
router.get('/ver/:token', CitaController.ver);


module.exports = router;