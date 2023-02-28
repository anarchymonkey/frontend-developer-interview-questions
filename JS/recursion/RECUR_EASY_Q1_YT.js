/* 
    Create a contains function which will check if an object contains a value or not

    Note: Values can be a number or a string

    (string | number)
*/

import { isElementAnObject, objectKeys } from "../utils.js";

const input = {
    one: {
        two: {
            three: {
                four: {
                    luckyNumber: 44,
                    luckyString: 'foo-bar',
                }
            }
        }
    }
}

export const contains = (elementToSearch, target) => {
    return objectKeys(elementToSearch).reduce((hasValue, currentKey) => {
        const extractedValue = Reflect.get(elementToSearch, currentKey);
        if (isElementAnObject(extractedValue)) {
            return contains(extractedValue, target);
        }

        if (extractedValue === target && !hasValue) {
            return true;
        }
        return hasValue;
    }, false);
};


