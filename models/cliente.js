const mongoose = require("mongoose");

const UserSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    direccion:{
        type:String
    },
    email:{
        type:String,
        required:[true, "Email requerido"],
        unique:true,
    },
    telefono:{
        type:Number
    },
    edad:{
        type:Number
    },
    password:{
        type:String,
        required:true,
        minlength: [4, "Debes introducir mínimo 4 caracteres"]
    },
})

const ClienteModel = mongoose.model('cliente',UserSchema);

module.exports = ClienteModel;