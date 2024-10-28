console.log("JavaScript carregado");
const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

// verificar se o nome é válido
const validarInput = ({ target }) => {
    console.log("Executando validação");
    if (target.value.length > 3) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
};

// guardar nickname e redirecionar para a página do jogo
const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado");
    localStorage.setItem('player', input.value);
    window.location = 'defi'
    window.location = 'game.html';
};

input.addEventListener('input', validarInput);
form.addEventListener('submit', handleSubmit);
