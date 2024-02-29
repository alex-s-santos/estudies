let velocidade = 56;
let pontuacaoCNH = 18;
let pontuacaoMaximaCNH = 21;
let velocidadeMaxima = 50;
let pontuacaoMulta = 7;

if(velocidade > (velocidadeMaxima + (velocidadeMaxima * 0.10))) {
    console.log('Multado!');
    pontuacaoCNH = pontuacaoCNH + pontuacaoMulta >= 21 ? pontuacaoMaximaCNH : pontuacaoCNH += pontuacaoMulta;
    console.log(`Pontuação atual da CNH: ${pontuacaoCNH}`);

    if(pontuacaoCNH >= 21) {
        console.log('CNH suspensa!');
    }
}

