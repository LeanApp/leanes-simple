console.log('>>>>QQQQ 11-11');

export default (Module) => {
  const {
    STARTUP, STARTUP_COMPLETE, START_RESQUE,
    Facade,
    StartupCommand,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;


  @initialize
  @module(Module)
  class ApplicationFacade extends Facade {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property _isInitialized: boolean = false;

    @method static getInstance(asKey) {
      if (!asKey) {
        return null;
      }
      console.log('>>>>QQQQ 13-13+1');
      if (!Facade._instanceMap[asKey]) {
        ApplicationFacade.new(asKey);
      }
      console.log('>>>>QQQQ 13-13+2');
      return Facade._instanceMap[asKey];
    }

    @method startup(aoApplication) {
      if (!this._isInitialized) {
        this._isInitialized = true;
        this.send(STARTUP, aoApplication);
        if (!aoApplication.isLightweight) {
          this.send(START_RESQUE);
        }
      }
    }

    @method shutdown(aoApplication) {

    }

    @method _initializeView() {
      super._initializeView();
    }

    @method _initializeController() {
      super._initializeController(... arguments);
      this.addCommand(STARTUP, StartupCommand);
    }
  }
}
console.log('>>>>QQQQ 11-11+');
