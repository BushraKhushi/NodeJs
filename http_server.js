const http = require('http');

const server =http.createServer((request,response)=>{
    if (request.url=='/'){
    response.write("Hello From NODE");
    response.end();}
});

server.on("connection",(socket)=>{
    console.log("NEW CONNECTION");
});

server.listen(3000);
console.log("SERVER IS LISTENING 3000");

