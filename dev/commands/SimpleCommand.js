"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

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

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SIMPLE_PROXY,
    MSG_TO_CONSOLE,
    Command,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    inject
  } = Module.NS;
  let SimpleCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SimpleCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_simpleProxyFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface)))), _flowRuntime.default.method("_simpleProxy", _flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface))), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface)))), _dec4 = inject(`Factory<${SIMPLE_PROXY}>`), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SimpleCommand extends Command {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_simpleProxyFactory", _descriptor, this);
    }

    get _simpleProxy() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(SimpleProxyInterface));

      return _returnType.assert(this._simpleProxyFactory());
    }

    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      console.log('SimpleCommand execute()');

      this._simpleProxy.setData(note.getBody());

      this.send(MSG_TO_CONSOLE, this._simpleProxy.getData());
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
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_simpleProxy", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_simpleProxy"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1NpbXBsZUNvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0lNUExFX1BST1hZIiwiTVNHX1RPX0NPTlNPTEUiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIk5TIiwiU2ltcGxlQ29tbWFuZCIsIl9zaW1wbGVQcm94eSIsIl9zaW1wbGVQcm94eUZhY3RvcnkiLCJleGVjdXRlIiwibm90ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwiZ2V0Qm9keSIsInNlbmQiLCJnZXREYXRhIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxZQURJO0FBQ1VDLElBQUFBLGNBRFY7QUFFSkMsSUFBQUEsT0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsUUFIOUI7QUFHd0NDLElBQUFBLE1BSHhDO0FBR2dEQyxJQUFBQTtBQUhoRCxNQUlGVixNQUFNLENBQUNXLEVBSlg7QUFEeUIsTUFTbkJDLGFBVG1CLHlDQU96Qix5RUFFNEJULE9BRjVCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLHFEQUM2QiwwREFBUSw4Q0FBUixFQUQ3QixDQU5GLEVBUUUsd0VBQTRCLDhDQUE1QixFQVJGLEVBWUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBWkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0wsTUFBRCxDQVJrQix3Q0FjTSwwREFBUSw4Q0FBUixFQWROLFdBYXRCVSxNQUFNLENBQUUsV0FBVVQsWUFBYSxHQUF6QixDQWJnQixnQkFPeEJHLFVBUHdCLHVEQU96QixNQUVNUSxhQUZOLFNBRTRCVCxPQUY1QixDQUVvQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1sQyxRQUFjVSxZQUFkLEdBQW1EO0FBQUEsc0RBQXJCLDhDQUFxQjs7QUFDakQsZ0NBQU8sS0FBS0MsbUJBQUwsRUFBUDtBQUNEOztBQUVPQyxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSx1REFBTCwyQkFBSzs7QUFBQTs7QUFDOURDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaOztBQUNBLFdBQUtMLFlBQUwsQ0FBa0JNLE9BQWxCLENBQTBCSCxJQUFJLENBQUNJLE9BQUwsRUFBMUI7O0FBQ0EsV0FBS0MsSUFBTCxDQUFVbkIsY0FBVixFQUEwQixLQUFLVyxZQUFMLENBQWtCUyxPQUFsQixFQUExQjtBQUNEOztBQWRpQyxHQVRYLFVBVVBDLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJmLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCSCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtIQWN0QkUsUUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtGQWV0QkEsUUFmc0Isa0tBbUJ0QkQsTUFuQnNCO0FBeUIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFNpbXBsZVByb3h5SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9TaW1wbGVQcm94eUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNJTVBMRV9QUk9YWSwgTVNHX1RPX0NPTlNPTEUsXG4gICAgQ29tbWFuZCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgcHJvcGVydHksIG5hbWVCeSwgaW5qZWN0LFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTaW1wbGVDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtTSU1QTEVfUFJPWFl9PmApXG4gICAgQHByb3BlcnR5IF9zaW1wbGVQcm94eUZhY3Rvcnk6ICgpID0+IFNpbXBsZVByb3h5SW50ZXJmYWNlO1xuICAgIEBwcm9wZXJ0eSBnZXQgX3NpbXBsZVByb3h5KCk6IFNpbXBsZVByb3h5SW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaW1wbGVQcm94eUZhY3RvcnkoKVxuICAgIH1cblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnU2ltcGxlQ29tbWFuZCBleGVjdXRlKCknKTtcbiAgICAgIHRoaXMuX3NpbXBsZVByb3h5LnNldERhdGEobm90ZS5nZXRCb2R5KCkpXG4gICAgICB0aGlzLnNlbmQoTVNHX1RPX0NPTlNPTEUsIHRoaXMuX3NpbXBsZVByb3h5LmdldERhdGEoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=