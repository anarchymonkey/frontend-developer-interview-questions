/* 
    Create a custom function which replicates the functionality of Array.map
*/




/**
 * @param callbackFn This contains the callback that is provided to the custom map method
 * @private this: This contains the parent array
 * @returns A new array consisting of the values after processing the buisness logic inside it
 */

Array.prototype.customMap = function (callbackFn) {

    if (typeof this === 'object' && !Array.isArray(this)) {
        throw new TypeError("Argument expects an array")
    }
    
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callbackFn(this[i], i, this));
    }

    return newArray;
}

const customMapResult = [1,2,3].customMap(val => val * 2);
const actualMapResult = [1,2,3].map(val => val * 2)

console.log({ customMapResult, actualMapResult });

