"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _cron = require("cron");

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
var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    CLEAR_CONSOLE,
    Mediator,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    property
  } = Module.NS;
  let SignalsMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("SignalsMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_job", _flowRuntime.default.any()), _flowRuntime.default.method("onRegister", _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SignalsMediator extends Mediator {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_job", _descriptor, this);
    }

    onRegister() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      super.onRegister();
      this._job = new _cron.CronJob('*/7 * * * * *', async () => {
        const result = await this.run(CLEAR_CONSOLE); // console.log(`Result from script: "${result}"`);
      }, null, true, 'America/Los_Angeles');

      this._job.start();
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();

      this._job.stop();
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_job", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaWduYWxzTWVkaWF0b3IuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQ0xFQVJfQ09OU09MRSIsIk1lZGlhdG9yIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIk5TIiwiU2lnbmFsc01lZGlhdG9yIiwib25SZWdpc3RlciIsIl9qb2IiLCJDcm9uSm9iIiwicmVzdWx0IiwicnVuIiwic3RhcnQiLCJvblJlbW92ZSIsInN0b3AiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBSWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxhQURJO0FBRUpDLElBQUFBLFFBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBLE1BSDlCO0FBR3NDQyxJQUFBQTtBQUh0QyxNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFEeUIsTUFTbkJDLGVBVG1CLHlDQU96QiwyRUFFOEJSLFFBRjlCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGlFQU5GLEVBUUUsc0VBQW9CLDJCQUFwQixFQVJGLEVBaUJFLG9FQUF3QixvQ0FBVSwyQkFBVixDQUF4QixFQWpCRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLGdCQU94QkcsVUFQd0IsdURBT3pCLE1BRU1PLGVBRk4sU0FFOEJSLFFBRjlCLENBRXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTTdCUyxJQUFBQSxVQUFSLEdBQTRCO0FBQUEsdURBQU4sMkJBQU07O0FBQzFCLFlBQU1BLFVBQU47QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUMsYUFBSixDQUFZLGVBQVosRUFBNkIsWUFBWTtBQUNuRCxjQUFNQyxNQUFNLEdBQUcsTUFBTSxLQUFLQyxHQUFMLENBQVNkLGFBQVQsQ0FBckIsQ0FEbUQsQ0FFbkQ7QUFDRCxPQUhXLEVBR1QsSUFIUyxFQUdILElBSEcsRUFHRyxxQkFISCxDQUFaOztBQUlBLFdBQUtXLElBQUwsQ0FBVUksS0FBVjtBQUNEOztBQUVELFVBQWNDLFFBQWQsR0FBd0M7QUFBQSxpRkFBTiwyQkFBTSxFQUFkLG9DQUFRLDJCQUFSLENBQWM7O0FBQ3RDLFlBQU0sTUFBTUEsUUFBTixFQUFOOztBQUNBLFdBQUtMLElBQUwsQ0FBVU0sSUFBVjtBQUNEOztBQWxCb0MsR0FUZCxVQVVQQyxVQVZPLEdBVU1BLFVBVk4sVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCZCxNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkQsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FhdEJHLFFBYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWFOLElBYk07QUFBQTtBQUFBLGdGQWV0QkQsTUFmc0IsaUtBd0J0QkEsTUF4QnNCO0FBNkIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBsZWFuZXMtc2ltcGxlIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2ltcGxlLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHsgQ3JvbkpvYiB9IGZyb20gJ2Nyb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBDTEVBUl9DT05TT0xFLFxuICAgIE1lZGlhdG9yLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtZXRob2QsIHByb3BlcnR5LFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTaWduYWxzTWVkaWF0b3IgZXh0ZW5kcyBNZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBfam9iID0gbnVsbDtcblxuICAgIEBtZXRob2Qgb25SZWdpc3RlcigpOiB2b2lkICB7XG4gICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XG4gICAgICB0aGlzLl9qb2IgPSBuZXcgQ3JvbkpvYignKi83ICogKiAqICogKicsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4oQ0xFQVJfQ09OU09MRSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBSZXN1bHQgZnJvbSBzY3JpcHQ6IFwiJHtyZXN1bHR9XCJgKTtcbiAgICAgIH0sIG51bGwsIHRydWUsICdBbWVyaWNhL0xvc19BbmdlbGVzJyk7XG4gICAgICB0aGlzLl9qb2Iuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIHRoaXMuX2pvYi5zdG9wKCk7XG4gICAgfVxuICB9XG59XG4iXX0=