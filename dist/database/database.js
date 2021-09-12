"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('d9eak2gnvimdn8', 'btpoftnrnyzpiq', '8ec95eb5230c8ed297d65ac65247cddf8343bde48dc1337fc1338704e178ca72', {
  host: 'ec2-52-7-159-155.compute-1.amazonaws.com',
  dialect: "postgres"
});
exports.sequelize = sequelize;