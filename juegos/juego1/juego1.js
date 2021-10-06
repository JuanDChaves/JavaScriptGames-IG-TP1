// En las siguientes líneas declaro variables: inicio, comodin, espacioParaPregunta, botonEnviar, etc. que corresponden a botones en la página y a los campos en donde van las preguntas, las respuestas y el resultado final. 

const inicio = document.querySelector(".iniciar")
const comodin = document.getElementById("comodin")
const contenedorDelComodin = document.getElementById("contenedor-del-comodin")
const espacioParaPregunta = document.getElementById("espacio-para-pregunta")
const textoOpcionA = document.getElementById("texto-opcion-a")
const textoOpcionB = document.getElementById("texto-opcion-b")
const opcionA = document.getElementById("a")
const opcionB = document.getElementById("b")
const contenedorDelJuego = document.getElementById("contenedor-del-juego-1")
const info = document.getElementById("info")
const botonEnviar = document.getElementById("boton-enviar")
const infoFinal = document.getElementById("pregunta")
const puntajeActualUI = document.getElementById("puntaje-actual")
const rachaUI = document.getElementById("racha")


// En este array defino las 10 preguntas, dos opciones por cada una y la respuesta correcta. Cada pregunta es un objeto

datosDelJuego = [
    {
        pregunta: "¿Cómo se le llamó a la famosa victoria de Uruguay sobre Brasil en 1950, cuando los charrúas obtuvieron su segundo título mundial?",
        opcionUno: "El triunfo del siglo",
        opcionDos: "El Maracanazo",
        correcta: "b" 
    },
    {
        pregunta: "¿Dónde se disputó la Copa Mundial de 1998?",
        opcionUno: "Francia",
        opcionDos: "Alemania",
        correcta: "a" 
    },
    {
        pregunta: "¿Cómo se llamó la mascota de la Copa Mundial de 1982 en España?",
        opcionUno: "Naranjito",
        opcionDos: "Futix",
        correcta: "a" 
    },
    {
        pregunta: "¿Quién es el jugador latino que ha anotado más goles en la historia de los mundiales?",
        opcionUno: "Ronaldo Nazario de Lima (Bra)",
        opcionDos: "Diego Armando Maradona (Arg)",
        correcta: "a" 
    },
    {
        pregunta: "¿Cuál es el jugador latino que, junto al alemán Lothar Matthaeus y el italiano Gianluggi Buffon, tiene más participaciones en este torneo?",
        opcionUno: "Javier Zanetti (Arg)",
        opcionDos: "Antonio Carbajal (Mex)",
        correcta: "b" 
    },
    {
        pregunta: "México organizó 2 veces la Copa Mundial —en 1970 y 1986— pero la segunda vez no fue elegido. ¿Sabes qué país tenía que organizar el Mundial de 1986 y tuvo que renunciar?",
        opcionUno: "Colombia",
        opcionDos: "Uruguay",
        correcta: "a" 
    },
    {
        pregunta: "En el Mundial de México'86, el argentino Diego Maradona anotó un gol con la mano, que es conocido como “la mano de Dios”. ¿Contra qué equipo marcó ese famoso tanto?",
        opcionUno: "Brasil",
        opcionDos: "Inglaterra",
        correcta: "b" 
    },
    {
        pregunta: "¿Quién marcó el gol más rápido en la historia de los mundiales?",
        opcionUno: "Celso Ayala (Par)",
        opcionDos: "Hakan Sukur (Tur)",
        correcta: "b" 
    },
    {
        pregunta: "La selección de fútbol de Cuba participó en una Copa del Mundo. ¿Sabes en qué año fue?",
        opcionUno: "Suiza 1954",
        opcionDos: "Francia 1938",
        correcta: "b" 
    },
    {
        pregunta: "El goleador del primer Mundial de fútbol, disputado en 1930 en Uruguay, fue…",
        opcionUno: "Guillermo Stabile (Arg)",
        opcionDos: "Bigode (Bra)  ",
        correcta: "a" 
    }
]

// Estas tres variables son contadores que irán aumentando a lo largo del juego, por eso se declaran con let.
let preguntaActual = 0
let puntaje = 0
let racha = 0
puntajeActualUI.innerHTML = 0
rachaUI.innerHTML = 0
let nivel

contenedorDelJuego.style.display = "none"

// Con esta función inicia el juego. 
iniciarJuego()

function iniciarJuego () {
    inicio.addEventListener("click", (e) => {
        contenedorDelJuego.style.display = "flex"
        inicio.style.display = "none"
        info.style.display = "none"
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

    if (respuestaCorrecta === "a") {
        contenedorDelComodin.innerHTML = `El cholo: "Si mal no recuerdo es la primera"`
    } else {
        contenedorDelComodin.innerHTML = `El cholo: "Si mal no recuerdo es la segunda"`
    }
    

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

    // Aquí comparo la respuesta que el usuario eligió con el valor de respuesta correcta del array de datos.
    const datosPreguntaActual = datosDelJuego[preguntaActual - 1]

    // Asigno al puntaje de la 'ronda', el index de la pregunta actual del array
    let puntajePregunta = preguntaActual

    if (respuestaElegida !== datosPreguntaActual.correcta) {
        racha = 0
    }   else {
        racha++
        puntaje = puntaje + (puntajePregunta * racha)
    }
    puntajeActualUI.innerHTML = puntaje
    rachaUI.innerHTML = racha

    // Vuelvo a llamar a esta función para cargar la siguiente pregunta. Si no hay más preguntas muestro un mensaje con el puntaje final, el nivel que alcanzó el jugador y la opción de empezar de nuevo. 
    if (preguntaActual < datosDelJuego.length) {
        cargarPregunta()
    } else {
        if (puntaje < 100) {
            nivel = "Ronaldinho"
        } else if (puntaje > 100 && puntaje < 200) {
            nivel = "Messi"
        } else {
            nivel = "Roberto Baggio"
        }
        infoFinal.innerHTML = `
        <p class="puntaje-final">Tu puntaje final es de: ${puntaje}</p>
        <span class="nivel">Tu nivel es ${nivel}</span>
        <button class="iniciar" display: inline;" onclick="location.reload()">Intentarlo de nuevo!</button>
        `
        botonEnviar.style.display = "none"
        contenedorDelComodin.style.display = "none"
    }
} 