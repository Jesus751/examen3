const mongose =  require('mongoose');
const Schema =  mongose.Schema;


const SchemaDesarrollador =  Schema({
    user:{
        type: String,
    },
    tipo_desarrollador:{
        type: String
    },
    activo:{
        type: Boolean
    }

});

const Desarrollador = mongose.model('desarrollador', SchemaDesarrollador);


module.exports=Desarrollador;