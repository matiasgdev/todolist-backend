"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _task = _interopRequireDefault(require("../controllers/task.controller"));

var _task2 = require("../validate/task.validate");

var _findTask = require("../middlewares/findTask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // list


router.get('/', _task["default"].list); // list user tasks

router.get('/user/:user', _task["default"].listByUser); // create

router.post('/', _task2.validateCreate, _task["default"].create); // detail 

router.get('/:id', _findTask.findTaskById, _task["default"].detail); // update

router.put('/:id', _findTask.findTaskById, _task2.validateUpdate, _task["default"].update); // delete 

router["delete"]('/:id', _findTask.findTaskById, _task["default"]["delete"]);
var _default = router;
exports["default"] = _default;