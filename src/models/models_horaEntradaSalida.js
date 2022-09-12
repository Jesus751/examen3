const mongose =  require('mongoose');
const Schema =  mongose.Schema;


const SchemaEntradaSalida =  Schema({
    user:{
        type:String
    },
    dia:{
        type:String
    },
    hora_entrada:{
        type: String,
    },
    hora_salida:{
        type: String
    },
    activo:{
        type:Boolean
    }
});

const EntradaSalida = mongose.model('entrada_salida',SchemaEntradaSalida);


module.exports=EntradaSalida;