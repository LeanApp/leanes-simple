console.log('>>>>QQQQ 888');

export default (Module) => {
  const {
    APPLICATION_PROXY,
    Pipes,
    Application,
    initialize, module, meta, property, method, nameBy,
    Utils: { _ }
  } = Module.NS;

  const {
    LogMessage: { DEBUG },
    LogFilterMessage: { SET_LOG_LEVEL }
  } = Pipes.NS;

  @initialize
  @module(Module)
  class MainApplication extends Application {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property initialState: object = null;//ApplicationState;

    @method setLogLevelMethod(level: number): void {
      this.facade.send(SET_LOG_LEVEL, level);
    }

    @method sendEvent(name, body, type = 'Event') {
      this.facade.send(name, body, type);
    }

    @method setState(state): void {
      const appProxy = this.facade.retrieveProxy(APPLICATION_PROXY);
      appProxy.setState(state);
    }

    @method getState(): object {
      const appProxy = this.facade.retrieveProxy(APPLICATION_PROXY);
      return appProxy.getData();
    }

    constructor(data: ?(Symbol | object)) {
      console.log('>>>>QQQQ 999');
      const { ApplicationFacade } = Module.NS;
      const symbol = _.isSymbol(data)
        ? data
        : null;
      console.log('>>>>QQQQ 1010');
      super(Module.name, ApplicationFacade, symbol);
      console.log('>>>>QQQQ 1010+1');
      this.dispatch = this.sendEvent.bind(this);
      this.setLogLevelMethod(DEBUG);
      console.log('>>>>QQQQ 1010+2');
      if (!_.isSymbol(data) && _.isObject(data)) {
        console.log('>>>>QQQQ 1010+3');
        this.initialState = data;
        console.log('>>>>QQQQ 1010+4');
      }
    }
  }

  // console.log('><MMMMMMMMM ?? MainApplication, MainApplication', Module.name, Module.NS,  Module.NS.MainApplication);
}
console.log('>>>>QQQQ 888+');
