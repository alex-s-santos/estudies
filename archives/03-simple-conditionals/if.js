const speed = document.querySelector("#speed");
const response = document.querySelector("#return");
const caution = document.querySelector("#caution")

function returnResult() {
    if(speed.value > 60) {
        response.innerHTML = `Velocidade: ${speed.value}Km/h | Você foi multado!`
    }
    caution.innerHTML = 'Use cinto de segurança!'
}

function clearInfos() {
    speed.value = "";
    response.innerHTML = "";
    caution.innerHTML = "";
}    