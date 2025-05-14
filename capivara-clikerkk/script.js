let pontos = 0;
let tamanhoCapivara = 150; // Tamanho inicial da capivara

// Seleciona os elementos
const capivara = document.getElementById("capivara");
const pontosElemento = document.getElementById("pontos");
const resetarBotao = document.getElementById("resetar");

// Função para atualizar os pontos e aumentar o tamanho da capivara
function atualizarPontos() {
    pontos++;
    pontosElemento.textContent = pontos;
    
    // Aumenta o tamanho da capivara a cada clique
    tamanhoCapivara += 10; // Aumenta 10px a cada clique
    capivara.style.width = `${tamanhoCapivara}px`;
    capivara.style.height = `${tamanhoCapivara}px`;
}

// Função de reset
function resetarJogo() {
    pontos = 0;
    pontosElemento.textContent = pontos;
    tamanhoCapivara = 150; // Reseta o tamanho da capivara
    capivara.style.width = `${tamanhoCapivara}px`;
    capivara.style.height = `${tamanhoCapivara}px`;
}

// Eventos
capivara.addEventListener("click", atualizarPontos);
resetarBotao.addEventListener("click", resetarJogo);
