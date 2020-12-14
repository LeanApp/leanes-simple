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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvU2ltcGxlU2NyaXB0LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNJTVBMRV9QUk9YWSIsIk1TR19UT19DT05TT0xFIiwiU2NyaXB0IiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIk5TIiwiU2ltcGxlU2NyaXB0IiwiX3NpbXBsZVByb3h5IiwiX3NpbXBsZVByb3h5RmFjdG9yeSIsImJvZHkiLCJkYXRhIiwic2V0RGF0YSIsInNlbmQiLCJnZXREYXRhIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBSWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxZQURJO0FBQ1VDLElBQUFBLGNBRFY7QUFFSkMsSUFBQUEsTUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsUUFIOUI7QUFHd0NDLElBQUFBLE1BSHhDO0FBR2dEQyxJQUFBQTtBQUhoRCxNQUlGVixNQUFNLENBQUNXLEVBSlg7QUFEeUIsTUFTbkJDLFlBVG1CLHlDQU96Qix3RUFFMkJULE1BRjNCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLHFEQUM2QiwwREFBUSw4Q0FBUixFQUQ3QixDQU5GLEVBUUUsd0VBQTRCLDhDQUE1QixFQVJGLEVBWUUsdUVBQXVCLDhCQUFHLDBCQUFILENBQXZCLCtCQUE4QixvQ0FBVSw4QkFBQywwQkFBRCxDQUFWLENBQTlCLEVBWkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0wsTUFBRCxDQVJrQix3Q0FjTSwwREFBUSw4Q0FBUixFQWROLFdBYXRCVSxNQUFNLENBQUUsV0FBVVQsWUFBYSxHQUF6QixDQWJnQixnQkFPeEJHLFVBUHdCLHVEQU96QixNQUVNUSxZQUZOLFNBRTJCVCxNQUYzQixDQUVrQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1oQyxRQUFjVSxZQUFkLEdBQW1EO0FBQUEsdURBQXJCLDhDQUFxQjs7QUFDakQsaUNBQU8sS0FBS0MsbUJBQUwsRUFBUDtBQUNEOztBQUVELFVBQWNDLElBQWQsQ0FBbUJDLElBQW5CLEVBQThDO0FBQUEsc0JBQXZCLDhCQUFHLDBCQUFILENBQXVCOztBQUFBLGlGQUFOLDhCQUFDLDBCQUFELENBQU0sRUFBZCxvQ0FBUSw4QkFBQywwQkFBRCxDQUFSLENBQWM7O0FBQUE7O0FBQzVDLFdBQUtILFlBQUwsQ0FBa0JJLE9BQWxCLENBQTBCLEVBQTFCOztBQUNBLFlBQU0sS0FBS0MsSUFBTCxDQUFVaEIsY0FBVixFQUEwQixLQUFLVyxZQUFMLENBQWtCTSxPQUFsQixFQUExQixDQUFOO0FBQ0EsZ0NBQU8scUJBQVA7QUFDRDs7QUFkK0IsR0FUVCxVQVVQQyxVQVZPLEdBVU1BLFVBVk4sVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCWixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkgsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSEFjdEJFLFFBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrRkFldEJBLFFBZnNCLCtKQW1CdEJELE1BbkJzQjtBQXlCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgU2ltcGxlUHJveHlJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1NpbXBsZVByb3h5SW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU0lNUExFX1BST1hZLCBNU0dfVE9fQ09OU09MRSxcbiAgICBTY3JpcHQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIHByb3BlcnR5LCBuYW1lQnksIGluamVjdFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTaW1wbGVTY3JpcHQgZXh0ZW5kcyBTY3JpcHQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0lNUExFX1BST1hZfT5gKVxuICAgIEBwcm9wZXJ0eSBfc2ltcGxlUHJveHlGYWN0b3J5OiAoKSA9PiBTaW1wbGVQcm94eUludGVyZmFjZTtcbiAgICBAcHJvcGVydHkgZ2V0IF9zaW1wbGVQcm94eSgpOiBTaW1wbGVQcm94eUludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2ltcGxlUHJveHlGYWN0b3J5KClcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGJvZHkoZGF0YTogP2FueSk6IFByb21pc2U8P2FueT4ge1xuICAgICAgdGhpcy5fc2ltcGxlUHJveHkuc2V0RGF0YSgnJyk7XG4gICAgICBhd2FpdCB0aGlzLnNlbmQoTVNHX1RPX0NPTlNPTEUsIHRoaXMuX3NpbXBsZVByb3h5LmdldERhdGEoKSk7XG4gICAgICByZXR1cm4gJ2NsZWFyaW5nIGNvbXBsZWF0ZWQnO1xuICAgIH1cbiAgfVxufVxuIl19