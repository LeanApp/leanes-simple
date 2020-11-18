import type {
  NotificationInterface,
} from '../libs/leanes';


export default (Module) => {
  const {
    SimpleCommand,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareControllerCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      console.log('PrepareControllerCommand execute()');
      this.facade.addCommand('STDIN', 'SimpleCommand');
    }
  }
}
