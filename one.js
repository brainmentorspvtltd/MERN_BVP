const fs = require('fs'); // Core Module (Sync) - EL
function done(err, buffer){
    if(err){
        console.log(err);
    }
    else{
        console.log(buffer.toString());
    }
}
console.log("Doing Read....");
fs.readFile(__filename, done); // Async Code - LIBUV 
fs.readFile('/Users/amitsrivastava/Documents/MERN-BVP/pizza-shop/.env', done);
fs.readFile('/Users/amitsrivastava/Documents/MERN-BVP/pizza-shop/README.md', done);
// Fire and Forget and CallBack
console.log("Doing Read #####");
var a =10;
var b = 20;
var c= a + b;
console.log("Hello Node JS "+c);
