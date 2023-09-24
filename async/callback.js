function hello(name, myCallback){
  setTimeout(function(){
    console.log('Hello, ' + name);
    myCallback(name);
  },1500);
}

function goodbye(name, anotherCallback){
  setTimeout(function(){
    console.log('Goodbye, ' + name);
    anotherCallback();
  },1000);
}

console.log('Starting process...');
hello('Ale',function (name){
  goodbye(name,function(){
    console.log('Ending process...');
  });
});

// hello('Ale',function(){});
// goodbye('Ale',function(){}); 