 /*ej 001*/
// Función para agregar una nueva fila a la tabla
function agregarFila() {
    let tabla = document.getElementById("miTabla");

    // Crear una nueva fila
    let nuevaFila = tabla.insertRow();//insertRow sirve para decir al html que se va a crear una nueva fila

    // Agregar celdas a la fila y asignar contenido
    let Nombre = nuevaFila.insertCell(0);//insertCell(0) sirve para decir la cantidad de campos deseados a añadir nuevos en la fila nueva
    Nombre.innerHTML = "Pedro";

    let Edad = nuevaFila.insertCell(1);
    Edad.innerHTML = "28";

    let Pais = nuevaFila.insertCell(2);
    Pais.innerHTML = "Colombia";
}

// onload llamar a la función al cargar la página 
window.onload = agregarFila;

/*ej 002*/
