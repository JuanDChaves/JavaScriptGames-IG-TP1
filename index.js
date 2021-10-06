const aqui = document.getElementById("aqui")
const gracias = document.getElementById("gracias")

aqui.addEventListener("click", (e) => {
    console.log("click")
    gracias.style.textDecoration = "underline"
})