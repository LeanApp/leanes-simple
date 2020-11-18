

export default (Module) => {
  const {
    Pipes,
    Proxy, Application,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  const { LOGGER_PROXY } = Application;
  const {
    LogMessage: { CHANGE, NONE, FATAL, ERROR, WARN, INFO, DEBUG }
  } = Pipes.NS;

  @initialize
  @module(Module)
  class LoggerProxy extends Proxy {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method addLogEntry(data: object): void {
      const { logLevel, sender, time, message } = data;
      switch (logLevel) {
        case FATAL:
        case ERROR:
          console.error(sender, '->', message);
          break;
        case INFO:
          console.info(sender, '->', message);
          break;
        case DEBUG:
          console.log(sender, '->', message);
          break;
        case WARN:
          console.warn(sender, '->', message);
          break;
        default:
          console.log(sender, '->', message);
      }
    }

    constructor() {
      super(LOGGER_PROXY, []);
    }
  }
}
