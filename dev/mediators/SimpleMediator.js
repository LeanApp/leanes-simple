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
          console.log('GGGGGGGGGG');
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
      process.stdin.on('data', d => {
        console.log('<<><>', d.toString());
      });
      this.rl = _readline.default.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '... waiting new text ...\n'
      });
      this.rl.setMaxListeners(Number.MAX_SAFE_INTEGER);
      console.log('SSS00U SimpleMediator', this.listNotificationInterests());
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
      this.rl.prompt(); // this.rl.once('line', (input) => {
      //   console.log(`Received: ${input}`);
      //   this.send(MSG_FROM_CONSOLE, input);
      // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaW1wbGVNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTVEFSVF9DT05TT0xFIiwiTVNHX0ZST01fQ09OU09MRSIsIk1TR19UT19DT05TT0xFIiwiTWVkaWF0b3IiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJTaW1wbGVNZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJpbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJwdXNoIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwibm90ZSIsImdldE5hbWUiLCJjb25zb2xlIiwibG9nIiwic3RkaW5TdGFydCIsInN0ZGluQ29tcGxldGUiLCJnZXRCb2R5Iiwib25SZWdpc3RlciIsInByb2Nlc3MiLCJzdGRpbiIsIm9uIiwiZCIsInRvU3RyaW5nIiwicmwiLCJyZWFkbGluZSIsImNyZWF0ZUludGVyZmFjZSIsImlucHV0Iiwib3V0cHV0Iiwic3Rkb3V0IiwicHJvbXB0Iiwic2V0TWF4TGlzdGVuZXJzIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm9uUmVtb3ZlIiwiY2xvc2UiLCJzZW5kIiwiYm9keSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsYUFESTtBQUNXQyxJQUFBQSxnQkFEWDtBQUM2QkMsSUFBQUEsY0FEN0I7QUFFSkMsSUFBQUEsUUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxRQUh0QjtBQUdnQ0MsSUFBQUEsTUFIaEM7QUFHd0NDLElBQUFBO0FB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S0FBNUI7QUFDRCxPQUhEO0FBSUQ7O0FBRU9YLElBQUFBLGFBQVIsQ0FBc0JxQixJQUF0QixFQUE0QjtBQUMxQnhCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJ1QixJQUExQjtBQUNBLFdBQUtiLEVBQUwsQ0FBUU0sTUFBUixHQUYwQixDQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQTVEbUMsR0FUYixVQVVSUSxVQVZRLEdBVUtBLFVBVkwsVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCcEMsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJILElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUdBYXRCRSxNQWJzQiwwTEFvQnRCQSxNQXBCc0IsMktBa0N0QkEsTUFsQ3NCLGlLQWdEdEJBLE1BaERzQixpS0FxRHRCQSxNQXJEc0Isc0tBOER0QkEsTUE5RHNCO0FBdUUxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU1RBUlRfQ09OU09MRSwgTVNHX0ZST01fQ09OU09MRSwgTVNHX1RPX0NPTlNPTEUsXG4gICAgTWVkaWF0b3IsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU2ltcGxlTWVkaWF0b3IgZXh0ZW5kcyBNZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgIGNvbnN0IGludGVyZXN0cyA9IHN1cGVyLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoLi4uIGFyZ3VtZW50cyk7XG4gICAgICBpbnRlcmVzdHMucHVzaChTVEFSVF9DT05TT0xFKTtcbiAgICAgIGludGVyZXN0cy5wdXNoKE1TR19UT19DT05TT0xFKTtcbiAgICAgIHJldHVybiBpbnRlcmVzdHM7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYW5kbGVOb3RpZmljYXRpb248VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6ID9Qcm9taXNlPHZvaWQ+IHtcbiAgICAgIHN3aXRjaCAobm90ZS5nZXROYW1lKCkpIHtcbiAgICAgICAgY2FzZSAoU1RBUlRfQ09OU09MRSk6XG4gICAgICAgICAgY29uc29sZS5sb2coJ0dHR0dHR0dHR0cnKTtcbiAgICAgICAgICB0aGlzLnN0ZGluU3RhcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAoTVNHX1RPX0NPTlNPTEUpOlxuICAgICAgICAgIHRoaXMuc3RkaW5Db21wbGV0ZShub3RlLmdldEJvZHkoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3VwZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2Qgb25SZWdpc3RlcigpIHtcbiAgICAgIHN1cGVyLm9uUmVnaXN0ZXIoKTtcbiAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ2RhdGEnLCAoZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnPDw+PD4nLCBkLnRvU3RyaW5nKCkpO1xuICAgICAgfSlcbiAgICAgIHRoaXMucmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcbiAgICAgICAgcHJvbXB0OiAnLi4uIHdhaXRpbmcgbmV3IHRleHQgLi4uXFxuJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJsLnNldE1heExpc3RlbmVycyhOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgICBjb25zb2xlLmxvZygnU1NTMDBVIFNpbXBsZU1lZGlhdG9yJywgdGhpcy5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkpO1xuICAgIH1cblxuICAgIEBtZXRob2QgYXN5bmMgb25SZW1vdmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBhd2FpdCBzdXBlci5vblJlbW92ZSgpO1xuICAgICAgdGhpcy5ybC5jbG9zZSgpXG4gICAgfVxuXG4gICAgQG1ldGhvZCBzdGRpblN0YXJ0KCkge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0OiAnKTtcbiAgICAgIHRoaXMucmwucHJvbXB0KCk7XG4gICAgICB0aGlzLnJsLm9uKCdsaW5lJywgKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZDogJHtpbnB1dH1gKTtcbiAgICAgICAgdGhpcy5zZW5kKE1TR19GUk9NX0NPTlNPTEUsIGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEBtZXRob2Qgc3RkaW5Db21wbGV0ZShib2R5KSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29tcGxldGU6ICcsIGJvZHkpO1xuICAgICAgdGhpcy5ybC5wcm9tcHQoKTtcbiAgICAgIC8vIHRoaXMucmwub25jZSgnbGluZScsIChpbnB1dCkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQ6ICR7aW5wdXR9YCk7XG4gICAgICAvLyAgIHRoaXMuc2VuZChNU0dfRlJPTV9DT05TT0xFLCBpbnB1dCk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==