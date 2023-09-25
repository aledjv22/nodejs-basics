const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

exec('ls -la', (err, stdout, sterr) => {
  if (err){
    console.error(err);
    return false;
  }

  console.log(stdout);
});

exec('node modules/console.js', (err, stdout, sterr) => {
  if (err){
    console.error(err);
    return false;
  }

  console.log(stdout);
});

let process = spawn('ls', ['-la']);

// console.log(process);
console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (data){
  console.log('Is it dead?');
  console.log(process.killed);
  console.log(data.toString());
});

process.on('exit',function(){
  console.log('The process has ended.');
  console.log(process.killed);
});