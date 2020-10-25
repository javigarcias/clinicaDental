const router = require('express').Router();
const ClienteController = require('../controllers/clienteController');


router.post('/registro', ClienteController.registro);
router.post('/login', ClienteController.login);
router.put('/logout/:email', ClienteController.logout);



module.exports = router;