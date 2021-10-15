import  Sequelize  from "sequelize";
import {sequelize} from '../database/database'

const Compra=sequelize.define('compras',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId:{
        type:Sequelize.INTEGER        
    },
    eventoId:{
        type:Sequelize.INTEGER        
    },
    cantidad_boletas:{
        type:Sequelize.INTEGER        
    },
    valor_boletas:{
        type:Sequelize.DOUBLE       
    }
    
})

//Compra.sync({ force: true });


export default Compra
   