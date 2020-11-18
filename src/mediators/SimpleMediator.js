// import { readLine } from 'stdio';
const readline = require('readline');

export default (Module) => {
  const {
    Mediator,
    initialize, module, meta, property, method, nameBy
  } = Module.NS;


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>>>>>>>>>>>>>>>>>>'
  });

  @initialize
  @module(Module)
  class SimpleMediator extends Mediator {
    @nameBy static __filename = __filename;
    @meta static object = {};

    @method listNotificationInterests(): string[] {
      const interests = super.listNotificationInterests(...arguments);
      interests.push('STDIN_START');
      interests.push('STDIN_COMPLETE');
      return interests;
    }

    @method handleNotification(aoNotification: NotificationInterface): void {
      switch (aoNotification.getName()) {
        case 'STDIN_START':
          this.stdinStart();
          break;
        case 'STDIN_COMPLETE':
          this.stdinComplete(aoNotification.getBody());
          break;
        default:
          super.handleNotification(aoNotification);
      }
    }

    @method onRegister() {
      // rl.prompt();
      // rl.on('line', (input) => {
      //   console.log(`Received: ${input}`);
      //   this.send('STDIN', input);
      // });
    }

    @method onRemove() {

    }

    @method stdinStart(body) {
      console.log('Start: ');
      rl.prompt();
      rl.on('line', (input) => {
        console.log(`Received: ${input}`);
        this.send('STDIN', input);
      });
    }

    @method stdinComplete(body) {
      console.log('Complete: ', body);
      rl.prompt();
      rl.on('line', (input) => {
        console.log(`Received: ${input}`);
        this.send('STDIN', input);
      });
    }
  }
}
