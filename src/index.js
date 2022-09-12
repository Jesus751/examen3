const expres = require('express');
const mongoose =  require('mongoose');
require('dotenv').config();


const rutaBitacora =  require('../src/routes/routes_bitacora');
const rupaDesarrollador= require('../src/routes/routes_desarrollador');
const rutaHoraES =  require('../src/routes/routes_horaES');
const rutaTipo =  require('../src/routes/routes_tipo');
const rutaUsuario = require('../src/routes/routes_usuarios');

const app = expres();
const port = 3000; 
///midelwares
app.use(expres.json());
///routes
app.use('/api',rutaBitacora);
app.use('/api',rupaDesarrollador);
app.use('/api',rutaHoraES);
app.use('/api',rutaTipo);
app.use('/api',rutaUsuario);


mongoose.connect(process.env.MONGODB).then(() => {
    console.log('la conexion fue exitosa');
}).catch((e) =>{console.log(e)});

app.listen(port,() => console.log(`Servidor corriendo en el puerto: ${port}`));