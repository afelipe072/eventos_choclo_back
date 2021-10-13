"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsuarios = getUsuarios;
exports.getOneUsuario = getOneUsuario;
exports.deleteUsuario = deleteUsuario;
exports.updateUsuario = updateUsuario;

var _usuarios = _interopRequireDefault(require("../models/usuarios.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUsuarios(_x, _x2) {
  return _getUsuarios.apply(this, arguments);
}

function _getUsuarios() {
  _getUsuarios = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _usuarios["default"].findAll();

          case 3:
            usuarios = _context.sent;
            res.json({
              data: usuarios
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getUsuarios.apply(this, arguments);
}

function getOneUsuario(_x3, _x4) {
  return _getOneUsuario.apply(this, arguments);
}

function _getOneUsuario() {
  _getOneUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _usuarios["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context2.sent;
            res.json({
              data: usuario
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getOneUsuario.apply(this, arguments);
}

function deleteUsuario(_x5, _x6) {
  return _deleteUsuario.apply(this, arguments);
}

function _deleteUsuario() {
  _deleteUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _usuarios["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: 'Usuario eliminado correctamente.'
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteUsuario.apply(this, arguments);
}

function updateUsuario(_x7, _x8) {
  return _updateUsuario.apply(this, arguments);
}

function _updateUsuario() {
  _updateUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body, nombre_usuario, apellido_usuario, correo_usuario, celular_usuario, usuarios;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _req$body = req.body, nombre_usuario = _req$body.nombre_usuario, apellido_usuario = _req$body.apellido_usuario, correo_usuario = _req$body.correo_usuario, celular_usuario = _req$body.celular_usuario;
            _context4.next = 5;
            return _usuarios["default"].update({
              nombre_usuario: nombre_usuario,
              apellido_usuario: apellido_usuario,
              correo_usuario: correo_usuario,
              celular_usuario: celular_usuario
            }, {
              where: {
                id: id
              }
            });

          case 5:
            usuarios = _context4.sent;
            res.json({
              message: 'Datos actualizados correctamente'
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return _updateUsuario.apply(this, arguments);
}