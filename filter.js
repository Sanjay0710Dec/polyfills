const arr = [1,2,3,4,5,6,7,8,9,10];


const obj = {
    x:2,
    even:function(n){
        console.log(n);
        console.log(this.x)
        return  n%this.x == 0;
    }
}

// const arr4 = arr.filter( obj.even,obj);

Array.prototype.myfilter = function(callback,thisArg){
    const currentArr = this;
    const modifiedArr = [];
  
    if(typeof(callback) !== 'function'){
        throw new TypeError("myfilter expects a callback function but got "+typeof(callback));
    }
    

    for(let i =0; i < currentArr.length; i++){
           if(callback.call(thisArg,currentArr[i],i,currentArr)){
              modifiedArr.push(currentArr[i]);
           }
    }

    return modifiedArr;
}

// const arr2 = arr.myfilter( obj.even,obj);

// const arr3 = arr.myfilter((x) => x%2 ==0);
// console.log(arr3)
// console.log(arr2);

// const stringArray = ["something","nothing","anything","buying"];

// const modified  = stringArray.filter((ele) => ele !== "buying","something");
// console.log(modified);

// const modified2 = stringArray.myfilter((ele) => ele !== "buying");

// console.log(modified2);

const obj2 = {
  x:100   
}

const ans = obj.even.call("smeothin",2);
console.log(ans)