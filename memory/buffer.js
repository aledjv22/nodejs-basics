/*
    All of this is useful for working with files that require modifying
    an intermediate value of a word, for example, and in this way,
    by moving between positions, I can achieve it without the need to rewrite everything.
*/


// // Save a byte of info
// let buffer = Buffer.alloc(1);
// // Show the saved byte before
// console.log(buffer);


// // Save the data 1, 2, and 5 in 3 spaces
// let buffer = Buffer.from([1, 2, 5]);
// console.log(buffer);


// Store and translate the following to binary:
let buffer = Buffer.from('Hola');
console.log(buffer); // 'Hola' is displayed in hexadecimal.
console.log(buffer.toString()); // it is translated from hex to string.


// Now I work position by position in the buffer
// to do this, I will display the alphabet.
let abc = Buffer.alloc(26); // I store 26 spaces for the 26 letters
console.log(abc); // I show the 26 spaces

// I go through the created buffer position by position
for (let i = 0; i < 26; i++){
    // It works like an array to access the desired position.
    abc[i] = i + 97; // 97 is added because it is the representation of A
}
console.log(abc); // I show the buffer value after the modifications.
console.log(abc.toString()); // I convert the output to String to verify.