import Usuario from '../models/usuarios.models'

export async function getUsuarios(req,res){
    try{
    const usuarios =await Usuario.findAll();
    res.json({
        data:usuarios
    });
    }catch(e){
        console.log(e)
    }
}

export async function getOneUsuario(req,res){
    const {id} = req.params
    try{
    const usuario=await Usuario.findOne({
        where:{
            id
        }
    })
    res.json({
        data:usuario
    })
    }catch(e){
        console.log(e)
    }

}

export async function deleteUsuario(req,res){
    const {id} = req.params
    try {
        const deleteRowCount= await Usuario.destroy({
            where:{
                id
            }
        })
        res.json({
            message:'Usuario eliminado correctamente.'
        })

    } catch (e) {
        console.log(e)
    }

}

export async function updateUsuario(req,res){
    try{
        const {id} = req.params
    const {
        nombre_usuario,
        apellido_usuario,
        correo_usuario,
        celular_usuario        
    }=req.body


    const usuarios = await Usuario.update({
        nombre_usuario,
        apellido_usuario,
        correo_usuario,
        celular_usuario
    },{
        where:{ 
            id
        }
    })
    res.json({
        message:'Datos actualizados correctamente'
    })
    

    }catch(e){
        console.log(e)
    }
}


