const person01 = {
    username:'something',
    printUser:function(a,b){
        console.log(a,b);
        console.log(this)
        console.log(this.username);
    }
}

const person02 = {
    username:"nothing"
}

// bind under the hood uses call method.
Function.prototype.myBind = function(thisArg,...argsArray){
       const func = this;

    return function(...args){
         func.call(thisArg,...argsArray,...args);
    }
}

const something = person01.printUser.bind(person02);

something(100,200);

const something02 = person01.printUser.myBind(person02);
something(200,300);

// person01.myBind(person02);

