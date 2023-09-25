const fs = require('fs');


function read (path, cb){
  fs.readFile(path, (err, data) =>{
    cb(data.toString());
  });
}

function write(path, content, cb){
  fs.writeFile(path, content, function (err){
    if (err){
      console.log('Could not write file',err);
    }else {
      console.log('File written successfully');
    }
  })
}

function remove(path, cb){
  fs.unlink(path, cb);
}

write(__dirname + '/archive1.txt', 'I am a new file', console.log);
read(__dirname + '/archive1.txt',console.log);
remove(__dirname + '/archive1.txt', console.log);