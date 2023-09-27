/*
    This is used to know how long a function takes to execute. For example,
    it is very useful to detect processes that take longer than they should.
*/

console.time('total');

let sum = 0;

console.time('loop');

for(let i = 0; i < 10000000; i++){
    sum++;
}

console.time('async');

console.timeEnd('loop');

console.log('Starts the asynchronous process');


asyncFunction()
    .then(() =>{
        console.timeEnd('async');
    });

// in async
function asyncFunction(){
    return new Promise ((resolve) => {
        setTimeout(function(){
            console.log('Ends the asynchronous process');
            resolve();
        });
    });
}

console.timeEnd('total');