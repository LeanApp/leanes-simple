"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Proxy,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let ApplicationProxy = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ApplicationProxy", _flowRuntime.default.extends(Proxy), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("onRegister"), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ApplicationProxy extends Proxy {
    onRegister() {
      console.log('ApplicationProxy registered');
      super.onRegister();
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvQXBwbGljYXRpb25Qcm94eS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJQcm94eSIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJBcHBsaWNhdGlvblByb3h5Iiwib25SZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJvblJlbW92ZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsS0FESTtBQUVKQyxJQUFBQSxVQUZJO0FBRVFDLElBQUFBLE1BRlI7QUFFZ0JDLElBQUFBLElBRmhCO0FBRXNCQyxJQUFBQSxNQUZ0QjtBQUU4QkMsSUFBQUE7QUFGOUIsTUFHRk4sTUFBTSxDQUFDTyxFQUhYO0FBRHlCLE1BUW5CQyxnQkFSbUIseUNBTXpCLDRFQUUrQlAsS0FGL0IsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUseUNBTkYsRUFXRSxvRUFBd0Isb0NBQVUsMkJBQVYsQ0FBeEIsRUFYRixDQU55QixXQU94QkUsTUFBTSxDQUFDSCxNQUFELENBUGtCLGdCQU14QkUsVUFOd0IsdURBTXpCLE1BRU1NLGdCQUZOLFNBRStCUCxLQUYvQixDQUVxQztBQUkzQlEsSUFBQUEsVUFBUixHQUFxQjtBQUNuQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQSxZQUFNRixVQUFOO0FBQ0Q7O0FBRUQsVUFBY0csUUFBZCxHQUF3QztBQUFBLGlGQUFOLDJCQUFNLEVBQWQsb0NBQVEsMkJBQVIsQ0FBYzs7QUFDdEMsWUFBTSxNQUFNQSxRQUFOLEVBQU47QUFFRDs7QUFaa0MsR0FSWixVQVNQQyxVQVRPLEdBU01BLFVBVE4sVUFVVkMsTUFWVSxHQVVELEVBVkMsMkVBU3RCUixNQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVV0QkYsSUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRkFZdEJDLE1BWnNCLGlLQWlCdEJBLE1BakJzQjtBQXNCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFByb3h5LFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnksXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIEFwcGxpY2F0aW9uUHJveHkgZXh0ZW5kcyBQcm94eSB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2Qgb25SZWdpc3RlcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvblByb3h5IHJlZ2lzdGVyZWQnKTtcbiAgICAgIHN1cGVyLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcblxuICAgIH1cbiAgfVxufVxuIl19