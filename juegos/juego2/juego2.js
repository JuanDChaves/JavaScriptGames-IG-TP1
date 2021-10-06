// Aquí creo variables que capturan partes o acciones en la página. Perdón por la cantidad variables, sé que debe una manera de evitar esto :(
const btnIniciar = document.getElementById("btn-iniciar")
const contenedorDelJuego = document.getElementById("contenedor-del-juego-2")
const accion = document.getElementById("accion")
const juego = document.getElementById("juego")
const info = document.getElementById("info")
const numeroDeJugador = document.getElementById("numero-de-jugador")
const tiroActual = document.getElementById("tiro-actual")
const textoPuntajeDelTiro = document.getElementById("texto-punjate-del-tiro")
const puntajeDelTiroUI = document.getElementById("puntaje-del-tiro")
const textoPuntajeDelTurno = document.getElementById("texto-punjate-del-turno")
const puntajeDelTurnoUI = document.getElementById("puntaje-del-turno")
const rondaActual = document.getElementById("ronda-actual")
const premiado = document.getElementById("premiado")
const resultadoFinal = document.getElementById("resultado-final")
const puntajeFinal1 = document.getElementById("final-1")
const puntajeFinal2 = document.getElementById("final-2")
const ganador = document.getElementById("ganador")
const btnJugador1 = document.getElementById("btn-jugador-1")
const btnJugador2 = document.getElementById("btn-jugador-2")
const dado1 = document.getElementById("dado-1")
const dado2 = document.getElementById("dado-2")
const dado3 = document.getElementById("dado-3")


// Estos son los tres botones del juego. El de inicio y los de los dos jugadores.
btnIniciar.addEventListener("click", (e) => iniciarJuego())
btnJugador1.addEventListener("click", (e) => tirarDados())
btnJugador2.addEventListener("click", (e) => tirarDados())


// Aquí declaro los contadores que voy a usar durante el juego
let valorDado1 = 0
let valorDado2 = 0
let valorDado3 = 0
let puntajeJugadorUno = []
let puntajeJugadorDos = []
let tiro = 0
let puntajeDelTiro = 0
let puntajeDelTurno = 0
let ronda = 1
let turnoJugador1
let turnoJugador2

accion.style.display = "none"

// Esta función se acriva con el botón de inicio. Muestro todo lo referente al juego y oculto la información del inicio y los resultados finales. 
function iniciarJuego() {
    btnJugador2.disabled = true
    turnoJugador1 = true
    accion.style.display = "block"
    info.style.display = "none"
    resultadoFinal.style.display = "none"
    numeroDeJugador.innerHTML = "Jugador 1"
    tiroActual.innerHTML = 0
    textoPuntajeDelTiro.style.display = "none"
    textoPuntajeDelTurno.style.display = "none"
    premiado.style.display = "none"
}

// Esta función crea el valor aleatorio de los 3 dados y suma 1 a la variable tiro. En esta función también llamo a otras cuatro funciónes que se encargan del resto del juego
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

// Con esta función termino el turno del jugador. Una vez llega a 3 pongo en 0 los contadores y llamo a la función cambioDeTurno
function terminarTurno () {
    if(tiro == 3) {
        textoPuntajeDelTurno.style.display = "block"
        puntajeDelTurnoUI.innerText = puntajeDelTurno
        tiro = 0
        cambioDeTurno()
        setTimeout(() => {
            textoPuntajeDelTurno.style.display = "none"
        }, 4000); 
        puntajeDelTurno = 0
    }
}

// En esta función hago el intercambio de turnos, desabilito y habilito los botones según corresponda e ingreso el puntaje del turno en el array de cada jugador.
function cambioDeTurno () {
    if(turnoJugador1 == true) {
        turnoJugador1 = false
        turnoJugador2 = true
        btnJugador1.disabled = true
        btnJugador2.disabled = false
        numeroDeJugador.innerText = "Jugador 2"
        puntajeJugadorUno.push(puntajeDelTurno)
        premiado.style.display = "none"
    } else if (turnoJugador2 == true) {
        turnoJugador2 = false
        turnoJugador1 = true
        btnJugador1.disabled = false
        btnJugador2.disabled = true
        numeroDeJugador.innerText = "Jugador 1"
        puntajeJugadorDos.push(puntajeDelTurno)
        ronda++ 
        rondaActual.innerHTML = ronda
        premiado.style.display = "none"
    }
}


// En esta función cargo las imágenes de los dados y les asigno el valor aleatorio

function mostrarDados() {
    dado1.firstChild.src = `../../images/dado${valorDado1}.png`
    dado2.firstChild.src = `../../images/dado${valorDado2}.png`
    dado3.firstChild.src = `../../images/dado${valorDado3}.png`
}

//Con esta función hago la suma de los puntajes de cada dado siempre que sean pares. Si los tres son el mismo número impar. Muesto un mensaje y adiciono un tiro.

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
            premiado.style.display = "block"
        }
    }
    
    puntajeDelTurno = puntajeDelTurno + puntajeDelTiro
    
    textoPuntajeDelTiro.style.display = "block"
    puntajeDelTiroUI.innerText = puntajeDelTiro
    
    puntajeDelTiro = 0
}
// Con esta función termino el juego cuando el array del segundo jugador llegue a 3 items, significa que cumplió su turno finalizar la quinta ronda.

function terminarJuego () {
    if (puntajeJugadorDos.length == 5) {
        btnJugador1.disabled = true
        resultadoFinal.style.display = "block"
        juego.style.display = "none"
        //El puntaje final de cada jugador lo obtengo al usar el método reduce en los arrays de sus puntajes.
        puntajeFinal1.innerHTML = puntajeJugadorUno.reduce((accumulator, el) => accumulator + el, 0)
        puntajeFinal2.innerHTML = puntajeJugadorDos.reduce((accumulator, el) => accumulator + el, 0)
        if (puntajeFinal1.innerHTML > puntajeFinal2.innerHTML) {
            ganador.innerHTML = 1
        } else  {
            ganador.innerHTML = 2
        }
    }



}
// (puntajeFinal2.innerHTML > puntajeFinal1.innerHTML)