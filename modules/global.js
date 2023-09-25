console.log(global);

// setInterval(function() {
//   console.log('hello');
// },1000);

let i = 0;
let interval = setInterval(function() {
  console.log('hello');
  if (i === 3){
    // clearInterval is often used when a server reloads many times and does not respond,
    // which can indicate that the server is down.
    clearInterval(interval);
  }
  i++;
},1000);

setImmediate(function(){
  console.log('Hello');
});

console.log(process);

console.log(__dirname);

console.log(__filename);

global.myVariable = 'theValue';

console.log(global.myVariable);
console.log(myVariable);

/*
GLOBALS:
Global modules are many modules that come in Node.js that are included
in global modules. In NodeJS we have the global object that has methods and properties,
this is what is called global modules.
Some global modules:
- setInterval
- setImmediate
- require
- __dirname
- __filename

IF YOU CAN AVOID USING GLOBAL VARIABLES, DO NOT USE THEM.
This is how you declare a global variable and display it:
global.myVariable = 'theValue';
console.log(myVariable);

In Node, this is an alias of global:
this === global
*/