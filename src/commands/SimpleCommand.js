import type {
  NotificationInterface,
} from '../libs/leanes';


export default (Module) => {
  const {
    STARTUP, STARTUP_COMPLETE, APPLICATION_PROXY
    Command,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class SimpleCommand extends Command {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      console.log('SimpleCommand execute()');
      super.execute(aoNotification);
      const appProxy = this.facade.retrieveProxy(APPLICATION_PROXY, aoNotification.getBody());
      this.send('STDIN_COMPLETE', appProxy.getData(), aoNotification.type);
    }
  }
}
