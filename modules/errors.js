function anotherFunction (){
  return breakIt();
}

function breakIt(){
  return 3 + z;
}

function breakItAsync(cb){
  setTimeout(function(){
    try {
      return 3 + z;
    } catch (error){
      console.error('Error in my asynchronous function');
      cb(error);
    }
  });
}

// When we know something is going to break, we must place it in a try/catch
try{
  // anotherFunction();
  breakItAsync(function(error){
    console.log(error.message);
  });
} catch(error) {
  console.error('Oops, something broke...');
  // Show the error
  // console.error(error.message);
  console.error(error);
  console.log('But it is okay, we caught it.');
}

console.log('This is at the end');