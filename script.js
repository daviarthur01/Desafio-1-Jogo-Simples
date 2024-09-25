// Função para gerar a escolha aleatória do computador
function gerarEscolhaComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaAleatoria = escolhas[Math.floor(Math.random() * escolhas.length)];
    return escolhaAleatoria;
}

// Função para determinar o vencedor
function determinarVencedor(jogador, computador) {
    if (jogador == computador) {
        return "Empate!";
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

// Função principal para jogar
function jogarPedraPapelTesoura(escolhaJogador) {
    const escolhaComputador = gerarEscolhaComputador();
    console.log("Você escolheu: " + escolhaJogador);
    console.log("O computador escolheu: " + escolhaComputador);
    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
    console.log(resultado);
}

// Exemplo de como jogar, o jogador escolhe 'pedra'
jogarPedraPapelTesoura('pedra');
