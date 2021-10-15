"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Compra = _database.sequelize.define('compras', {
  id: {
    type: _sequelize["default"].INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuarioId: {
    type: _sequelize["default"].INTEGER
  },
  eventoId: {
    type: _sequelize["default"].INTEGER
  },
  cantidad_boletas: {
    type: _sequelize["default"].INTEGER
  },
  valor_boletas: {
    type: _sequelize["default"].DOUBLE
  }
}); //Compra.sync({ force: true });


var _default = Compra;
exports["default"] = _default;