// Aquí creo variables que capturan partes o acciones en la página.
const btnIniciar = document.getElementById("btn-iniciar")
const contenedorDelJuego = document.getElementById("contenedor-del-juego")
const juego = document.getElementById("juego")
const numeroDeJugador = document.getElementById("numero-de-jugador")
const tiroActual = document.getElementById("tiro-actual")
const textoPuntajeDelTiro = document.getElementById("texto-punjate-del-tiro")
const puntajeDelTiroUI = document.getElementById("puntaje-del-tiro")
const textoPuntajeDelTurno = document.getElementById("texto-punjate-del-turno")
const puntajeDelTurnoUI = document.getElementById("puntaje-del-turno")
const rondaActual = document.getElementById("ronda-actual")
const resultadoFinal = document.getElementById("resultado-final")
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
let puntajeJugadorUno = []
let puntajeJugadorDos = []
let tiro = 0
let puntajeDelTiro = 0
let puntajeDelTurno = 0
let ronda = 1
let puntajeTotal = 0
let turnoJugador1
let turnoJugador2
let punteFinal1
let punteFinal2


function iniciarJuego() {
    btnJugador2.disabled = true
    turnoJugador1 = true
    contenedorDelJuego.style.display = "block"
    resultadoFinal.style.display = "none"
    numeroDeJugador.innerHTML = "jugador 1"
    tiroActual.innerHTML = 0
    textoPuntajeDelTiro.style.display = "none"
    textoPuntajeDelTurno.style.display = "none"

}

function tirarDados() {
    
    tiro++
    tiroActual.innerText = tiro
    
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
    terminarJuego()
}

function terminarTurno () {
    if(tiro == 3) {
        textoPuntajeDelTurno.style.display = "block"
        puntajeDelTurnoUI.innerText = puntajeDelTurno
        console.log("el puntaje del turno es: ", puntajeDelTurno)
        tiro = 0
        cambioDeTurno()
        setTimeout(() => {
            textoPuntajeDelTurno.style.display = "none"
        }, 4000); 
        puntajeDelTurno = 0
    }
}

function cambioDeTurno () {
    if(turnoJugador1 == true) {
        turnoJugador1 = false
        turnoJugador2 = true
        btnJugador1.disabled = true
        btnJugador2.disabled = false
        numeroDeJugador.innerText = "jugador 2"
        puntajeJugadorUno.push(puntajeDelTurno)
        console.log("pasa a jugador 2", "puntaje del 1 es: ", puntajeJugadorUno)
    } else if (turnoJugador2 == true) {
        turnoJugador2 = false
        turnoJugador1 = true
        btnJugador1.disabled = false
        btnJugador2.disabled = true
        numeroDeJugador.innerText = "jugador 1"
        puntajeJugadorDos.push(puntajeDelTurno)
        ronda++ 
        rondaActual.innerHTML = ronda
        console.log("pasa a jugador 1", "puntaje del 2 es: ", puntajeJugadorDos)
    }
}

function terminarJuego () {
    if (puntajeJugadorDos.length == 3) {
        btnJugador1.disabled = true
        juego.style.display = "none"
        resultadoFinal.style.display = "block"
        console.log("hasta aca")
        punteFinal1 = puntajeJugadorUno.reduce((accumulator, el) => accumulator + el, 0)
        console.log("el puntaje final del 1 es: ", punteFinal1)
        punteFinal2 = puntajeJugadorDos.reduce((accumulator, el) => accumulator + el, 0)
        console.log("el puntaje final del 2 es: ", punteFinal2)
    }
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
            console.log(valorDado1, "tiro premiado")
        }
    }

    puntajeDelTurno = puntajeDelTurno + puntajeDelTiro
    
    textoPuntajeDelTiro.style.display = "block"
    puntajeDelTiroUI.innerText = puntajeDelTiro

    puntajeDelTiro = 0
}
