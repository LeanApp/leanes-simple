

export default (Module) => {
  const {
    Mediator,
    ApplicationMediatorMixin,
    initialize, module, meta, nameBy, mixin
  } = Module.NS;

  @initialize
  @module(Module)
  @mixin(ApplicationMediatorMixin)
  class ApplicationMediator extends Mediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

  }
}
