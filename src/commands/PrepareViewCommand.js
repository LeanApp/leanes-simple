import type {
  NotificationInterface,
} from '@leansdk/leanes/src';

export default (Module) => {
  const {
    APPLICATION_MEDIATOR,
    SimpleCommand, ApplicationMediator, Application,
    LoggerModuleMediator,
    ShellJunctionMediator,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareViewCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      console.log('PrepareViewCommand execute()');
      const voApp: Application = aoNotification.getBody();
      this.facade.addMediator(LoggerModuleMediator.new());
      this.facade.addMediator(ShellJunctionMediator.new());
      // const appMediator = ApplicationMediator.new(APPLICATION_MEDIATOR, voApp);
      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', voApp);
      this.facade.addMediator(SimpleMediator.new());
    }
  }
}
