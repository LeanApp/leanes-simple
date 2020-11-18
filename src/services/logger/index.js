import LeanES from '../../libs/leanes';
const { initialize, meta, nameBy, resolver, constant } = LeanES.NS;


@initialize
@resolver(require, name => require(name))
class Logger extends LeanES {
  @nameBy static  __filename = 'Logger';
  @meta static object = {};

  @constant ROOT = __dirname;

};

// require('./model/LoggerProxy').default(Logger);
// require('./view/LoggerJunctionMediator').default(Logger);
// require('./controller/PrepareControllerCommand').default(Logger);
// require('./controller/PrepareModelCommand').default(Logger);
// require('./controller/PrepareViewCommand').default(Logger);
// require('./controller/StartupCommand').default(Logger);
// require('./ApplicationFacade').default(Logger);
// require('./LoggerApplication').default(Logger);

export default Logger;
