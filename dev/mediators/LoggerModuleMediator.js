"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _logger = _interopRequireDefault(require("../services/logger"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _PipeAwareInterface2 = require("../interfaces/PipeAwareInterface");

// This file is part of leanes-simple.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
const {
  LoggerApplication
} = _logger.default.NS;

const PipeAwareInterface = _flowRuntime.default.tdz(() => _PipeAwareInterface2.PipeAwareInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    LIGHTWEIGHT,
    Pipes,
    Mediator,
    Application,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  const {
    Pipe,
    PipeAwareModule: {
      STDIN,
      STDOUT,
      STDLOG,
      STDSHELL
    }
  } = Pipes.NS;
  const {
    CONNECT_MODULE_TO_LOGGER,
    CONNECT_SHELL_TO_LOGGER
  } = Application;
  let LoggerModuleMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerModuleMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("logger", _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface))), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerModuleMediator extends Mediator {
    get logger() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface));

      return _returnType2.assert(this.getViewComponent());
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();
      await this.logger.finish();
    }

    listNotificationInterests() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      return _returnType3.assert([CONNECT_MODULE_TO_LOGGER, CONNECT_SHELL_TO_LOGGER]);
    }

    handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        // Connect any Module's STDLOG to the logger's STDIN
        case CONNECT_MODULE_TO_LOGGER:
          const module = note.getBody();
          const pipe = Pipe.new();
          module.acceptOutputPipe(STDLOG, pipe);
          this.logger.acceptInputPipe(STDIN, pipe);
          break;
        // Bidirectionally connect shell and logger on STDLOG/STDSHELL

        case CONNECT_SHELL_TO_LOGGER:
          // The junction was passed from ShellJunctionMediator
          const junction = note.getBody(); // Connect the shell's STDLOG to the logger's STDIN

          const shellToLog = junction.retrievePipe(STDLOG);
          this.logger.acceptInputPipe(STDIN, shellToLog); // Connect the logger's STDSHELL to the shell's STDIN

          const logToShell = Pipe.new();
          const shellIn = junction.retrievePipe(STDIN);
          shellIn.connectInput(logToShell);
          this.logger.acceptOutputPipe(STDSHELL, logToShell);
          break;
      }
    }

    constructor() {
      super(...arguments);
      this.setViewComponent(LoggerApplication.new(LIGHTWEIGHT));
      this.logger.start();
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "logger", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "logger"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9Mb2dnZXJNb2R1bGVNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJMb2dnZXJBcHBsaWNhdGlvbiIsIkxvZ2dlciIsIk5TIiwiTW9kdWxlIiwiTElHSFRXRUlHSFQiLCJQaXBlcyIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb24iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiUGlwZSIsIlBpcGVBd2FyZU1vZHVsZSIsIlNURElOIiwiU1RET1VUIiwiU1RETE9HIiwiU1REU0hFTEwiLCJDT05ORUNUX01PRFVMRV9UT19MT0dHRVIiLCJDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiIsIkxvZ2dlck1vZHVsZU1lZGlhdG9yIiwibG9nZ2VyIiwiZ2V0Vmlld0NvbXBvbmVudCIsIm9uUmVtb3ZlIiwiZmluaXNoIiwibGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cyIsImhhbmRsZU5vdGlmaWNhdGlvbiIsIm5vdGUiLCJnZXROYW1lIiwibW9kdWxlIiwiZ2V0Qm9keSIsInBpcGUiLCJuZXciLCJhY2NlcHRPdXRwdXRQaXBlIiwiYWNjZXB0SW5wdXRQaXBlIiwianVuY3Rpb24iLCJzaGVsbFRvTG9nIiwicmV0cmlldmVQaXBlIiwibG9nVG9TaGVsbCIsInNoZWxsSW4iLCJjb25uZWN0SW5wdXQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInNldFZpZXdDb21wb25lbnQiLCJzdGFydCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOzs7O0FBR0E7O0FBQ0E7O0FBZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQXdCQyxnQkFBT0MsRUFBckM7Ozs7OztlQUtnQkMsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsV0FESTtBQUVKQyxJQUFBQSxLQUZJO0FB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RixVQUFyQjtBQUNBLGVBQUtqQixNQUFMLENBQVlZLGdCQUFaLENBQTZCaEIsUUFBN0IsRUFBdUNxQixVQUF2QztBQUNBO0FBcEJKO0FBc0JEOztBQUVERyxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUlDLFNBQVY7QUFDQSxXQUFLQyxnQkFBTCxDQUFzQjdDLGlCQUFpQixDQUFDa0MsR0FBbEIsQ0FBc0I5QixXQUF0QixDQUF0QjtBQUNBLFdBQUttQixNQUFMLENBQVl1QixLQUFaO0FBQ0Q7O0FBOUN5QyxHQW5CbkIsVUFvQlBDLFVBcEJPLEdBb0JNQSxVQXBCTixVQXFCVkMsTUFyQlUsR0FxQkQsRUFyQkMsMkVBb0J0Qm5DLE1BcEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQXFCdEJILElBckJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQXVCdEJDLFFBdkJzQiw2SkEyQnRCQyxNQTNCc0IsZ0xBZ0N0QkEsTUFoQ3NCLDBMQW9DdEJBLE1BcENzQjtBQW1FMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3NlcnZpY2VzL2xvZ2dlcic7XG5jb25zdCB7IExvZ2dlckFwcGxpY2F0aW9uIH0gPSBMb2dnZXIuTlM7XG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBQaXBlQXdhcmVJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1BpcGVBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIExJR0hUV0VJR0hULFxuICAgIFBpcGVzLFxuICAgIE1lZGlhdG9yLCBBcHBsaWNhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBQaXBlLFxuICAgIFBpcGVBd2FyZU1vZHVsZToge1xuICAgICAgU1RESU4sIFNURE9VVCwgU1RETE9HLCBTVERTSEVMTFxuICAgIH0sXG4gIH0gPSBQaXBlcy5OUztcblxuICBjb25zdCB7IENPTk5FQ1RfTU9EVUxFX1RPX0xPR0dFUiwgQ09OTkVDVF9TSEVMTF9UT19MT0dHRVIgfSA9IEFwcGxpY2F0aW9uO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBMb2dnZXJNb2R1bGVNZWRpYXRvciBleHRlbmRzIE1lZGlhdG9yIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IGdldCBsb2dnZXIoKTogUGlwZUF3YXJlSW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFZpZXdDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIGF3YWl0IHRoaXMubG9nZ2VyLmZpbmlzaCgpO1xuICAgIH1cblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gWyBDT05ORUNUX01PRFVMRV9UT19MT0dHRVIsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIF07XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYW5kbGVOb3RpZmljYXRpb248VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6ID9Qcm9taXNlPHZvaWQ+IHtcbiAgICAgIHN3aXRjaCAobm90ZS5nZXROYW1lKCkpIHtcbiAgICAgICAgLy8gQ29ubmVjdCBhbnkgTW9kdWxlJ3MgU1RETE9HIHRvIHRoZSBsb2dnZXIncyBTVERJTlxuICAgICAgICBjYXNlIChDT05ORUNUX01PRFVMRV9UT19MT0dHRVIpOlxuICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG5vdGUuZ2V0Qm9keSgpO1xuICAgICAgICAgIGNvbnN0IHBpcGUgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIG1vZHVsZS5hY2NlcHRPdXRwdXRQaXBlKFNURExPRywgcGlwZSk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBwaXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gQmlkaXJlY3Rpb25hbGx5IGNvbm5lY3Qgc2hlbGwgYW5kIGxvZ2dlciBvbiBTVERMT0cvU1REU0hFTExcbiAgICAgICAgY2FzZSAoQ09OTkVDVF9TSEVMTF9UT19MT0dHRVIpOlxuICAgICAgICAgIC8vIFRoZSBqdW5jdGlvbiB3YXMgcGFzc2VkIGZyb20gU2hlbGxKdW5jdGlvbk1lZGlhdG9yXG4gICAgICAgICAgY29uc3QganVuY3Rpb24gPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBzaGVsbCdzIFNURExPRyB0byB0aGUgbG9nZ2VyJ3MgU1RESU5cbiAgICAgICAgICBjb25zdCBzaGVsbFRvTG9nID0ganVuY3Rpb24ucmV0cmlldmVQaXBlKFNURExPRyk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBzaGVsbFRvTG9nKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBsb2dnZXIncyBTVERTSEVMTCB0byB0aGUgc2hlbGwncyBTVERJTlxuICAgICAgICAgIGNvbnN0IGxvZ1RvU2hlbGwgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIGNvbnN0IHNoZWxsSW4gPSBqdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RESU4pO1xuICAgICAgICAgIHNoZWxsSW4uY29ubmVjdElucHV0KGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmFjY2VwdE91dHB1dFBpcGUoU1REU0hFTEwsIGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnNldFZpZXdDb21wb25lbnQoTG9nZ2VyQXBwbGljYXRpb24ubmV3KExJR0hUV0VJR0hUKSk7XG4gICAgICB0aGlzLmxvZ2dlci5zdGFydCgpO1xuICAgIH1cbiAgfVxufVxuIl19