const EventEmitter=require('events');

const Logger=require('./logger1.js');
const logger=new Logger();
//register a listenser for event
logger.on('messagedLog',function(arg){
   console.log('event listened', arg);
});
logger.log('message');
