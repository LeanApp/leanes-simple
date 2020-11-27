"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
let Logger = (_dec = plugin(_index2.default), _dec2 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class Logger extends _index.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
  }

}, _class3.__filename = 'Logger', _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
})), _class2)) || _class) || _class) || _class) || _class);
; // require('./model/LoggerProxy').default(Logger);
// require('./view/LoggerJunctionMediator').default(Logger);
// require('./controller/PrepareControllerCommand').default(Logger);
// require('./controller/PrepareModelCommand').default(Logger);
// require('./controller/PrepareViewCommand').default(Logger);
// require('./controller/StartupCommand').default(Logger);
// require('./ApplicationFacade').default(Logger);
// require('./LoggerApplication').default(Logger);

var _default = Logger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwibWV0YSIsIm5hbWVCeSIsInJlc29sdmVyIiwiY29uc3RhbnQiLCJwbHVnaW4iLCJsb2FkRmlsZXMiLCJMZWFuRVMiLCJOUyIsIkxvZ2dlciIsIkZzVXRpbHNBZGRvbiIsInJlcXVpcmUiLCJuYW1lIiwiX19maWxlbmFtZSIsIm9iamVjdCIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7O0FBRUEsTUFBTTtBQUFFQSxFQUFBQSxVQUFGO0FBQWNDLEVBQUFBLElBQWQ7QUFBb0JDLEVBQUFBLE1BQXBCO0FBQTRCQyxFQUFBQSxRQUE1QjtBQUFzQ0MsRUFBQUEsUUFBdEM7QUFBZ0RDLEVBQUFBLE1BQWhEO0FBQXdEQyxFQUFBQTtBQUF4RCxJQUF1RUMsZUFBT0MsRUFBcEY7SUFNTUMsTSxXQUZMSixNQUFNLENBQUNLLGVBQUQsQyxVQUNOUCxRQUFRLENBQUNRLE9BQUQsRUFBVUMsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBekIsQyxFQUhSWixVLFVBQ0FNLFMscUVBREQsTUFJTUcsTUFKTixTQUlxQkYsY0FKckIsQ0FJNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDLFVBQ1ZNLFUsR0FBYSxRLFVBQ2hCQyxNLEdBQVMsRSwyRUFEckJaLE07Ozs7Ozs7MEVBQ0FELEk7Ozs7Ozs7Z0dBQ0FHLFE7Ozs7O1dBQWdCVyxTOzs7QUFDbEIsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2VBRWVOLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2ltcGxlLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IExlYW5FUyBmcm9tICdAbGVhbnNkay9sZWFuZXMvbGliL2luZGV4LmRldic7XG5pbXBvcnQgRnNVdGlsc0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1mcy11dGlscy1hZGRvbi9saWIvaW5kZXguZGV2JztcblxuY29uc3QgeyBpbml0aWFsaXplLCBtZXRhLCBuYW1lQnksIHJlc29sdmVyLCBjb25zdGFudCwgcGx1Z2luLCBsb2FkRmlsZXMsIH0gPSBMZWFuRVMuTlM7XG5cbkBpbml0aWFsaXplXG5AbG9hZEZpbGVzXG5AcGx1Z2luKEZzVXRpbHNBZGRvbilcbkByZXNvbHZlcihyZXF1aXJlLCBuYW1lID0+IHJlcXVpcmUobmFtZSkpXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBMZWFuRVMge1xuICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9ICdMb2dnZXInO1xuICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIEBjb25zdGFudCBST09UID0gX19kaXJuYW1lO1xufTtcblxuLy8gcmVxdWlyZSgnLi9tb2RlbC9Mb2dnZXJQcm94eScpLmRlZmF1bHQoTG9nZ2VyKTtcbi8vIHJlcXVpcmUoJy4vdmlldy9Mb2dnZXJKdW5jdGlvbk1lZGlhdG9yJykuZGVmYXVsdChMb2dnZXIpO1xuLy8gcmVxdWlyZSgnLi9jb250cm9sbGVyL1ByZXBhcmVDb250cm9sbGVyQ29tbWFuZCcpLmRlZmF1bHQoTG9nZ2VyKTtcbi8vIHJlcXVpcmUoJy4vY29udHJvbGxlci9QcmVwYXJlTW9kZWxDb21tYW5kJykuZGVmYXVsdChMb2dnZXIpO1xuLy8gcmVxdWlyZSgnLi9jb250cm9sbGVyL1ByZXBhcmVWaWV3Q29tbWFuZCcpLmRlZmF1bHQoTG9nZ2VyKTtcbi8vIHJlcXVpcmUoJy4vY29udHJvbGxlci9TdGFydHVwQ29tbWFuZCcpLmRlZmF1bHQoTG9nZ2VyKTtcbi8vIHJlcXVpcmUoJy4vQXBwbGljYXRpb25GYWNhZGUnKS5kZWZhdWx0KExvZ2dlcik7XG4vLyByZXF1aXJlKCcuL0xvZ2dlckFwcGxpY2F0aW9uJykuZGVmYXVsdChMb2dnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XG4iXX0=