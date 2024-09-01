
// memoize: if a function is called more than one time with same input it will return the cached value else if the inputs to the function are fresh
// then the function will do some operations with inputs and cache the result for the future ask .

// fn => is callback function where inputs are passed to this function which perform some operation with the inputs and it will return the result.

function memoize(fn,thisArg){ 
const  cacheObj = {};


    return function(...args){
       
        const cacheKey = JSON.stringify(args);
        // console.log(cacheObj);

        if(cacheObj[cacheKey]){
            return cacheObj[cacheKey];
        }
        else{

            const result = fn.apply(thisArg,args);  // we don't need (this) to pass within apply when thisArg is undefined or null .

            cacheObj[cacheKey] = result;

            return result;
        }
    }

}
const Obj = {
    x:10,
    resolver(a,b,c){
        return this.x *(a + b + c);
    }
}

const sum = memoize(Obj.resolver,Obj);

const result = sum(1,2,3);
const result2 = sum(1,2,3); // cached value will be returned.


const product = memoize(function(a,b){return a*b});  // called without thisArg.
const result3 = product(10,20);
const result4 = product(10,20);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

