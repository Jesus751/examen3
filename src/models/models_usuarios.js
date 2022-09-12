const mongose =  require('mongoose');
const Schema =  mongose.Schema;


const SchemaUsuario =  Schema({ 
    nombre:{
        type: String,
    }, 
    user:{
        type: String
    },
    password:{ 
        type: String
    },
    tipo:{
        type: String
    },
    activo:{
        type: Boolean,
    },
    session:{
        type:Boolean
    }
});

const Usuario = mongose.model('usuario',SchemaUsuario);


module.exports=Usuario;