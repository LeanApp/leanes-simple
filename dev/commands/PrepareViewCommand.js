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
    APPLICATION_MEDIATOR,
    SHELL,
    LOGGER_MODULE,
    Command,
    ApplicationMediator,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareViewCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareViewCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareViewCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      console.log('PrepareViewCommand execute()');

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      const appMediator = ApplicationMediator.new();
      appMediator.setName(APPLICATION_MEDIATOR);
      appMediator.setViewComponent(app);
      this.facade.registerMediator(appMediator);
      this.facade.addMediator(LOGGER_MODULE, 'LoggerModuleMediator');
      this.facade.addMediator(SHELL, 'ShellJunctionMediator');
      this.facade.addMediator('SimpleMediator'); // this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      // this.facade.activateMediator(APPLICATION_MEDIATOR);

      this.facade.activateMediator(LOGGER_MODULE);
      this.facade.activateMediator(SHELL);
      this.facade.activateMediator('SimpleMediator');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVWaWV3Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9NRURJQVRPUiIsIlNIRUxMIiwiTE9HR0VSX01PRFVMRSIsIkNvbW1hbmQiLCJBcHBsaWNhdGlvbk1lZGlhdG9yIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVWaWV3Q29tbWFuZCIsImV4ZWN1dGUiLCJub3RlIiwiY29uc29sZSIsImxvZyIsImdldEJvZHkiLCJhcHBNZWRpYXRvciIsIm5ldyIsInNldE5hbWUiLCJzZXRWaWV3Q29tcG9uZW50IiwiYXBwIiwiZmFjYWRlIiwicmVnaXN0ZXJNZWRpYXRvciIsImFkZE1lZGlhdG9yIiwiYWN0aXZhdGVNZWRpYXRvciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxvQkFESTtBQUNrQkMsSUFBQUEsS0FEbEI7QUFDeUJDLElBQUFBLGFBRHpCO0FBRUpDLElBQUFBLE9BRkk7QUFFS0MsSUFBQUEsbUJBRkw7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBO0FBSDlCLE1BSUZWLE1BQU0sQ0FBQ1csRUFKWDtBQUR5QixNQVNuQkMsa0JBVG1CLHlDQU96Qiw4RUFFaUNSLE9BRmpDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FO0FBQUEsZ0RBQW9CLDhCQUFDLDBCQUFELENBQXBCOztBQUFBLCtDQUE4QixnREFBd0IsZ0NBQXhCLENBQTlCLCtCQUF5RCwyQkFBekQ7QUFBQSxJQU5GLENBUHlCLFdBUXhCRyxNQUFNLENBQUNQLE1BQUQsQ0FSa0IsZ0JBT3hCTSxVQVB3Qix1REFPekIsTUFFTU0sa0JBRk4sU0FFaUNSLE9BRmpDLENBRXlDO0FBSS9CUyxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSxzREFBTCwyQkFBSzs7QUFBQTs7QUFDOURDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaOztBQUNBLGtCQUFTLDhDQUFULFFBQWtDRixJQUFJLENBQUNHLE9BQUwsRUFBbEM7O0FBRUEsWUFBTUMsV0FBVyxHQUFHYixtQkFBbUIsQ0FBQ2MsR0FBcEIsRUFBcEI7QUFDQUQsTUFBQUEsV0FBVyxDQUFDRSxPQUFaLENBQW9CbkIsb0JBQXBCO0FBQ0FpQixNQUFBQSxXQUFXLENBQUNHLGdCQUFaLENBQTZCQyxHQUE3QjtBQUNBLFdBQUtDLE1BQUwsQ0FBWUMsZ0JBQVosQ0FBNkJOLFdBQTdCO0FBRUEsV0FBS0ssTUFBTCxDQUFZRSxXQUFaLENBQXdCdEIsYUFBeEIsRUFBdUMsc0JBQXZDO0FBQ0EsV0FBS29CLE1BQUwsQ0FBWUUsV0FBWixDQUF3QnZCLEtBQXhCLEVBQStCLHVCQUEvQjtBQUNBLFdBQUtxQixNQUFMLENBQVlFLFdBQVosQ0FBd0IsZ0JBQXhCLEVBWDhELENBWTlEO0FBQ0E7O0FBRUEsV0FBS0YsTUFBTCxDQUFZRyxnQkFBWixDQUE2QnZCLGFBQTdCO0FBQ0EsV0FBS29CLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJ4QixLQUE3QjtBQUNBLFdBQUtxQixNQUFMLENBQVlHLGdCQUFaLENBQTZCLGdCQUE3QjtBQUNEOztBQXRCc0MsR0FUaEIsVUFVUEMsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QmxCLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRixJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWF0QkMsTUFic0I7QUFpQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zaW1wbGUuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0FwcGxpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQVBQTElDQVRJT05fTUVESUFUT1IsIFNIRUxMLCBMT0dHRVJfTU9EVUxFLFxuICAgIENvbW1hbmQsIEFwcGxpY2F0aW9uTWVkaWF0b3IsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBQcmVwYXJlVmlld0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcmVwYXJlVmlld0NvbW1hbmQgZXhlY3V0ZSgpJyk7XG4gICAgICBjb25zdCBhcHA6IEFwcGxpY2F0aW9uSW50ZXJmYWNlID0gbm90ZS5nZXRCb2R5KCk7XG5cbiAgICAgIGNvbnN0IGFwcE1lZGlhdG9yID0gQXBwbGljYXRpb25NZWRpYXRvci5uZXcoKTtcbiAgICAgIGFwcE1lZGlhdG9yLnNldE5hbWUoQVBQTElDQVRJT05fTUVESUFUT1IpO1xuICAgICAgYXBwTWVkaWF0b3Iuc2V0Vmlld0NvbXBvbmVudChhcHApO1xuICAgICAgdGhpcy5mYWNhZGUucmVnaXN0ZXJNZWRpYXRvcihhcHBNZWRpYXRvcik7XG5cbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKExPR0dFUl9NT0RVTEUsICdMb2dnZXJNb2R1bGVNZWRpYXRvcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoU0hFTEwsICdTaGVsbEp1bmN0aW9uTWVkaWF0b3InKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKCdTaW1wbGVNZWRpYXRvcicpO1xuICAgICAgLy8gdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IsICdBcHBsaWNhdGlvbk1lZGlhdG9yJywgYXBwKTtcbiAgICAgIC8vIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IpO1xuXG4gICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKExPR0dFUl9NT0RVTEUpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihTSEVMTCk7XG4gICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKCdTaW1wbGVNZWRpYXRvcicpO1xuICAgIH1cbiAgfVxufVxuIl19