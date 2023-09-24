function hello(name, myCallback){
  setTimeout(function(){
    console.log('Hello, ' + name);
    myCallback(name);
  },1500);
}

function talk(callbackTalk){
  setTimeout(function(){
    console.log('Blah blah blah...');
    callbackTalk();
  },1000);
}

function goodbye(name, anotherCallback){
  setTimeout(function(){
    console.log('Goodbye, ' + name);
    anotherCallback();
  },1000);
}

function conversation(name, times, callback){
  if(times > 0){
    talk(function(){
      conversation(name,--times,callback);
    });
  }else{
    goodbye(name,callback);
  }
}

// --
console.log('Starting process...');
hello('Ale',function(name){
  conversation(name,3,function(){
    console.log('Process finished...');
  });
}); 

  // talk(function(){
  //   talk(function(){
  //     talk(function(){
  //       goodbye(name,function(){
  //         console.log('Ending process...');
  //       });
  //     });
  //   });
  // });


// hello('Ale',function(){});
// goodbye('Ale',function(){}); 