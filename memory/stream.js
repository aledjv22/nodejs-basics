const fs = require('fs');

let data = '';

// READING:
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Allow all characters, making it unnecessary to use .toString()
readableStream.setEncoding('UTF8');

// readableStream.on('data', function(chunk){
//     // console.log(chunk); //Show what was read
//     // console.log(chunk.toString()); // Show what was read in string format
//     data += chunk; // Store the data
// });

readableStream.on('end', function(){
    console.log(data);
});


// // WRITING:
// process.stdout.write('Hello');
// process.stdout.write('how');
// process.stdout.write('are you');


// MIX, now I make one that receives a data, modifies it and writes it
const stream = require('stream');

const util = require('util');

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus;

readableStream
    .pipe(mayus)
    .pipe(process.stdout);