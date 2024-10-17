const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 300;
let y = 150;
let radio = 50;
const square = {
    x: 400,
    y: 100,
    color: 'rgb(100,20,30)',
    getColor: function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgba(${r},${g},${b})`;
    },
    show: function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(300, 200, radio, 0, Math.PI * 2);
        ctx.fill();
    }
}
let sentido = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    square.getColor();
    square.show();
    radio = sentido ? radio + 1 : radio - 1;
    sentido = radio > 200 ? !sentido : sentido;
    sentido = radio < 1 ? !sentido : sentido;
}, 10);
