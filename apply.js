const obj = {
    x:22,
    even:function(n){
        console.log("the this is " ,this);
        console.log(n);
    }
}
const obj2 = {
    x:100
}

Function.prototype.myapply = function(thisArg,arr=[]){

   
   if(!Array.isArray(arr)){
    
        throw new TypeError("CreateListFromArrayLike called on non-object")
     }

   if(thisArg === undefined || thisArg === null){
                this(...arr)
      }
     else{
        Object.prototype.callBack = this;
        thisArg.callBack(...arr);
        delete Object.prototype.callBack        
    }
   

}

// TestCases For myapply

obj.even.myapply(undefined,[99]);
obj.even.myapply(null,[99])
obj.even.myapply(100,[99]);
obj.even.myapply(true,[99]);
obj.even.myapply("nothing",[99]);
obj.even.myapply(obj2,[99]);
obj.even.myapply(function(){
    console.log("something")
},[99])

// TestCases For in-built apply

obj.even.apply(undefined,[99]);
obj.even.apply(null,[99])
obj.even.apply(100,[99]);
obj.even.apply(true,[99]);
obj.even.apply("nothing",[99]);
obj.even.apply(obj2,[99]);

obj.even.apply(function(){
    console.log("something")
},[99]);