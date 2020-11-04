"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var taskSchema = new _mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    min: 7,
    required: true
  },
  description: {
    type: String,
    min: 25,
    required: true
  },
  completed: {
    type: Boolean,
    "default": false
  },
  // date of finish task
  dof: {
    type: Date,
    "default": new Date(Date.now() + 604800000)
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Task', taskSchema);

exports["default"] = _default;