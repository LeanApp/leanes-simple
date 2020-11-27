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
console.log('>>>>QQQQ 888');

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

      console.log('>>>>QQQQ 999');
      const {
        ApplicationFacade
      } = Module.NS;
      const symbol = _.isSymbol(data) ? data : null;
      console.log('>>>>QQQQ 1010');
      super(Module.name, ApplicationFacade, symbol);
      (0, _initializerDefineProperty2.default)(this, "initialState", _descriptor, this);
      console.log('>>>>QQQQ 1010+1');
      this.dispatch = this.sendEvent.bind(this);
      console.log('>>>>QQQQ 1010+2');

      if (!_.isSymbol(data) && _.isObject(data)) {
        console.log('>>>>QQQQ 1010+3');
        this.initialState = data;
        console.log('>>>>QQQQ 1010+4');
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
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sendEvent", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "sendEvent"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setState"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getState"), _class2.prototype)), _class2)) || _class) || _class) || _class); // console.log('><MMMMMMMMM ?? MainApplication, MainApplication', Module.name, Module.NS,  Module.NS.MainApplication);
};

exports.default = _default;
console.log('>>>>QQQQ 888+');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1haW5BcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiTW9kdWxlIiwiQVBQTElDQVRJT05fUFJPWFkiLCJQaXBlcyIsIkFwcGxpY2F0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIlV0aWxzIiwiXyIsIk5TIiwiTG9nTWVzc2FnZSIsIkRFQlVHIiwiTG9nRmlsdGVyTWVzc2FnZSIsIlNFVF9MT0dfTEVWRUwiLCJNYWluQXBwbGljYXRpb24iLCJzZXRMb2dMZXZlbE1ldGhvZCIsImxldmVsIiwic2VuZCIsInNlbmRFdmVudCIsIm5hbWUiLCJib2R5IiwidHlwZSIsInNldFN0YXRlIiwic3RhdGUiLCJhcHBQcm94eSIsImZhY2FkZSIsImdldFByb3h5IiwiZ2V0U3RhdGUiLCJnZXREYXRhIiwiY29uc3RydWN0b3IiLCJkYXRhIiwiQXBwbGljYXRpb25GYWNhZGUiLCJzeW1ib2wiLCJpc1N5bWJvbCIsImRpc3BhdGNoIiwiYmluZCIsImlzT2JqZWN0IiwiaW5pdGlhbFN0YXRlIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7O2VBRWdCQyxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxpQkFESTtBQUVKQyxJQUFBQSxLQUZJO0FBR0pDLElBQUFBLFdBSEk7QUFJSkMsSUFBQUEsVUFKSTtBQUlRQyxJQUFBQSxNQUpSO0FBSWdCQyxJQUFBQSxJQUpoQjtBQUlzQkMsSUFBQUEsUUFKdEI7QUFJZ0NDLElBQUFBLE1BSmhDO0FBSXdDQyxJQUFBQSxNQUp4QztBQUtKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUxILE1BTUZYLE1BQU0sQ0FBQ1ks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TUFsQlUsR0FrQkQsRUFsQkMsMkVBaUJ0QmpDLE1BakJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWtCdEJILElBbEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlIQW9CdEJDLFFBcEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFvQlUsSUFwQlY7QUFBQTtBQUFBLHVGQXNCdEJDLE1BdEJzQix5S0EwQnRCQSxNQTFCc0IsZ0tBOEJ0QkEsTUE5QnNCLCtKQW1DdEJBLE1BbkNzQixvSUEyRHpCO0FBQ0QsQzs7O0FBQ0RWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuY29uc29sZS5sb2coJz4+Pj5RUVFRIDg4OCcpO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9QUk9YWSxcbiAgICBQaXBlcyxcbiAgICBBcHBsaWNhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBtZXRob2QsIG5hbWVCeSxcbiAgICBVdGlsczogeyBfIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCB7XG4gICAgTG9nTWVzc2FnZTogeyBERUJVRyB9LFxuICAgIExvZ0ZpbHRlck1lc3NhZ2U6IHsgU0VUX0xPR19MRVZFTCB9XG4gIH0gPSBQaXBlcy5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgTWFpbkFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgaW5pdGlhbFN0YXRlOiBvYmplY3QgPSBudWxsO1xuXG4gICAgQG1ldGhvZCBzZXRMb2dMZXZlbE1ldGhvZChsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnNlbmQoU0VUX0xPR19MRVZFTCwgbGV2ZWwpO1xuICAgIH1cblxuICAgIEBtZXRob2Qgc2VuZEV2ZW50KG5hbWUsIGJvZHksIHR5cGUgPSAnRXZlbnQnKSB7XG4gICAgICB0aGlzLnNlbmQobmFtZSwgYm9keSwgdHlwZSk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzZXRTdGF0ZShzdGF0ZSk6IHZvaWQge1xuICAgICAgY29uc3QgYXBwUHJveHkgPSB0aGlzLmZhY2FkZS5nZXRQcm94eShBUFBMSUNBVElPTl9QUk9YWSk7XG4gICAgICBhcHBQcm94eS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBnZXRTdGF0ZSgpOiBvYmplY3Qge1xuICAgICAgY29uc3QgYXBwUHJveHkgPSB0aGlzLmZhY2FkZS5nZXRQcm94eShBUFBMSUNBVElPTl9QUk9YWSk7XG4gICAgICByZXR1cm4gYXBwUHJveHkuZ2V0RGF0YSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6ID8oU3ltYm9sIHwgb2JqZWN0KSkge1xuICAgICAgY29uc29sZS5sb2coJz4+Pj5RUVFRIDk5OScpO1xuICAgICAgY29uc3QgeyBBcHBsaWNhdGlvbkZhY2FkZSB9ID0gTW9kdWxlLk5TO1xuICAgICAgY29uc3Qgc3ltYm9sID0gXy5pc1N5bWJvbChkYXRhKVxuICAgICAgICA/IGRhdGFcbiAgICAgICAgOiBudWxsO1xuICAgICAgY29uc29sZS5sb2coJz4+Pj5RUVFRIDEwMTAnKTtcbiAgICAgIHN1cGVyKE1vZHVsZS5uYW1lLCBBcHBsaWNhdGlvbkZhY2FkZSwgc3ltYm9sKTtcbiAgICAgIGNvbnNvbGUubG9nKCc+Pj4+UVFRUSAxMDEwKzEnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2ggPSB0aGlzLnNlbmRFdmVudC5iaW5kKHRoaXMpO1xuICAgICAgY29uc29sZS5sb2coJz4+Pj5RUVFRIDEwMTArMicpO1xuICAgICAgaWYgKCFfLmlzU3ltYm9sKGRhdGEpICYmIF8uaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj5RUVFRIDEwMTArMycpO1xuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+UVFRUSAxMDEwKzQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZygnPjxNTU1NTU1NTU0gPz8gTWFpbkFwcGxpY2F0aW9uLCBNYWluQXBwbGljYXRpb24nLCBNb2R1bGUubmFtZSwgTW9kdWxlLk5TLCAgTW9kdWxlLk5TLk1haW5BcHBsaWNhdGlvbik7XG59XG5jb25zb2xlLmxvZygnPj4+PlFRUVEgODg4KycpO1xuIl19