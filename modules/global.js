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