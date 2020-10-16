const ClienteModel=require('../models/cliente');
const bcrypt = require("bcryptjs");




const ClienteController = {
    async registro(req, res) {
        let bodyData = req.body;
        //REGEX Email valido
        let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
        //REGEX Pass entre 8 y 10 caracteres con Mayusculas, minúsculas y caracter especial
        let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

        //Comprobación requerimientos REGEX de Password y email
        if(!regExEmail.test(bodyData.email)){
            res.send({
                message: "El email introducido no es válido"
            });
            return;
        }
    
        if(!regExPassword.test(bodyData.password)){
            res.send({
                message: "El password introducido no es válido"
            });
            return;
        }
        //Encriptado Password
        let hashPass = await bcrypt.hash(bodyData.password, 10);

        try{
            const cliente = await ClienteModel({
                nombre: bodyData.nombre,
                apellidos: bodyData.apellidos,
                email: bodyData.email,
                password: hashPass,
                telefono: bodyData.telefono
            }).save();
            res.status(201).send(cliente);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the client'
            })
        }
    },
    async login(req, res) {
        let clienteEncontrado = await ClienteModel.findOne({
            email: req.body.email
        });
        
        if(!clienteEncontrado){
            res.send({
                message: "No existe el usuario"
            })
        }else{
    
            let passwordOk = await bcrypt.compare(req.body.password, clienteEncontrado.password);
    
            if(!passwordOk){
                res.send({
                    message: "Credenciales incorrectas"
                })
            }else{
                clienteEncontrado.token = clienteEncontrado._id;
                await clienteEncontrado.save();
                res.send({
                    nombre: clienteEncontrado.nombre,
                    email: clienteEncontrado.email
                })
            }
            
        }

    },
    async logout (req,res){
        try {
             const cliente = {email:req.body.email};
             const clienteLogout = {token:null};
             await ClienteModel.findOneAndUpdate (cliente,clienteLogout);
             res.status(201).send(cliente);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to logout the client'
            })
            
        }
    }

}



module.exports = ClienteController;

