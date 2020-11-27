"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _ApplicationInterface2 = require("../interfaces/ApplicationInterface");

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
const ApplicationInterface = _flowRuntime.default.tdz(() => _ApplicationInterface2.ApplicationInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_PROXY,
    SIMPLE_PROXY,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareModelCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareModelCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareModelCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      console.log('PrepareModelCommand execute()');

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      this.facade.addProxy(APPLICATION_PROXY, 'ApplicationProxy', app.initialState);
      this.facade.addAdapter('SimpleAdapter');
      this.facade.addProxy(SIMPLE_PROXY, 'SimpleProxy');
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVNb2RlbENvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUFJPWFkiLCJTSU1QTEVfUFJPWFkiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVNb2RlbENvbW1hbmQiLCJleGVjdXRlIiwibm90ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRCb2R5IiwiZmFjYWRlIiwiYWRkUHJveHkiLCJhcHAiLCJpbml0aWFsU3RhdGUiLCJhZGRBZGFwdGVyIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZUE7O0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFLZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGlCQURJO0FBQ2VDLElBQUFBLFlBRGY7QUFFSkMsSUFBQUEsT0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlIsTUFBTSxDQUFDUyxFQUpYO0FBRHlCLE1BU25CQyxtQkFUbUIseUNBT3pCLCtFQUVrQ1AsT0FGbEMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0wsTUFBRCxDQVJrQixnQkFPeEJJLFVBUHdCLHVEQU96QixNQUVNTSxtQkFGTixTQUVrQ1AsT0FGbEMsQ0FFMEM7QUFJaENRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5REMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7O0FBQ0Esa0JBQVMsOENBQVQsUUFBa0NGLElBQUksQ0FBQ0csT0FBTCxFQUFsQzs7QUFDQSxXQUFLQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJoQixpQkFBckIsRUFBd0Msa0JBQXhDLEVBQTREaUIsR0FBRyxDQUFDQyxZQUFoRTtBQUNBLFdBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixlQUF2QjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmYsWUFBckIsRUFBbUMsYUFBbkM7QUFDRDs7QUFWdUMsR0FUakIsVUFVUG1CLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJkLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRixJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWF0QkMsTUFic0I7QUFxQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zaW1wbGUuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0FwcGxpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQVBQTElDQVRJT05fUFJPWFksIFNJTVBMRV9QUk9YWSxcbiAgICBDb21tYW5kLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZU1vZGVsQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIGV4ZWN1dGU8VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ1ByZXBhcmVNb2RlbENvbW1hbmQgZXhlY3V0ZSgpJyk7XG4gICAgICBjb25zdCBhcHA6IEFwcGxpY2F0aW9uSW50ZXJmYWNlID0gbm90ZS5nZXRCb2R5KCk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRQcm94eShBUFBMSUNBVElPTl9QUk9YWSwgJ0FwcGxpY2F0aW9uUHJveHknLCBhcHAuaW5pdGlhbFN0YXRlKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZEFkYXB0ZXIoJ1NpbXBsZUFkYXB0ZXInKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KFNJTVBMRV9QUk9YWSwgJ1NpbXBsZVByb3h5Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=