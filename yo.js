const miImagen = document.getElementById("mi-imagen")
const descripcion = document.getElementById("descripcion")

miImagen.addEventListener("click", (e) => {
    console.log("hice click")
   descripcion.style.fontStyle = "italic"
})