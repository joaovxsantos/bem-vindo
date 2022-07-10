let submit = document.querySelector("#enviar")
let h1 = document.querySelector("#h1")
let input = document.getElementsByTagName("input")[0]
let h2 = document.querySelector("#h2")
let date = new Date()
let h3 = document.getElementsByTagName("h3")[0]
let container = document.getElementsByTagName("div")[0]


function tradeMomement() {
    h1.innerHTML = "Olá, " + input.value + "!"
    h2.innerHTML = "Hoje é dia " + date.getDate() + correct(parseInt(date.getMonth() + 1)) + date.getFullYear()
    hora()

}


function hora() {
    h3.style = "display: block"
    h3.innerText = "O horário atual é " + correctH(date.getHours()) + ":" + correctH(date.getMinutes())
    container.style = "height: 28vh"
    submit.style = "display:none"
    input.style = "display:none"
}


function correctH(a) {
    if (a < 10) {
        a = "0" + a;
    }
    return a
}


function correct(a) {
    if (a < 10) {
        a = "/" + "0" + a + "/"
    }
    return a
}

submit.addEventListener("click", tradeMomement)