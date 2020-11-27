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
  let LoggerModuleMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerModuleMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("logger", _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface))), _flowRuntime.default.method("onRegister"), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerModuleMediator extends Mediator {
    get logger() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface));

      return _returnType2.assert(this.getViewComponent());
    }

    onRegister() {
      super.onRegister();
      console.log('GGFG00 LoggerModuleMediator', this.listNotificationInterests());
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

      console.log('?>?>?>>LoggerModuleMediator::handleNotification', note.getName());

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
          console.log('?>?>?>>CONNECT_SHELL_TO_LOGGER');
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "logger", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "logger"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9Mb2dnZXJNb2R1bGVNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJMb2dnZXJBcHBsaWNhdGlvbiIsIkxvZ2dlciIsIk5TIiwiTW9kdWxlIiwiTElHSFRXRUlHSFQiLCJQaXBlcyIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb24iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiUGlwZSIsIlBpcGVBd2FyZU1vZHVsZSIsIlNURElOIiwiU1RET1VUIiwiU1RETE9HIiwiU1REU0hFTEwiLCJDT05ORUNUX01PRFVMRV9UT19MT0dHRVIiLCJDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiIsIkxvZ2dlck1vZHVsZU1lZGlhdG9yIiwibG9nZ2VyIiwiZ2V0Vmlld0NvbXBvbmVudCIsIm9uUmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwibGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cyIsIm9uUmVtb3ZlIiwiZmluaXNoIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwibm90ZSIsImdldE5hbWUiLCJtb2R1bGUiLCJnZXRCb2R5IiwicGlwZSIsIm5ldyIsImFjY2VwdE91dHB1dFBpcGUiLCJhY2NlcHRJbnB1dFBpcGUiLCJqdW5jdGlvbiIsInNoZWxsVG9Mb2ciLCJyZXRyaWV2ZVBpcGUiLCJsb2dUb1NoZWxsIiwic2hlbGxJbiIsImNvbm5lY3RJbnB1dCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwic2V0Vmlld0NvbXBvbmVudCIsInN0YXJ0IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUE7Ozs7QUFHQTs7QUFDQTs7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBd0JDLGdCQUFPQyxFQUFyQzs7Ozs7O2VBS2dCQyxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJ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QnhCLE1BQXRCLENBQW5CO0FBQ0EsZUFBS0ssTUFBTCxDQUFZZ0IsZUFBWixDQUE0QnZCLEtBQTVCLEVBQW1DeUIsVUFBbkMsRUFMRixDQU1FOztBQUNBLGdCQUFNRSxVQUFVLEdBQUc3QixJQUFJLENBQUN1QixHQUFMLEVBQW5CO0FBQ0EsZ0JBQU1PLE9BQU8sR0FBR0osUUFBUSxDQUFDRSxZQUFULENBQXNCMUIsS0FBdEIsQ0FBaEI7QUFDQTRCLFVBQUFBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQkYsVUFBckI7QUFDQSxlQUFLcEIsTUFBTCxDQUFZZSxnQkFBWixDQUE2Qm5CLFFBQTdCLEVBQXVDd0IsVUFBdkM7QUFDQWpCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaO0FBQ0E7QUFyQko7QUF1QkQ7O0FBRURtQixJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUlDLFNBQVY7QUFDQSxXQUFLQyxnQkFBTCxDQUFzQmhELGlCQUFpQixDQUFDcUMsR0FBbEIsQ0FBc0JqQyxXQUF0QixDQUF0QjtBQUNBLFdBQUttQixNQUFMLENBQVkwQixLQUFaO0FBQ0Q7O0FBckR5QyxHQW5CbkIsVUFvQlBDLFVBcEJPLEdBb0JNQSxVQXBCTixVQXFCVkMsTUFyQlUsR0FxQkQsRUFyQkMsMkVBb0J0QnRDLE1BcEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQXFCdEJILElBckJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQXVCdEJDLFFBdkJzQiwrSkEyQnRCQyxNQTNCc0IsaUtBZ0N0QkEsTUFoQ3NCLGdMQXFDdEJBLE1BckNzQiwwTEF5Q3RCQSxNQXpDc0I7QUEwRTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9zZXJ2aWNlcy9sb2dnZXInO1xuY29uc3QgeyBMb2dnZXJBcHBsaWNhdGlvbiB9ID0gTG9nZ2VyLk5TO1xuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUGlwZUF3YXJlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9QaXBlQXdhcmVJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBMSUdIVFdFSUdIVCxcbiAgICBQaXBlcyxcbiAgICBNZWRpYXRvciwgQXBwbGljYXRpb24sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCB7XG4gICAgUGlwZSxcbiAgICBQaXBlQXdhcmVNb2R1bGU6IHtcbiAgICAgIFNURElOLCBTVERPVVQsIFNURExPRywgU1REU0hFTExcbiAgICB9LFxuICB9ID0gUGlwZXMuTlM7XG5cbiAgY29uc3QgeyBDT05ORUNUX01PRFVMRV9UT19MT0dHRVIsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIH0gPSBBcHBsaWNhdGlvbjtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgTG9nZ2VyTW9kdWxlTWVkaWF0b3IgZXh0ZW5kcyBNZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBnZXQgbG9nZ2VyKCk6IFBpcGVBd2FyZUludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWaWV3Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBvblJlZ2lzdGVyKCkge1xuICAgICAgc3VwZXIub25SZWdpc3RlcigpO1xuICAgICAgY29uc29sZS5sb2coJ0dHRkcwMCBMb2dnZXJNb2R1bGVNZWRpYXRvcicsIHRoaXMubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIGF3YWl0IHRoaXMubG9nZ2VyLmZpbmlzaCgpO1xuICAgIH1cblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gWyBDT05ORUNUX01PRFVMRV9UT19MT0dHRVIsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIF07XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYW5kbGVOb3RpZmljYXRpb248VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6ID9Qcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnNvbGUubG9nKCc/Pj8+Pz4+TG9nZ2VyTW9kdWxlTWVkaWF0b3I6OmhhbmRsZU5vdGlmaWNhdGlvbicsIG5vdGUuZ2V0TmFtZSgpKTtcbiAgICAgIHN3aXRjaCAobm90ZS5nZXROYW1lKCkpIHtcbiAgICAgICAgLy8gQ29ubmVjdCBhbnkgTW9kdWxlJ3MgU1RETE9HIHRvIHRoZSBsb2dnZXIncyBTVERJTlxuICAgICAgICBjYXNlIChDT05ORUNUX01PRFVMRV9UT19MT0dHRVIpOlxuICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG5vdGUuZ2V0Qm9keSgpO1xuICAgICAgICAgIGNvbnN0IHBpcGUgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIG1vZHVsZS5hY2NlcHRPdXRwdXRQaXBlKFNURExPRywgcGlwZSk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBwaXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gQmlkaXJlY3Rpb25hbGx5IGNvbm5lY3Qgc2hlbGwgYW5kIGxvZ2dlciBvbiBTVERMT0cvU1REU0hFTExcbiAgICAgICAgY2FzZSAoQ09OTkVDVF9TSEVMTF9UT19MT0dHRVIpOlxuICAgICAgICAgIC8vIFRoZSBqdW5jdGlvbiB3YXMgcGFzc2VkIGZyb20gU2hlbGxKdW5jdGlvbk1lZGlhdG9yXG4gICAgICAgICAgY29uc3QganVuY3Rpb24gPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBzaGVsbCdzIFNURExPRyB0byB0aGUgbG9nZ2VyJ3MgU1RESU5cbiAgICAgICAgICBjb25zdCBzaGVsbFRvTG9nID0ganVuY3Rpb24ucmV0cmlldmVQaXBlKFNURExPRyk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBzaGVsbFRvTG9nKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBsb2dnZXIncyBTVERTSEVMTCB0byB0aGUgc2hlbGwncyBTVERJTlxuICAgICAgICAgIGNvbnN0IGxvZ1RvU2hlbGwgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIGNvbnN0IHNoZWxsSW4gPSBqdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RESU4pO1xuICAgICAgICAgIHNoZWxsSW4uY29ubmVjdElucHV0KGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmFjY2VwdE91dHB1dFBpcGUoU1REU0hFTEwsIGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc/Pj8+Pz4+Q09OTkVDVF9TSEVMTF9UT19MT0dHRVInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLiBhcmd1bWVudHMpO1xuICAgICAgdGhpcy5zZXRWaWV3Q29tcG9uZW50KExvZ2dlckFwcGxpY2F0aW9uLm5ldyhMSUdIVFdFSUdIVCkpO1xuICAgICAgdGhpcy5sb2dnZXIuc3RhcnQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==