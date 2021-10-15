import  Sequelize  from "sequelize";
import {sequelize} from "../database/database"
import Evento from "./eventos.models";
import Compra from "./compra.models";


const Usuario=sequelize.define('usuarios',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    nombre_usuario:{
        type:Sequelize.STRING(30),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    apellido_usuario:{
        type:Sequelize.STRING(30),
        allowNull: false,
        notEmpty: true
    },
    correo_usuario:{
        type:Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true,
            isEmail: true
        }
        
    },
    celular_usuario:{
        type:Sequelize.STRING(10),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    rol_usuario:{
        type:Sequelize.TEXT,
        allowNull: false,       
        validate:{
            isIn: [['Cli', 'Admin']],
            notEmpty: true
        }
    },
    contraseña_usuario:{
        type:Sequelize.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }

});

//Usuario.sync({ force: true });
Usuario.belongsToMany(Evento,{through: Compra})

//console.log("The table for the User model was just (re)created!");

export default Usuario; 