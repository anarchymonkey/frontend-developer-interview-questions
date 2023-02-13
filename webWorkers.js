
(function () {
    const button1 = document.createElement('button');
    button1.innerHTML = 'Click to calc sum of alot of nums';
    button1.addEventListener('click', () => {
        multiplyMillionNumbers();
    });

    const button2 = document.createElement('button');
    button2.innerHTML = 'Click to change background';
    button2.addEventListener('click', () => {
        backgroundChange();
    });

    document.body.appendChild(button1);
    document.body.appendChild(button2);
})();

const customWorker = new Worker(
    new URL('./worker.js', import.meta.url),
    { type: 'module' }
);

function multiplyMillionNumbers() {
    customWorker.postMessage("CALC_SUM");
}

customWorker.onmessage = (e) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    console.log({ workerRes: e })
    div.textContent = e.data;
}


function backgroundChange() {
    const backgrounds = ['red', 'green', 'blue', 'grey', 'yellow'];

    let currentBackground = backgrounds[0];

    for (let i = 0; i < 7; i++) {
        currentBackground = backgrounds[Math.floor(Math.random() * 7)];
    }

    document.body.style = `background-color: ${currentBackground}`;
}