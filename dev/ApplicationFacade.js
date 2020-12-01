"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-simple.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
console.log('>>>>QQQQ 11-11');

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    STARTUP,
    Facade,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  let ApplicationFacade = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ApplicationFacade", _flowRuntime.default.extends(Facade), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_isInitialized", _flowRuntime.default.boolean()), _flowRuntime.default.method("startup", _flowRuntime.default.param("app", _flowRuntime.default.any())), _flowRuntime.default.method("initializeFacade", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.boolean()), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ApplicationFacade extends Facade {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_isInitialized", _descriptor, this);
    }

    // @method static getInstance(asKey) {
    //   if (!asKey) {
    //     return null;
    //   }
    //   console.log('>>>>QQQQ 13-13+1');
    //   if (!Facade._instanceMap[asKey]) {
    //     ApplicationFacade.new(asKey);
    //   }
    //   console.log('>>>>QQQQ 13-13+2');
    //   return Facade._instanceMap[asKey];
    // }
    startup(app) {
      if (!this._isInitialized) {
        this._isInitialized = true;
        this.send(STARTUP, app);
      }
    }

    initializeFacade() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      super.initializeFacade(...arguments);
      this.rebind('ApplicationModule').toConstructor(this.Module);
      this.addCommand(STARTUP, 'StartupCommand');
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_isInitialized", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "startup", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "startup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeFacade", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeFacade"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
console.log('>>>>QQQQ 11-11+');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uRmFjYWRlLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJNb2R1bGUiLCJTVEFSVFVQIiwiRmFjYWRlIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiQXBwbGljYXRpb25GYWNhZGUiLCJzdGFydHVwIiwiYXBwIiwiX2lzSW5pdGlhbGl6ZWQiLCJzZW5kIiwiaW5pdGlhbGl6ZUZhY2FkZSIsImFyZ3VtZW50cyIsInJlYmluZCIsInRvQ29uc3RydWN0b3IiLCJhZGRDb21tYW5kIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaOztlQUVnQkMsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSxNQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLFFBSHRCO0FBR2dDQyxJQUFBQSxNQUhoQztBQUd3Q0MsSUFBQUE7QUFIeEMsTUFJRlIsTUFBTSxDQUFDUyxFQUpYO0FBRHlCLE1BU25CQyxpQkFUbUIseUNBT3pCLDZFQUVnQ1IsTUFGaEMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUsZ0RBQXdCLDhCQUF4QixDQU5GLEVBb0JFLHFHQXBCRixFQTJCRSw0RUFBMEIsMkJBQTFCLEVBM0JGLENBUHlCLFdBUXhCRSxNQUFNLENBQUNKLE1BQUQsQ0FSa0Isd0NBYUMsOEJBYkQsaUJBT3hCRyxVQVB3Qix1REFPekIsTUFFTU8saUJBRk4sU0FFZ0NSLE1BRmhDLENBRXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFUVMsSUFBQUEsT0FBUixDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbkIsVUFBSSxDQUFDLEtBQUtDLGNBQVYsRUFBMEI7QUFDeEIsYUFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNBLGFBQUtDLElBQUwsQ0FBVWIsT0FBVixFQUFtQlcsR0FBbkI7QUFDRDtBQUNGOztBQUVPRyxJQUFBQSxnQkFBUixHQUFpQztBQUFBLHNEQUFMLDJCQUFLOztBQUMvQixZQUFNQSxnQkFBTixDQUF1QixHQUFJQyxTQUEzQjtBQUNBLFdBQUtDLE1BQUwsQ0FBWSxtQkFBWixFQUFpQ0MsYUFBakMsQ0FBK0MsS0FBS2xCLE1BQXBEO0FBQ0EsV0FBS21CLFVBQUwsQ0FBZ0JsQixPQUFoQixFQUF5QixnQkFBekI7QUFDRDs7QUE3Qm9DLEdBVGQsVUFVUG1CLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJiLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCSCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1IQWF0QkMsUUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYWEsS0FiYjtBQUFBO0FBQUEsNkVBMkJ0QkMsTUEzQnNCLHNLQWtDdEJBLE1BbENzQjtBQXdDMUIsQzs7O0FBQ0RULE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmNvbnNvbGUubG9nKCc+Pj4+UVFRUSAxMS0xMScpO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTVEFSVFVQLFxuICAgIEZhY2FkZSxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBBcHBsaWNhdGlvbkZhY2FkZSBleHRlbmRzIEZhY2FkZSB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gQG1ldGhvZCBzdGF0aWMgZ2V0SW5zdGFuY2UoYXNLZXkpIHtcbiAgICAvLyAgIGlmICghYXNLZXkpIHtcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zb2xlLmxvZygnPj4+PlFRUVEgMTMtMTMrMScpO1xuICAgIC8vICAgaWYgKCFGYWNhZGUuX2luc3RhbmNlTWFwW2FzS2V5XSkge1xuICAgIC8vICAgICBBcHBsaWNhdGlvbkZhY2FkZS5uZXcoYXNLZXkpO1xuICAgIC8vICAgfVxuICAgIC8vICAgY29uc29sZS5sb2coJz4+Pj5RUVFRIDEzLTEzKzInKTtcbiAgICAvLyAgIHJldHVybiBGYWNhZGUuX2luc3RhbmNlTWFwW2FzS2V5XTtcbiAgICAvLyB9XG5cbiAgICBAbWV0aG9kIHN0YXJ0dXAoYXBwKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VuZChTVEFSVFVQLCBhcHApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2QgaW5pdGlhbGl6ZUZhY2FkZSgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmluaXRpYWxpemVGYWNhZGUoLi4uIGFyZ3VtZW50cylcbiAgICAgIHRoaXMucmViaW5kKCdBcHBsaWNhdGlvbk1vZHVsZScpLnRvQ29uc3RydWN0b3IodGhpcy5Nb2R1bGUpO1xuICAgICAgdGhpcy5hZGRDb21tYW5kKFNUQVJUVVAsICdTdGFydHVwQ29tbWFuZCcpO1xuICAgIH1cbiAgfVxufVxuY29uc29sZS5sb2coJz4+Pj5RUVFRIDExLTExKycpO1xuIl19