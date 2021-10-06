// Con estas variables tengo acceso a partes del DOM
const btnIniciar = document.getElementById("btn-iniciar")
const contenedorDelJuego = document.getElementById("contenedor-del-juego-3")
const info = document.getElementById("info")
const juego = document.getElementById("juego")
const primerNumeroUI = document.getElementById("primer-numero")
const segundoNumeroUI = document.getElementById("segundo-numero")
const operadorUI = document.getElementById("operador")
const tiempoUI = document.getElementById("tiempo")
const vidasQueQuedan = document.getElementById("vidas")
const inputRespuesta = document.getElementById("input-respuesta")
const puntajeActual = document.getElementById("puntaje")
const resultadoFinal = document.getElementById("resutado-final-3")
const puntajeFinal = document.getElementById("puntaje-final")
const btnVolver = document.getElementById("btn-volver")


let respuestaIngresada
let operacionResuelta
let numero1Str
let numero2Str
let operador

// Estas variables son contadores que se van modificando durante el juego
let vidas = 3
let seAcabo = false
let intervalo
let puntaje = 0
let tiempo
vidasQueQuedan.innerHTML = vidas
puntajeActual.innerHTML = puntaje

resultadoFinal.style.display = "none"
juego.style.display = "none"
inputRespuesta.value = ""

// Con este event listener inicia el juego llamo al reloj y determino la cantidad de segundos
btnIniciar.addEventListener("click", () => {
    info.style.display = "none"
    juego.style.display = "block"
    cargarPregunta()
    tiempoUI.innerHTML = 30
    relojito()
    console.log("resultado: ", operacionResuelta)
})


// Con estas dos funciones hago que el tiempo disminuya cada segundo y que se detenga cuando llegue a 1 segundo
function relojito() {
    intervalo = setInterval(cuentaHasta0, 1000);
}

// Esta función permite tener una cuenta infinita de 10 a 0
function cuentaHasta0() {
    if (tiempoUI.innerHTML <= 1) {
        clearInterval(intervalo)
        resultadoFinal.style.display = "block"
        contenedorDelJuego.style.display = "none"
        puntajeFinal.innerHTML = puntaje
    } else {
    } 
    tiempoUI.innerHTML--
}

function nuevaPregunta () {
    limpiarPregunta()
    crearOperacion()
    primerNumeroUI.innerHTML = numero1Str
    segundoNumeroUI.innerHTML = numero2Str
    operadorUI.innerHTML = operador
    contenedorDelJuego.style.display = "block"
}

// Con las siguientes funciones muestro y oculto en la pantalla los datos de la operación
function cargarPregunta() {
    crearOperacion()
    primerNumeroUI.innerHTML = numero1Str
    segundoNumeroUI.innerHTML = numero2Str
    operadorUI.innerHTML = operador
    contenedorDelJuego.style.display = "block"
}

function limpiarPregunta() {
    primerNumeroUI.innerHTML = ""
    segundoNumeroUI.innerHTML = ""
    operadorUI.innerHTML = ""
    contenedorDelJuego.style.display = "none"
}

function crearOperacion () {
    // Estas variables crean dos números entre 0 y 19 que van a ser después sumados o restados.
    let numero1 = Math.floor(Math.random() * 20)
    let numero2 = Math.floor(Math.random() * 20)
    numero1Str = numero1.toString()
    numero2Str = numero2.toString()
    operador = operadorRandom()
    // En este array guardo los dos números y el operador de la operación aleatoria
    let operacion = [numero1Str, operador, numero2Str]
    // Con el método eval "convierto" el array anterior en una operación. El método devuelve el resultado
    operacionResuelta = eval(operacion[0] + operacion[1] + operacion[2])
    return operacionResuelta
}

// Con esta función determino de manera aleatoria si la operación va a ser suma o resta
function operadorRandom() {
    let masOMenos 
    let algo = Math.floor(Math.random() * 2)
    if (algo == 0) {
        masOMenos = "+"
    } else if (algo == 1){
        masOMenos = "-"
    }
    return masOMenos
}

// Con este event listener determino el valor de respuestaIngresada después de presionar la tecla enter
inputRespuesta.addEventListener("keypress", (e) => {
    if(e.code === "Enter") {
        respuestaIngresada = inputRespuesta.value
        console.log(respuestaIngresada)
        evaluar()
        nuevaPregunta()
        inputRespuesta.value = ""
    } 
})

// Esta función determina el puntaje
function evaluar () {
    if(respuestaIngresada == operacionResuelta) {
        puntaje++ 
        puntajeActual.innerHTML = puntaje
        console.log("bien, el puntaje ahora es: ", puntaje)
    } else {
        vidas--
        vidasQueQuedan.innerHTML = vidas
        if (vidas == 0) {
            console.log("aqui deberia terminar")
            terminarJuego()
        }
        console.log("mal")
    }
}
// Esta función es similar a la del botón de iniciar pero condensa otros cambios en el DOM
btnVolver.addEventListener("click", () => {
    info.style.display = "none"
    juego.style.display = "block"
    cargarPregunta()
    tiempoUI.innerHTML = 30
    relojito()
    console.log("resultado: ", operacionResuelta)
    resultadoFinal.style.display = "none"
    inputRespuesta.value = ""
})