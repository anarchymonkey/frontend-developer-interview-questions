/*

    Create a custom function which filters values in an array with respect to a filter condition

*/


Array.prototype.customFilter = function (callbackFn) {
    const arr = this;
    const newArr = [];

    if (typeof arr === 'object' && !Array.isArray(arr)) {
        throw new TypeError("Filter can only be used in an array instance!")
    }

    for (const element of arr) {
        const isMatchingCondition = callbackFn(element);

        if (isMatchingCondition) {
            newArr.push(element);
        }
    }
    return newArr;
}


const actualResult = [1,2,3,4,5,6,7,8].customFilter((val) => val <= 6);

const expectedResult = [1,2,3,4,5,6,7,8].filter(val => val <= 6);


console.log({ actualResult, expectedResult });