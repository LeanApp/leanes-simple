"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../../../interfaces/NotificationInterface");

var _PipeMessageInterface2 = require("../../../interfaces/PipeMessageInterface");

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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    LOG_MSG,
    Pipes,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  const {
    JunctionMediator,
    LogFilterMessage,
    PipeAwareModule,
    PipeListener,
    Junction,
    TeeMerge,
    Filter
  } = Pipes.NS;
  const {
    STDIN
  } = PipeAwareModule;
  const {
    INPUT
  } = Junction;
  const {
    ACCEPT_INPUT_PIPE
  } = JunctionMediator;
  const {
    LOG_FILTER_NAME,
    filterLogByLevel
  } = LogFilterMessage;
  let LoggerJunctionMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerJunctionMediator", _flowRuntime.default.extends(JunctionMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }), _flowRuntime.default.method("handlePipeMessage", _flowRuntime.default.param("msg", _flowRuntime.default.ref(PipeMessageInterface)), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("onRegister", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      return _returnType2.assert(super.listNotificationInterests(...arguments));
    }

    handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        case ACCEPT_INPUT_PIPE:
          const name = note.getType();

          if (name === STDIN) {
            const pipe = note.getBody();

            const tee = this._junction.retrievePipe(STDIN);

            tee.connectInput(pipe);
          } else {
            console.log('::::handleNotification 1', note);
            super.handleNotification(note);
          }

          break;

        default:
          console.log('::::handleNotification 2', note);
          super.handleNotification(note);
      }
    }

    async handlePipeMessage(msg) {
      let _msgType = _flowRuntime.default.ref(PipeMessageInterface);

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("msg", _msgType).assert(msg);

      console.log('::::handlePipeMessage', msg);
      this.send(LOG_MSG, msg);
    }

    onRegister() {
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.void());

      super.onRegister();
      const teeMerge = TeeMerge.new();
      const filter = Filter.new(LOG_FILTER_NAME, null, filterLogByLevel);
      filter.connect(PipeListener.new(this, this.handlePipeMessage));
      teeMerge.connect(filter);

      this._junction.registerPipe(STDIN, INPUT, teeMerge);

      console.log('LL))M LoggerJunctionMediator', this.listNotificationInterests());
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9tZWRpYXRvcnMvTG9nZ2VySnVuY3Rpb25NZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJMT0dfTVNHIiwiUGlwZXMiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJKdW5jdGlvbk1lZGlhdG9yIiwiTG9nRmlsdGVyTWVzc2FnZSIsIlBpcGVBd2FyZU1vZHVsZSIsIlBpcGVMaXN0ZW5lciIsIkp1bmN0aW9uIiwiVGVlTWVyZ2UiLCJGaWx0ZXIiLCJTVERJTiIsIklOUFVUIiwiQUNDRVBUX0lOUFVUX1BJUEUiLCJMT0dfRklMVEVSX05BTUUiLCJmaWx0ZXJMb2dCeUxldmVsIiwiTG9nZ2VySnVuY3Rpb25NZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJoYW5kbGVOb3RpZmljYXRpb24iLCJub3RlIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRUeXBlIiwicGlwZSIsImdldEJvZHkiLCJ0ZWUiLCJfanVuY3Rpb24iLCJyZXRyaWV2ZVBpcGUiLCJjb25uZWN0SW5wdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUGlwZU1lc3NhZ2UiLCJtc2ciLCJzZW5kIiwib25SZWdpc3RlciIsInRlZU1lcmdlIiwibmV3IiwiZmlsdGVyIiwiY29ubmVjdCIsInJlZ2lzdGVyUGlwZSIsImNvbnN0cnVjdG9yIiwic2V0Vmlld0NvbXBvbmVudCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOztBQUNBOzs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSxLQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMs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QUFNQSxVQUFOO0FBQ0EsWUFBTUMsUUFBUSxHQUFHM0IsUUFBUSxDQUFDNEIsR0FBVCxFQUFqQjtBQUNBLFlBQU1DLE1BQU0sR0FBRzVCLE1BQU0sQ0FBQzJCLEdBQVAsQ0FBV3ZCLGVBQVgsRUFBNEIsSUFBNUIsRUFBa0NDLGdCQUFsQyxDQUFmO0FBQ0F1QixNQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZWhDLFlBQVksQ0FBQzhCLEdBQWIsQ0FBaUIsSUFBakIsRUFBdUIsS0FBS0wsaUJBQTVCLENBQWY7QUFDQUksTUFBQUEsUUFBUSxDQUFDRyxPQUFULENBQWlCRCxNQUFqQjs7QUFDQSxXQUFLWCxTQUFMLENBQWVhLFlBQWYsQ0FBNEI3QixLQUE1QixFQUFtQ0MsS0FBbkMsRUFBMEN3QixRQUExQzs7QUFDQU4sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFBNEMsS0FBS2QseUJBQUwsRUFBNUM7QUFDRDs7QUFFRHdCLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBSXZCLFNBQVY7QUFDQSxXQUFLd0IsZ0JBQUwsQ0FBc0JsQyxRQUFRLENBQUM2QixHQUFULEVBQXRCO0FBQ0Q7O0FBN0NtRCxHQW5CN0IsVUFvQlBNLFVBcEJPLEdBb0JNQSxVQXBCTixVQXFCVkMsTUFyQlUsR0FxQkQsRUFyQkMsMkVBb0J0QjFDLE1BcEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQXFCdEJILElBckJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlHQXVCdEJFLE1BdkJzQiwwTEEyQnRCQSxNQTNCc0Isa0xBOEN0QkEsTUE5Q3NCLDBLQW1EdEJBLE1BbkRzQjtBQWtFMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUGlwZU1lc3NhZ2VJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL1BpcGVNZXNzYWdlSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTE9HX01TRyxcbiAgICBQaXBlcyxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBKdW5jdGlvbk1lZGlhdG9yLCBMb2dGaWx0ZXJNZXNzYWdlLCBQaXBlQXdhcmVNb2R1bGUsIFBpcGVMaXN0ZW5lcixcbiAgICBKdW5jdGlvbiwgVGVlTWVyZ2UsIEZpbHRlclxuICB9ID0gUGlwZXMuTlM7XG5cbiAgY29uc3QgeyBTVERJTiB9ID0gUGlwZUF3YXJlTW9kdWxlO1xuICBjb25zdCB7IElOUFVUIH0gPSBKdW5jdGlvbjtcbiAgY29uc3QgeyBBQ0NFUFRfSU5QVVRfUElQRSB9ID0gSnVuY3Rpb25NZWRpYXRvcjtcbiAgY29uc3QgeyBMT0dfRklMVEVSX05BTUUsIGZpbHRlckxvZ0J5TGV2ZWwgfSA9IExvZ0ZpbHRlck1lc3NhZ2U7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIExvZ2dlckp1bmN0aW9uTWVkaWF0b3IgZXh0ZW5kcyBKdW5jdGlvbk1lZGlhdG9yIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBzdXBlci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKC4uLiBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIEBtZXRob2QgaGFuZGxlTm90aWZpY2F0aW9uPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiA/UHJvbWlzZTx2b2lkPiB7XG4gICAgICBzd2l0Y2ggKG5vdGUuZ2V0TmFtZSgpKSB7XG4gICAgICAgIGNhc2UgKEFDQ0VQVF9JTlBVVF9QSVBFKTpcbiAgICAgICAgICBjb25zdCBuYW1lID0gbm90ZS5nZXRUeXBlKCk7XG4gICAgICAgICAgaWYgKG5hbWUgPT09IFNURElOKSB7XG4gICAgICAgICAgICBjb25zdCBwaXBlID0gbm90ZS5nZXRCb2R5KCk7XG4gICAgICAgICAgICBjb25zdCB0ZWUgPSB0aGlzLl9qdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RESU4pO1xuICAgICAgICAgICAgdGVlLmNvbm5lY3RJbnB1dChwaXBlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzo6OjpoYW5kbGVOb3RpZmljYXRpb24gMScsIG5vdGUpO1xuICAgICAgICAgICAgc3VwZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZygnOjo6OmhhbmRsZU5vdGlmaWNhdGlvbiAyJywgbm90ZSk7XG4gICAgICAgICAgc3VwZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZXRob2QgYXN5bmMgaGFuZGxlUGlwZU1lc3NhZ2UobXNnOiBQaXBlTWVzc2FnZUludGVyZmFjZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc29sZS5sb2coJzo6OjpoYW5kbGVQaXBlTWVzc2FnZScsIG1zZyk7XG4gICAgICB0aGlzLnNlbmQoTE9HX01TRywgbXNnKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIG9uUmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XG4gICAgICBjb25zdCB0ZWVNZXJnZSA9IFRlZU1lcmdlLm5ldygpO1xuICAgICAgY29uc3QgZmlsdGVyID0gRmlsdGVyLm5ldyhMT0dfRklMVEVSX05BTUUsIG51bGwsIGZpbHRlckxvZ0J5TGV2ZWwpO1xuICAgICAgZmlsdGVyLmNvbm5lY3QoUGlwZUxpc3RlbmVyLm5ldyh0aGlzLCB0aGlzLmhhbmRsZVBpcGVNZXNzYWdlKSk7XG4gICAgICB0ZWVNZXJnZS5jb25uZWN0KGZpbHRlcik7XG4gICAgICB0aGlzLl9qdW5jdGlvbi5yZWdpc3RlclBpcGUoU1RESU4sIElOUFVULCB0ZWVNZXJnZSk7XG4gICAgICBjb25zb2xlLmxvZygnTEwpKU0gTG9nZ2VySnVuY3Rpb25NZWRpYXRvcicsIHRoaXMubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLiBhcmd1bWVudHMpO1xuICAgICAgdGhpcy5zZXRWaWV3Q29tcG9uZW50KEp1bmN0aW9uLm5ldygpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==