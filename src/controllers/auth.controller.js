import Usuario from "../models/usuarios.models";
import jwt from 'jsonwebtoken'
import { encrypt,compare } from "../helpers/contraseñaBcrypt";


export async function singUp (req,res){    
       try {
           //datos enviados 
        const {nombre_usuario,
            apellido_usuario,
            correo_usuario,
            celular_usuario,
            rol_usuario,
            contraseña_usuario} = req.body

            const contraseñaHash = await encrypt(contraseña_usuario)

        let nuevoUsuario= await Usuario.create({
            nombre_usuario,
            apellido_usuario,
            correo_usuario,
            celular_usuario,
            rol_usuario,
            contraseña_usuario:contraseñaHash
        })
        if(nuevoUsuario){
            res.json({
                message:"El usuario "+nombre_usuario+ " ha sido registrado con exito!"
            })
        }
       } catch (error) {
           console.log(error)           
       }

       
    
}

export async function longIn (req,res){
    try {
        const {correo_usuario,contraseña_usuario}=req.body
        const usuario = await Usuario.findOne({where:{correo_usuario}})
        if(usuario){
            const checkContraseña = await compare(contraseña_usuario,usuario.contraseña_usuario)
            
            if(checkContraseña){
                let token=jwt.sign({id:usuario.id},'api-user',{expiresIn:50000}) // token
                res.json({
                    message:"Bienvenido",
                    data: [usuario.id,
                        usuario.nombre_usuario,
                        usuario.apellido_usuario,
                        usuario.correo_usuario,
                        usuario.celular_usuario,
                        usuario.rol_usuario
                        ],
                    token
                })
            }else{
                res.status(400).json({
                    message:"Contraseña incorrecta"
                })
            }

        }else{
            res.status(400).json({
                message:"El usuario no se encuentra registrado!"
            })
        }  
        
    } catch (error) {
        console.log(error)
    }
}