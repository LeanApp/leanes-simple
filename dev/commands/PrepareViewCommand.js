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
    //ApplicationMediator,
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

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody()); // const appMediator = ApplicationMediator.new();
      // appMediator.setName(APPLICATION_MEDIATOR);
      // appMediator.setViewComponent(app);
      // this.facade.registerMediator(appMediator);


      this.facade.addMediator(LOGGER_MODULE, 'LoggerModuleMediator');
      this.facade.addMediator(SHELL, 'ShellJunctionMediator');
      this.facade.addMediator('SimpleMediator');
      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      this.facade.activateMediator(APPLICATION_MEDIATOR);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVWaWV3Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9NRURJQVRPUiIsIlNIRUxMIiwiTE9HR0VSX01PRFVMRSIsIkNvbW1hbmQiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiUHJlcGFyZVZpZXdDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Qm9keSIsImZhY2FkZSIsImFkZE1lZGlhdG9yIiwiYXBwIiwiYWN0aXZhdGVNZWRpYXRvciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxvQkFESTtBQUNrQkMsSUFBQUEsS0FEbEI7QUFDeUJDLElBQUFBLGFBRHpCO0FBRUpDLElBQUFBLE9BRkk7QUFFSztBQUNUQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlQsTUFBTSxDQUFDVSxFQUpYO0FBRHlCLE1BU25CQyxrQkFUbUIseUNBT3pCLDhFQUVpQ1AsT0FGakMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ04sTUFBRCxDQVJrQixnQkFPeEJLLFVBUHdCLHVEQU96QixNQUVNTSxrQkFGTixTQUVpQ1AsT0FGakMsQ0FFeUM7QUFJL0JRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5REMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVo7O0FBQ0Esa0JBQVMsOENBQVQsUUFBa0NGLElBQUksQ0FBQ0csT0FBTCxFQUFsQyxFQUY4RCxDQUk5RDtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsV0FBS0MsTUFBTCxDQUFZQyxXQUFaLENBQXdCZixhQUF4QixFQUF1QyxzQkFBdkM7QUFDQSxXQUFLYyxNQUFMLENBQVlDLFdBQVosQ0FBd0JoQixLQUF4QixFQUErQix1QkFBL0I7QUFDQSxXQUFLZSxNQUFMLENBQVlDLFdBQVosQ0FBd0IsZ0JBQXhCO0FBQ0EsV0FBS0QsTUFBTCxDQUFZQyxXQUFaLENBQXdCakIsb0JBQXhCLEVBQThDLHFCQUE5QyxFQUFxRWtCLEdBQXJFO0FBRUEsV0FBS0YsTUFBTCxDQUFZRyxnQkFBWixDQUE2Qm5CLG9CQUE3QjtBQUNBLFdBQUtnQixNQUFMLENBQVlHLGdCQUFaLENBQTZCakIsYUFBN0I7QUFDQSxXQUFLYyxNQUFMLENBQVlHLGdCQUFaLENBQTZCbEIsS0FBN0I7QUFDQSxXQUFLZSxNQUFMLENBQVlHLGdCQUFaLENBQTZCLGdCQUE3QjtBQUNEOztBQXRCc0MsR0FUaEIsVUFVUEMsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QmIsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJGLElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBYXRCQyxNQWJzQjtBQWlDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9NRURJQVRPUiwgU0hFTEwsIExPR0dFUl9NT0RVTEUsXG4gICAgQ29tbWFuZCwgLy9BcHBsaWNhdGlvbk1lZGlhdG9yLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZVZpZXdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnUHJlcGFyZVZpZXdDb21tYW5kIGV4ZWN1dGUoKScpO1xuICAgICAgY29uc3QgYXBwOiBBcHBsaWNhdGlvbkludGVyZmFjZSA9IG5vdGUuZ2V0Qm9keSgpO1xuXG4gICAgICAvLyBjb25zdCBhcHBNZWRpYXRvciA9IEFwcGxpY2F0aW9uTWVkaWF0b3IubmV3KCk7XG4gICAgICAvLyBhcHBNZWRpYXRvci5zZXROYW1lKEFQUExJQ0FUSU9OX01FRElBVE9SKTtcbiAgICAgIC8vIGFwcE1lZGlhdG9yLnNldFZpZXdDb21wb25lbnQoYXBwKTtcbiAgICAgIC8vIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IoYXBwTWVkaWF0b3IpO1xuXG4gICAgICB0aGlzLmZhY2FkZS5hZGRNZWRpYXRvcihMT0dHRVJfTU9EVUxFLCAnTG9nZ2VyTW9kdWxlTWVkaWF0b3InKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKFNIRUxMLCAnU2hlbGxKdW5jdGlvbk1lZGlhdG9yJyk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRNZWRpYXRvcignU2ltcGxlTWVkaWF0b3InKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKEFQUExJQ0FUSU9OX01FRElBVE9SLCAnQXBwbGljYXRpb25NZWRpYXRvcicsIGFwcCk7XG5cbiAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihMT0dHRVJfTU9EVUxFKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoU0hFTEwpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcignU2ltcGxlTWVkaWF0b3InKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==