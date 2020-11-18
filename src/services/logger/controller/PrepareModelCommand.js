import type {
  NotificationInterface,
} from '../../../libs/leanes';


export default (Module) => {
  const {
    SimpleCommand, LoggerProxy,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareModelCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(note: NotificationInterface): void {
      this.facade.addProxy(LoggerProxy.new());
    }
  }
}
