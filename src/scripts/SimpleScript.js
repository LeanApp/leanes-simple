

export default (Module) => {
  const {
    Script, Record,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class SimpleScript extends Script {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method async body(data: ?any): Promise<?any> {
      console.log('SimpleScript execute()');
    }
  }
}
