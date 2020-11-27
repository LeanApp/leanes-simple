"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _SimpleAdapterInterface2 = require("../interfaces/SimpleAdapterInterface");

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-simple.
//
// leanes-simple is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-simple is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-simple.  If not, see <https://www.gnu.org/licenses/>.
const SimpleAdapterInterface = _flowRuntime.default.tdz(() => _SimpleAdapterInterface2.SimpleAdapterInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SIMPLE_ADAPTER,
    Proxy,
    initialize,
    partOf,
    meta,
    nameBy,
    property,
    method,
    inject
  } = Module.NS;
  let SimpleProxy = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SimpleProxy", _flowRuntime.default.extends(Proxy), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_adapterFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleAdapterInterface)))), _flowRuntime.default.method("_simpleAdapter", _flowRuntime.default.return(_flowRuntime.default.ref(SimpleAdapterInterface))), _flowRuntime.default.method("setData", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("getData", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any()))))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleAdapterInterface)))), _dec4 = inject(`Factory<${SIMPLE_ADAPTER}>`), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SimpleProxy extends Proxy {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_adapterFactory", _descriptor, this);
    }

    get _simpleAdapter() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(SimpleAdapterInterface));

      return _returnType.assert(this._adapterFactory());
    }

    setData(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.any());

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("data", _dataType).assert(data);

      this._simpleAdapter.set(data);
    }

    getData() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any()));

      return _returnType3.assert(this._simpleAdapter.get());
    }

  }, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_adapterFactory", [_dec3, _dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_simpleAdapter", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_simpleAdapter"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setData", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setData"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getData", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getData"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvU2ltcGxlUHJveHkuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0lNUExFX0FEQVBURVIiLCJQcm94eSIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwicHJvcGVydHkiLCJtZXRob2QiLCJpbmplY3QiLCJOUyIsIlNpbXBsZVByb3h5IiwiX3NpbXBsZUFkYXB0ZXIiLCJfYWRhcHRlckZhY3RvcnkiLCJzZXREYXRhIiwiZGF0YSIsInNldCIsImdldERhdGEiLCJnZXQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFJZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGNBREk7QUFFSkMsSUFBQUEsS0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsUUFIOUI7QUFHd0NDLElBQUFBLE1BSHhDO0FBR2dEQyxJQUFBQTtBQUhoRCxNQUlGVCxNQUFNLENBQUNVLEVBSlg7QUFEeUIsTUFTbkJDLFdBVG1CLHlDQU96Qix1RUFFMEJULEtBRjFCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGlEQUN5QiwwREFBUSxnREFBUixFQUR6QixDQU5GLEVBUUUsMEVBQThCLGdEQUE5QixFQVJGLEVBWUUsMEVBQW9CLDhCQUFHLDBCQUFILENBQXBCLCtCQUEyQiwyQkFBM0IsRUFaRixFQWdCRSxtRUFBaUIsOEJBQUcsMEJBQUgsQ0FBakIsRUFoQkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0osTUFBRCxDQVJrQix3Q0FjRSwwREFBUSxnREFBUixFQWRGLFdBYXRCUyxNQUFNLENBQUUsV0FBVVIsY0FBZSxHQUEzQixDQWJnQixnQkFPeEJFLFVBUHdCLHVEQU96QixNQUVNUSxXQUZOLFNBRTBCVCxLQUYxQixDQUVnQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU05QixRQUFjVSxjQUFkLEdBQXVEO0FBQUEsc0RBQXZCLGdEQUF1Qjs7QUFDckQsZ0NBQU8sS0FBS0MsZUFBTCxFQUFQO0FBQ0Q7O0FBRU9DLElBQUFBLE9BQVIsQ0FBZ0JDLElBQWhCLEVBQWtDO0FBQUEsc0JBQWQsOEJBQUcsMEJBQUgsQ0FBYzs7QUFBQSx1REFBTCwyQkFBSzs7QUFBQTs7QUFDaEMsV0FBS0gsY0FBTCxDQUFvQkksR0FBcEIsQ0FBd0JELElBQXhCO0FBQ0Q7O0FBRU9FLElBQUFBLE9BQVIsR0FBd0I7QUFBQSx1REFBTCw4QkFBQywwQkFBRCxDQUFLOztBQUN0QixpQ0FBTyxLQUFLTCxjQUFMLENBQW9CTSxHQUFwQixFQUFQO0FBQ0Q7O0FBaEI2QixHQVRQLFVBVVBDLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJkLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJIQWN0QkUsUUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQWV0QkEsUUFmc0Isb0tBbUJ0QkMsTUFuQnNCLDZKQXVCdEJBLE1BdkJzQjtBQTJCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgU2ltcGxlQWRhcHRlckludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvU2ltcGxlQWRhcHRlckludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNJTVBMRV9BREFQVEVSLFxuICAgIFByb3h5LFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBwcm9wZXJ0eSwgbWV0aG9kLCBpbmplY3QsXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFNpbXBsZVByb3h5IGV4dGVuZHMgUHJveHkge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0lNUExFX0FEQVBURVJ9PmApXG4gICAgQHByb3BlcnR5IF9hZGFwdGVyRmFjdG9yeTogKCkgPT4gU2ltcGxlQWRhcHRlckludGVyZmFjZTtcbiAgICBAcHJvcGVydHkgZ2V0IF9zaW1wbGVBZGFwdGVyKCk6IFNpbXBsZUFkYXB0ZXJJbnRlcmZhY2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXJGYWN0b3J5KClcbiAgICB9XG5cbiAgICBAbWV0aG9kIHNldERhdGEoZGF0YTogP2FueSk6IHZvaWQge1xuICAgICAgdGhpcy5fc2ltcGxlQWRhcHRlci5zZXQoZGF0YSk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBnZXREYXRhKCk6ID9hbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZUFkYXB0ZXIuZ2V0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=