const expres = require('express');
const route =  expres.Router();


const HoraES =  require('../models/models_horaEntradaSalida');


route.post('/addHora/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);

        switch (acceso.tipo) {
            case "admin":
                try {

                    const guardarD = async (req, res) =>{
                        const hora =  await HoraES({
                            "user": acceso.user,
                            "dia": "Lunes",
                            "hora_entrada": "1:45",
                            "hora_salida": "3:56",
                            "activo": acceso.activo,
                        })
                        hora.save().then((data) => {
                                console.log("hora guardada");
                                res.json(hora)
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarD();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                guardarD();
                break;
            default:
                console.log("Permiso denegado");
                break;
        }
    } catch (error) {
        console.log(error);
    }
});


route.get('/listarHora', async(req, res) => {

    try {
        const hora =  await   HoraES.find();
        console.log(hora);
        res.json(hora);
        
    } catch (error) {
        console.log(error);
        
    }
});

route.get('/listarHoraId/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const hora = await HoraES.findById(id);
        console.log(hora);
        res.json(hora);     
    } catch (error) {
        console.log(error);  
    }
});


route.put('editDesarrollador/:id', async() =>{
    try {
        const id = req.params.id;
        const acceso =  await HoraES.findById(id);
        switch (acceso.tipo) {
            case "admin":
                try {
                    const guardarDs = async (req, res) =>{
                        const hora =  await HoraES({
                            "user": acceso.user,
                            "dia": "Lunes",
                            "hora_entrada": "1:45",
                            "hora_salida": "3:56",
                            "activo": acceso.activo,
                        })
                        hora.save().then((data) => {
                                console.log("Hora  editada");
                                res.json(hora)
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarDs();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                const guardarDes  = async(req, res) =>{
                    const hora =  await HoraES({
                        "user": acceso.user,
                        "dia": "Lunes",
                        "hora_entrada": "1:45",
                        "hora_salida": "3:56",
                        "activo": acceso.activo,
                    })
                    hora.save().then((data) => {
                       
                        console.log("Hora editada");
                    }).catch((e) =>{console.log(e)});
                }
                guardarDes();
                break;
            default:
                console.log("Permiso denegado");
                break;
        }
    } catch (error) {
        console.log(error);
    }
});

route.put('/delete/:id',async (req, res) =>{
    try {
        const id = req.params.id;
        const acceso =  await Usuarios.findById(id)

        if(acceso.tipo == "admin"){
            const dele = async (req, res) =>{
                const hora =  await HoraES.findByIdAndUpdate(id,{"activo": false})
                console.log("Hora Eliminada");
            }
            dele();
        }else{
            console.log(error);

        }
    } catch (error) {
        console.log(error);
    }
    
});





module.exports= route;