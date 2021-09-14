import jwt from 'jsonwebtoken'
import Usuario from '../models/usuarios.models'
import '@babel/polyfill'

export const verificar = async (req,res,next)=>{
    const token = req.headers["x-acces-token"]

    if(!token) return res.status(403).json({message:"Token no proporcionado"})

    const decode= jwt.verify(token,'api-user')
    req.userId=decode.id
    
    const usuario = await Usuario.findOne({where:{id:req.userId}})
    if(!usuario)return res.status(403).json({message:"Usuario no econtrado"})
    

    next()
}

export const isAdmin = async (req,res,next)=>{
   const usuario = await Usuario.findOne({where:{id:req.userId}})
   const rol = usuario.rol_usuario

   if(rol==='Admin'){
    next()
   }else{
       return res.status(403).json({message:"Requiere un rol de administrador"})
   }

   
   
}