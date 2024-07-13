const person01 = {
    username:'something',
    printUser:function(a,b){
        console.log(this)
        console.log(this.username);
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
   
 if(thisArg === undefined || thisArg === null){
        this(...argsArray);

   }
   else{
      Object.prototype.callBack = this;
    //   console.log(person01.__proto__) 
      thisArg.callBack(...argsArray);
      delete Object.prototype.callBack
   }


//    thisArg.myfunc = func;
//    thisArg.myfunc();
      
}

// TestCases For mycall

person01.printUser.mycall(undefined,99);
person01.printUser.mycall(null,99)
person01.printUser.mycall(100,99);
person01.printUser.mycall(true,99);
person01.printUser.mycall("nothing",99);
person01.printUser.mycall(person02,99);
person01.printUser.mycall(function(){
    console.log("something")
},99)

// TestCases For in-built call
person01.printUser.call(undefined,99);
person01.printUser.call(null,99)
person01.printUser.call(100,99);
person01.printUser.call(true,99);
person01.printUser.call("nothing",99);
person01.printUser.call(person02,99);

person01.printUser.call(function(){
    console.log("something")
},99);



console.log(person01.__proto__) // verify 38th line and this line 







