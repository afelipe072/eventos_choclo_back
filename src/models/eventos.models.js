import  Sequelize  from "sequelize";
import {sequelize} from '../database/database'
import Usuario from "./usuarios.models";
import Compra from "./compra.models";


const Evento=sequelize.define('eventos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_evento:{
        type:Sequelize.STRING(30),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    fecha_evento:{
        type:Sequelize.DATEONLY,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    hora_evento:{
        type:Sequelize.TIME,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    url_imagen:{
        type:Sequelize.TEXT,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    disponibilidad:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    aforo_evento:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    precio_entrada:{
        type:Sequelize.DOUBLE
    }

})

//Evento.sync({ force: true });



export default Evento
   