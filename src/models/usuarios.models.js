import  Sequelize  from "sequelize";
import {sequelize} from "../database/database"

const Usuario=sequelize.define('usuarios',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_usuario:{
        type:Sequelize.STRING(30)
    },
    apellido_usuario:{
        type:Sequelize.STRING(30)
    },
    correo_usuario:{
        type:Sequelize.TEXT
    },
    celular_usuario:{
        type:Sequelize.STRING(10)
    },
    rol_usuario:{
        type:Sequelize.TEXT
    },
    contraseña_usuario:{
        type:Sequelize.TEXT
    }

});

export default Usuario;