/*ej 001*/

// recoge el <a> del html
let enlace = document.querySelector('a[data-tipo="enlace"]');//clase del enlace a[data-tipo="enlace"]
//querySelector se utiliza para seleccionar el primer elemento que coincide con un selector CSS especificado

// comprueba si la etiqueta <a> tiene target
if (enlace && enlace.hasAttribute("target")) {
    console.log("El enlace tiene target");
} else {
    console.log("El enlace no tiene target ");
}

/*ej 002*/
// Selecciona el primer elemento <li> en la lista
let primerLi = document.querySelector('ul li');

// Verifica si el elemento tiene el atributo data-tipo
if (primerLi && primerLi.hasAttribute("data-tipo")) {
    console.log("El valor del atributo data-tipo es: " + primerLi.getAttribute("data-tipo"));
} else {
    console.log("El atributo data-tipo no está presente");
}

/*ej 003*/
// Selecciona el <p> de la clase parrafo
let parrafo = document.querySelector('.parrafo');//. delante al ser una clase

if (parrafo) {
    // Cambia el valor de data-tipo al pedido
    parrafo.setAttribute("data-tipo", "nuevo-parrafo");

    console.log("El parrafo se cambió a " + parrafo.getAttribute("data-tipo"));
} else {
    console.log("No se encontró el párrafo con la clase 'parrafo'");
}

/*ej 004*/
// Selecciona el título <h1>
let titulo = document.querySelector('h1');

if (titulo) {
    // Agrega las caracteristicas nuevas al titulo
    titulo.setAttribute("style", "color: blue;");//primero especifica estilo y luego caracteristicas

    console.log("Se han agregado correctamente");
} else {
    console.log("No se encontró el título <h1>");
}

