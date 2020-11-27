"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _index3 = _interopRequireDefault(require("@leansdk/leanes-configurable-addon/lib/index.dev"));

var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp;

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
console.log('>>>>QQQQ 000-+911*'); // import LeanES from './libs/leanes';
// import LeanES from '@leansdk/leanes/lib/index.dev';
// import FsUtilsAddon from '@leansdk/leanes-fs-utils-addon/lib/index.dev';
// import ConfigurableAddon from '@leansdk/leanes-configurable-addon/lib/index.dev';

// import EventedStateMachine from './plugins/evented_state_machine';
const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
console.log('>>>>QQQQ 111+');
let SimpleApp = (_dec = plugin(_index3.default), _dec2 = plugin(_index2.default), _dec3 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class SimpleApp extends _index.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "START_CONSOLE", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "MSG_FROM_CONSOLE", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "MSG_TO_CONSOLE", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "CLEAR_CONSOLE", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "SIMPLE_PROXY", _descriptor6, this);
    (0, _initializerDefineProperty2.default)(this, "SIMPLE_ADAPTER", _descriptor7, this);
  }

}, _class3.__filename = 'SimpleApp', _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
}), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ROOT", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return __dirname;
  }
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "START_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'START_CONSOLE';
  }
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MSG_FROM_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MSG_FROM_CONSOLE';
  }
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MSG_TO_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MSG_TO_CONSOLE';
  }
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "CLEAR_CONSOLE", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'CLEAR_CONSOLE';
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIMPLE_PROXY", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SimpleProxy';
  }
}), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SIMPLE_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SimpleAdapter';
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class);
;
console.log('>>>>QQQQ 222');
const initialState = {};
const app = SimpleApp.NS.MainApplication.new(initialState);
console.log('>>>>QQQQ 333');
app.start();
console.log('>>>>QQQQ 444');
const {
  ERROR,
  DEBUG,
  LEVELS,
  SEND_TO_LOG
} = SimpleApp.NS.Pipes.NS.LogMessage;
app.setLogLevelMethod(DEBUG);
console.log('>>>>QQQQ 1010+1++'); // const isBackground = true;
// window.isBackground = isBackground;
// console.log('>>????? isBackground', isBackground, app.facade);
// app.facade
//   .getMediator('ApplicationMediator')
//   .migrate()
//   .then(d => console.log('>>???-,, O_O', d));

console.log('>>>>QQQQ 444++', ERROR, DEBUG, LEVELS, SEND_TO_LOG);
app.send(SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]);
console.log('>>>>QQQQ 555');
app.send(SimpleApp.NS.START_CONSOLE);
var _default = app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsaXplIiwibWV0YSIsIm5hbWVCeSIsInJlc29sdmVyIiwiY29uc3RhbnQiLCJwbHVnaW4iLCJsb2FkRmlsZXMiLCJMZWFuRVMiLCJOUyIsIlNpbXBsZUFwcCIsIkNvbmZpZ3VyYWJsZUFkZG9uIiwiRnNVdGlsc0FkZG9uIiwicmVxdWlyZSIsIm5hbWUiLCJfX2ZpbGVuYW1lIiwib2JqZWN0IiwiX19kaXJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiYXBwIiwiTWFpbkFwcGxpY2F0aW9uIiwibmV3Iiwic3RhcnQiLCJFUlJPUiIsIkRFQlVHIiwiTEVWRUxTIiwiU0VORF9UT19MT0ciLCJQaXBlcyIsIkxvZ01lc3NhZ2UiLCJzZXRMb2dMZXZlbE1ldGhvZCIsInNlbmQiLCJTVEFSVF9DT05TT0xFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRSxDQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0EsTUFBTTtBQUFFQyxFQUFBQSxVQUFGO0FBQWNDLEVBQUFBLElBQWQ7QUFBb0JDLEVBQUFBLE1BQXBCO0FBQTRCQyxFQUFBQSxRQUE1QjtBQUFzQ0MsRUFBQUEsUUFBdEM7QUFBZ0RDLEVBQUFBLE1BQWhEO0FBQXdEQyxFQUFBQTtBQUF4RCxJQUFzRUMsZUFBT0MsRUFBbkY7QUFHQVYsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtJQU9NVSxTLFdBSExKLE1BQU0sQ0FBQ0ssZUFBRCxDLFVBQ05MLE1BQU0sQ0FBQ00sZUFBRCxDLFVBQ05SLFFBQVEsQ0FBQ1MsT0FBRCxFQUFVQyxJQUFJLElBQUlELE9BQU8sQ0FBQ0MsSUFBRCxDQUF6QixDLEVBSlJiLFUsVUFDQU0sUyxvRkFERCxNQUtNRyxTQUxOLFNBS3dCRixjQUx4QixDQUsrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLEMsVUFDYk8sVSxHQUFhLFcsVUFDaEJDLE0sR0FBUyxFLDJFQURyQmIsTTs7Ozs7OzswRUFDQUQsSTs7Ozs7OztnR0FDQUcsUTs7Ozs7V0FBZ0JZLFM7O2dHQUNoQlosUTs7Ozs7V0FBeUIsZTs7bUdBQ3pCQSxROzs7OztXQUE0QixrQjs7aUdBQzVCQSxROzs7OztXQUEwQixnQjs7Z0dBQzFCQSxROzs7OztXQUF5QixlOzsrRkFDekJBLFE7Ozs7O1dBQXdCLGE7O2lHQUN4QkEsUTs7Ozs7V0FBMEIsZTs7O0FBQzVCO0FBR0ROLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxNQUFNa0IsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHVCxTQUFTLENBQUNELEVBQVYsQ0FBYVcsZUFBYixDQUE2QkMsR0FBN0IsQ0FBaUNILFlBQWpDLENBQVo7QUFDQW5CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQW1CLEdBQUcsQ0FBQ0csS0FBSjtBQUNBdkIsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBLE1BQU07QUFBRXVCLEVBQUFBLEtBQUY7QUFBU0MsRUFBQUEsS0FBVDtBQUFnQkMsRUFBQUEsTUFBaEI7QUFBd0JDLEVBQUFBO0FBQXhCLElBQXdDaEIsU0FBUyxDQUFDRCxFQUFWLENBQWFrQixLQUFiLENBQW1CbEIsRUFBbkIsQ0FBc0JtQixVQUFwRTtBQUNBVCxHQUFHLENBQUNVLGlCQUFKLENBQXNCTCxLQUF0QjtBQUNBekIsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QnVCLEtBQTlCLEVBQXFDQyxLQUFyQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLFdBQXBEO0FBQ0FQLEdBQUcsQ0FBQ1csSUFBSixDQUNFSixXQURGLEVBQ2UsYUFEZixFQUM4QkQsTUFBTSxDQUFDRCxLQUFELENBRHBDO0FBR0F6QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FtQixHQUFHLENBQUNXLElBQUosQ0FBU3BCLFNBQVMsQ0FBQ0QsRUFBVixDQUFhc0IsYUFBdEI7ZUFFZVosRyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zaW1wbGUuXG4vL1xuLy8gbGVhbmVzLXNpbXBsZSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zaW1wbGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNpbXBsZS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmNvbnNvbGUubG9nKCc+Pj4+UVFRUSAwMDAtKzkxMSonKTtcbi8vIGltcG9ydCBMZWFuRVMgZnJvbSAnLi9saWJzL2xlYW5lcyc7XG4vLyBpbXBvcnQgTGVhbkVTIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy9saWIvaW5kZXguZGV2Jztcbi8vIGltcG9ydCBGc1V0aWxzQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLWZzLXV0aWxzLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuLy8gaW1wb3J0IENvbmZpZ3VyYWJsZUFkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1jb25maWd1cmFibGUtYWRkb24vbGliL2luZGV4LmRldic7XG5pbXBvcnQgTGVhbkVTIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy9saWIvaW5kZXguZGV2JztcbmltcG9ydCBGc1V0aWxzQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLWZzLXV0aWxzLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IENvbmZpZ3VyYWJsZUFkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1jb25maWd1cmFibGUtYWRkb24vbGliL2luZGV4LmRldic7XG4vLyBpbXBvcnQgRXZlbnRlZFN0YXRlTWFjaGluZSBmcm9tICcuL3BsdWdpbnMvZXZlbnRlZF9zdGF0ZV9tYWNoaW5lJztcbmNvbnN0IHsgaW5pdGlhbGl6ZSwgbWV0YSwgbmFtZUJ5LCByZXNvbHZlciwgY29uc3RhbnQsIHBsdWdpbiwgbG9hZEZpbGVzIH0gPSBMZWFuRVMuTlM7XG5cblxuY29uc29sZS5sb2coJz4+Pj5RUVFRIDExMSsnKTtcblxuQGluaXRpYWxpemVcbkBsb2FkRmlsZXNcbkBwbHVnaW4oQ29uZmlndXJhYmxlQWRkb24pXG5AcGx1Z2luKEZzVXRpbHNBZGRvbilcbkByZXNvbHZlcihyZXF1aXJlLCBuYW1lID0+IHJlcXVpcmUobmFtZSkpXG5jbGFzcyBTaW1wbGVBcHAgZXh0ZW5kcyBMZWFuRVMge1xuICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9ICdTaW1wbGVBcHAnO1xuICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIEBjb25zdGFudCBST09UID0gX19kaXJuYW1lO1xuICBAY29uc3RhbnQgU1RBUlRfQ09OU09MRSA9ICdTVEFSVF9DT05TT0xFJztcbiAgQGNvbnN0YW50IE1TR19GUk9NX0NPTlNPTEUgPSAnTVNHX0ZST01fQ09OU09MRSc7XG4gIEBjb25zdGFudCBNU0dfVE9fQ09OU09MRSA9ICdNU0dfVE9fQ09OU09MRSc7XG4gIEBjb25zdGFudCBDTEVBUl9DT05TT0xFID0gJ0NMRUFSX0NPTlNPTEUnO1xuICBAY29uc3RhbnQgU0lNUExFX1BST1hZID0gJ1NpbXBsZVByb3h5JztcbiAgQGNvbnN0YW50IFNJTVBMRV9BREFQVEVSID0gJ1NpbXBsZUFkYXB0ZXInO1xufTtcblxuXG5jb25zb2xlLmxvZygnPj4+PlFRUVEgMjIyJyk7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcbmNvbnN0IGFwcCA9IFNpbXBsZUFwcC5OUy5NYWluQXBwbGljYXRpb24ubmV3KGluaXRpYWxTdGF0ZSk7XG5jb25zb2xlLmxvZygnPj4+PlFRUVEgMzMzJyk7XG5hcHAuc3RhcnQoKTtcbmNvbnNvbGUubG9nKCc+Pj4+UVFRUSA0NDQnKTtcbmNvbnN0IHsgRVJST1IsIERFQlVHLCBMRVZFTFMsIFNFTkRfVE9fTE9HIH0gPSBTaW1wbGVBcHAuTlMuUGlwZXMuTlMuTG9nTWVzc2FnZTtcbmFwcC5zZXRMb2dMZXZlbE1ldGhvZChERUJVRyk7XG5jb25zb2xlLmxvZygnPj4+PlFRUVEgMTAxMCsxKysnKTtcbi8vIGNvbnN0IGlzQmFja2dyb3VuZCA9IHRydWU7XG4vLyB3aW5kb3cuaXNCYWNrZ3JvdW5kID0gaXNCYWNrZ3JvdW5kO1xuLy8gY29uc29sZS5sb2coJz4+Pz8/Pz8gaXNCYWNrZ3JvdW5kJywgaXNCYWNrZ3JvdW5kLCBhcHAuZmFjYWRlKTtcbi8vIGFwcC5mYWNhZGVcbi8vICAgLmdldE1lZGlhdG9yKCdBcHBsaWNhdGlvbk1lZGlhdG9yJylcbi8vICAgLm1pZ3JhdGUoKVxuLy8gICAudGhlbihkID0+IGNvbnNvbGUubG9nKCc+Pj8/Py0sLCBPX08nLCBkKSk7XG5jb25zb2xlLmxvZygnPj4+PlFRUVEgNDQ0KysnLCBFUlJPUiwgREVCVUcsIExFVkVMUywgU0VORF9UT19MT0cpO1xuYXBwLnNlbmQoXG4gIFNFTkRfVE9fTE9HLCAnSGVsbG8gd29ybGQnLCBMRVZFTFNbREVCVUddXG4pO1xuY29uc29sZS5sb2coJz4+Pj5RUVFRIDU1NScpO1xuYXBwLnNlbmQoU2ltcGxlQXBwLk5TLlNUQVJUX0NPTlNPTEUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=