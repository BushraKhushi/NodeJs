// https://nodejs.dev/make-an-http-post-request-using-nodejs

const net = require ('net');
const request = require ('request');
const port = 1122;
const server=new net.createServer();
var now = new Date();
var count =0;

server.listen(port,function(){
    console.log("server is listening %j",server.address());
    // console.log('server is listening ');
});

server.on('connection',function (socket){
    // console.log('New Connection');
    
    socket.write('Server is connected');
    
    socket.on('data',function(anyName){
        //console.log(`${anyName}`);        
       // console.log(`D: ${anyName.toString()}`);
        now = new Date();
        var DATA = anyName.toString();
        var parsed=JSON.parse(DATA);
        // console.log(parsed.time);
        // console.log(now.getTime());
        parsed.t=now.getTime();
        // console.log(parsed.t);
        // console.log(`D: ${anyName.toString()}`);
        // console.log(parsed);
        var json=JSON.stringify(parsed);   
        // console.log(json);

        request.post('http://192.168.0.212:8000/app/log', 
        { json: true, body: json, timeout: 5000 },
        function(err, res, body) {
         if (res == undefined || res == null)
         {
              console.log("meter data not sent!")

         // users.insert({ m:obj_send.m, t:obj_send.t, data:obj_send.data, send:obj_send.send, res:obj_send.res});
         }

         else
         {
             console.log("meter data sent # "+count++)
             console.log(json);
         // users.insert({ m:obj_send.m, t:obj_send.t, data:obj_send.data, send:obj_send.send, res:obj_send.res});
         }

                     
});
             
    });
        // console.log (socket.remotePort);
        // console.log(socket.remoteAddress);
        // console.log ()
  

    socket.on('end',function(){
        console.log('connection closed');
    });

    socket.on('error',function(err){
        // console.log(`${err}`);
    });

});

