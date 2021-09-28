// Aquí creo variables que capturan partes o acciones en la página.
const btnIniciar = document.getElementById("btn-iniciar")
const btnJugador1 = document.getElementById("btn-jugador-1")
const btnJugador2 = document.getElementById("btn-jugador-2")
const dado1 = document.getElementById("dado-1")
const dado2 = document.getElementById("dado-2")
const dado3 = document.getElementById("dado-3")

btnIniciar.addEventListener("click", (e) => iniciarJuego())
btnJugador1.addEventListener("click", (e) => tirarDados())
btnJugador2.addEventListener("click", (e) => tirarDados())

let valorDado1 = 0
let valorDado2 = 0
let valorDado3 = 0
// let puntajeJugadorUno = 0
// let puntajeJugadorDos = 0
let tiro = 0
let puntajeDelTiro = 0
let puntajeDelTurno = 0
let ronda = 0
let puntajeTotal = 0

function iniciarJuego() {
    btnJugador1.disabled = false
    btnJugador2.disabled = true
}


function tirarDados() {
    
    tiro++
    
    for(i = 1; i <= 3; i++) {
        let numAleatorio = parseInt(Math.random(Math.floor) * 6 + 1) 
        if (i == 1) {
            valorDado1 = numAleatorio
        } else if (i == 2) {
            valorDado2 = numAleatorio
        } else {
            valorDado3 = numAleatorio
        }
    }
    mostrarDados()
    sumarPuntaje()
    terminarTurno()

    
    console.log(tiro)
}

function terminarTurno () {
    if(tiro == 3) {
        console.log("el puntaje del turno es: ", puntajeDelTurno)
        tiro = 0
        ronda++ 
        console.log("Vamos en la ronda: ", ronda)
        puntajeDelTurno = 0
        cambiarDeJugador()
    }
}

function cambiarDeJugador() {
    
}

function mostrarDados() {
    dado1.innerText = `Dado 1: ${valorDado1}`
    dado2.innerText = `Dado 2: ${valorDado2}`
    dado3.innerText = `Dado 3: ${valorDado3}`
}

function sumarPuntaje() {

    if (valorDado1 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorDado1
    }
    if (valorDado2 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorDado2
    }
    if (valorDado3 % 2 == 0) {
        puntajeDelTiro = puntajeDelTiro + valorDado3
    }
    
    if (valorDado1 % 2 !== 0 || valorDado2 % 2 !== 0 || valorDado3 % 2 !== 0) {
        if (valorDado1 == valorDado2 && valorDado2 == valorDado3) {
            tiro--
            console.log(valorDado1, "trio")
        }
    }

    puntajeDelTurno = puntajeDelTurno + puntajeDelTiro
    
    console.log("el puntaje del tiro es: ", puntajeDelTiro)
    puntajeDelTiro = 0
}