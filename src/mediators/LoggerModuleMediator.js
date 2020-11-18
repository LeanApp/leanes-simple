import Logger from '../services/logger';
const { LoggerApplication } = Logger.NS;


import type {
  NotificationInterface,
  PipeAwareInterface
} from '../libs/leanes';

export default (Module) => {
  const {
    LIGHTWEIGHT,
    Pipes,
    Mediator, Application,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;

  const {
    Pipe,
    PipeAwareModule: {
      STDIN, STDOUT, STDLOG, STDSHELL
    },
  } = Pipes.NS;

  const { CONNECT_MODULE_TO_LOGGER, CONNECT_SHELL_TO_LOGGER } = Application;

  @initialize
  @module(Module)
  class LoggerModuleMediator extends Mediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property get logger(): PipeAwareInterface {
      return this.getViewComponent();
    }

    @method onRemove() {
      return this.logger.finish();
    }

    @method listNotificationInterests(): string[] {
      return [ CONNECT_MODULE_TO_LOGGER, CONNECT_SHELL_TO_LOGGER ];
    }

    @method handleNotification(aoNotification: NotificationInterface): void {
      switch (aoNotification.getName()) {
        // Connect any Module's STDLOG to the logger's STDIN
        case CONNECT_MODULE_TO_LOGGER:
          const module = aoNotification.getBody();
          const pipe = Pipe.new();
          module.acceptOutputPipe(STDLOG, pipe);
          this.logger.acceptInputPipe(STDIN, pipe);
          break;
        // Bidirectionally connect shell and logger on STDLOG/STDSHELL
        case CONNECT_SHELL_TO_LOGGER:
          // The junction was passed from ShellJunctionMediator
          const junction = aoNotification.getBody();
          // Connect the shell's STDLOG to the logger's STDIN
          const shellToLog = junction.retrievePipe(STDLOG);
          this.logger.acceptInputPipe(STDIN, shellToLog);
          // Connect the logger's STDSHELL to the shell's STDIN
          const logToShell = Pipe.new();
          const shellIn = junction.retrievePipe(STDIN);
          shellIn.connectInput(logToShell);
          this.logger.acceptOutputPipe(STDSHELL, logToShell);
          break;
      }
    }

    constructor() {
      super(
        LoggerModuleMediator.name, LoggerApplication.new(LIGHTWEIGHT)
      );
      this.logger.start();
    }
  }
}
