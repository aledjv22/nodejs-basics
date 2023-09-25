# Child process
A process is something that runs and finishes running. With **child process** we can access the terminal through NodeJS.

```javascript
const { exec } = require('child_process');

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
```

We can also see in detail how a process is handled with the **spawn** method.

```javascript
const { spawn } = require('child_process');

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
```