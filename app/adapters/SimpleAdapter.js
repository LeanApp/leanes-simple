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
  var _dec, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    Adapter,
    initialize,
    partOf,
    meta,
    nameBy,
    property,
    method
  } = Module.NS;
  let SimpleAdapter = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SimpleAdapter extends Adapter {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_data", _descriptor, this);
    }

    'set'(data) {
      this._data = data;
    }

    'get'() {
      return this._data;
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_data", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'set', [method], Object.getOwnPropertyDescriptor(_class2.prototype, 'set'), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, 'get', [method], Object.getOwnPropertyDescriptor(_class2.prototype, 'get'), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;