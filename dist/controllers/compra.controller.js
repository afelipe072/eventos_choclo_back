"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompras = getCompras;
exports.getOneCompra = getOneCompra;
exports.createCompra = createCompra;

var _compra = _interopRequireDefault(require("../models/compra.models"));

var _eventos = _interopRequireDefault(require("../models/eventos.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCompras(_x, _x2) {
  return _getCompras.apply(this, arguments);
}

function _getCompras() {
  _getCompras = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var compras;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _compra["default"].findAll();

          case 3:
            compras = _context.sent;
            res.json({
              data: compras
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
  return _getCompras.apply(this, arguments);
}

function getOneCompra(_x3, _x4) {
  return _getOneCompra.apply(this, arguments);
}

function _getOneCompra() {
  _getOneCompra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, compra;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _compra["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            compra = _context2.sent;
            res.json({
              data: compra
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneCompra.apply(this, arguments);
}

function createCompra(_x5, _x6) {
  return _createCompra.apply(this, arguments);
}

function _createCompra() {
  _createCompra = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, usuarioId, eventoId, cantidad_boletas, valor_boletas, evento, compra, disponible, eventoAct;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, usuarioId = _req$body.usuarioId, eventoId = _req$body.eventoId, cantidad_boletas = _req$body.cantidad_boletas, valor_boletas = _req$body.valor_boletas;
            _context3.next = 4;
            return _eventos["default"].findOne({
              where: {
                id: eventoId
              }
            });

          case 4:
            evento = _context3.sent;

            if (!(evento.disponibilidad > 0 && cantidad_boletas <= evento.disponibilidad)) {
              _context3.next = 17;
              break;
            }

            _context3.next = 8;
            return _compra["default"].create({
              usuarioId: usuarioId,
              eventoId: eventoId,
              cantidad_boletas: cantidad_boletas,
              valor_boletas: cantidad_boletas * evento.precio_entrada
            });

          case 8:
            compra = _context3.sent;

            if (!compra) {
              _context3.next = 15;
              break;
            }

            res.json({
              message: "La compra ha sido realizada con exito!"
            });
            disponible = evento.disponibilidad - cantidad_boletas;
            _context3.next = 14;
            return _eventos["default"].update({
              disponibilidad: disponible
            }, {
              where: {
                id: eventoId
              }
            });

          case 14:
            eventoAct = _context3.sent;

          case 15:
            _context3.next = 18;
            break;

          case 17:
            res.status(406).json({
              message: 'No hay entradas disponibles'
            });

          case 18:
            _context3.next = 23;
            break;

          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return _createCompra.apply(this, arguments);
}