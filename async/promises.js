function hello(name){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('Hello, ' + name);
      resolve(name);
    },1500);
  });
}

function talk(name){
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      console.log('Blah blah blah...');
      resolve(name); // if I comment this line, an error is thrown
      reject('There is an error');
    },1000);
  });
}

function goodbye(name){
  return new Promise ((resolve, reject) => {
    setTimeout(function(){
      console.log('Goodbye, ' + name);
      resolve();
    },1000);
  });
}
console.log('Starting process...');
hello('Ale')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(goodbye)
  .then((name) => {
    console.log('Ending process...');
  })
  .catch(error => { // always at the end a catch
    console.error('There has been an error:');
    console.error(error);
  });