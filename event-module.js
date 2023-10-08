const EventEmitter=require('events');
const emitter=new EventEmitter();
//register a listenser for event
emitter.on('messagedLog',function(arg){
   console.log('event listened', arg);
})
//raise an event
emitter.emit('messagedLog',{id: 1, url: 'http//'});

