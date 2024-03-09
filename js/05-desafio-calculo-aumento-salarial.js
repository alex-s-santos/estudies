//Desafio aumento de salário (a cima de 2000 aumento de 6% de aumento de salário e auxilio refeição, a baixo 10%), o auxilio alimentação é de 30% do salário - Salário família 3% por dependente. Mostrar dados no final.
//Uso de condicionais compostas IF / ELSE

let salarioAtual;
let auxilioAlimentacao;
let quantidadeDependentes;

let percentualAumento;
let aumentoDeSalario;
let aumentoAuxilioAlimentacao;
let salarioFamilia;
let novoSalario;
let novoAuxilioAlimentacao;
let valorTotal;

salarioAtual = 1420;
quantidadeDependentes = 0;
auxilioAlimentacao = salarioAtual * 0.25;



if(salarioAtual > 2000) {
    
    aumentoDeSalario = salarioAtual * 0.06;
    aumentoAuxilioAlimentacao = auxilioAlimentacao * 0.06;
    percentualAumento = '6%'
    
} else {
    
    aumentoDeSalario = salarioAtual * 0.10;
    aumentoAuxilioAlimentacao = auxilioAlimentacao * 0.1;
    percentualAumento = '10%'
    
}

novoSalario = salarioAtual + aumentoDeSalario;
novoAuxilioAlimentacao = auxilioAlimentacao + aumentoAuxilioAlimentacao;
salarioFamilia = quantidadeDependentes = 0 ? 0 : (novoSalario * 0.03) * quantidadeDependentes;

valorTotal = novoSalario + novoAuxilioAlimentacao + salarioFamilia;

console.log(`O novo salário do funcionário é de: R$${novoSalario}, e o novo auxilio alimentação é de R$${novoAuxilioAlimentacao}, com aumento de ${percentualAumento}, e um salário família de R$${salarioFamilia}, totalizando: R$${valorTotal}`);