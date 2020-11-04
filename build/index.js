"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./db"));

var _errorMiddleware = require("./middlewares/errorMiddleware");

var _task = _interopRequireDefault(require("./routes/task.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

require('dotenv').config();

app.set('port', process.env.PORT);
(0, _db["default"])();
app.listen(app.get('port'), function () {
  console.log('Server on port ' + app.get('port'));
});

if (process.env.ENVIROMENT === 'development') {
  app.use((0, _morgan["default"])('dev'));
}

app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: 'http://localhost:3000'
}));
app.get('/', function (req, res) {
  res.send('/');
});
app.use('/api/task', _task["default"]);
app.use(_errorMiddleware.notFound);
app.use(_errorMiddleware.errorHandler);
var _default = app;
exports["default"] = _default;