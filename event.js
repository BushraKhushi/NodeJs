const EventEmitter = require ('events');

const emitter = new EventEmitter();

//console.log(EventEmitter);
//console.log(emitter);

//register a Listener
emitter.on('Message BUSHRA',function(){
    console.log('Listerner is listening');
})

emitter.on('KHUSHI',function(){
    console.log("HI");
})

emitter.on ('RabbitMQ', function(anyName){
    console.log("Hello",anyName);
})
// raise an event
emitter.emit('Message BUSHRA');

emitter.emit('KHUSHI');

emitter.emit('JOY');
//event argument
emitter.emit('RabbitMQ',{id: 'user', pass: 'user'});