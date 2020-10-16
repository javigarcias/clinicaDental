const router = require('express').Router();
const CitaController = require('../controllers/citaController');


router.post('/nuevacita', CitaController.nuevacita);


module.exports = router;