/*
    This code is used to manipulate and work with time. It allows 
    for faster queries and saves several lines of code that would 
    be needed if doing the work without the moment package.
*/


const moment = require('moment');

// Store the current date, day, and time
let now = moment();

// Display the current time in the format given by 'moment'
console.log(now);

// Display the time in a more readable format using .toString()
console.log(now.toString());

// Use .format() to display the time in the desired format
console.log(now.format('YYYY/MM/DD - HH:mm'));