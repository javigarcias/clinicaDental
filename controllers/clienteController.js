const ClienteModel=require('../models/cliente');


const ClienteController = {
    async registro(req, res) {
        try{
            const cliente = await ClienteModel.create(req.body);
            res.status(201).send(cliente);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the client'
            })
        }
    }

}



module.exports = ClienteController;

