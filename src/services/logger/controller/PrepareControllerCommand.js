import type {
  NotificationInterface,
} from '../../../libs/leanes';


export default (Module) => {
  const {
    LOG_MSG,
    SimpleCommand,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareControllerCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(note: NotificationInterface): void {
      this.facade.lazyRegisterCommand(LOG_MSG, 'LogMessageCommand');
    }
  }
}
