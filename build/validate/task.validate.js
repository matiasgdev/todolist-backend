"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUpdate = exports.validateCreate = void 0;

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var schemaCreate = yup.object().shape({
  user: yup.string().trim().min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
  title: yup.string().required('Se requiere un título').lowercase().min(7, 'El titulo debe tener al menos 5 caracteres').max(20, 'El titulo debe tener máximo 20 caracteres'),
  description: yup.string().required('Se requiere una descripción').min(50, 'La descripcion debe tener al menos 50 caracteres'),
  completed: yup.bool()["default"](false),
  dof: yup.date()["default"](function () {
    // one week for date of finish
    return new Date(Date.now() + 604800000);
  })
});
var schemaUpdate = yup.object().shape({
  user: yup.string().trim().min(4, 'El nombre de usuario debe tener al menos 4 caracteres'),
  title: yup.string().min(7, 'El titulo debe tener al menos 7 caracteres').max(20, 'El titulo debe tener máximo 20 caracteres'),
  description: yup.string().min(50, 'La descripcion debe tener al menos 50 caracteres'),
  completed: yup.bool()["default"](false),
  dof: yup.date()
});

var validateCreate = function validateCreate(req, res, next) {
  try {
    var result = schemaCreate.validateSync(req.body, {
      abortEarly: false
    });
    req.body = result;
    next();
  } catch (err) {
    next(err);
  }
};

exports.validateCreate = validateCreate;

var validateUpdate = function validateUpdate(req, res, next) {
  try {
    var result = schemaUpdate.validateSync(req.body, {
      abortEarly: false
    });
    req.body = result;
    next();
  } catch (err) {
    next(err);
  }
};

exports.validateUpdate = validateUpdate;