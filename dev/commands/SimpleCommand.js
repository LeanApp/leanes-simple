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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1NpbXBsZUNvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0lNUExFX1BST1hZIiwiTVNHX1RPX0NPTlNPTEUiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIk5TIiwiU2ltcGxlQ29tbWFuZCIsIl9zaW1wbGVQcm94eSIsIl9zaW1wbGVQcm94eUZhY3RvcnkiLCJleGVjdXRlIiwibm90ZSIsInNldERhdGEiLCJnZXRCb2R5Iiwic2VuZCIsImdldERhdGEiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFLZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFlBREk7QUFDVUMsSUFBQUEsY0FEVjtBQUVKQyxJQUFBQSxPQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxRQUg5QjtBQUd3Q0MsSUFBQUEsTUFIeEM7QUFHZ0RDLElBQUFBO0FBSGhELE1BSUZWLE1BQU0sQ0FBQ1csRUFKWDtBQUR5QixNQVNuQkMsYUFUbUIseUNBT3pCLHlFQUU0QlQsT0FGNUIsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUscURBQzZCLDBEQUFRLDhDQUFSLEVBRDdCLENBTkYsRUFRRSx3RUFBNEIsOENBQTVCLEVBUkYsRUFZRTtBQUFBLGdEQUFvQiw4QkFBQywwQkFBRCxDQUFwQjs7QUFBQSwrQ0FBOEIsZ0RBQXdCLGdDQUF4QixDQUE5QiwrQkFBeUQsMkJBQXpEO0FBQUEsSUFaRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDTCxNQUFELENBUmtCLHdDQWNNLDBEQUFRLDhDQUFSLEVBZE4sV0FhdEJVLE1BQU0sQ0FBRSxXQUFVVCxZQUFhLEdBQXpCLENBYmdCLGdCQU94QkcsVUFQd0IsdURBT3pCLE1BRU1RLGFBRk4sU0FFNEJULE9BRjVCLENBRW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWxDLFFBQWNVLFlBQWQsR0FBbUQ7QUFBQSxzREFBckIsOENBQXFCOztBQUNqRCxnQ0FBTyxLQUFLQyxtQkFBTCxFQUFQO0FBQ0Q7O0FBRU9DLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHVEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxXQUFLSCxZQUFMLENBQWtCSSxPQUFsQixDQUEwQkQsSUFBSSxDQUFDRSxPQUFMLEVBQTFCOztBQUNBLFdBQUtDLElBQUwsQ0FBVWpCLGNBQVYsRUFBMEIsS0FBS1csWUFBTCxDQUFrQk8sT0FBbEIsRUFBMUI7QUFDRDs7QUFiaUMsR0FUWCxVQVVQQyxVQVZPLEdBVU1BLFVBVk4sVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCYixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkgsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSEFjdEJFLFFBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrRkFldEJBLFFBZnNCLGtLQW1CdEJELE1BbkJzQjtBQXdCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBTaW1wbGVQcm94eUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvU2ltcGxlUHJveHlJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTSU1QTEVfUFJPWFksIE1TR19UT19DT05TT0xFLFxuICAgIENvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIHByb3BlcnR5LCBuYW1lQnksIGluamVjdCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU2ltcGxlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0lNUExFX1BST1hZfT5gKVxuICAgIEBwcm9wZXJ0eSBfc2ltcGxlUHJveHlGYWN0b3J5OiAoKSA9PiBTaW1wbGVQcm94eUludGVyZmFjZTtcbiAgICBAcHJvcGVydHkgZ2V0IF9zaW1wbGVQcm94eSgpOiBTaW1wbGVQcm94eUludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2ltcGxlUHJveHlGYWN0b3J5KClcbiAgICB9XG5cbiAgICBAbWV0aG9kIGV4ZWN1dGU8VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6IHZvaWQge1xuICAgICAgdGhpcy5fc2ltcGxlUHJveHkuc2V0RGF0YShub3RlLmdldEJvZHkoKSlcbiAgICAgIHRoaXMuc2VuZChNU0dfVE9fQ09OU09MRSwgdGhpcy5fc2ltcGxlUHJveHkuZ2V0RGF0YSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==