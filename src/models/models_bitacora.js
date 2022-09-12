const mongose =  require('mongoose');
const Schema =  mongose.Schema;


const SchemaBitacora =  Schema({
    user:{
        type: String,
       // required: true
    },
    bitacora:{
        type: String
    },
    activo:{
        type: Boolean,
       // required: true
    }
 
});

const Bitacora = mongose.model('bitacora', SchemaBitacora);


module.exports=Bitacora;