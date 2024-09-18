window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Recupera o usuário logado

    if (currentUser) {
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = `${currentUser.firstName} ${currentUser.lastName}`; // Exibe o nome completo
        }
    } else {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = 'index.html';
    }
};

let startTime;
let timerInterval;
const timerElement = document.getElementById('timer');
const entradaBtn = document.getElementById('entradaBtn');
const saidaBtn = document.getElementById('saidaBtn');
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    startTime = Math.floor(Date.now() / 1000);
    entradaBtn.disabled = true;
    saidaBtn.disabled = false;

    timerInterval = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000);
        const elapsedTime = currentTime - startTime;
        timerElement.textContent = `Tempo: ${formatTime(elapsedTime)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    const endTime = Math.floor(Date.now() / 1000);
    const elapsedTime = endTime - startTime;

    entradaBtn.disabled = false;
    saidaBtn.disabled = true;
    timerElement.textContent = 'Tempo: 00:00:00';

    const totalMinutes = Math.floor(elapsedTime / 60);
    const remainingSeconds = elapsedTime % 60;
    const valorAPagar = (totalMinutes + remainingSeconds / 60) * 5;

    alert(`Tempo total: ${formatTime(elapsedTime)}\nValor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
}

// Funções para abrir e fechar o menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.width = "250px";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.width = "0";
});

entradaBtn.addEventListener('click', startTimer);
saidaBtn.addEventListener('click', stopTimer);