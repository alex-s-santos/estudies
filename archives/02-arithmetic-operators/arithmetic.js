const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');


const returnValue = document.querySelector('#return');


function returnSum() {
    returnValue.innerHTML = `Resultado: ${Number(n1.value) + Number(n2.value)}`;
}

function returnSubtraction() {
    returnValue.innerHTML = `Resultado: ${Number(n1.value) - Number(n2.value)}`;
}

function returnMultiplication() {
    returnValue.innerHTML = `Resultado: ${Number(n1.value) * Number(n2.value)}`
}

function returnDivision() {
    returnValue.innerHTML = `Resultado: ${Number(n1.value) / Number(n2.value)}`
}