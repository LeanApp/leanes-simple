

export default (Module) => {
  const {
    STATE_CHANGE,
    Proxy,
    initialize, module, meta, method, nameBy,
  } = Module.NS;

  @initialize
  @module(Module)
  class ApplicationProxy extends Proxy {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method onRegister() {
      console.log('ApplicationProxy registered');
    }

    @method onRemove() {

    }

    // @method getData() {
    //   return 'Hello World';
    // }

    constructor(asProxyName: ?string, ahData: ?any) {
      super(asProxyName);
      this._data = ahData || {};
    }
  }
}
