const arr = [1,2,3,4,5];
const arr1 = ['something',"nothing","anything"]
const arr2 = [];

Array.prototype.myreduce = function(callback,initialValue){
    const currentArr = this;
    let index = 0;
    if(typeof(callback) !== 'function'){
        throw new TypeError(callback + "is not a function" );
    }
    else if(currentArr.length === 0 && initialValue === undefined){
       
        throw new TypeError("Cannot reduce with empty array and no initial value")
    }
    
    else if(currentArr.length > 0 && initialValue === undefined){
  
        initialValue = currentArr[0];
         index = 1;
    }
    
    for( index; index < currentArr.length; index++){
       
        initialValue=callback(initialValue,currentArr[index],index,currentArr);
        
    }
    return initialValue;
}

const answer = arr2.myreduce((acc,value) =>(acc+value),0);
console.log(answer);
const answer1 = arr2.reduce((acc,value) =>(acc+value),0);

console.log(answer1)

console.log(arr1.length)