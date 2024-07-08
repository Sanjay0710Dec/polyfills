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

Function.prototype.myapply = function(thisArg,arr=[]){

    if(typeof(thisArg) !== 'object'){
        throw new Error('myapply expects object as first argument but got '+typeof(thisArg))
    }
   if(!Array.isArray(arr)){
    
    throw new Error('myapply expects array as second argument but got '+typeof(arr))
   }

   Object.prototype.callBack = this;

   thisArg.callBack(...arr);

   delete Object.prototype.callBack;
   

}

person01.printUser.myapply(person02,[100,200])
person01.printUser.apply(person02,[100,200])