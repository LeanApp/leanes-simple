import type {
  NotificationInterface,
  PipeMessageInterface
} from '../../../libs/leanes';


export default (Module) => {
  const {
    LOG_MSG,
    Pipes,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;

  const {
    JunctionMediator, LogFilterMessage, PipeAwareModule, PipeListener,
    Junction, TeeMerge, Filter
  } = Pipes.NS;

  const { STDIN } = PipeAwareModule;
  const { INPUT } = Junction;
  const { ACCEPT_INPUT_PIPE } = JunctionMediator;
  const { LOG_FILTER_NAME, filterLogByLevel } = LogFilterMessage;

  @initialize
  @module(Module)
  class LoggerJunctionMediator extends JunctionMediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    // @property static get NAME(): string {
    //   return `${this.Module.name}JunctionMediator`;
    // }

    @method listNotificationInterests(): string[] {
      return super.listNotificationInterests(... arguments);
    }

    @method handleNotification(aoNotification: NotificationInterface): void {
      switch (aoNotification.getName()) {
        case ACCEPT_INPUT_PIPE:
          const name = aoNotification.getType();
          if (name === STDIN) {
            const pipe = aoNotification.getBody();
            const tee = this._junction.retrievePipe(STDIN);
            tee.connectInput(pipe);
          } else {
            super.handleNotification(aoNotification);
          }
          break;
        default:
          super.handleNotification(aoNotification);
      }
    }

    @method handlePipeMessage(aoMessage: PipeMessageInterface): void {
      this.send(LOG_MSG, aoMessage);
    }

    @method onRegister(): void {
      const teeMerge = TeeMerge.new();
      const filter = Filter.new(LOG_FILTER_NAME, null, filterLogByLevel);
      filter.connect(PipeListener.new(this, this.handlePipeMessage));
      teeMerge.connect(filter);
      this._junction.registerPipe(STDIN, INPUT, teeMerge);
    }

    // @method init() {
    //   super.init(LoggerJunctionMediator.NAME, Junction.new());
    // }

    constructor() {
      super(`${Module.name}JunctionMediator`, Junction.new())
    }
  }
}
