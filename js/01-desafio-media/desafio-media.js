const A = 8.6;
const B = 6.5;
const C = 4.9;

const MEDIA = (A + B + C) / 3;

const RESULTADO = MEDIA >= 7 ? "Aprovado" : "Reprovado";

console.log(`Média: ${MEDIA.toFixed(1)} | O aluno está: ${RESULTADO}.`);