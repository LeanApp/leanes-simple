"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _SimpleProxyInterface2 = require("../interfaces/SimpleProxyInterface");

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
const SimpleProxyInterface = _flowRuntime.default.tdz(() => _SimpleProxyInterface2.SimpleProxyInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SIMPLE_PROXY,
    MSG_FROM_CONSOLE,
    MSG_TO_CONSOLE,
    Script,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    inject
  } = Module.NS;
  let SimpleScript = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SimpleScript", _flowRuntime.default.extends(Script), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_simpleProxyFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface)))), _flowRuntime.default.method("_simpleProxy", _flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface))), _flowRuntime.default.method("body", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(_flowRuntime.default.any())))))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface)))), _dec4 = inject(`Factory<${SIMPLE_PROXY}>`), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SimpleScript extends Script {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_simpleProxyFactory", _descriptor, this);
    }

    get _simpleProxy() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface));

      return _returnType2.assert(this._simpleProxyFactory());
    }

    async body(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.any());

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.nullable(_flowRuntime.default.any()), _flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(_flowRuntime.default.any()))));

      _flowRuntime.default.param("data", _dataType).assert(data);

      console.log('SimpleScript execute()');

      this._simpleProxy.setData('');

      await this.send(MSG_TO_CONSOLE, this._simpleProxy.getData());
      return _returnType.assert('clearing compleated');
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_simpleProxyFactory", [_dec3, _dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_simpleProxy", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_simpleProxy"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "body", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "body"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvU2ltcGxlU2NyaXB0LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNJTVBMRV9QUk9YWSIsIk1TR19GUk9NX0NPTlNPTEUiLCJNU0dfVE9fQ09OU09MRSIsIlNjcmlwdCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwicHJvcGVydHkiLCJuYW1lQnkiLCJpbmplY3QiLCJOUyIsIlNpbXBsZVNjcmlwdCIsIl9zaW1wbGVQcm94eSIsIl9zaW1wbGVQcm94eUZhY3RvcnkiLCJib2R5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwic2VuZCIsImdldERhdGEiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFJZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFlBREk7QUFDVUMsSUFBQUEsZ0JBRFY7QUFDNEJDLElBQUFBLGNBRDVCO0FBRUpDLElBQUFBLE1BRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBLFFBSDlCO0FBR3dDQyxJQUFBQSxNQUh4QztBQUdnREMsSUFBQUE7QUFIaEQsTUFJRlgsTUFBTSxDQUFDWSxFQUpYO0FBRHlCLE1BU25CQyxZQVRtQix5Q0FPekIsd0VBRTJCVCxNQUYzQixHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxxREFDNkIsMERBQVEsOENBQVIsRUFEN0IsQ0FORixFQVFFLHdFQUE0Qiw4Q0FBNUIsRUFSRixFQVlFLHVFQUF1Qiw4QkFBRywwQkFBSCxDQUF2QiwrQkFBOEIsb0NBQVUsOEJBQUMsMEJBQUQsQ0FBVixDQUE5QixFQVpGLENBUHlCLFdBUXhCRSxNQUFNLENBQUNOLE1BQUQsQ0FSa0Isd0NBY00sMERBQVEsOENBQVIsRUFkTixXQWF0QlcsTUFBTSxDQUFFLFdBQVVWLFlBQWEsR0FBekIsQ0FiZ0IsZ0JBT3hCSSxVQVB3Qix1REFPekIsTUFFTVEsWUFGTixTQUUyQlQsTUFGM0IsQ0FFa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNaEMsUUFBY1UsWUFBZCxHQUFtRDtBQUFBLHVEQUFyQiw4Q0FBcUI7O0FBQ2pELGlDQUFPLEtBQUtDLG1CQUFMLEVBQVA7QUFDRDs7QUFFRCxVQUFjQyxJQUFkLENBQW1CQyxJQUFuQixFQUE4QztBQUFBLHNCQUF2Qiw4QkFBRywwQkFBSCxDQUF1Qjs7QUFBQSxpRkFBTiw4QkFBQywwQkFBRCxDQUFNLEVBQWQsb0NBQVEsOEJBQUMsMEJBQUQsQ0FBUixDQUFjOztBQUFBOztBQUM1Q0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7O0FBQ0EsV0FBS0wsWUFBTCxDQUFrQk0sT0FBbEIsQ0FBMEIsRUFBMUI7O0FBQ0EsWUFBTSxLQUFLQyxJQUFMLENBQVVsQixjQUFWLEVBQTBCLEtBQUtXLFlBQUwsQ0FBa0JRLE9BQWxCLEVBQTFCLENBQU47QUFDQSxnQ0FBTyxxQkFBUDtBQUNEOztBQWYrQixHQVRULFVBVVBDLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJkLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCSCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtIQWN0QkUsUUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtGQWV0QkEsUUFmc0IsK0pBbUJ0QkQsTUFuQnNCO0FBMEIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBTaW1wbGVQcm94eUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvU2ltcGxlUHJveHlJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTSU1QTEVfUFJPWFksIE1TR19GUk9NX0NPTlNPTEUsIE1TR19UT19DT05TT0xFLFxuICAgIFNjcmlwdCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgcHJvcGVydHksIG5hbWVCeSwgaW5qZWN0XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFNpbXBsZVNjcmlwdCBleHRlbmRzIFNjcmlwdCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtTSU1QTEVfUFJPWFl9PmApXG4gICAgQHByb3BlcnR5IF9zaW1wbGVQcm94eUZhY3Rvcnk6ICgpID0+IFNpbXBsZVByb3h5SW50ZXJmYWNlO1xuICAgIEBwcm9wZXJ0eSBnZXQgX3NpbXBsZVByb3h5KCk6IFNpbXBsZVByb3h5SW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaW1wbGVQcm94eUZhY3RvcnkoKVxuICAgIH1cblxuICAgIEBtZXRob2QgYXN5bmMgYm9keShkYXRhOiA/YW55KTogUHJvbWlzZTw/YW55PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2ltcGxlU2NyaXB0IGV4ZWN1dGUoKScpO1xuICAgICAgdGhpcy5fc2ltcGxlUHJveHkuc2V0RGF0YSgnJyk7XG4gICAgICBhd2FpdCB0aGlzLnNlbmQoTVNHX1RPX0NPTlNPTEUsIHRoaXMuX3NpbXBsZVByb3h5LmdldERhdGEoKSk7XG4gICAgICByZXR1cm4gJ2NsZWFyaW5nIGNvbXBsZWF0ZWQnO1xuICAgIH1cbiAgfVxufVxuIl19