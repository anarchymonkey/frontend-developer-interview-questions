/*
    Create a custom function which replicates the functionality of Array.reduce

*/

import { isNullOrUndefined } from "../utils.js";



Array.prototype.customReduce = function (callbackFn, defaultValue) {
    const arr = this;

    if (isNullOrUndefined(this)) {
        throw new TypeError("Expecting an array instance, instead got null or undefined");
    }

    if (isNullOrUndefined(defaultValue)) {
        throw new TypeError("initial value cannot be null or undefined")
    }

    if (typeof callbackFn !== 'function') {
        throw new TypeError("Callback should be a function argument, instead got" + callbackFn)
    }

    let newInstance = isNullOrUndefined(defaultValue) ? arr[0] : defaultValue;

    for (let i = 0; i < arr.length; i++) {
        newInstance = callbackFn.call(undefined, newInstance, arr[i], i, arr);
    }
    return newInstance;
}

console.log({ res: [1,2,3,1,1,1].customReduce((accum,curr) => {
    if (accum && accum.has(curr)) {
        accum.set(curr, accum.get(curr) + curr)
        return accum;
    }
    accum.set(curr, curr);
    return accum;
}, new Map())});