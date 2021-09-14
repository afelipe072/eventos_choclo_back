import Usuario from '../models/usuarios.models'

export async function getUsuarios(req,res){
    const usuarios =await Usuario.findAll();
    res.json({
        data:usuarios
    });
}