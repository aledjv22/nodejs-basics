// const p = require('process');
// The above is not necessary since it comes in our global variables (I just call it)

process.on('beforeExit', () => {
  console.log('The process is about to end');
});

process.on('exit', () => {
  console.log('Alright, process exited'); //once executed, you are disconnected from the event loop
  setTimeout(() => {
    console.log('This will never be seen');
  }, 0);
});

// unhandled exceptions
// process.on('uncaughtException');

// promises that have been rejected and do not have a catch
process.on('uncaughtException', (err, origin) => {
  console.error('Oops, we forgot to catch an error');
  console.error(err);
});

// function thatDoesNotExist();

console.log('This will not appear if the error is not caught');