// This can be used as a promise.

const bcrypt = require('bcrypt');

const password = '1234Safe!';

// I indicate the password, the number of times I want it to go through the algorithm, and the callback.
// This is used to "encrypt" user passwords and store them in the database.
bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);

    // .compare() receives a value, a hash result, and a callback, which tells me if it's possible to get to the hash result from the given value using .hash
    bcrypt.compare(password, hash, function(err, res){
        //console.log(err);
        console.log(res);
    });
});