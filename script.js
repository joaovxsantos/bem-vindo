let submit = document.querySelector("#enviar")
let h1 = document.querySelector("#h1")
let input = document.getElementsByTagName("input")[0]
let h2 = document.querySelector("#h2")
let date = new Date()

function tradeMomement(){
    h1.innerHTML = "Olá, " + input.value + "!"
    h2.innerHTML = "Hoje é dia " + date.getDate()  + correct(parseInt(date.getMonth() + 1)) + date.getFullYear() 
    hora()
}


function hora(){
    h2.innerHTML += "<p>" +  date.getHours() + date.getMinutes() + date.getSeconds()
}


function correct(a){
    if(a < 10){
        a = "/" + "0" + a + "/"
    }
    return a
}







submit.addEventListener("click", tradeMomement)