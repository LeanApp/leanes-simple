"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _readline = _interopRequireDefault(require("readline"));

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
    START_CONSOLE,
    MSG_FROM_CONSOLE,
    MSG_TO_CONSOLE,
    Mediator,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  let SimpleMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SimpleMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref("NotificationInterface", _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }), _flowRuntime.default.method("onRegister"), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("stdinStart"), _flowRuntime.default.method("stdinComplete", _flowRuntime.default.param("body", _flowRuntime.default.any())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SimpleMediator extends Mediator {
    listNotificationInterests() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      const interests = super.listNotificationInterests(...arguments);
      interests.push(START_CONSOLE);
      interests.push(MSG_TO_CONSOLE);
      return _returnType2.assert(interests);
    }

    handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref("NotificationInterface", _flowRuntime.default.flowInto(T));

      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        case START_CONSOLE:
          this.stdinStart();
          break;

        case MSG_TO_CONSOLE:
          this.stdinComplete(note.getBody());
          break;

        default:
          super.handleNotification(note);
      }
    }

    onRegister() {
      super.onRegister();
      this.rl = _readline.default.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '... waiting new text ...\n'
      });
      this.rl.setMaxListeners(Number.MAX_SAFE_INTEGER);
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();
      this.rl.close();
    }

    stdinStart() {
      console.log('Start: ');
      this.rl.prompt();
      this.rl.on('line', input => {
        console.log(`Received: ${input}`);
        this.send(MSG_FROM_CONSOLE, input);
      });
    }

    stdinComplete(body) {
      console.log('Complete: ', body);
      this.rl.prompt();
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "stdinStart", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "stdinStart"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "stdinComplete", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "stdinComplete"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaW1wbGVNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTVEFSVF9DT05TT0xFIiwiTVNHX0ZST01fQ09OU09MRSIsIk1TR19UT19DT05TT0xFIiwiTWVkaWF0b3IiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJTaW1wbGVNZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJpbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJwdXNoIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwibm90ZSIsImdldE5hbWUiLCJzdGRpblN0YXJ0Iiwic3RkaW5Db21wbGV0ZSIsImdldEJvZHkiLCJvblJlZ2lzdGVyIiwicmwiLCJyZWFkbGluZSIsImNyZWF0ZUludGVyZmFjZSIsImlucHV0IiwicHJvY2VzcyIsInN0ZGluIiwib3V0cHV0Iiwic3Rkb3V0IiwicHJvbXB0Iiwic2V0TWF4TGlzdGVuZXJzIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm9uUmVtb3ZlIiwiY2xvc2UiLCJjb25zb2xlIiwibG9nIiwib24iLCJzZW5kIiwiYm9keSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsYUFESTtBQUNXQyxJQUFBQSxnQkFEWDtBQUM2QkMsSUFBQUEsY0FEN0I7QUFFSkMsSUFBQUEsUUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxRQUh0QjtBQUdnQ0MsSUFBQUEsTUFIaEM7QUFHd0NDLElBQUFBO0FBSHhDLE1BSUZWLE1BQU0s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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlHQWF0QkUsTUFic0IsMExBb0J0QkEsTUFwQnNCLDJLQWlDdEJBLE1BakNzQixpS0EyQ3RCQSxNQTNDc0IsaUtBZ0R0QkEsTUFoRHNCLHNLQXlEdEJBLE1BekRzQjtBQThEMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNUQVJUX0NPTlNPTEUsIE1TR19GUk9NX0NPTlNPTEUsIE1TR19UT19DT05TT0xFLFxuICAgIE1lZGlhdG9yLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFNpbXBsZU1lZGlhdG9yIGV4dGVuZHMgTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICBjb25zdCBpbnRlcmVzdHMgPSBzdXBlci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKC4uLiBhcmd1bWVudHMpO1xuICAgICAgaW50ZXJlc3RzLnB1c2goU1RBUlRfQ09OU09MRSk7XG4gICAgICBpbnRlcmVzdHMucHVzaChNU0dfVE9fQ09OU09MRSk7XG4gICAgICByZXR1cm4gaW50ZXJlc3RzO1xuICAgIH1cblxuICAgIEBtZXRob2QgaGFuZGxlTm90aWZpY2F0aW9uPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiA/UHJvbWlzZTx2b2lkPiB7XG4gICAgICBzd2l0Y2ggKG5vdGUuZ2V0TmFtZSgpKSB7XG4gICAgICAgIGNhc2UgKFNUQVJUX0NPTlNPTEUpOlxuICAgICAgICAgIHRoaXMuc3RkaW5TdGFydCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIChNU0dfVE9fQ09OU09MRSk6XG4gICAgICAgICAgdGhpcy5zdGRpbkNvbXBsZXRlKG5vdGUuZ2V0Qm9keSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdXBlci5oYW5kbGVOb3RpZmljYXRpb24obm90ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1ldGhvZCBvblJlZ2lzdGVyKCkge1xuICAgICAgc3VwZXIub25SZWdpc3RlcigpO1xuICAgICAgdGhpcy5ybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XG4gICAgICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICAgICAgICBwcm9tcHQ6ICcuLi4gd2FpdGluZyBuZXcgdGV4dCAuLi5cXG4nXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmwuc2V0TWF4TGlzdGVuZXJzKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIHRoaXMucmwuY2xvc2UoKVxuICAgIH1cblxuICAgIEBtZXRob2Qgc3RkaW5TdGFydCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydDogJyk7XG4gICAgICB0aGlzLnJsLnByb21wdCgpO1xuICAgICAgdGhpcy5ybC5vbignbGluZScsIChpbnB1dCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQ6ICR7aW5wdXR9YCk7XG4gICAgICAgIHRoaXMuc2VuZChNU0dfRlJPTV9DT05TT0xFLCBpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHN0ZGluQ29tcGxldGUoYm9keSkge1xuICAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlOiAnLCBib2R5KTtcbiAgICAgIHRoaXMucmwucHJvbXB0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=