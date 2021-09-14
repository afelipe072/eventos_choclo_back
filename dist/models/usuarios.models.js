"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Usuario = _database.sequelize.define('usuarios', {
  id: {
    type: _sequelize["default"].INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre_usuario: {
    type: _sequelize["default"].STRING(30)
  },
  apellido_usuario: {
    type: _sequelize["default"].STRING(30)
  },
  correo_usuario: {
    type: _sequelize["default"].TEXT
  },
  celular_usuario: {
    type: _sequelize["default"].STRING(10)
  },
  rol_usuario: {
    type: _sequelize["default"].TEXT
  },
  contraseña_usuario: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Usuario;
exports["default"] = _default;