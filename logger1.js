
const EventEmitter=require('events');
class Logger extends EventEmitter{
 log(message){
    console.log(message);
    //raise an event
this.emit('messagedLog',{id: 1, url: 'http//'});
}
}
module.exports=Logger;
