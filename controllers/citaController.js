const CitaModel =require('../models/cita');
//const ClienteModel =require('../models/cliente');



const CitaController = {
    async nuevacita (req, res) {
        /* let cliente = await ClienteModel.findOne({
            email:req.body.email
        });
        if (!cliente.token){
            res.status(400).send({
                error,
                message: 'Debes logearte primero'
            })
        }else{ */
            try { 
                const cita = await CitaModel({
                    fecha: req.body.fecha,
                    tratamiento: req.body.tratamiento,
                    iduser: req.body.iduser,
                    covid: req.body.covid ,
                    estado: req.body.estado,
                    email: req.body.email
                }).save();
                    res.status(201).send(cita);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the appointment'
            })
        }
    },

    
    async cancelar (req, res){
        try {
            await CitaModel.findByIdAndDelete({
                _id:req.params._id
            });
            res.status(201).send({
                message: `La cita ha sido cancelada exitosamente`
            });         
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to deleted the appointment'
            })
        }
    },
    async ver (req, res){
        try {
            
            const citas = await CitaModel.find({
                iduser: req.params.token
            });
            res.status(201).send({citas});
            
        } catch (error) {
            res.status(500).send({
                error,
                message: 'There was a problem trying to view the appointments'
            })
        }
    }

}

module.exports = CitaController;
