# File system
The file system is a module that allows us to access files on our system, it also allows us to read, modify, rename them, among other things.

To use the **File system**, we have to do a **require**.

```javascript
const fs = require('fs');
```

⚠ Remember that it is preferable to handle everything **asynchronously** since it allows us to **not** block access to the server during processes.

### Read a file:

```javascript
function read (path, cb){
  fs.readFile(path, (err, data) =>{
    cb(data.toString());
  });
}

read(__dirname + '/archive1.txt',console.log);
```

### Create a file:

```javascript
function write(path, content, cb){
  fs.writeFile(path, content, function (error){
    if (error){
      console.log('Could not write file',error);
    }else {
      console.log('File written successfully');
    }
  })
}

write(__dirname + '/archive1.txt', 'I am a new file', console.log);
```

### Delate a file:

```javascript
function remove(path, cb){
  fs.unlink(path, cb);
}

remove(__dirname + '/archive1.txt', console.log);
```