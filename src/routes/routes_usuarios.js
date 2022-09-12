const expres = require('express');
const route =  expres.Router();

const Usuarios =  require('../models/models_usuarios');

const Tipo = require('../models/models_tipo'); 



route.post('/addUsuario/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);

        switch (acceso.tipo) {
            case "admin":
                try {

                    const guardarAD = async (req, res) =>{
                        const usuario =  await Usuarios({
                            "nombre": "rtyui",
                            "user": "oj", 
                            "password": "432",
                            "tipo":"cliente",
                            "activo": true,
                            "session":false
                        })
                            usuario.save().then((data) => {
                                const {user, tipo} = data;
                                const guardarTipo= async(req, res) => {
                                    const consul =  await Tipo({"user": user, "tipo":tipo})
                                    consul.save();
                                }
                                guardarTipo();
                                console.log("Usuario guardado");
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarAD();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                const guardarClie  = async(req, res) =>{
                    const user =  await Usuarios({
                        "nombre": "dfgjsdf",
                        "user": "rtyui", 
                        "password": "oiuytr",
                        "tipo":"desarrollador",
                        "activo": true,
                        "session":false
                    })
                    user.save().then((data) => {
                        const {user, tipo} = data;
                        const guardarTip= async(req, res) => {
                            const consul =  await Tipo({"user": user, "tipo":tipo})
                            consul.save();
                        }
                        guardarTip();
                        console.log("Usuario guardado");
                    }).catch((e) =>{console.log(e)});

                }
                guardarClie();
                break;
            default:
                console.log("Permiso denegado");
                break;
        }
    } catch (error) {
        console.log(error);
    }
});


route.get('/listarUsuarios', async(req, res) => {

    try {
        const usuario =  await   Usuarios.find();
        console.log(usuario);
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        
    }
});

route.get('/listarUsuariosId/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const usuario = await Usuarios.findById(id);
        console.log(usuario);
        res.json(usuario);     
    } catch (error) {
        console.log(error);  
    }
});


route.put('edit/:id', async() =>{
    try {
        const id = req.params.id;
        const acceso =  await Usuarios.findById(id);
        switch (acceso.tipo) {
            case "admin":
                try {
                    const guardarET = async (req, res) =>{
                        const usuario =  await Usuarios.findOneAndUpdate({
                            "nombre": "ooooo",
                            "user": "ooo", 
                            "password": "77777",
                            "tipo":"programador",
                            "activo": true,
                            "session":false
                        })
                            usuario.save().then((data) => {
                                const {user, tipo} = data;
                                const editt= async(req, res) => {
                                    const consul =  await Tipo.findOneAndUpdate({"user": user, "tipo":tipo})
                                    consul.save();
                                }
                                editt();
                                console.log("Usuario editado");
                            }).catch((e) =>{console.log(e)});
                    }
                    guardarET();
                                  
                } catch (error) {
                    console.log(error);       
                }
                break;

            case "cliente":
                const guardarT  = async(req, res) =>{
                    const user =  await Usuarios({
                        "nombre": "dfgjsdf",
                        "user": "rtyui", 
                        "password": "oiuytr",
                        "tipo":"desarrollador",
                        "activo": true,
                        "session":false
                    })
                    user.save().then((data) => {
                        const {user, tipo} = data;
                        const guardarTi= async(req, res) => {
                            const consul =  await Tipo({"user": user, "tipo":tipo})
                            consul.save();
                        }
                        guardarTi();
                        console.log("Usuario editado");
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
                const usuario =  await Usuarios.findByIdAndUpdate(id,{"activo": false})
                console.log("Usuario eliminado");
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