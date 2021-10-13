import Compra from '../models/compra.models'
import Evento from '../models/eventos.models'

export async function getCompras(req,res){
    try {
        const compras=await Compra.findAll()
        res.json({
            data:compras            
        })
    } catch (e) {
        console.log(e)
    }
}


export async function getOneCompra(req,res){
    try {
        const {id}=req.params
        const compra= await Compra.findOne({
            where:{
                id
            }
        })       
            res.json({
                data:compra
            })
        
    } catch (e) {
        console.log(e)
    }
}

export async function createCompra(req,res){
    try {
        const {
            usuarioId,
            eventoId,
            cantidad_boletas,
            valor_boletas
        }=req.body

        const evento = await Evento.findOne({
            where:{
                id:eventoId
            }
        })
        
        if(evento.disponibilidad>0 && cantidad_boletas<=evento.disponibilidad){
            const compra=await Compra.create({
                usuarioId,
                eventoId,
                cantidad_boletas,
                valor_boletas:cantidad_boletas*evento.precio_entrada
            })

            if(compra){
                res.json({
                    message:"La compra ha sido realizada con exito!"
                })

                const disponible=evento.disponibilidad - cantidad_boletas
    
                const eventoAct = await Evento.update({
                    disponibilidad:disponible
                },{
                    where:{
                        id:eventoId
                    }
                })
    
            }

            
        }else{
            res.status(406).json({
                message:'No hay entradas disponibles'
            })
        }

    } catch (e) {
        console.log(e)
    }
}