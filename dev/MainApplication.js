"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    APPLICATION_PROXY,
    Pipes,
    Application,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    Utils: {
      _
    }
  } = Module.NS;
  const {
    LogMessage: {
      DEBUG
    },
    LogFilterMessage: {
      SET_LOG_LEVEL
    }
  } = Pipes.NS;
  let MainApplication = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MainApplication", _flowRuntime.default.extends(Application), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("initialState", _flowRuntime.default.ref("object")), _flowRuntime.default.method("setLogLevelMethod", _flowRuntime.default.param("level", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("sendEvent", _flowRuntime.default.param("name", _flowRuntime.default.any()), _flowRuntime.default.param("body", _flowRuntime.default.any()), _flowRuntime.default.param("type", _flowRuntime.default.any())), _flowRuntime.default.method("setState", _flowRuntime.default.param("state", _flowRuntime.default.any()), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("getState", _flowRuntime.default.return(_flowRuntime.default.ref("object"))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.symbol(), _flowRuntime.default.ref("object"))))))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.ref("object")), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainApplication extends Application {
    setLogLevelMethod(level) {
      let _levelType = _flowRuntime.default.number();

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("level", _levelType).assert(level);

      this.send(SET_LOG_LEVEL, level);
    }

    sendEvent(name, body, type = 'Event') {
      this.send(name, body, type);
    }

    setState(state) {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      appProxy.setState(state);
    }

    getState() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref("object"));

      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      return _returnType3.assert(appProxy.getData());
    }

    constructor(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.symbol(), _flowRuntime.default.ref("object")));

      _flowRuntime.default.param("data", _dataType).assert(data);

      const {
        ApplicationFacade
      } = Module.NS;
      const symbol = _.isSymbol(data) ? data : null;
      super(Module.name, ApplicationFacade, symbol);
      (0, _initializerDefineProperty2.default)(this, "initialState", _descriptor, this);
      this.dispatch = this.sendEvent.bind(this);

      if (!_.isSymbol(data) && _.isObject(data)) {
        this.initialState = data;
      }
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initialState", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sendEvent", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "sendEvent"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setState"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getState"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1haW5BcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9QUk9YWSIsIlBpcGVzIiwiQXBwbGljYXRpb24iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiVXRpbHMiLCJfIiwiTlMiLCJMb2dNZXNzYWdlIiwiREVCVUciLCJMb2dGaWx0ZXJNZXNzYWdlIiwiU0VUX0xPR19MRVZFTCIsIk1haW5BcHBsaWNhdGlvbiIsInNldExvZ0xldmVsTWV0aG9kIiwibGV2ZWwiLCJzZW5kIiwic2VuZEV2ZW50IiwibmFtZSIsImJvZHkiLCJ0eXBlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImFwcFByb3h5IiwiZmFjYWRlIiwiZ2V0UHJveHkiLCJnZXRTdGF0ZSIsImdldERhdGEiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJBcHBsaWNhdGlvbkZhY2FkZSIsInN5bWJvbCIsImlzU3ltYm9sIiwiZGlzcGF0Y2giLCJiaW5kIiwiaXNPYmplY3QiLCJpbml0aWFsU3RhdGUiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGlCQURJO0FBRUpDLElBQUFBLEtBRkk7QUFHSkMsSUFBQUEsV0FISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLElBSmhCO0FBSXNCQyxJQUFBQSxRQUp0QjtBQUlnQ0MsSUFBQUEsTUFKaEM7QUFJd0NDLElBQUFBLE1BSnhDO0FBS0pDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBTEgsTUFNRlgsTUFBTSxDQUFDWSxFQU5YO0FBUUEsUUFBTTtBQUNKQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUE7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IGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFQUExJQ0FUSU9OX1BST1hZLFxuICAgIFBpcGVzLFxuICAgIEFwcGxpY2F0aW9uLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5LFxuICAgIFV0aWxzOiB7IF8gfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBMb2dNZXNzYWdlOiB7IERFQlVHIH0sXG4gICAgTG9nRmlsdGVyTWVzc2FnZTogeyBTRVRfTE9HX0xFVkVMIH1cbiAgfSA9IFBpcGVzLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBNYWluQXBwbGljYXRpb24gZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBpbml0aWFsU3RhdGU6IG9iamVjdCA9IG51bGw7XG5cbiAgICBAbWV0aG9kIHNldExvZ0xldmVsTWV0aG9kKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VuZChTRVRfTE9HX0xFVkVMLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzZW5kRXZlbnQobmFtZSwgYm9keSwgdHlwZSA9ICdFdmVudCcpIHtcbiAgICAgIHRoaXMuc2VuZChuYW1lLCBib2R5LCB0eXBlKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIHNldFN0YXRlKHN0YXRlKTogdm9pZCB7XG4gICAgICBjb25zdCBhcHBQcm94eSA9IHRoaXMuZmFjYWRlLmdldFByb3h5KEFQUExJQ0FUSU9OX1BST1hZKTtcbiAgICAgIGFwcFByb3h5LnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGdldFN0YXRlKCk6IG9iamVjdCB7XG4gICAgICBjb25zdCBhcHBQcm94eSA9IHRoaXMuZmFjYWRlLmdldFByb3h5KEFQUExJQ0FUSU9OX1BST1hZKTtcbiAgICAgIHJldHVybiBhcHBQcm94eS5nZXREYXRhKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZGF0YTogPyhTeW1ib2wgfCBvYmplY3QpKSB7XG4gICAgICBjb25zdCB7IEFwcGxpY2F0aW9uRmFjYWRlIH0gPSBNb2R1bGUuTlM7XG4gICAgICBjb25zdCBzeW1ib2wgPSBfLmlzU3ltYm9sKGRhdGEpXG4gICAgICAgID8gZGF0YVxuICAgICAgICA6IG51bGw7XG4gICAgICBzdXBlcihNb2R1bGUubmFtZSwgQXBwbGljYXRpb25GYWNhZGUsIHN5bWJvbCk7XG4gICAgICB0aGlzLmRpc3BhdGNoID0gdGhpcy5zZW5kRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgIGlmICghXy5pc1N5bWJvbChkYXRhKSAmJiBfLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==