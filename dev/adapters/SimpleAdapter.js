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
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    Adapter,
    initialize,
    partOf,
    meta,
    nameBy,
    property,
    method
  } = Module.NS;
  let SimpleAdapter = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SimpleAdapter", _flowRuntime.default.extends(Adapter), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("set", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("get", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any()))))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.any())), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SimpleAdapter extends Adapter {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_data", _descriptor, this);

      _flowRuntime.default.ref(SimpleAdapterInterface).assert(this);
    }

    'set'(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.any());

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("data", _dataType).assert(data);

      this._data = data;
    }

    'get'() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any()));

      return _returnType2.assert(this._data);
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_data", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'set', [method], Object.getOwnPropertyDescriptor(_class2.prototype, 'set'), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'get', [method], Object.getOwnPropertyDescriptor(_class2.prototype, 'get'), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0ZXJzL1NpbXBsZUFkYXB0ZXIuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQWRhcHRlciIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwicHJvcGVydHkiLCJtZXRob2QiLCJOUyIsIlNpbXBsZUFkYXB0ZXIiLCJkYXRhIiwiX2RhdGEiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFJZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxJQUZoQjtBQUVzQkMsSUFBQUEsTUFGdEI7QUFFOEJDLElBQUFBLFFBRjlCO0FBRXdDQyxJQUFBQTtBQUZ4QyxNQUdGUCxNQUFNLENBQUNRLEVBSFg7QUFEeUIsTUFRbkJDLGFBUm1CLHlDQU16Qix5RUFFNEJSLE9BRjVCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLHVDQUFlLDhCQUFHLDBCQUFILENBQWYsQ0FORiw4R0FRRSxzRUFBa0IsOEJBQUcsMEJBQUgsQ0FBbEIsK0JBQXlCLDJCQUF6QixFQVJGLEVBWUUsK0RBQWUsOEJBQUcsMEJBQUgsQ0FBZixFQVpGLENBTnlCLFdBT3hCRSxNQUFNLENBQUNILE1BQUQsQ0FQa0Isd0NBWVIsOEJBQUcsMEJBQUgsQ0FaUSxpQkFNeEJFLFVBTndCLHVEQU16QixNQUVNTyxhQUZOLFNBRTRCUixPQUY1QixDQUVzRTtBQUFBO0FBQUE7QUFBQTs7QUFBdkIsc0RBQXVCO0FBQUE7O0FBTTVELFNBQVIsQ0FBY1MsSUFBZCxFQUFnQztBQUFBLHNCQUFkLDhCQUFHLDBCQUFILENBQWM7O0FBQUEsc0RBQUwsMkJBQUs7O0FBQUE7O0FBQzlCLFdBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEOztBQUVPLFNBQVIsR0FBc0I7QUFBQSx1REFBTCw4QkFBQywwQkFBRCxDQUFLOztBQUNwQixpQ0FBTyxLQUFLQyxLQUFaO0FBQ0Q7O0FBWm1FLEdBUjdDLFVBU1BDLFVBVE8sR0FTTUEsVUFUTixVQVVWQyxNQVZVLEdBVUQsRUFWQywyRUFTdEJSLE1BVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBVXRCRCxJQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQVl0QkUsUUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWUMsSUFaRDtBQUFBO0FBQUEsaUVBY2YsS0FkZSxHQWN0QkMsTUFkc0Isc0RBY2YsS0FkZSxrRkFrQmYsS0FsQmUsR0FrQnRCQSxNQWxCc0Isc0RBa0JmLEtBbEJlO0FBc0IxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBTaW1wbGVBZGFwdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9TaW1wbGVBZGFwdGVySW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQWRhcHRlcixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgcHJvcGVydHksIG1ldGhvZCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU2ltcGxlQWRhcHRlciBleHRlbmRzIEFkYXB0ZXIgaW1wbGVtZW50cyBTaW1wbGVBZGFwdGVySW50ZXJmYWNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IF9kYXRhOiA/YW55ID0gbnVsbDtcblxuICAgIEBtZXRob2QgJ3NldCcoZGF0YTogP2FueSk6IHZvaWQge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgQG1ldGhvZCAnZ2V0JygpOiA/YW55IHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgfVxufVxuIl19