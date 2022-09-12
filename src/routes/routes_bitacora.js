const expres = require('express');
const route =  expres.Router();
const Bitacora =  require('../models/models_bitacora');
const Usuarios =  require('../models/models_usuarios');




route.post('/addBitacora/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);

        switch (acceso.tipo) {
            case "desarrollador":
                try {

                    const guardarBt = async (req, res) =>{
                        const bitacora =  await Bitacora({
                            "user": acceso.user,
                            "bitacora": "prueba",
                            "activo": true,
                        })
                        bitacora.save().then((data) => {
                                console.log("Bitacora guardada");
                                res.json(bitacora)
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarBt();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                guardarBt();
                break;
            default:
                console.log("Permiso denegado");
                break;
        }
    } catch (error) {
        console.log(error);
    }
});


route.get('/listarBitacora', async(req, res) => {

    try {
        const usuario =  await   Usuarios.find();
        console.log(usuario);
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        
    }
});

route.get('/listarBitacoraId/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const usuario = await Usuarios.findById(id);
        console.log(usuario);
        res.json(usuario);     
    } catch (error) {
        console.log(error);  
    }
});


route.put('editBitacora/:id', async() =>{
    try {
        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);
        switch (acceso.tipo) {
            case "desarrollador":
                try {
                    const guardarET = async (req, res) =>{
                        const bitacora =  await Bitacora.findOneAndUpdate({
                            "user": acceso.user,
                            "bitacora": "prueba",
                            "activo": true,
                        })
                        bitacora.save().then((data) => {
                                console.log("Bitacora  editada");
                                res.json(bitacora)
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarET();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                const guardarT  = async(req, res) =>{
                    const bitacora =  await Bitacora.findOneAndUpdate({
                        "user": acceso.user,
                        "bitacora": "prueba",
                        "activo": true,
                    })
                    bitacora.save().then((data) => {
                       
                        console.log("Bitacora editada");
                    }).catch((e) =>{console.log(e)});
                }
                guardarT();
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
                const bitacora =  await Bitacora.findByIdAndUpdate(id,{"activo": false})
                console.log("Bitacora Eliminada");
            }
            dele();
        }else{
            console.log(error);

        }
    } catch (error) {
        console.log(error);
    }
    
});
