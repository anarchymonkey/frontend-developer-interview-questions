// Create a custom split string prototype

String.prototype.split = function (splitter) {
    const targetString = this;

    if (typeof splitter != 'string') {
        throw TypeError("The splitter must be a string")
    }

    if (splitter === '') {
        return targetString;
    }
    
}