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

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody()); // const appMediator = ApplicationMediator.new();
      // appMediator.setName(APPLICATION_MEDIATOR);
      // appMediator.setViewComponent(app);
      // this.facade.registerMediator(appMediator);


      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      this.facade.addMediator(LOGGER, 'LoggerJunctionMediator');
      this.facade.activateMediator(APPLICATION_MEDIATOR);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9jb21tYW5kcy9QcmVwYXJlVmlld0NvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fTUVESUFUT1IiLCJMT0dHRVIiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVWaWV3Q29tbWFuZCIsImV4ZWN1dGUiLCJub3RlIiwiZ2V0Qm9keSIsImZhY2FkZSIsImFkZE1lZGlhdG9yIiwiYXBwIiwiYWN0aXZhdGVNZWRpYXRvciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOztBQUNBOzs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsb0JBREk7QUFDa0JDLElBQUFBLE1BRGxCO0FBRUpDLElBQUFBLE9BRkk7QUFFSztBQUNUQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlIsTUFBTSxDQUFDUyxFQUpYO0FBRHlCLE1BU25CQyxrQkFUbUIseUNBT3pCLDhFQUVpQ1AsT0FGakMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ0wsTUFBRCxDQVJrQixnQkFPeEJJLFVBUHdCLHVEQU96QixNQUVNTSxrQkFGTixTQUVpQ1AsT0FGakMsQ0FFeUM7QUFJL0JRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxrQkFBUyw4Q0FBVCxRQUFrQ0EsSUFBSSxDQUFDQyxPQUFMLEVBQWxDLEVBRDhELENBRTlEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFLQyxNQUFMLENBQVlDLFdBQVosQ0FBd0JkLG9CQUF4QixFQUE4QyxxQkFBOUMsRUFBcUVlLEdBQXJFO0FBQ0EsV0FBS0YsTUFBTCxDQUFZQyxXQUFaLENBQXdCYixNQUF4QixFQUFnQyx3QkFBaEM7QUFFQSxXQUFLWSxNQUFMLENBQVlHLGdCQUFaLENBQTZCaEIsb0JBQTdCO0FBQ0EsV0FBS2EsTUFBTCxDQUFZRyxnQkFBWixDQUE2QmYsTUFBN0I7QUFDRDs7QUFmc0MsR0FUaEIsVUFVUGdCLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJYLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCRixJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWF0QkMsTUFic0I7QUEwQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9BcHBsaWNhdGlvbkludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFQUExJQ0FUSU9OX01FRElBVE9SLCBMT0dHRVIsXG4gICAgQ29tbWFuZCwgLy9BcHBsaWNhdGlvbk1lZGlhdG9yLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZVZpZXdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICBjb25zdCBhcHA6IEFwcGxpY2F0aW9uSW50ZXJmYWNlID0gbm90ZS5nZXRCb2R5KCk7XG4gICAgICAvLyBjb25zdCBhcHBNZWRpYXRvciA9IEFwcGxpY2F0aW9uTWVkaWF0b3IubmV3KCk7XG4gICAgICAvLyBhcHBNZWRpYXRvci5zZXROYW1lKEFQUExJQ0FUSU9OX01FRElBVE9SKTtcbiAgICAgIC8vIGFwcE1lZGlhdG9yLnNldFZpZXdDb21wb25lbnQoYXBwKTtcbiAgICAgIC8vIHRoaXMuZmFjYWRlLnJlZ2lzdGVyTWVkaWF0b3IoYXBwTWVkaWF0b3IpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IsICdBcHBsaWNhdGlvbk1lZGlhdG9yJywgYXBwKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKExPR0dFUiwgJ0xvZ2dlckp1bmN0aW9uTWVkaWF0b3InKTtcblxuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihBUFBMSUNBVElPTl9NRURJQVRPUik7XG4gICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKExPR0dFUik7XG4gICAgfVxuICB9XG59XG4iXX0=