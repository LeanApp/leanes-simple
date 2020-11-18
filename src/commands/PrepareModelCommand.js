import type {
  NotificationInterface,
} from '../libs/leanes';


export default (Module) => {
  const {
    APPLICATION_PROXY, CONFIGURATION,
    SimpleCommand, Application, ApplicationProxy,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareModelCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      console.log('PrepareModelCommand execute()');
      this.facade.addProxy(CONFIGURATION, 'MainConfiguration', this.Module.NS.ROOT);
      this.facade.addProxy(ApplicationProxy.new());
    }
  }
}
