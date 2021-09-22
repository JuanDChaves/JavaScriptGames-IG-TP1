// En las siguientes líneas declaro variables: inicio, espacioParaPregunta, enviarRespuesta y comodin XXXXXX que corresponden a botones en la página y al campo en donde van las preguntas, las respuestas y el resultado final. 

const inicio = document.querySelector(".iniciar")
const comodin = document.getElementById("comodin")
const espacioParaPregunta = document.getElementById("espacio-para-pregunta")
const respuestaUnoTexto = document.getElementById("opcion1")
const respuestaDosTexto = document.getElementById("opcion2")
const respuesta = document.querySelector(".respuesta")
const botonEnviar = document.getElementById("boton-enviar")

// En este array defino las 10 preguntas, dos opciones por cada una y la respuesta correcta. Cada pregunta es un objeto

datosDelJuego = [
    {
        pregunta: "Que tienes en tu casa?",
        opcionUno: "perrin",
        opcionDos: "gatin",
        correcta: "perro" 
    }
]

// Estas tres variables son contadores que irán aumentando a lo largo del juego, por eso se declaran con let.

let preguntaActual = 0
let puntaje = 0
let racha = 0

// 
cargarPregunta()

function cargarPregunta () {
    const datosPreguntaActual = datosDelJuego[preguntaActual]

    espacioParaPregunta.innerText = datosPreguntaActual.pregunta
    respuestaUnoTexto.innerText = datosPreguntaActual.opcionUno
    respuestaDosTexto.innerText = datosPreguntaActual.opcionDos

}

// Así recibo el evento click en el botón "enviar"
botonEnviar.addEventListener("click", (e) => enviarRespuesta())

// Esta función toma el valor que tenga el radio button que este checked. Este valor se asigna a la variable respuestaElegida. 
function enviarRespuesta() {
    
    let respuestaElegida
    
    if (respuestaUnoTexto.checked) {
        respuestaElegida = respuestaUnoTexto.value
    } else if (respuestaDosTexto.checked) {
        respuestaElegida = respuestaDosTexto.value
    }
    console.log(respuestaElegida)
    esCorrecta()
} 

function esCorrecta (respuestaElegida) {
    if(respuestaElegida === datosDelJuego[preguntaActual].correcta) {
        console.log("es correcta")
    } else {
        console.log("esta mal")
    }
}