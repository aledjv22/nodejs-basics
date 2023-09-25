console.log('Something');

console.info('Something');

console.error('Something');

console.warn('Something');

var table = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Another'
  }
]
console.table(table);

console.group('Conversation');
console.log('Hello');
console.group('bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('bla');
console.log('Goodbye');
console.groupEnd('Conversation');
console.log('Other things from another function');

// Example of .group
function function1(){
  console.group('function 1');
  console.log('This is from function 1');
  console.log('This too');
  console.log('This too');
  function2();
  console.log('We are back in 1');
  console.groupEnd('function 1');
}

function function2(){
  console.group('function 2');
  console.log('Now we are in function 2');
  console.groupEnd('function 2');
}
console.log('Starting');
function1();
// End of .group example

console.count('times');
console.count('times');
console.count('times');
console.countReset('times'); //reset
console.count('times');