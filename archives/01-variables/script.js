function returnName() {
    let nameBox = document.querySelector("#nameBox");
    let returnInfo = document.querySelector("#return");

    returnInfo.innerHTML = `Olá, ${nameBox.value}. Seja bem-vindo!`;
    nameBox.value = "";
}