const router = require('express').Router();
const ClienteController = require('../controllers/clienteController');

router.post('/registro', ClienteController.registro);



module.exports = router;