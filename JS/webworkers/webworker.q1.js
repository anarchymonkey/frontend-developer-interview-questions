
const calculateLargeSum = () => {
    console.log("Calculating sum");
};


const sayHelloInNDifferentWays = () => {
    console.log('Hello');
}

(() => {
    const buttonOne = document.getElementById('buttonOne');
    const buttonTwo = document.getElementById('buttonTwo');

    buttonOne.addEventListener('click', () => {
        calculateLargeSum();
    });


    buttonTwo.addEventListener("click", () => {
        sayHelloInNDifferentWays();
    });
})();