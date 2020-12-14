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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uRmFjYWRlLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNUQVJUVVAiLCJGYWNhZGUiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJBcHBsaWNhdGlvbkZhY2FkZSIsInN0YXJ0dXAiLCJhcHAiLCJfaXNJbml0aWFsaXplZCIsInNlbmQiLCJpbml0aWFsaXplRmFjYWRlIiwiYXJndW1lbnRzIiwicmViaW5kIiwidG9Db25zdHJ1Y3RvciIsImFkZENvbW1hbmQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsTUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxRQUh0QjtBQUdnQ0MsSUFBQUEsTUFIaEM7QUFHd0NDLElBQUFBO0FBSHhDLE1BSUZSLE1BQU0sQ0FBQ1MsRUFKWDtBQUR5QixNQVNuQkMsaUJBVG1CLHlDQU96Qiw2RUFFZ0NSLE1BRmhDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGdEQUF3Qiw4QkFBeEIsQ0FORixFQVFFLHFHQVJGLEVBZUUsNEVBQTBCLDJCQUExQixFQWZGLENBUHlCLFdBUXhCRSxNQUFNLENBQUNKLE1BQUQsQ0FSa0Isd0NBYUMsOEJBYkQsaUJBT3hCRyxVQVB3Qix1REFPekIsTUFFTU8saUJBRk4sU0FFZ0NSLE1BRmhDLENBRXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTTdCUyxJQUFBQSxPQUFSLENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQixVQUFJLENBQUMsS0FBS0MsY0FBVixFQUEwQjtBQUN4QixhQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsYUFBS0MsSUFBTCxDQUFVYixPQUFWLEVBQW1CVyxHQUFuQjtBQUNEO0FBQ0Y7O0FBRU9HLElBQUFBLGdCQUFSLEdBQWlDO0FBQUEsc0RBQUwsMkJBQUs7O0FBQy9CLFlBQU1BLGdCQUFOLENBQXVCLEdBQUlDLFNBQTNCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZLG1CQUFaLEVBQWlDQyxhQUFqQyxDQUErQyxLQUFLbEIsTUFBcEQ7QUFDQSxXQUFLbUIsVUFBTCxDQUFnQmxCLE9BQWhCLEVBQXlCLGdCQUF6QjtBQUNEOztBQWpCb0MsR0FUZCxVQVVQbUIsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QmIsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJILElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUhBYXRCQyxRQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhYSxLQWJiO0FBQUE7QUFBQSw2RUFldEJDLE1BZnNCLHNLQXNCdEJBLE1BdEJzQjtBQTRCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTVEFSVFVQLFxuICAgIEZhY2FkZSxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBBcHBsaWNhdGlvbkZhY2FkZSBleHRlbmRzIEZhY2FkZSB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQG1ldGhvZCBzdGFydHVwKGFwcCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbmQoU1RBUlRVUCwgYXBwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWV0aG9kIGluaXRpYWxpemVGYWNhZGUoKTogdm9pZCB7XG4gICAgICBzdXBlci5pbml0aWFsaXplRmFjYWRlKC4uLiBhcmd1bWVudHMpXG4gICAgICB0aGlzLnJlYmluZCgnQXBwbGljYXRpb25Nb2R1bGUnKS50b0NvbnN0cnVjdG9yKHRoaXMuTW9kdWxlKTtcbiAgICAgIHRoaXMuYWRkQ29tbWFuZChTVEFSVFVQLCAnU3RhcnR1cENvbW1hbmQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==