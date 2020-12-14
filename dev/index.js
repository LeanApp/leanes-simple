"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _index3 = _interopRequireDefault(require("@leansdk/leanes-configurable-addon/lib/index.dev"));

var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
let SimpleApp = (_dec = plugin(_index3.default), _dec2 = plugin(_index2.default), _dec3 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class SimpleApp extends _index.default {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJtZXRhIiwibmFtZUJ5IiwicmVzb2x2ZXIiLCJjb25zdGFudCIsInBsdWdpbiIsImxvYWRGaWxlcyIsIkxlYW5FUyIsIk5TIiwiU2ltcGxlQXBwIiwiQ29uZmlndXJhYmxlQWRkb24iLCJGc1V0aWxzQWRkb24iLCJyZXF1aXJlIiwibmFtZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiLCJfX2Rpcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU07QUFBRUEsRUFBQUEsVUFBRjtBQUFjQyxFQUFBQSxJQUFkO0FBQW9CQyxFQUFBQSxNQUFwQjtBQUE0QkMsRUFBQUEsUUFBNUI7QUFBc0NDLEVBQUFBLFFBQXRDO0FBQWdEQyxFQUFBQSxNQUFoRDtBQUF3REMsRUFBQUE7QUFBeEQsSUFBc0VDLGVBQU9DLEVBQW5GO0lBT01DLFMsV0FITEosTUFBTSxDQUFDSyxlQUFELEMsVUFDTkwsTUFBTSxDQUFDTSxlQUFELEMsVUFDTlIsUUFBUSxDQUFDUyxPQUFELEVBQVVDLElBQUksSUFBSUQsT0FBTyxDQUFDQyxJQUFELENBQXpCLEMsRUFKUmIsVSxVQUNBTSxTLG9GQURELE1BS01HLFNBTE4sU0FLd0JGLGNBTHhCLENBSytCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDLFVBQ2JPLFUsR0FBYSxXLFVBQ2hCQyxNLEdBQVMsRSwyRUFEckJiLE07Ozs7Ozs7MEVBQ0FELEk7Ozs7Ozs7Z0dBQ0FHLFE7Ozs7O1dBQWdCWSxTOztnR0FDaEJaLFE7Ozs7O1dBQXlCLGU7O21HQUN6QkEsUTs7Ozs7V0FBNEIsa0I7O2lHQUM1QkEsUTs7Ozs7V0FBMEIsZ0I7O2dHQUMxQkEsUTs7Ozs7V0FBeUIsZTs7K0ZBQ3pCQSxROzs7OztXQUF3QixhOztpR0FDeEJBLFE7Ozs7O1dBQTBCLGU7O29HQUMxQkEsUTs7Ozs7V0FBNkIsa0I7OztBQUMvQjtlQUVjSyxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IExlYW5FUyBmcm9tICdAbGVhbnNkay9sZWFuZXMvbGliL2luZGV4LmRldic7XG5pbXBvcnQgRnNVdGlsc0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1mcy11dGlscy1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBDb25maWd1cmFibGVBZGRvbiBmcm9tICdAbGVhbnNkay9sZWFuZXMtY29uZmlndXJhYmxlLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuXG5jb25zdCB7IGluaXRpYWxpemUsIG1ldGEsIG5hbWVCeSwgcmVzb2x2ZXIsIGNvbnN0YW50LCBwbHVnaW4sIGxvYWRGaWxlcyB9ID0gTGVhbkVTLk5TO1xuXG5AaW5pdGlhbGl6ZVxuQGxvYWRGaWxlc1xuQHBsdWdpbihDb25maWd1cmFibGVBZGRvbilcbkBwbHVnaW4oRnNVdGlsc0FkZG9uKVxuQHJlc29sdmVyKHJlcXVpcmUsIG5hbWUgPT4gcmVxdWlyZShuYW1lKSlcbmNsYXNzIFNpbXBsZUFwcCBleHRlbmRzIExlYW5FUyB7XG4gIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gJ1NpbXBsZUFwcCc7XG4gIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgQGNvbnN0YW50IFJPT1QgPSBfX2Rpcm5hbWU7XG4gIEBjb25zdGFudCBTVEFSVF9DT05TT0xFID0gJ1NUQVJUX0NPTlNPTEUnO1xuICBAY29uc3RhbnQgTVNHX0ZST01fQ09OU09MRSA9ICdNU0dfRlJPTV9DT05TT0xFJztcbiAgQGNvbnN0YW50IE1TR19UT19DT05TT0xFID0gJ01TR19UT19DT05TT0xFJztcbiAgQGNvbnN0YW50IENMRUFSX0NPTlNPTEUgPSAnQ0xFQVJfQ09OU09MRSc7XG4gIEBjb25zdGFudCBTSU1QTEVfUFJPWFkgPSAnU2ltcGxlUHJveHknO1xuICBAY29uc3RhbnQgU0lNUExFX0FEQVBURVIgPSAnU2ltcGxlQWRhcHRlcic7XG4gIEBjb25zdGFudCBTSUdOQUxTX0dFTkVSQVRPUiA9ICdTaWduYWxzR2VuZXJhdG9yJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUFwcDtcbiJdfQ==