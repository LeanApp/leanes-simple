"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Proxy,
    initialize,
    partOf,
    meta,
    nameBy
  } = Module.NS;
  let ApplicationProxy = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class ApplicationProxy extends Proxy {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvQXBwbGljYXRpb25Qcm94eS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJQcm94eSIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwiTlMiLCJBcHBsaWNhdGlvblByb3h5IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxLQURJO0FBRUpDLElBQUFBLFVBRkk7QUFFUUMsSUFBQUEsTUFGUjtBQUVnQkMsSUFBQUEsSUFGaEI7QUFFc0JDLElBQUFBO0FBRnRCLE1BR0ZMLE1BQU0sQ0FBQ00sRUFIWDtBQUR5QixNQVFuQkMsZ0JBUm1CLFdBT3hCSixNQUFNLENBQUNILE1BQUQsQ0FQa0IsRUFNeEJFLFVBTndCLHNEQU16QixNQUVNSyxnQkFGTixTQUUrQk4sS0FGL0IsQ0FFcUMsRUFSWixVQVNQTyxVQVRPLEdBU01BLFVBVE4sVUFVVkMsTUFWVSxHQVVELEVBVkMsMkVBU3RCSixNQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVV0QkQsSUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVkxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNpbXBsZS5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFByb3h5LFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBBcHBsaWNhdGlvblByb3h5IGV4dGVuZHMgUHJveHkge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIH1cbn1cbiJdfQ==