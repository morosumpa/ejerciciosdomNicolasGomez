"use strict";
// obtiene todos los elementos <li>
let listaAnimales = document.querySelectorAll('#lista-animales li');

// Recorre cada elemento y muestra el texto y el número de <li> anidados
listaAnimales.forEach(function (item) {
    // Muestra el texto dentro del <li>
    console.log('Texto dentro del <li>:', item.firstChild.nodeValue.trim());

    // Contar el número de <li> anidados
    let contador = item.querySelectorAll('li').length;
    console.log('Número de <li> anidados:', contador);
});
