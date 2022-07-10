let submit = document.querySelector("#enviar")
let h1 = document.querySelector("#h1")
let input = document.getElementsByTagName("input")[0]
let h2 = document.querySelector("#h2")
let date = new Date()
let p = document.getElementsByTagName("p")[0]
function tradeMomement(){
    h1.innerHTML = "Olá, " + input.value + "!"
    h2.innerHTML = "Hoje é dia " + date.getDate()  + correct(parseInt(date.getMonth() + 1)) + date.getFullYear() 
}


function hora(){
    h2.innerHTML += correctH(date.getHours()) + correctH(date.getMinutes()) + correctH(date.getSeconds())
}


function correctH(a){
    if( a < 10){
        a = "0" + a;
    }
    return a
}


function correct(a){
    if(a < 10){
        a = "/" + "0" + a + "/"
    }
    return a
}







submit.addEventListener("click", tradeMomement)