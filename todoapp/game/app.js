const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    on: true,
    show: function () {
        ctx.font = "20px serilf "
        ctx.fillText('😎',this.x * 10, this.y * 10)
        /*
        if (this.on) ctx.fillStyle = 'yellow';
        else ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x * 10, this.y * 10, 10, 0, Math.PI * 2);
        ctx.fill();
        this.on = !this.on
        */
    }
}
const food = {
    x:0,
    y:0,
    show: function(){
        ctx.font = "20px serilf "
        ctx.fillText('😒',this.x * 10, this.y * 10)
    },
    aparece: function(){
        // generar valores this.x y this.y aletorios 
        this.x = Math.ceil(Math.random() * 60);
        this.y = Math.ceil(Math.random() * 39);
    }
}

function checkEat(){
    return ball.x === food.x && ball.y === food.y;
}

let direction = 1;
let x = 1
let y = 1

food.aparece();

setInterval(() => {
    ctx.clearRect(0, 0, 800, 800);
    ball.x = x;
    ball.y = y;
    ball.show();
    food.show();
    if(checkEat())food.aparece();
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    //validar limites
    if (x > 60) x = 0;
    else if (x < 1) x = 60;
    if (y > 40) y = 0;
    else if (y < 1) y = 40;
}, 50);

document.querySelector('body')
    .addEventListener('keydown', e => {
        if(e.key === 'ArrowRight') direction = 1;
        if(e.key === 'ArrowDown') direction = 2;
        if(e.key === 'ArrowLeft') direction = 3;
        if(e.key === 'ArrowUp') direction = 4;
    },100);