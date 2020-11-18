import type {
  NotificationInterface,
} from '../../../libs/leanes';

export default (Module) => {
  const {
    APPLICATION_MEDIATOR,
    SimpleCommand, ApplicationMediator, Application,
    LoggerJunctionMediator,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class PrepareViewCommand extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method execute(aoNotification: NotificationInterface): void {
      const voApp: Application = aoNotification.getBody();
      this.facade.addMediator(LoggerJunctionMediator.new());
      const appMediator = ApplicationMediator.new(APPLICATION_MEDIATOR, voApp);
      this.facade.addMediator(appMediator);
    }
  }
}
