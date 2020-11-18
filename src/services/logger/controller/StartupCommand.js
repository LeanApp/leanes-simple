

export default (Module) => {
  const {
    MacroCommand,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize, module, meta, method, nameBy
  } = Module.NS;

  @initialize
  @module(Module)
  class StartupCommand extends MacroCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method initializeMacroCommand(): void {
      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
    }
  }
}
