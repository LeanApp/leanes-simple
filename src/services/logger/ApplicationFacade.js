

export default (Module) => {
  const {
    STARTUP,
    Facade,
    StartupCommand,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;


  @initialize
  @module(Module)
  class ApplicationFacade extends Facade {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    // vpbIsInitialized = PointerT @private isInitialized: Boolean,
    @property _isInitialized: boolean = false;

    @method static getInstance(asKey) {
      if (!asKey) {
        return null;
      }
      if (!Facade._instanceMap[asKey]) {
        return ApplicationFacade.new(asKey);
      }

      return Facade._instanceMap[asKey];
    }

    @method startup(aoApplication) {
      // console.log('>>??? STARTUP in Logger', STARTUP);
      if (!this._isInitialized) {
        this._isInitialized = true;
        this.send(STARTUP, aoApplication);
      }
    }

    @method shutdown(aoApplication) {

    }

    @method _initializeView() {
      super._initializeView();
    }

    @method _initializeController() {
      super._initializeController(... arguments);
      // console.log('>>>> Logger before this.addCommand(STARTUP');
      this.addCommand(STARTUP, StartupCommand);
      // console.log('>>>> Logger after this.addCommand(STARTUP', this);
    }
  }
}
