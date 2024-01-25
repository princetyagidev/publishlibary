"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useRedConsole = function useRedConsole() {
  var logRedMessage = function logRedMessage(message) {
    console.log('%c' + message, 'color: red;');
  };
  return {
    logRedMessage: logRedMessage
  };
};
var _default = exports["default"] = useRedConsole;