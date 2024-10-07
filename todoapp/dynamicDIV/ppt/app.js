const images = document.querySelectorAll('.images img');
const imageUser = document.querySelector('#choiceuser');

const getChoiceUser = (e) => {
    const image = e.target;
    const ChoiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
    // pintar imagen de choices
    imageUser.src = imageUser;
    // llamar la funcion play
    play(choiceUser)
}
const play = choiceUser =>{

}

images.forEach(image => image.addEventListener('click', getChoiceUser));