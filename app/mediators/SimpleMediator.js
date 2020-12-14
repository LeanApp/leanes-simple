"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _readline = _interopRequireDefault(require("readline"));

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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    START_CONSOLE,
    MSG_FROM_CONSOLE,
    MSG_TO_CONSOLE,
    Mediator,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  let SimpleMediator = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class SimpleMediator extends Mediator {
    listNotificationInterests() {
      const interests = super.listNotificationInterests(...arguments);
      interests.push(START_CONSOLE);
      interests.push(MSG_TO_CONSOLE);
      return interests;
    }

    handleNotification(note) {
      switch (note.getName()) {
        case START_CONSOLE:
          this.stdinStart();
          break;

        case MSG_TO_CONSOLE:
          this.stdinComplete(note.getBody());
          break;

        default:
          super.handleNotification(note);
      }
    }

    onRegister() {
      super.onRegister();
      this.rl = _readline.default.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '... waiting new text ...\n'
      });
      this.rl.setMaxListeners(Number.MAX_SAFE_INTEGER);
    }

    async onRemove() {
      await super.onRemove();
      this.rl.close();
    }

    stdinStart() {
      console.log('Start: ');
      this.rl.prompt();
      this.rl.on('line', input => {
        console.log(`Received: ${input}`);
        this.send(MSG_FROM_CONSOLE, input);
      });
    }

    stdinComplete(body) {
      console.log('Complete: ', body);
      this.rl.prompt();
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "stdinStart", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "stdinStart"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "stdinComplete", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "stdinComplete"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;