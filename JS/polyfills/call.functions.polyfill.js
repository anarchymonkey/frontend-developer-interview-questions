/*

Write a custom call polyfill

*/

// unoptimised call 
Function.prototype.customCall = function (context, ...outerArgs) {
    const originalFunction = this;
    return function (...innerArgs) {
        return originalFunction.apply(context, [...outerArgs, ...innerArgs]);
    }
}

// optimised call

const cache = new WeakMap();

Function.prototype.customCallOptimised = function (context, ...args) {
    const originalFunction = this;

    const cacheKey = context.toString() + args.toString();

    if (cache.has(originalFunction) && cache.get(originalFunction).has(cacheKey)) {
        return cache.get(originalFunction).get(cacheKey);
    } 

    const cachedFunc = function (...innerArgs) {
        try  {
            return originalFunction.apply(context, [...args, ...innerArgs]);
        } catch (err) {
            console.error("Error while calling the original function");
        }
    }

    /* 
        if cache has the original func then update the func with the new cached func or just add the original function as a key
        and set the values as a map of the cacheKey created and the cachedFunc
    */
    if (cache.has(originalFunction)) {
        cache.get(originalFunction).set(cacheKey, cachedFunc)
    } else {
        cache.set(originalFunction, new Map([[cacheKey, cachedFunc]]))
    }
    
    return cachedFunc;
}

const modules = {
    numbers: [1,2,3,4],
    getNumbers: function (nums) {
        return this.numbers.concat(nums)
    }
}

const boundedFunc = modules.getNumbers.customCallOptimised(modules, [5,6,7,8,9]);

console.log({
    boundedFunc: boundedFunc(),
});