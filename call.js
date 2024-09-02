const person01 = {
    username:'something',
    printUser:function(a,b){
        // console.log(this)
        // console.log(this.username);
        return this.username + a + b;

    }
}
const person02 = {
    username:"nothing"
}


const person03 = {
    username:'something09',
    hobbies:"nothing"
}



// If you understand prototype inheritance implementing call ,apply bind  will be very easy.

Function.prototype.mycall = function(thisArg,...argsArray){
    // const func = this;
    // console.log(func === person01.printUser)

    // if(typeof(thisArg) !== 'object'){
    //     throw new Error('mycall expects object as first argument but got ',typeof(thisArg));
    // }
    // console.log(arguments.length)
    // console.log(this.length)
    let callbackAnswer;
   
 if(thisArg === undefined || thisArg === null){
       callbackAnswer =  this(...argsArray);

   }
   else{
      Object.prototype.callBack = this;
    //   console.log(person01.__proto__) 
      callbackAnswer = thisArg.callBack(...argsArray);
      delete Object.prototype.callBack
   }
  return callbackAnswer;

//    thisArg.myfunc = func;
//    thisArg.myfunc();
      
}

// TestCases For mycall

console.log(person01.printUser.mycall(undefined,99,200));
console.log(person01.printUser.mycall(null,99,200));
console.log(person01.printUser.mycall(100,99,200));
console.log(person01.printUser.mycall(true,99,200));
console.log(person01.printUser.mycall("nothing",99,200));
console.log(person01.printUser.mycall(person02,99,200));

console.log(person01.printUser.mycall(function(){
    console.log("something")
},99,200));

// TestCases For in-built call
console.log(person01.printUser.call(undefined,99,200));
console.log(person01.printUser.call(null,99,200));
console.log(person01.printUser.call(100,99,200));
console.log(person01.printUser.call(true,99,200));
console.log(person01.printUser.call("nothing",99,200));
console.log(person01.printUser.call(person02,99,200));

console.log(person01.printUser.call(function(){
    console.log("something")
},99,200));



console.log(person01.__proto__) // verify 40th line and this line 







