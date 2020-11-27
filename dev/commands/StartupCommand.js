"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

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
const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    STARTUP,
    STARTUP_COMPLETE,
    Command,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let StartupCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("StartupCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("initializeSubCommands", _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class StartupCommand extends Command {
    initializeSubCommands() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
    }

    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      console.log('StartupCommand execute()');
      super.execute(note);
      console.log('StartupCommand execute()--');
      this.facade.removeCommand(STARTUP);
      this.send(STARTUP_COMPLETE);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeSubCommands", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeSubCommands"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1N0YXJ0dXBDb21tYW5kLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNUQVJUVVAiLCJTVEFSVFVQX0NPTVBMRVRFIiwiQ29tbWFuZCIsIlByZXBhcmVDb250cm9sbGVyQ29tbWFuZCIsIlByZXBhcmVNb2RlbENvbW1hbmQiLCJQcmVwYXJlVmlld0NvbW1hbmQiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiU3RhcnR1cENvbW1hbmQiLCJpbml0aWFsaXplU3ViQ29tbWFuZHMiLCJhZGRTdWJDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJjb25zb2xlIiwibG9nIiwiZmFjYWRlIiwicmVtb3ZlQ29tbWFuZCIsInNlbmQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUNLQyxJQUFBQSxnQkFETDtBQUVKQyxJQUFBQSxPQUZJO0FBR0pDLElBQUFBLHdCQUhJO0FBSUpDLElBQUFBLG1CQUpJO0FBS0pDLElBQUFBLGtCQUxJO0FBTUpDLElBQUFBLFVBTkk7QUFNUUMsSUFBQUEsTUFOUjtBQU1nQkMsSUFBQUEsSUFOaEI7QUFNc0JDLElBQUFBLE1BTnRCO0FBTThCQyxJQUFBQTtBQU45QixNQU9GWCxNQUFNLENBQUNZLEVBUFg7QUFEeUIsTUFZbkJDLGNBWm1CLHlDQVV6QiwwRUFFNkJWLE9BRjdCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGlGQUErQiwyQkFBL0IsRUFORixFQVlFO0FBQUEsZ0RBQW9CLDhCQUFDLDBCQUFELENBQXBCOztBQUFBLCtDQUE4QixnREFBd0IsZ0NBQXhCLENBQTlCLCtCQUF5RCwyQkFBekQ7QUFBQSxJQVpGLENBVnlCLFdBV3hCSyxNQUFNLENBQUNSLE1BQUQsQ0FYa0IsZ0JBVXhCTyxVQVZ3Qix1REFVekIsTUFFTU0sY0FGTixTQUU2QlYsT0FGN0IsQ0FFcUM7QUFJM0JXLElBQUFBLHFCQUFSLEdBQXNDO0FBQUEsc0RBQUwsMkJBQUs7O0FBQ3BDLFdBQUtDLGFBQUwsQ0FBbUJYLHdCQUFuQjtBQUNBLFdBQUtXLGFBQUwsQ0FBbUJWLG1CQUFuQjtBQUNBLFdBQUtVLGFBQUwsQ0FBbUJULGtCQUFuQjtBQUNEOztBQUVPVSxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSx1REFBTCwyQkFBSzs7QUFBQTs7QUFDOURDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0EsWUFBTUgsT0FBTixDQUFjQyxJQUFkO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0EsV0FBS0MsTUFBTCxDQUFZQyxhQUFaLENBQTBCcEIsT0FBMUI7QUFDQSxXQUFLcUIsSUFBTCxDQUFVcEIsZ0JBQVY7QUFDRDs7QUFoQmtDLEdBWlosVUFhUHFCLFVBYk8sR0FhTUEsVUFiTixVQWNWQyxNQWRVLEdBY0QsRUFkQywyRUFhdEJiLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFHQWdCdEJDLE1BaEJzQiwyS0FzQnRCQSxNQXRCc0I7QUE4QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zaW1wbGUuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU1RBUlRVUCwgU1RBUlRVUF9DT01QTEVURSxcbiAgICBDb21tYW5kLFxuICAgIFByZXBhcmVDb250cm9sbGVyQ29tbWFuZCxcbiAgICBQcmVwYXJlTW9kZWxDb21tYW5kLFxuICAgIFByZXBhcmVWaWV3Q29tbWFuZCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFN0YXJ0dXBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgaW5pdGlhbGl6ZVN1YkNvbW1hbmRzKCk6IHZvaWQge1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVDb250cm9sbGVyQ29tbWFuZCk7XG4gICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcGFyZU1vZGVsQ29tbWFuZCk7XG4gICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcGFyZVZpZXdDb21tYW5kKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGV4ZWN1dGU8VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0dXBDb21tYW5kIGV4ZWN1dGUoKScpO1xuICAgICAgc3VwZXIuZXhlY3V0ZShub3RlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydHVwQ29tbWFuZCBleGVjdXRlKCktLScpO1xuICAgICAgdGhpcy5mYWNhZGUucmVtb3ZlQ29tbWFuZChTVEFSVFVQKTtcbiAgICAgIHRoaXMuc2VuZChTVEFSVFVQX0NPTVBMRVRFKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==