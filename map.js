const arr = [1,2,3,4,5,6];


Array.prototype.myMap = function(callback,thisArg = {}){
    const currentArr = this;
    const modifiedArr = [];
    //  console.log(callback.length);  // to find the no of arguments that call back function takes.
    if(typeof(callback) !== 'function'){
        throw new Error("myMap expects a callback function but got "+typeof(callback));
    }
    if(typeof(thisArg) !== 'object'){
        throw new Error("myMap expects a thisArg to be Object but got "+typeof(thisArg));
    }

    for(let i =0; i < currentArr.length; i++){
           modifiedArr[i] = callback.call(thisArg,currentArr[i],i,currentArr); 
    }

    return modifiedArr;
}


const anser = arr.myMap(function(item,index){
    return item * index
});
console.log(anser);