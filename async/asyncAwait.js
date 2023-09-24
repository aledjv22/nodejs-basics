async function hello(name){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log('Hello, ' + name);
      resolve(name);
    },1500);
  });
}

async function talk(name){
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      console.log('Blah blah blah...');
      resolve(name); // if I comment this line, an error is thrown 
      reject('There is an error');
    },1000);
  });
}

async function goodbye(name){
  return new Promise ((resolve, reject) => {
    setTimeout(function(){
      console.log('Goodbye, ' + name);
      resolve();
    },1000);
  });
}

async function main () {
  let name = await hello('Ale');
  await talk();
  await talk();
  await talk();
  await goodbye(name);
  console.log('Ending the process...');
}

console.log('Starting the process...');
main();
console.log('This is going to be the second instruction');