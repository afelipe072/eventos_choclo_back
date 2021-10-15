import Evento from "../models/eventos.models";

export async function getEventos(req,res){
    try {
        const eventos=await Evento.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        res.json({
            data:eventos
        })
    } catch (e) {
        console.log(e)
    }
}

export async function createEvento(req,res){
    try {
        const {
            nombre_evento,
            fecha_evento,
            hora_evento,
            url_imagen,
            disponibilidad,
            aforo_evento,
            precio_entrada
        }= req.body

        const evento = await Evento.create({
            nombre_evento,
            fecha_evento,
            hora_evento,
            url_imagen,
            disponibilidad,
            aforo_evento,
            precio_entrada
        })
        if(evento){
        res.json({
            message:"El evento "+nombre_evento+ " ha sido creado con exito!"
        })
    }
    } catch (e) {
        console.log(e)
        
    }
}

export async function updateEvento(req,res){
    try{
        const {id} = req.params
    const {
        nombre_evento,
        fecha_evento,
        hora_evento,
        url_imagen,
        disponibilidad,
        aforo_evento,
        precio_entrada               
    }=req.body

    const eventos = await Evento.update({
        nombre_evento,
        fecha_evento,
        hora_evento,
        url_imagen,
        disponibilidad,
        aforo_evento,
        precio_entrada
    },{
        where:{ 
            id
        }
    })
    
    res.json({
        message:'Evento actualizado correctamente'+eventos
    })

    }catch(e){
        console.log(e)
    }
}

export async function getOneEvento(req,res){
    try {
        const {id}=req.params
        const evento = await Evento.findOne({
            where:{
                id
            }
        })
        if(evento){
            res.json({
                data:evento
            })
        }else{
            res.status(404).json({
                message:'Evento NO encontrado'
            })
        }
        
    } catch (e) {
        console.log(e)
    }
    
}

export async function deleteEvento(req,res){
    try {
        const {id}=req.params

        const deleteRowCount=await Evento.destroy({
            where:{
                id
            }
        })
        res.json({
            message:'Evento eliminado correctamente.'
        })
        
    } catch (e) {
        console.log(e)
    }
}