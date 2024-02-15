let anoNascimento = 1993;
let pegarAnoSistema = new Date;
let anoAtual = pegarAnoSistema.getUTCFullYear();

let idade = anoAtual - anoNascimento;
console.log(idade);