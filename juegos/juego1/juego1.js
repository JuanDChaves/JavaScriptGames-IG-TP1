// En las siguientes líneas declaro variables: inicio, comodin, espacioParaPregunta, botonEnviar, etc. que corresponden a botones en la página y a los campos en donde van las preguntas, las respuestas y el resultado final. 

const inicio = document.querySelector(".iniciar")
const comodin = document.getElementById("comodin")
const contenedorDelComodin = document.getElementById("contenedor-del-comodin")
const espacioParaPregunta = document.getElementById("espacio-para-pregunta")
const textoOpcionA = document.getElementById("texto-opcion-a")
const textoOpcionB = document.getElementById("texto-opcion-b")
const opcionA = document.getElementById("a")
const opcionB = document.getElementById("b")
const contenedorDelJuego = document.querySelector(".contenedor-del-juego")
const botonEnviar = document.getElementById("boton-enviar")
const infoFinal = document.getElementById("pregunta")

// En este array defino las 10 preguntas, dos opciones por cada una y la respuesta correcta. Cada pregunta es un objeto

datosDelJuego = [
    {
        pregunta: "Que tienes en tu casa?",
        opcionUno: "perro",
        opcionDos: "gato",
        correcta: "b" 
    },
    {
        pregunta: "Que tienes en tu carro?",
        opcionUno: "blanco",
        opcionDos: "negro",
        correcta: "a" 
    },
    {
        pregunta: "Que tienes en tu calle?",
        opcionUno: "gente",
        opcionDos: "arboles",
        correcta: "a" 
    },
    {
        pregunta: "Que tienes en tu bolsillo?",
        opcionUno: "monedas",
        opcionDos: "billetes",
        correcta: "a" 
    },
    {
        pregunta: "Que tienes en tu mente?",
        opcionUno: "problemas",
        opcionDos: "ideas",
        correcta: "a" 
    }
]

// Estas tres variables son contadores que irán aumentando a lo largo del juego, por eso se declaran con let.
let preguntaActual = 0
let puntaje = 0
let racha = 0

// Con esta función inicia el juego. 
iniciarJuego()

function iniciarJuego () {
    inicio.addEventListener("click", (e) => {
        contenedorDelJuego.style.display = "block"
        inicio.style.display = "none"
    })
}

// Esta función carga los datos desde el array a la página y evita la selección automática de alguno de los dos radio buttons. 

cargarPregunta()

function cargarPregunta () {
    const datosPreguntaActual = datosDelJuego[preguntaActual]

    espacioParaPregunta.innerText = datosPreguntaActual.pregunta
    textoOpcionA.innerText = datosPreguntaActual.opcionUno
    textoOpcionB.innerText = datosPreguntaActual.opcionDos
    opcionA.checked = false
    opcionB.checked = false
}

// Con este event listener muestro la respuesta correcta. El botón desaparece y se muestra la respuesta y después de 3 segundos el contenedor del comodín desaparece
comodin.addEventListener("click", (e) => {
    let respuestaCorrecta = datosDelJuego[preguntaActual].correcta

    contenedorDelComodin.innerHTML = `La respuesta correcta es: ${respuestaCorrecta}`

    setTimeout(() => contenedorDelComodin.style.display = "none", 3000)

})

// Así recibo el evento click en el botón "enviar"
botonEnviar.addEventListener("click", (e) => enviarRespuesta())

// Esta función toma el valor que tenga el radio button que este checked. Este valor se asigna a la variable respuestaElegida. 

function enviarRespuesta() {

    preguntaActual++
    
    let respuestaElegida
    
    // Aquí compruebo cuál es el respuesta que el usuario eligió

    if (opcionA.checked) {
        respuestaElegida = opcionA.value
    } else if (opcionB.checked) {
        respuestaElegida = opcionB.value
    }
    console.log(respuestaElegida) 

    // Aquí comparo la respuesta que el usuario eligió con el valor de respuesta correcta del array de datos.
    const datosPreguntaActual = datosDelJuego[preguntaActual - 1]

    // Asigno al puntaje de la 'ronda', el index de la pregunta actual del array
    let puntajePregunta = preguntaActual

    if (respuestaElegida !== datosPreguntaActual.correcta) {
        racha = 0
        console.log("es incorrecta", "En la pregunta actual " + preguntaActual, "el puntaje es de " + puntaje, "y la racha es " + racha)
    }   else {
        racha++
        puntaje = puntaje + (puntajePregunta * racha)
        console.log("es correcta", "En la pregunta actual " + preguntaActual, "el puntaje de esta pregunta es " + puntajePregunta, "el puntaje es de " + puntaje, "y la racha es " + racha)
    }
    // Vuelvo a llamar a esta función para cargar la siguiente pregunta. Si no hay más preguntas muestro un mensaje con el puntaje final, el nivel que alcanzó el jugador y la opción de empezar de nuevo. 
    if (preguntaActual < datosDelJuego.length) {
        cargarPregunta()
    } else {
        infoFinal.innerHTML = `
        <p class="puntaje-final">puntaje final: ${puntaje}</p>
        <span class="nivel">Tu nivel es Roberto Baggio!</span>
        <button class="iniciar" display: inline;" onclick="location.reload()">Intentarlo de nuevo!</button>
        `
        botonEnviar.style.display = "none"
    }
} 