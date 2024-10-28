// difficulty.js

const difficultyBoxes = document.querySelectorAll('.difficulty-box');
const startButton = document.querySelector('.start-button');

const difficulties = {
    easy: { pairs: 2, timeLimit: 120 },   // 5 pares, 2 minutos
    medium: { pairs: 4, timeLimit: 90 },  // 8 pares, 1,5 minuto
    hard: { pairs: 5, timeLimit: 60 }    // 10 pares, 1 minuto
};

let selectedPairs = 0;

// Adiciona evento de clique nas caixas de dificuldade
difficultyBoxes.forEach(box => {
    box.addEventListener('click', () => {
        difficultyBoxes.forEach(b => b.classList.remove('selected')); // Limpa a seleção anterior
        box.classList.add('selected'); // Adiciona a seleção na caixa clicada
        selectedPairs = difficulties[box.getAttribute('data-difficulty')].pairs; // Atualiza a variável de pares selecionados
    });
});

// Evento para iniciar o jogo
startButton.addEventListener('click', () => {
    const selectedDifficulty = Array.from(difficultyBoxes).find(box => box.classList.contains('selected'));
    
    if (!selectedDifficulty) {
        alert('Por favor, escolha uma dificuldade.');
        return;
    }

    const { timeLimit } = difficulties[selectedDifficulty.getAttribute('data-difficulty')];

    // Redirecionar para game.html
    window.location = 'game.html';
});
