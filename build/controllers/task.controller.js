"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Task = _interopRequireDefault(require("../models/Task.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskController = /*#__PURE__*/function () {
  function TaskController() {
    _classCallCheck(this, TaskController);
  }

  _createClass(TaskController, [{
    key: "list",
    value: function () {
      var _list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var tasks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Task["default"].find({});

              case 3:
                tasks = _context.sent;

                if (!(tasks.length === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.json({
                  message: 'No tasks'
                }));

              case 6:
                res.json(tasks);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                next(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function list(_x, _x2, _x3) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "listByUser",
    value: function () {
      var _listByUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var userTasks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Task["default"].find({
                  user: req.params.user
                });

              case 3:
                userTasks = _context2.sent;
                res.json(userTasks);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                next(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function listByUser(_x4, _x5, _x6) {
        return _listByUser.apply(this, arguments);
      }

      return listByUser;
    }()
  }, {
    key: "detail",
    value: function () {
      var _detail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res.json(res.task);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function detail(_x7, _x8, _x9) {
        return _detail.apply(this, arguments);
      }

      return detail;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var newTask, taskExists;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                newTask = new _Task["default"](req.body);
                _context4.next = 4;
                return _Task["default"].findOne({
                  title: newTask.title
                });

              case 4:
                taskExists = _context4.sent;

                if (!taskExists) {
                  _context4.next = 8;
                  break;
                }

                res.status(400);
                throw new Error('Ya existe una tarea con ese título');

              case 8:
                _context4.next = 10;
                return newTask.save();

              case 10:
                newTask = _context4.sent;
                res.status(201).json({
                  message: "Tarea creada correctamente",
                  task: newTask
                });
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                next(_context4.t0);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 14]]);
      }));

      function create(_x10, _x11, _x12) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
        var newTaskUpdated;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                Object.keys(req.body).map(function (key) {
                  if (req.body[key] !== '') {
                    res.task[key] = req.body[key];
                  }
                });
                _context5.next = 4;
                return res.task.save();

              case 4:
                newTaskUpdated = _context5.sent;
                res.status(200).json({
                  message: "Tarea ".concat(newTaskUpdated._id, " actualizada correctamente"),
                  task: newTaskUpdated
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                next(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function update(_x13, _x14, _x15) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return res.task["delete"]();

              case 3:
                res.json({
                  message: "Tarea ".concat(req.params.id, " eliminada correctamente")
                });
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                next(_context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function _delete(_x16, _x17, _x18) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return TaskController;
}();

var _default = new TaskController();

exports["default"] = _default;