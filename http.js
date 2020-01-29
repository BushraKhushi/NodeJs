const http = require ('http');

const server = http.createServer();

server.on('connection',function(socket){
    console.log('New Connection');
})

server.listen(3000);
console.log('Server is listening 9000...');

