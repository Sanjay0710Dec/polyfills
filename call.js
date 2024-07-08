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

 person01.printUser.call(person02);

// If you understand prototype inheritance implementing call ,apply bind 

Function.prototype.mycall = function(thisArg,...argsArray){
    // const func = this;
    // console.log(func === person01.printUser)

    if(typeof(thisArg) !== 'object'){
        throw new Error('mycall expects object as first argument but got ',typeof(thisArg));
    }
    // console.log(arguments.length)
    // console.log(this.length)
   

    Object.prototype.callBack = this;
    // console.log(person01.__proto__)

     thisArg.callBack(...argsArray);
     
     delete Object.prototype.callBack


//    thisArg.myfunc = func;
//    thisArg.myfunc();
      
}


person01.printUser.mycall(person02,100,100);

person01.printUser.mycall(person03,100,100)

console.log(person01.__proto__) // verify 34th line and this line 







