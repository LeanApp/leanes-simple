"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _SimpleAdapterInterface2 = require("../interfaces/SimpleAdapterInterface");

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
const SimpleAdapterInterface = _flowRuntime.default.tdz(() => _SimpleAdapterInterface2.SimpleAdapterInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SIMPLE_ADAPTER,
    Proxy,
    initialize,
    partOf,
    meta,
    nameBy,
    property,
    method,
    inject
  } = Module.NS;
  let SimpleProxy = (_dec = partOf(Module), _dec2 = inject(`Factory<${SIMPLE_ADAPTER}>`), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SimpleProxy extends Proxy {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_adapterFactory", _descriptor, this);
    }

    get _simpleAdapter() {
      return this._adapterFactory();
    }

    setData(data) {
      this._simpleAdapter.set(data);
    }

    getData() {
      return this._simpleAdapter.get();
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_adapterFactory", [_dec2, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_simpleAdapter", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_simpleAdapter"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setData", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setData"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getData", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getData"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;