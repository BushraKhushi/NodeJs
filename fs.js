const files = require('fs');

var readfiles=files.readdirSync('./');
console.log(readfiles);

var readfiles2 =files.readdir('./',function(err,readfiles3){
    if (err) 
    console.log('Error',err);
    else
    console.log(readfiles3);
});
console.log(readfiles2);