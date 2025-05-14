let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
let tentativas = 0;

const enviarPalpiteButton = document.getElementById('enviar-palpite');
const reiniciarButton = document.getElementById('reiniciar');
const resultadoElement = document.getElementById('resultado');
const tentativasElement = document.getElementById('tentativas');
const palpiteInput = document.getElementById('palpite');

// Função para verificar o palpite do jogador
function verificarPalpite() {
    const palpite = parseInt(palpiteInput.value);
    tentativas++;

    if (palpite < numeroAleatorio) {
        resultadoElement.textContent = 'Tente um número maior!';
        resultadoElement.style.color = 'red';
    } else if (palpite > numeroAleatorio) {
        resultadoElement.textContent = 'Tente um número menor!';
        resultadoElement.style.color = 'red';
    } else {
        resultadoElement.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
        resultadoElement.style.color = 'green';
        enviarPalpiteButton.disabled = true; // Desabilita o botão após acertar
        reiniciarButton.style.display = "inline-block"; // Exibe o botão de reiniciar
    }

    tentativasElement.textContent = `Tentativas: ${tentativas}`;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um novo número aleatório
    tentativas = 0;
    resultadoElement.textContent = '';
    tentativasElement.textContent = 'Tentativas: 0';
    palpiteInput.value = '';
    enviarPalpiteButton.disabled = false; // Habilita o botão de enviar palpite novamente
    reiniciarButton.style.display = 'none'; // Esconde o botão de reiniciar
}

// Adiciona os eventos de clique
enviarPalpiteButton.addEventListener('click', verificarPalpite);
reiniciarButton.addEventListener('click', reiniciarJogo);
