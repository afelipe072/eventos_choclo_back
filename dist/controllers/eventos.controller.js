"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventos = getEventos;
exports.createEvento = createEvento;
exports.updateEvento = updateEvento;
exports.getOneEvento = getOneEvento;
exports.deleteEvento = deleteEvento;

var _eventos = _interopRequireDefault(require("../models/eventos.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEventos(_x, _x2) {
  return _getEventos.apply(this, arguments);
}

function _getEventos() {
  _getEventos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var eventos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _eventos["default"].findAll({
              order: [['id', 'ASC']]
            });

          case 3:
            eventos = _context.sent;
            res.json({
              data: eventos
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
  return _getEventos.apply(this, arguments);
}

function createEvento(_x3, _x4) {
  return _createEvento.apply(this, arguments);
}

function _createEvento() {
  _createEvento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre_evento, fecha_evento, hora_evento, url_imagen, disponibilidad, aforo_evento, precio_entrada, evento;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, nombre_evento = _req$body.nombre_evento, fecha_evento = _req$body.fecha_evento, hora_evento = _req$body.hora_evento, url_imagen = _req$body.url_imagen, disponibilidad = _req$body.disponibilidad, aforo_evento = _req$body.aforo_evento, precio_entrada = _req$body.precio_entrada;
            _context2.next = 4;
            return _eventos["default"].create({
              nombre_evento: nombre_evento,
              fecha_evento: fecha_evento,
              hora_evento: hora_evento,
              url_imagen: url_imagen,
              disponibilidad: disponibilidad,
              aforo_evento: aforo_evento,
              precio_entrada: precio_entrada
            });

          case 4:
            evento = _context2.sent;

            if (evento) {
              res.json({
                message: "El evento " + nombre_evento + " ha sido creado con exito!"
              });
            }

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
  return _createEvento.apply(this, arguments);
}

function updateEvento(_x5, _x6) {
  return _updateEvento.apply(this, arguments);
}

function _updateEvento() {
  _updateEvento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, nombre_evento, fecha_evento, hora_evento, url_imagen, disponibilidad, aforo_evento, precio_entrada, eventos;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, nombre_evento = _req$body2.nombre_evento, fecha_evento = _req$body2.fecha_evento, hora_evento = _req$body2.hora_evento, url_imagen = _req$body2.url_imagen, disponibilidad = _req$body2.disponibilidad, aforo_evento = _req$body2.aforo_evento, precio_entrada = _req$body2.precio_entrada;
            _context3.next = 5;
            return _eventos["default"].update({
              nombre_evento: nombre_evento,
              fecha_evento: fecha_evento,
              hora_evento: hora_evento,
              url_imagen: url_imagen,
              disponibilidad: disponibilidad,
              aforo_evento: aforo_evento,
              precio_entrada: precio_entrada
            }, {
              where: {
                id: id
              }
            });

          case 5:
            eventos = _context3.sent;

            if (eventos === 1) {
              res.json({
                message: 'Evento actualizado correctamente' + eventos
              });
            } else {
              res.status(404).json({
                message: 'Evento NO encontrado'
              });
            }

            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _updateEvento.apply(this, arguments);
}

function getOneEvento(_x7, _x8) {
  return _getOneEvento.apply(this, arguments);
}

function _getOneEvento() {
  _getOneEvento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, evento;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _eventos["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            evento = _context4.sent;

            if (evento) {
              res.json({
                data: evento
              });
            } else {
              res.status(404).json({
                message: 'Evento NO encontrado'
              });
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOneEvento.apply(this, arguments);
}

function deleteEvento(_x9, _x10) {
  return _deleteEvento.apply(this, arguments);
}

function _deleteEvento() {
  _deleteEvento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _eventos["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Evento eliminado correctamente.'
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteEvento.apply(this, arguments);
}