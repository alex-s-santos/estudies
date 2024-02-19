//Faça um algoritmo para calcular a média de um aluno e usando o operador ternário indique se o aluno foi aprovado ou reprovado

let nomeAluno = 'Alex';
let nota1 = 8.8;
let nota2 = 5.3;
let nota3 = 9.3;

let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? 'Aprovado' : 'Reprovado';

console.log(`O aluno ${nomeAluno}, foi ${resultado}, com a média: ${media.toFixed(1)}`);