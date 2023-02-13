
console.log("I am here");
const calcSum = () => {
    const millionElements = new Array(100000000).fill(1, 0, 100000000);

    const sumOfElements = millionElements.reduce((
        previouslyMultipliedValue, __, index,
    ) => previouslyMultipliedValue + (index + 1), 1);

    return sumOfElements;
}

onmessage = (event) => {
    console.log(event.data);
    postMessage(calcSum());
}