"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _PipeMessageInterface2 = require("../interfaces/PipeMessageInterface");

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
const PipeMessageInterface = _flowRuntime.default.tdz(() => _PipeMessageInterface2.PipeMessageInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Pipes,
    Application,
    LoggingJunctionMixin,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    mixin
  } = Module.NS;
  const {
    Junction,
    PipeAwareModule,
    LogMessage,
    Pipe,
    TeeSplit,
    TeeMerge,
    JunctionMediator
  } = Pipes.NS;
  const {
    CONNECT_MODULE_TO_SHELL,
    CONNECT_SHELL_TO_LOGGER
  } = Application;
  const {
    INPUT,
    OUTPUT
  } = Junction;
  const {
    STDIN,
    STDOUT,
    STDLOG,
    STDSHELL
  } = PipeAwareModule;
  const {
    SEND_TO_LOG,
    LEVELS,
    DEBUG
  } = LogMessage;
  let ShellJunctionMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ShellJunctionMediator", _flowRuntime.default.extends(JunctionMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))];
  }), _flowRuntime.default.method("handlePipeMessage", _flowRuntime.default.param("msg", _flowRuntime.default.ref(PipeMessageInterface)), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("onRegister"))), _dec2 = partOf(Module), _dec3 = mixin(LoggingJunctionMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class ShellJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      const interests = super.listNotificationInterests(...arguments);
      interests.push(CONNECT_MODULE_TO_SHELL);
      return _returnType3.assert(interests);
    }

    async handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      console.log('>?>?>handleNotification', note.getName());

      switch (note.getName()) {
        case CONNECT_MODULE_TO_SHELL:
          this.send(SEND_TO_LOG, 'Connecting new module instance to Shell.', LEVELS[DEBUG]); // Connect a module's STDSHELL to the shell's STDIN

          const module = note.getBody();
          const moduleToShell = Pipe.new();
          module.acceptOutputPipe(STDSHELL, moduleToShell);

          const shellIn = this._junction.retrievePipe(STDIN);

          shellIn.connectInput(moduleToShell); // Connect the shell's STDOUT to the module's STDIN

          const shellToModule = Pipe.new();
          module.acceptInputPipe(STDIN, shellToModule);

          const shellOut = this._junction.retrievePipe(STDOUT);

          shellOut.connect(shellToModule);
          break;

        default:
          await super.handleNotification(note);
      }
    }

    async handlePipeMessage(msg) {
      let _msgType = _flowRuntime.default.ref(PipeMessageInterface);

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("msg", _msgType).assert(msg);

      console.log('>?>?>handlePipeMessage', msg);
      return _returnType2.assert();
    }

    onRegister() {
      super.onRegister(); // The STDOUT pipe from the shell to all modules

      this._junction.registerPipe(STDOUT, OUTPUT, TeeSplit.new()); // The STDIN pipe to the shell from all modules


      this._junction.registerPipe(STDIN, INPUT, TeeMerge.new());

      this._junction.addPipeListener(STDIN, this, this.handlePipeMessage); // The STDLOG pipe from the shell to the logger


      this._junction.registerPipe(STDLOG, OUTPUT, Pipe.new());

      this.send(CONNECT_SHELL_TO_LOGGER, this._junction);
      console.log('GGFG00 ShellJunctionMediator', this.listNotificationInterests());
    }

    constructor() {
      super(...arguments);
      this.setViewComponent(Junction.new());
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaGVsbEp1bmN0aW9uTWVkaWF0b3IuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiUGlwZXMiLCJBcHBsaWNhdGlvbiIsIkxvZ2dpbmdKdW5jdGlvbk1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIm1peGluIiwiTlMiLCJKdW5jdGlvbiIsIlBpcGVBd2FyZU1vZHVsZSIsIkxvZ01lc3NhZ2UiLCJQaXBlIiwiVGVlU3BsaXQiLCJUZWVNZXJnZSIsIkp1bmN0aW9uTWVkaWF0b3IiLCJDT05ORUNUX01PRFVMRV9UT19TSEVMTCIsIkNPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIiwiSU5QVVQiLCJPVVRQVVQiLCJTVERJTiIsIlNURE9VVCIsIlNURExPRyIsIlNURFNIRUxMIiwiU0VORF9UT19MT0ciLCJMRVZFTFMiLCJERUJVRyIsIlNoZWxsSnVuY3Rpb25NZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJpbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJwdXNoIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwibm90ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXROYW1lIiwic2VuZCIsIm1vZHVsZSIsImdldEJvZHkiLCJtb2R1bGVUb1NoZWxsIiwibmV3IiwiYWNjZXB0T3V0cHV0UGlwZSIsInNoZWxsSW4iLCJfanVuY3Rpb24iLCJyZXRyaWV2ZVBpcGUiLCJjb25uZWN0SW5wdXQiLCJzaGVsbFRvTW9kdWxlIiwiYWNjZXB0SW5wdXRQaXBlIiwic2hlbGxPdXQiLCJjb25uZWN0IiwiaGFuZGxlUGlwZU1lc3NhZ2UiLCJtc2ciLCJvblJlZ2lzdGVyIiwicmVnaXN0ZXJQaXBlIiwiYWRkUGlwZUxpc3RlbmVyIiwiY29uc3RydWN0b3IiLCJzZXRWaWV3Q29tcG9uZW50IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUE7O0FBQ0E7Ozs7QUFY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ZixDQUE0QmhDLE1BQTVCLEVBQW9DSCxNQUFwQyxFQUE0Q1AsSUFBSSxDQUFDNkIsR0FBTCxFQUE1Qzs7QUFDQSxXQUFLSixJQUFMLENBQVVwQix1QkFBVixFQUFtQyxLQUFLMkIsU0FBeEM7QUFDQVYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNEMsS0FBS1AseUJBQUwsRUFBNUM7QUFDRDs7QUFFRDRCLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBSTFCLFNBQVY7QUFDQSxXQUFLMkIsZ0JBQUwsQ0FBc0JoRCxRQUFRLENBQUNnQyxHQUFULEVBQXRCO0FBQ0Q7O0FBdkRrRCxHQXJCNUIsVUFzQlBpQixVQXRCTyxHQXNCTUEsVUF0Qk4sVUF1QlZDLE1BdkJVLEdBdUJELEVBdkJDLDJFQXNCdEJyRCxNQXRCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUF1QnRCSCxJQXZCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5R0F5QnRCRSxNQXpCc0IsMExBK0J0QkEsTUEvQnNCLGtMQXVEdEJBLE1BdkRzQiwwS0E0RHRCQSxNQTVEc0I7QUE4RTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFBpcGVNZXNzYWdlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9QaXBlTWVzc2FnZUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFBpcGVzLFxuICAgIEFwcGxpY2F0aW9uLFxuICAgIExvZ2dpbmdKdW5jdGlvbk1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5LCBtaXhpblxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBKdW5jdGlvbiwgUGlwZUF3YXJlTW9kdWxlLCBMb2dNZXNzYWdlLCBQaXBlLCBUZWVTcGxpdCwgVGVlTWVyZ2UsXG4gICAgSnVuY3Rpb25NZWRpYXRvcixcbiAgfSA9IFBpcGVzLk5TO1xuXG4gIGNvbnN0IHsgQ09OTkVDVF9NT0RVTEVfVE9fU0hFTEwsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIH0gPSBBcHBsaWNhdGlvbjtcbiAgY29uc3QgeyBJTlBVVCwgT1VUUFVUIH0gPSBKdW5jdGlvbjtcbiAgY29uc3QgeyBTVERJTiwgU1RET1VULCBTVERMT0csIFNURFNIRUxMIH0gPSBQaXBlQXdhcmVNb2R1bGU7XG4gIGNvbnN0IHsgU0VORF9UT19MT0csIExFVkVMUywgREVCVUcgfSA9IExvZ01lc3NhZ2U7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihMb2dnaW5nSnVuY3Rpb25NaXhpbilcbiAgY2xhc3MgU2hlbGxKdW5jdGlvbk1lZGlhdG9yIGV4dGVuZHMgSnVuY3Rpb25NZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICBjb25zdCBpbnRlcmVzdHMgPSBzdXBlci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKC4uLiBhcmd1bWVudHMpO1xuICAgICAgaW50ZXJlc3RzLnB1c2goQ09OTkVDVF9NT0RVTEVfVE9fU0hFTEwpO1xuICAgICAgcmV0dXJuIGludGVyZXN0cztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGhhbmRsZU5vdGlmaWNhdGlvbjxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zb2xlLmxvZygnPj8+Pz5oYW5kbGVOb3RpZmljYXRpb24nLCBub3RlLmdldE5hbWUoKSk7XG4gICAgICBzd2l0Y2ggKG5vdGUuZ2V0TmFtZSgpKSB7XG4gICAgICAgIGNhc2UgKENPTk5FQ1RfTU9EVUxFX1RPX1NIRUxMKTpcbiAgICAgICAgICB0aGlzLnNlbmQoXG4gICAgICAgICAgICBTRU5EX1RPX0xPRywgJ0Nvbm5lY3RpbmcgbmV3IG1vZHVsZSBpbnN0YW5jZSB0byBTaGVsbC4nLCBMRVZFTFNbREVCVUddXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBDb25uZWN0IGEgbW9kdWxlJ3MgU1REU0hFTEwgdG8gdGhlIHNoZWxsJ3MgU1RESU5cbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICBjb25zdCBtb2R1bGVUb1NoZWxsID0gUGlwZS5uZXcoKTtcbiAgICAgICAgICBtb2R1bGUuYWNjZXB0T3V0cHV0UGlwZShTVERTSEVMTCwgbW9kdWxlVG9TaGVsbCk7XG4gICAgICAgICAgY29uc3Qgc2hlbGxJbiA9IHRoaXMuX2p1bmN0aW9uLnJldHJpZXZlUGlwZShTVERJTik7XG4gICAgICAgICAgc2hlbGxJbi5jb25uZWN0SW5wdXQobW9kdWxlVG9TaGVsbCk7XG4gICAgICAgICAgLy8gQ29ubmVjdCB0aGUgc2hlbGwncyBTVERPVVQgdG8gdGhlIG1vZHVsZSdzIFNURElOXG4gICAgICAgICAgY29uc3Qgc2hlbGxUb01vZHVsZSA9IFBpcGUubmV3KCk7XG4gICAgICAgICAgbW9kdWxlLmFjY2VwdElucHV0UGlwZShTVERJTiwgc2hlbGxUb01vZHVsZSk7XG4gICAgICAgICAgY29uc3Qgc2hlbGxPdXQgPSB0aGlzLl9qdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RET1VUKTtcbiAgICAgICAgICBzaGVsbE91dC5jb25uZWN0KHNoZWxsVG9Nb2R1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF3YWl0IHN1cGVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGhhbmRsZVBpcGVNZXNzYWdlKG1zZzogUGlwZU1lc3NhZ2VJbnRlcmZhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnNvbGUubG9nKCc+Pz4/PmhhbmRsZVBpcGVNZXNzYWdlJywgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAbWV0aG9kIG9uUmVnaXN0ZXIoKSB7XG4gICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XG4gICAgICAvLyBUaGUgU1RET1VUIHBpcGUgZnJvbSB0aGUgc2hlbGwgdG8gYWxsIG1vZHVsZXNcbiAgICAgIHRoaXMuX2p1bmN0aW9uLnJlZ2lzdGVyUGlwZShTVERPVVQsIE9VVFBVVCwgVGVlU3BsaXQubmV3KCkpO1xuICAgICAgLy8gVGhlIFNURElOIHBpcGUgdG8gdGhlIHNoZWxsIGZyb20gYWxsIG1vZHVsZXNcbiAgICAgIHRoaXMuX2p1bmN0aW9uLnJlZ2lzdGVyUGlwZShTVERJTiwgSU5QVVQsIFRlZU1lcmdlLm5ldygpKTtcbiAgICAgIHRoaXMuX2p1bmN0aW9uLmFkZFBpcGVMaXN0ZW5lcihTVERJTiwgdGhpcywgdGhpcy5oYW5kbGVQaXBlTWVzc2FnZSk7XG4gICAgICAvLyBUaGUgU1RETE9HIHBpcGUgZnJvbSB0aGUgc2hlbGwgdG8gdGhlIGxvZ2dlclxuICAgICAgdGhpcy5fanVuY3Rpb24ucmVnaXN0ZXJQaXBlKFNURExPRywgT1VUUFVULCBQaXBlLm5ldygpKTtcbiAgICAgIHRoaXMuc2VuZChDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiwgdGhpcy5fanVuY3Rpb24pO1xuICAgICAgY29uc29sZS5sb2coJ0dHRkcwMCBTaGVsbEp1bmN0aW9uTWVkaWF0b3InLCB0aGlzLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi4gYXJndW1lbnRzKTtcbiAgICAgIHRoaXMuc2V0Vmlld0NvbXBvbmVudChKdW5jdGlvbi5uZXcoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=