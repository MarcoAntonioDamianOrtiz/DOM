const container = document.querySelector('.container');
const heightInput = document.querySelector('#height');
const span = document.querySelector('h2 span');

const changeHeight = () => {
    let Height = heightInput.value + 'px';  
    container.style.height = Height;        
    span.innerText = `Altura: ${Height}`;   
};

heightInput.addEventListener('input', changeHeight);
