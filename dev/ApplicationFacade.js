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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uRmFjYWRlLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJNb2R1bGUiLCJTVEFSVFVQIiwiRmFjYWRlIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiQXBwbGljYXRpb25GYWNhZGUiLCJzdGFydHVwIiwiYXBwIiwiX2lzSW5pdGlhbGl6ZWQiLCJzZW5kIiwiaW5pdGlhbGl6ZUZhY2FkZSIsImFyZ3VtZW50cyIsImFkZENvbW1hbmQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7O2VBRWdCQyxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLE1BRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsUUFIdEI7QUFHZ0NDLElBQUFBLE1BSGhDO0FBR3dDQyxJQUFBQTtBQUh4QyxNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFEeUIsTUFTbkJDLGlCQVRtQix5Q0FPekIsNkVBRWdDUixNQUZoQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxnREFBd0IsOEJBQXhCLENBTkYsRUFvQkUscUdBcEJGLEVBMkJFLDRFQUEwQiwyQkFBMUIsRUEzQkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0osTUFBRCxDQVJrQix3Q0FhQyw4QkFiRCxpQkFPeEJHLFVBUHdCLHVEQU96QixNQUVNTyxpQkFGTixTQUVnQ1IsTUFGaEMsQ0FFdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVRUyxJQUFBQSxPQUFSLENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQixVQUFJLENBQUMsS0FBS0MsY0FBVixFQUEwQjtBQUN4QixhQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsYUFBS0MsSUFBTCxDQUFVYixPQUFWLEVBQW1CVyxHQUFuQjtBQUNEO0FBQ0Y7O0FBRU9HLElBQUFBLGdCQUFSLEdBQWlDO0FBQUEsc0RBQUwsMkJBQUs7O0FBQy9CLFlBQU1BLGdCQUFOLENBQXVCLEdBQUlDLFNBQTNCO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQmhCLE9BQWhCLEVBQXlCLGdCQUF6QjtBQUNEOztBQTVCb0MsR0FUZCxVQVVQaUIsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlgsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJILElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUhBYXRCQyxRQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhYSxLQWJiO0FBQUE7QUFBQSw2RUEyQnRCQyxNQTNCc0Isc0tBa0N0QkEsTUFsQ3NCO0FBdUMxQixDOzs7QUFDRFQsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuY29uc29sZS5sb2coJz4+Pj5RUVFRIDExLTExJyk7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNUQVJUVVAsXG4gICAgRmFjYWRlLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIEFwcGxpY2F0aW9uRmFjYWRlIGV4dGVuZHMgRmFjYWRlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IF9pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBAbWV0aG9kIHN0YXRpYyBnZXRJbnN0YW5jZShhc0tleSkge1xuICAgIC8vICAgaWYgKCFhc0tleSkge1xuICAgIC8vICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGNvbnNvbGUubG9nKCc+Pj4+UVFRUSAxMy0xMysxJyk7XG4gICAgLy8gICBpZiAoIUZhY2FkZS5faW5zdGFuY2VNYXBbYXNLZXldKSB7XG4gICAgLy8gICAgIEFwcGxpY2F0aW9uRmFjYWRlLm5ldyhhc0tleSk7XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zb2xlLmxvZygnPj4+PlFRUVEgMTMtMTMrMicpO1xuICAgIC8vICAgcmV0dXJuIEZhY2FkZS5faW5zdGFuY2VNYXBbYXNLZXldO1xuICAgIC8vIH1cblxuICAgIEBtZXRob2Qgc3RhcnR1cChhcHApIHtcbiAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZW5kKFNUQVJUVVAsIGFwcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1ldGhvZCBpbml0aWFsaXplRmFjYWRlKCk6IHZvaWQge1xuICAgICAgc3VwZXIuaW5pdGlhbGl6ZUZhY2FkZSguLi4gYXJndW1lbnRzKVxuICAgICAgdGhpcy5hZGRDb21tYW5kKFNUQVJUVVAsICdTdGFydHVwQ29tbWFuZCcpO1xuICAgIH1cbiAgfVxufVxuY29uc29sZS5sb2coJz4+Pj5RUVFRIDExLTExKycpO1xuIl19