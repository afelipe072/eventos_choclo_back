"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _compra = require("../controllers/compra.controller");

var router = (0, _express.Router)();
router.get('/', _compra.getCompras);
router.post('/', _compra.createCompra);
var _default = router;
exports["default"] = _default;