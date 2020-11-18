import type {
  NotificationInterface,
} from '../libs/leanes';


export default (Module) => {
  const {
    STARTUP, STARTUP_COMPLETE,
    Command,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class StartupCommand extends Command {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method initializeCommand(): void {
      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
    }

    @method execute(aoNotification: NotificationInterface): void {
      console.log('StartupCommand execute()');
      super.execute(aoNotification);
      this.facade.removeCommand(STARTUP);
      this.send(STARTUP_COMPLETE);
      this.send('STDIN_START');
    }
  }
}
