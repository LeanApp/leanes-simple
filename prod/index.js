"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _leanes = _interopRequireDefault(require("@leansdk/leanes"));

var _leanesFsUtilsAddon = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon"));

var _leanesConfigurableAddon = _interopRequireDefault(require("@leansdk/leanes-configurable-addon"));

var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _leanes.default.NS;
let SimpleApp = (_dec = plugin(_leanesConfigurableAddon.default), _dec2 = plugin(_leanesFsUtilsAddon.default), _dec3 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class SimpleApp extends _leanes.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "START_CONSOLE", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "MSG_FROM_CONSOLE", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "MSG_TO_CONSOLE", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "CLEAR_CONSOLE", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "SIMPLE_PROXY", _descriptor6, this);
    (0, _initializerDefineProperty2.default)(this, "SIMPLE_ADAPTER", _descriptor7, this);
    (0, _initializerDefineProperty2.default)(this, "SIGNALS_GENERATOR", _descriptor8, this);
  }

}, _class3.__filename = 'SimpleApp', _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init;
  }
}), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init2;
  }
}), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ROOT", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return __dirname;
  }
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "START_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'START_CONSOLE';
  }
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MSG_FROM_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MSG_FROM_CONSOLE';
  }
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MSG_TO_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MSG_TO_CONSOLE';
  }
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "CLEAR_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'CLEAR_CONSOLE';
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIMPLE_PROXY", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SimpleProxy';
  }
}), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIMPLE_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SimpleAdapter';
  }
}), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIGNALS_GENERATOR", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SignalsGenerator';
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class);
;
var _default = SimpleApp;
exports.default = _default;