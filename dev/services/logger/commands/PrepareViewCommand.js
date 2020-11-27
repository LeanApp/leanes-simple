"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../../../interfaces/NotificationInterface");

var _ApplicationInterface2 = require("../../../interfaces/ApplicationInterface");

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
const ApplicationInterface = _flowRuntime.default.tdz(() => _ApplicationInterface2.ApplicationInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_MEDIATOR,
    LOGGER,
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

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      const appMediator = ApplicationMediator.new();
      appMediator.setName(APPLICATION_MEDIATOR);
      appMediator.setViewComponent(app);
      this.facade.registerMediator(appMediator); // this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      // this.facade.activateMediator(APPLICATION_MEDIATOR);

      this.facade.addMediator(LOGGER, 'LoggerJunctionMediator');
      this.facade.activateMediator(LOGGER);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9jb21tYW5kcy9QcmVwYXJlVmlld0NvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fTUVESUFUT1IiLCJMT0dHRVIiLCJDb21tYW5kIiwiQXBwbGljYXRpb25NZWRpYXRvciIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJQcmVwYXJlVmlld0NvbW1hbmQiLCJleGVjdXRlIiwibm90ZSIsImdldEJvZHkiLCJhcHBNZWRpYXRvciIsIm5ldyIsInNldE5hbWUiLCJzZXRWaWV3Q29tcG9uZW50IiwiYXBwIiwiZmFjYWRlIiwicmVnaXN0ZXJNZWRpYXRvciIsImFkZE1lZGlhdG9yIiwiYWN0aXZhdGVNZWRpYXRvciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOztBQUNBOzs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsb0JBREk7QUFDa0JDLElBQUFBLE1BRGxCO0FBRUpDLElBQUFBLE9BRkk7QUFFS0MsSUFBQUEsbUJBRkw7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBO0FBSDlCLE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQUR5QixNQVNuQkMsa0JBVG1CLHlDQU96Qiw4RUFFaUNSLE9BRmpDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FO0FBQUEsZ0RBQW9CLDhCQUFDLDBCQUFELENBQXBCOztBQUFBLCtDQUE4QixnREFBd0IsZ0NBQXhCLENBQTlCLCtCQUF5RCwyQkFBekQ7QUFBQSxJQU5GLENBUHlCLFdBUXhCRyxNQUFNLENBQUNOLE1BQUQsQ0FSa0IsZ0JBT3hCSyxVQVB3Qix1REFPekIsTUFFTU0sa0JBRk4sU0FFaUNSLE9BRmpDLENBRXlDO0FBSS9CUyxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSxzREFBTCwyQkFBSzs7QUFBQTs7QUFDOUQsa0JBQVMsOENBQVQsUUFBa0NBLElBQUksQ0FBQ0MsT0FBTCxFQUFsQzs7QUFDQSxZQUFNQyxXQUFXLEdBQUdYLG1CQUFtQixDQUFDWSxHQUFwQixFQUFwQjtBQUNBRCxNQUFBQSxXQUFXLENBQUNFLE9BQVosQ0FBb0JoQixvQkFBcEI7QUFDQWMsTUFBQUEsV0FBVyxDQUFDRyxnQkFBWixDQUE2QkMsR0FBN0I7QUFDQSxXQUFLQyxNQUFMLENBQVlDLGdCQUFaLENBQTZCTixXQUE3QixFQUw4RCxDQU05RDtBQUNBOztBQUVBLFdBQUtLLE1BQUwsQ0FBWUUsV0FBWixDQUF3QnBCLE1BQXhCLEVBQWdDLHdCQUFoQztBQUNBLFdBQUtrQixNQUFMLENBQVlHLGdCQUFaLENBQTZCckIsTUFBN0I7QUFDRDs7QUFmc0MsR0FUaEIsVUFVUHNCLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJoQixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkYsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFhdEJDLE1BYnNCO0FBMEIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9NRURJQVRPUiwgTE9HR0VSLFxuICAgIENvbW1hbmQsIEFwcGxpY2F0aW9uTWVkaWF0b3IsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBQcmVwYXJlVmlld0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIGNvbnN0IGFwcDogQXBwbGljYXRpb25JbnRlcmZhY2UgPSBub3RlLmdldEJvZHkoKTtcbiAgICAgIGNvbnN0IGFwcE1lZGlhdG9yID0gQXBwbGljYXRpb25NZWRpYXRvci5uZXcoKTtcbiAgICAgIGFwcE1lZGlhdG9yLnNldE5hbWUoQVBQTElDQVRJT05fTUVESUFUT1IpO1xuICAgICAgYXBwTWVkaWF0b3Iuc2V0Vmlld0NvbXBvbmVudChhcHApO1xuICAgICAgdGhpcy5mYWNhZGUucmVnaXN0ZXJNZWRpYXRvcihhcHBNZWRpYXRvcik7XG4gICAgICAvLyB0aGlzLmZhY2FkZS5hZGRNZWRpYXRvcihBUFBMSUNBVElPTl9NRURJQVRPUiwgJ0FwcGxpY2F0aW9uTWVkaWF0b3InLCBhcHApO1xuICAgICAgLy8gdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihBUFBMSUNBVElPTl9NRURJQVRPUik7XG5cbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKExPR0dFUiwgJ0xvZ2dlckp1bmN0aW9uTWVkaWF0b3InKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoTE9HR0VSKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==