"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var _autorizar = require("../middleware/autorizar");

var router = (0, _express.Router)();
router.get('/', [_autorizar.verificar, _autorizar.isAdmin], _usuarios.getUsuarios);
router.get('/:id', [_autorizar.verificar], _usuarios.getOneUsuario);
router["delete"]('/:id', [_autorizar.verificar], _usuarios.deleteUsuario);
router.put('/:id', [_autorizar.verificar], _usuarios.updateUsuario);
var _default = router;
exports["default"] = _default;