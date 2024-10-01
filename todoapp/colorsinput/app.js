const inputRed = document.querySelector('#red')
const inputGreen = document.querySelector('#green')
const inputBlue = document.querySelector('#blue')
const body = document.querySelector('body')

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${redColor},${greenColor},${blueColor})`;
}

inputRed.addEventListener('change', (e) => {
    //TODO
    redColor = e.target.value;
    // actualizar color de body
    body.style.backgroundColor = generateColor();
});