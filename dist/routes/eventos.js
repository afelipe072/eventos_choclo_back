"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _eventos = require("../controllers/eventos.controller");

var _autorizar = require("../middleware/autorizar");

var router = (0, _express.Router)();
router.get('/', _eventos.getEventos);
router.get('/:id', _eventos.getOneEvento);
router.post('/', _eventos.createEvento);
router.put('/:id', _eventos.updateEvento);
router["delete"]('/:id', _eventos.deleteEvento);
var _default = router;
exports["default"] = _default;