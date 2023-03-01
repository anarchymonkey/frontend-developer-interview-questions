function giveMeRandomNames(...args) {
    console.log({args});
}


console.log({
    res: giveMeRandomNames.bind(undefined, 1,2,3,4)()
})