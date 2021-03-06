"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _eventos = _interopRequireDefault(require("./eventos.models"));

var _compra = _interopRequireDefault(require("./compra.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Usuario = _database.sequelize.define('usuarios', {
  id: {
    type: _sequelize["default"].INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre_usuario: {
    type: _sequelize["default"].STRING(30),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  apellido_usuario: {
    type: _sequelize["default"].STRING(30),
    allowNull: false,
    notEmpty: true
  },
  correo_usuario: {
    type: _sequelize["default"].TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  celular_usuario: {
    type: _sequelize["default"].STRING(10),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  rol_usuario: {
    type: _sequelize["default"].TEXT,
    allowNull: false,
    validate: {
      isIn: [['Cli', 'Admin']],
      notEmpty: true
    }
  },
  contraseña_usuario: {
    type: _sequelize["default"].TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}); //Usuario.sync({ force: true });


Usuario.belongsToMany(_eventos["default"], {
  through: _compra["default"]
}); //console.log("The table for the User model was just (re)created!");

var _default = Usuario;
exports["default"] = _default;