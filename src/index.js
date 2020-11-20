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

// import LeanES from './libs/leanes';
import LeanES from '@leansdk/leanes/src';
import FsUtilsAddon from '@leansdk/leanes-fs-utils-addon/src';
import ConfigurableAddon from '@leansdk/leanes-configurable-addon/src';
// import EventedStateMachine from './plugins/evented_state_machine';
const { initialize, meta, nameBy, resolver, constant, plugin, loadFiles } = LeanES.NS;


console.log('>>>>QQQQ 111');

@initialize
@loadFiles
@plugin(ConfigurableAddon)
@plugin(FsUtilsAddon)
@resolver(require, name => require(name))
class SimpleApp extends LeanES {
  @nameBy static  __filename = 'SimpleApp';
  @meta static object = {};
  @constant ROOT = __dirname;
  @constant START_CONSOLE = 'START_CONSOLE';
  @constant MSG_FROM_CONSOLE = 'MSG_FROM_CONSOLE';
  @constant MSG_TO_CONSOLE = 'MSG_TO_CONSOLE';
  @constant CLEAR_CONSOLE = 'CLEAR_CONSOLE';
  @constant SIMPLE_PROXY = 'SimpleProxy';
  @constant SIMPLE_ADAPTER = 'SimpleAdapter';
};


console.log('>>>>QQQQ 222');
const initialState = {};
const app = SimpleApp.NS.MainApplication.new(initialState);
console.log('>>>>QQQQ 333');
app.start();
console.log('>>>>QQQQ 444');
const { ERROR, DEBUG, LEVELS, SEND_TO_LOG } = SimpleApp.NS.Pipes.NS.LogMessage;
// const isBackground = true;
// window.isBackground = isBackground;
// console.log('>>????? isBackground', isBackground, app.facade);
// app.facade
//   .getMediator('ApplicationMediator')
//   .migrate()
//   .then(d => console.log('>>???-,, O_O', d));
app.send(
  SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]
);
app.send(SimpleApp.NS.START_CONSOLE);

export default app;
