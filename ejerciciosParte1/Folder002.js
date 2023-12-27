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
function cambiarNombreEdad() {
    // Obtener el nombre y la edad actuales del campo pedido a cambiar
    let nombreActual = document.getElementById('miTabla').rows[1].cells[0].innerHTML;//innerHTML te permite obtener o establecer el contenido HTML de un elemento
    let edadActual = document.getElementById('miTabla').rows[1].cells[1].innerHTML;

    // Cambiar el nombre y la edad
    let nuevoNombre = "Juan";
    let nuevaEdad = "26";

    // Actualizar el contenido de las celdas
    document.getElementById('miTabla').rows[1].cells[0].innerHTML = nuevoNombre;
    document.getElementById('miTabla').rows[1].cells[1].innerHTML = nuevaEdad;

    console.log(`Se cambió el nombre de ${nombreActual} a ${nuevoNombre} y se actualizó su edad de ${edadActual} a ${nuevaEdad}.`);
}

window.onload = cambiarNombreEdad;

/*ej 003*/
function mayorEdad() {
    let tabla = document.getElementById('miTabla');
    let filas = tabla.rows;
/*variables de respuesta final*/
    let edadMaxima = 0;
    let nombreMayor = '';

    // Realiza el bucle para ver las personas con la mayor edad
    for (let i = 1; i < filas.length; i++) {
        let edadActual = parseInt(filas[i].cells[1].innerHTML, 10);//recopila edades de la tabla

        // Verifica si la edad actual es mayor que la edad máxima encontrada hasta ahora en caso de encontrar una nueva mayor recoge esa
        if (edadActual > edadMaxima) {
            edadMaxima = edadActual;
            nombreMayor = filas[i].cells[0].innerHTML;
        }
    }

    // Muestra en la consola el nombre de la persona con la edad más alta
    console.log('La persona con la edad más alta es', nombreMayor);
}

window.onload = mayorEdad;