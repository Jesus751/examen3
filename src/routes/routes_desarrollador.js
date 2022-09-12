const expres = require('express');
const route =  expres.Router();


const Desarrollador =  require('../models/models_desarrollador');




route.post('/addDesarrollador/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);

        switch (acceso.tipo) {
            case "admin":
                try {

                    const guardarD = async (req, res) =>{
                        const desarrollador =  await Desarrollador({
                            "user": acceso.user,
                            "tipo_desarrollador": "frontend",
                            "activo": acceso.activo,
                        })
                        desarrollador.save().then((data) => {
                                console.log("desarrollador guardado");
                                res.json(desarrollador)
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


route.get('/listarDesarrolladores', async(req, res) => {

    try {
        const desarrolla =  await   Desarrollador.find();
        console.log(desarrolla);
        res.json(desarrolla);
        
    } catch (error) {
        console.log(error);
        
    }
});

route.get('/listarDesarrodorllaId/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const desarrolla = await Desarrollador.findById(id);
        console.log(desarrolla);
        res.json(desarrolla);     
    } catch (error) {
        console.log(error);  
    }
});


route.put('editDesarrollador/:id', async() =>{
    try {
        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);
        switch (acceso.tipo) {
            case "admin":
                try {
                    const guardarDs = async (req, res) =>{
                        const desarrollador =  await Desarrollador({
                            "user": acceso.user,
                            "tipo_desarrollador": "frontend",
                            "activo": acceso.activo,
                        })
                        desarrollador.save().then((data) => {
                                console.log("DEsarrollador  editado");
                                res.json(desarrollador)
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarDs();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                const guardarDes  = async(req, res) =>{
                    const desarrollador =  await Desarrollador({
                        "user": acceso.user,
                        "tipo_desarrollador": "frontend",
                        "activo": acceso.activo,
                    })
                    desarrollador.save().then((data) => {
                       
                        console.log("Desarrollador editado");
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
                const desarrollador =  await Desarrollador.findByIdAndUpdate(id,{"activo": false})
                console.log("Desarrollador Eliminado");
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