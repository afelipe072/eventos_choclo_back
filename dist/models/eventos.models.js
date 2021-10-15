"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _usuarios = _interopRequireDefault(require("./usuarios.models"));

var _compra = _interopRequireDefault(require("./compra.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Evento = _database.sequelize.define('eventos', {
  id: {
    type: _sequelize["default"].INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre_evento: {
    type: _sequelize["default"].STRING(30),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  fecha_evento: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  hora_evento: {
    type: _sequelize["default"].TIME,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url_imagen: {
    type: _sequelize["default"].TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  disponibilidad: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  aforo_evento: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  precio_entrada: {
    type: _sequelize["default"].DOUBLE
  }
}); //Evento.sync({ force: true });


var _default = Evento;
exports["default"] = _default;