const CitaModel =require('../models/cita');
const ClienteModel =require('../models/cliente');



const CitaController = {
    async nuevacita (req, res) {
        let cliente = await ClienteModel.findOne({
            email:req.body.email
        });
        console.log(cliente);

        if (!cliente.token){
            res.status(400).send({
                error,
                message: 'Debes logearte primero'
            })
        }else{
            try {
                const cita = await CitaModel({
                    fecha: req.body.fecha,
                    tratamiento: req.body.tratamiento,
                    iduser: cliente.token,
                    covid: req.body.covid ,
                    estado: req.body.estado
                }).save();
                    res.status(201).send(cita);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the appointment'
            })
        }
    }

    
    }
}

module.exports = CitaController;
