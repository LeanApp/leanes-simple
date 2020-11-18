import type {
  NotificationInterface,
  PipeMessageInterface
} from '../libs/leanes';


export default (Module) => {
  const {
    Pipes,
    Application,
    LoggingJunctionMixin,
    initialize, module, meta, property, method, nameBy, mixin
  } = Module.NS;

  const {
    Junction, PipeAwareModule, LogMessage, Pipe, TeeSplit, TeeMerge,
    JunctionMediator,
  } = Pipes.NS;

  const { CONNECT_MODULE_TO_SHELL, CONNECT_SHELL_TO_LOGGER } = Application;
  const { INPUT, OUTPUT } = Junction;
  const { STDIN, STDOUT, STDLOG, STDSHELL } = PipeAwareModule;
  const { SEND_TO_LOG, LEVELS, DEBUG } = LogMessage;

  @initialize
  @module(Module)
  @mixin(LoggingJunctionMixin)
  class ShellJunctionMediator extends JunctionMediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method listNotificationInterests(): string[] {
      const interests = super.listNotificationInterests(... arguments);
      interests.push(CONNECT_MODULE_TO_SHELL);
      return interests;
    }

    @method handleNotification(aoNotification: NotificationInterface) {
      switch (aoNotification.getName()) {
        case CONNECT_MODULE_TO_SHELL:
          this.send(
            SEND_TO_LOG, 'Connecting new module instance to Shell.', LEVELS[DEBUG]
          );
          // Connect a module's STDSHELL to the shell's STDIN
          const module = aoNotification.getBody();
          const moduleToShell = Pipe.new();
          module.acceptOutputPipe(STDSHELL, moduleToShell);
          const shellIn = this._junction.retrievePipe(STDIN);
          shellIn.connectInput(moduleToShell);
          // Connect the shell's STDOUT to the module's STDIN
          const shellToModule = Pipe.new();
          module.acceptInputPipe(STDIN, shellToModule);
          const shellOut = this._junction.retrievePipe(STDOUT);
          shellOut.connect(shellToModule);
          break;
        default:
          super.handleNotification(aoNotification);
      }
    }

    @method handlePipeMessage(aoMessage: PipeMessageInterface): void {
      return;
    }

    @method onRegister() {
      // The STDOUT pipe from the shell to all modules
      this._junction.registerPipe(STDOUT, OUTPUT, TeeSplit.new());
      // The STDIN pipe to the shell from all modules
      this._junction.registerPipe(STDIN, INPUT, TeeMerge.new());
      this._junction.addPipeListener(STDIN, this, this.handlePipeMessage);
      // The STDLOG pipe from the shell to the logger
      this._junction.registerPipe(STDLOG, OUTPUT, Pipe.new());
      return this.send(CONNECT_SHELL_TO_LOGGER, this._junction);
    }

    // @method init() {
    //   super.init(ShellJunctionMediator.NAME, Junction.new());
    // }

    constructor() {
      super(`${Module.name}JunctionMediator`, Junction.new());
    }
  }
}
