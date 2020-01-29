const os = require ('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Total Memory: ${totalMemory}`);
console.log (`Free Memory: ${freeMemory}`);