// Aquí creo variables que capturan partes o acciones en la página.
const btnTirarDados = document.getElementById("btn-tirar-dados")
const dado1 = document.getElementById("dado-1")
const dado2 = document.getElementById("dado-2")
const dado3 = document.getElementById("dado-3")

btnTirarDados.addEventListener("click", (e) => tirarDados())

let valorBtn1 = 0
let valorBtn2 = 0
let valorBtn3 = 0
let puntajeJugadorUno = 0
let puntajeJugadorDos = 0
let tiro = 0
let ronda = 0


function tirarDados() {
    
    for(i = 1; i <= 3; i++) {
        let numAleatorio = parseInt(Math.random(Math.floor) * 6 + 1) 
        if (i === 1) {
            valorBtn1 = numAleatorio
        } else if (i === 2) {
            valorBtn2 = numAleatorio
        } else {
            valorBtn3 = numAleatorio
        }
    }
    mostrarDados()
    sumarPuntaje()

    tiro++
    if(tiro == 3) {
        btnTirarDados.disabled = true
        puntajeDelTurno()
    }
    console.log(tiro)
}

function mostrarDados() {
    dado1.innerText = `Dado 1: ${valorBtn1}`
    dado2.innerText = `Dado 2: ${valorBtn2}`
    dado3.innerText = `Dado 3: ${valorBtn3}`
}

function sumarPuntaje() {
    let puntajeDelTiro = 0

    if (valorBtn1 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorBtn1
    }
    if (valorBtn2 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorBtn2
    }
    if (valorBtn3 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorBtn3
    }

    if (valorBtn1 % 2 !== 0) {
        if (valorBtn1 == valorBtn2 && valorBtn2 == valorBtn3) {
            console.log(valorBtn1, "something special")
        }
    }

    console.log("el puntaje es: ", puntajeDelTiro)

    return puntajeDelTiro
} 

function puntajeDelTurno (numero) {
    let puntajeDelTiro = sumarPuntaje()
    puntajeJugadorUno = puntajeJugadorUno + puntajeDelTiro
    console.log("este es el puntaje del jugador uno", puntajeJugadorUno)
}

let puntajeDelTiro