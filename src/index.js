// import LeanES from './libs/leanes';
import LeanES from '@leansdk/leanes/src';
import FsUtilsAddon from '@leansdk/leanes-fs-utils-addon/src';
// import EventedStateMachine from './plugins/evented_state_machine';
const { initialize, meta, nameBy, resolver, constant, plugin, loadFiles, mixin } = LeanES.NS;


console.log('>>>>QQQQ 111');

@initialize
@loadFiles
@plugin(FsUtilsAddon)
@resolver(require, name => require(name))
class SimpleLeanes extends LeanES {
  @nameBy static  __filename = 'SimpleLeanes';
  @meta static object = {};
  @constant ROOT = __dirname;
};


console.log('>>>>QQQQ 222');

const app = SimpleLeanes.NS.MainApplication.new();
console.log('>>>>QQQQ 333');
app.start();
console.log('>>>>QQQQ 444');
const { ERROR, DEBUG, LEVELS, SEND_TO_LOG } = SimpleLeanes.NS.Pipes.NS.LogMessage;
const isBackground = true;
window.isBackground = isBackground;
console.log('>>????? isBackground', isBackground, app.facade);
// app.facade
//   .getMediator('ApplicationMediator')
//   .migrate()
//   .then(d => console.log('>>???-,, O_O', d));
app.facade.send(
  SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]
);

export default app;
