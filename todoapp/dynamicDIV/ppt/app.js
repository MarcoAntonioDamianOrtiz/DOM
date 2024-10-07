const images = document.querySelectorAll('.image img');

const getChoiceUser = (e) => {
    const image = e.target;  
    const choiceUser = image.getAttribute('data-id'); 
    const imageUser = image.src; 

    // Mostrar la imagen de la elección del usuario en el lugar adecuado
    const userChoiceDisplay = document.getElementById('userChoiceImg');
    userChoiceDisplay.src = imageUser;

    // Generar la elección aleatoria del ordenador
    const computerChoice = getComputerChoice();
    const computerChoiceDisplay = document.getElementById('computerChoiceImg');
    computerChoiceDisplay.src =` ./${computerChoice}.jpg`; 

    // Llamar a la función 'play' para determinar el ganador
    play(choiceUser, computerChoice);
}

// Función para generar la elección aleatoria del ordenador
const getComputerChoice = () => {
    const choices = ['rock', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Función para determinar el resultado del juego
const play = (userChoice, computerChoice) => {
    const resultDisplay = document.querySelector('.result span');
    let result;

    if (userChoice === computerChoice) {
        result = 'Empate';
    } else if (
        (userChoice === 'rock' && computerChoice === 'tijeras') ||
        (userChoice === 'papel' && computerChoice === 'rock') ||
        (userChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        result = 'Usuario';
    } else {
        result = 'Computadora';
    }

    // Mostrar el resultado en pantalla
    resultDisplay.textContent = result;
}

// Agregar event listener para cuando el usuario hace clic en las imágenes
images.forEach(image => image.addEventListener('click', getChoiceUser));