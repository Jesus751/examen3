const mongose =  require('mongoose');
const Schema =  mongose.Schema;


const SchemaTipo =  Schema({
    user:{
        type: String,
    },
    tipo:{
        type: String
    },
    activo:{
        type:Boolean
    }
});

const Tipo = mongose.model('tipo',SchemaTipo);


module.exports=Tipo;