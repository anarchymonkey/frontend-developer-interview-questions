/*
 Write a polyfill for Function.bind
 */



Function.prototype.customBind = function (context, ...outerArguments) {
    const originalFunction = this;

    return function (...innerArguments) {
        try {
            if (typeof originalFunction != 'function') {
                throw TypeError("bind cannot be called by any other entity other than a function")
            }

            return originalFunction.call(context, [...outerArguments, ...innerArguments])

        } catch (err) {
            console.error(err);
        }
    }
}



const module = {
    x: 12,
    getX: function () {
        return this.x;
    }
}

// global scope

const unboundFunc = module.getX;

const boundFunc = unboundFunc.customBind(module);


console.log({
    unboundFunc,
    boundFunc: boundFunc(),
})