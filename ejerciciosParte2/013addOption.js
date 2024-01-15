"use strict";

// Obtiene el elemento select
let selectorGeneros = document.getElementById('genres');

// Muestra el valor y el texto del option seleccionado
function muestraOpciones() {
    let opciones = selectorGeneros.options[selectorGeneros.selectedIndex];
    alert(`Valor seleccionado: ${opciones.value}\nTexto seleccionado: ${opciones.text}`);
}

// Añade la option: <option value="classic">Classic</option>
function añadeClassic() {
    // Crea un nuevo elemento option
    let opcionClasica = document.createElement('option');
    opcionClasica.value = 'classic';
    opcionClasica.text = 'Classic';

    // Añade el nuevo option al select
    selectorGeneros.add(opcionClasica);

    // Selecciona el nuevo option
    opcionClasica.selected = true;

    // Muestra los txt
    muestraOpciones();
}

// Llama la funcion y agrega classic
añadeClassic();

// Agrega un evento de cambio para ejecutar muestraOpciones cuando se selecciona otra opción
selectorGeneros.addEventListener('change', muestraOpciones);
