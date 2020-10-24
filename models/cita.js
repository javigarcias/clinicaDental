const mongoose = require("mongoose");

const UserSchema=mongoose.Schema({
    fecha:{
        type:String,
        required:true
    },
    tratamiento:{
        type:String
    },
    email:{
        type:String
    },
    iduser:{
        type:String
    },
    covid:{
        type:Boolean,
        defoult: false
    },
    estado:{
        type:String,
        defoult: "pendiente"
    }
})

const CitaModel = mongoose.model('cita',UserSchema);

module.exports = CitaModel;