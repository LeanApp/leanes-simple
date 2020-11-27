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
    //   if (!Facade._instanceMap[asKey]) {
    //     return ApplicationFacade.new(asKey);
    //   }
    //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9BcHBsaWNhdGlvbkZhY2FkZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTVEFSVFVQIiwiRmFjYWRlIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiQXBwbGljYXRpb25GYWNhZGUiLCJzdGFydHVwIiwiYXBwIiwiX2lzSW5pdGlhbGl6ZWQiLCJzZW5kIiwiaW5pdGlhbGl6ZUZhY2FkZSIsImFyZ3VtZW50cyIsImFkZENvbW1hbmQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsTUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxRQUh0QjtBQUdnQ0MsSUFBQUEsTUFIaEM7QUFHd0NDLElBQUFBO0FBSHhDLE1BSUZSLE1BQU0sQ0FBQ1MsRUFKWDtBQUR5QixNQVNuQkMsaUJBVG1CLHlDQU96Qiw2RUFFZ0NSLE1BRmhDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGdEQUF3Qiw4QkFBeEIsQ0FORixFQW1CRSxxR0FuQkYsRUEwQkUsNEVBQTBCLDJCQUExQixFQTFCRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLHdDQWFDLDhCQWJELGlCQU94QkcsVUFQd0IsdURBT3pCLE1BRU1PLGlCQUZOLFNBRWdDUixNQUZoQyxDQUV1QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1yQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVRUyxJQUFBQSxPQUFSLENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQixVQUFJLENBQUMsS0FBS0MsY0FBVixFQUEwQjtBQUN4QixhQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsYUFBS0MsSUFBTCxDQUFVYixPQUFWLEVBQW1CVyxHQUFuQjtBQUNEO0FBQ0Y7O0FBRU9HLElBQUFBLGdCQUFSLEdBQWlDO0FBQUEsc0RBQUwsMkJBQUs7O0FBQy9CLFlBQU1BLGdCQUFOLENBQXVCLEdBQUlDLFNBQTNCO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQmhCLE9BQWhCLEVBQXlCLGdCQUF6QjtBQUNEOztBQTNCb0MsR0FUZCxVQVVQaUIsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlgsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJILElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUhBYXRCQyxRQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhYSxLQWJiO0FBQUE7QUFBQSw2RUEwQnRCQyxNQTFCc0Isc0tBaUN0QkEsTUFqQ3NCO0FBc0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNUQVJUVVAsXG4gICAgRmFjYWRlLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIEFwcGxpY2F0aW9uRmFjYWRlIGV4dGVuZHMgRmFjYWRlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IF9pc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBAbWV0aG9kIHN0YXRpYyBnZXRJbnN0YW5jZShhc0tleSkge1xuICAgIC8vICAgaWYgKCFhc0tleSkge1xuICAgIC8vICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmICghRmFjYWRlLl9pbnN0YW5jZU1hcFthc0tleV0pIHtcbiAgICAvLyAgICAgcmV0dXJuIEFwcGxpY2F0aW9uRmFjYWRlLm5ldyhhc0tleSk7XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIHJldHVybiBGYWNhZGUuX2luc3RhbmNlTWFwW2FzS2V5XTtcbiAgICAvLyB9XG5cbiAgICBAbWV0aG9kIHN0YXJ0dXAoYXBwKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VuZChTVEFSVFVQLCBhcHApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2QgaW5pdGlhbGl6ZUZhY2FkZSgpOiB2b2lkIHtcbiAgICAgIHN1cGVyLmluaXRpYWxpemVGYWNhZGUoLi4uIGFyZ3VtZW50cylcbiAgICAgIHRoaXMuYWRkQ29tbWFuZChTVEFSVFVQLCAnU3RhcnR1cENvbW1hbmQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==