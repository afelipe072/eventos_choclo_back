"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singUp = singUp;
exports.longIn = longIn;

var _usuarios = _interopRequireDefault(require("../models/usuarios.models"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _contraseñaBcrypt = require("../helpers/contrase\xF1aBcrypt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function singUp(_x, _x2) {
  return _singUp.apply(this, arguments);
}

function _singUp() {
  _singUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre_usuario, apellido_usuario, correo_usuario, celular_usuario, rol_usuario, contraseña_usuario, contraseñaHash, nuevoUsuario;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //datos enviados 
            _req$body = req.body, nombre_usuario = _req$body.nombre_usuario, apellido_usuario = _req$body.apellido_usuario, correo_usuario = _req$body.correo_usuario, celular_usuario = _req$body.celular_usuario, rol_usuario = _req$body.rol_usuario, contraseña_usuario = _req$body.contraseña_usuario;
            _context.next = 4;
            return (0, _contraseñaBcrypt.encrypt)(contraseña_usuario);

          case 4:
            contraseñaHash = _context.sent;
            _context.next = 7;
            return _usuarios["default"].create({
              nombre_usuario: nombre_usuario,
              apellido_usuario: apellido_usuario,
              correo_usuario: correo_usuario,
              celular_usuario: celular_usuario,
              rol_usuario: rol_usuario,
              contraseña_usuario: contraseñaHash
            });

          case 7:
            nuevoUsuario = _context.sent;

            if (nuevoUsuario) {
              res.json({
                message: "El usuario " + nombre_usuario + " ha sido registrado con exito!"
              });
            }

            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _singUp.apply(this, arguments);
}

function longIn(_x3, _x4) {
  return _longIn.apply(this, arguments);
}

function _longIn() {
  _longIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, correo_usuario, contraseña_usuario, usuario, checkContraseña, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, correo_usuario = _req$body2.correo_usuario, contraseña_usuario = _req$body2.contraseña_usuario;
            _context2.next = 4;
            return _usuarios["default"].findOne({
              where: {
                correo_usuario: correo_usuario
              }
            });

          case 4:
            usuario = _context2.sent;

            if (!usuario) {
              _context2.next = 12;
              break;
            }

            _context2.next = 8;
            return (0, _contraseñaBcrypt.compare)(contraseña_usuario, usuario.contraseña_usuario);

          case 8:
            checkContraseña = _context2.sent;

            if (checkContraseña) {
              token = _jsonwebtoken["default"].sign({
                id: usuario.id
              }, 'api-user', {
                expiresIn: 50000
              }); // token

              res.json({
                message: "Bienvenido",
                data: [usuario.id, usuario.nombre_usuario, usuario.apellido_usuario, usuario.correo_usuario, usuario.celular_usuario],
                token: token
              });
            } else {
              res.status(400).json({
                message: "Contraseña incorrecta"
              });
            }

            _context2.next = 13;
            break;

          case 12:
            res.status(400).json({
              message: "El usuario no se encuentra registrado!"
            });

          case 13:
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return _longIn.apply(this, arguments);
}