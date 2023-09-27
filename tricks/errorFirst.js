function asyncFunction(callback){
  setTimeout(function() {
    try{
      let a = 3 + z;
      cancelIdleCallback(null, a);
    } catch (err) {
      // I can omit the second parameter since what I'm interested in is the error.
      //callback (err, null);
      callback (err);
    }
  }, 1000);
}

asyncFunction(function (err, data) {
  if (err){
    console.error('We have an error');
    console.error(err);
    return false;
    // throw err; // IT WON'T WORK
  }

  console.log('Everything went well, my data is: ', data);
});