
const btnIniciar = document.getElementById("btn-iniciar")
const contenedorDelJuego = document.getElementById("contenedor-del-juego-3")
const primerNumeroUI = document.getElementById("primer-numero")
const segundoNumeroUI = document.getElementById("segundo-numero")
const operadorUI = document.getElementById("operador")
const inputRespuesta = document.getElementById("input-respuesta")

let numero1 = Math.floor(Math.random() * 20)
let numero2 = Math.floor(Math.random() * 20)
let numero1Str = numero1.toString()
let numero2Str = numero2.toString()
let operador = operadorRandom()
let operacion = [numero1Str, operador, numero2Str]
let operacionResuelta = eval(operacion[0] + operacion[1] + operacion[2])
let respuestaIngresada
let vidas = 3


btnIniciar.addEventListener("click", () => {
    iniciar()
})

function iniciar() {
    cargarPregunta()
}

function cargarPregunta() {
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

inputRespuesta.addEventListener("keyup", () => {
    respuestaIngresada = inputRespuesta.value
    while (respuestaIngresada == operacionResuelta) {
        console.log("ta bien")
        setTimeout(() => {
            limpiarPregunta()
            inputRespuesta.value = ""
            cargarPregunta()
        }, 2000) 
    } 
    console.log(respuestaIngresada)
})

console.log(operacionResuelta, "vidas:", vidas)