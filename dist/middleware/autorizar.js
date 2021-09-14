"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.verificar = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _usuarios = _interopRequireDefault(require("../models/usuarios.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verificar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decode, usuario;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers["x-acces-token"];

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "Token no proporcionado"
            }));

          case 3:
            decode = _jsonwebtoken["default"].verify(token, 'api-user');
            req.userId = decode.id;
            _context.next = 7;
            return _usuarios["default"].findOne({
              where: {
                id: req.userId
              }
            });

          case 7:
            usuario = _context.sent;
            next();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verificar(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verificar = verificar;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var usuario, rol;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _usuarios["default"].findOne({
              where: {
                id: req.userId
              }
            });

          case 2:
            usuario = _context2.sent;
            rol = usuario.rol_usuario;

            if (!(rol === 'Admin')) {
              _context2.next = 8;
              break;
            }

            next();
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(403).json({
              message: "Requiere un rol de administrador"
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;