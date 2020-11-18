

export default (Module) => {
  const {
    Pipes,
    Application,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;

  const {
    LogMessage: { DEBUG },
    LogFilterMessage: { SET_LOG_LEVEL }
  } = Pipes.NS;

  @initialize
  @module(Module)
  class LoggerApplication extends Application {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method setLogLevelMethod(level: number): void {
      this.facade.send(SET_LOG_LEVEL, level);
    }

    // @method init() {
    //   super.init(... arguments);
    //   this.setLogLevelMethod(DEBUG);
    // }

    constructor(symbol: ?Symbol) {
      const { ApplicationFacade } = Module.NS;
      super(Module.name, ApplicationFacade, symbol);
      this.setLogLevelMethod(DEBUG);
    }
  }
}
