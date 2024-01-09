"use strict";
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

/*ej 005*/
// Selecciona el primer <li>
let primerLI = document.querySelector('ul li');

if (primerLi) {
    // Elimina el atributo data-tipo
    primerLi.removeAttribute("data-tipo");

    let listaAtributos = Array.from(primerLi.attributes);//primerLi.attributes Obtiene la lista de atributos y Array.from almacena el array que contiene los objetos
            
    // muestra los datos restantes tras modificar
    console.log("Atributos tras eliminar data-tipo:");
    listaAtributos.forEach(function(atributo) {
        console.log(atributo.name + ': ' + atributo.value);
    });
} else {
    console.log("No se encontró el primer elemento <li>");
}

/*ej 006*/
// Selecciona el enlace <a>
let link = document.querySelector('a');

// Verifica si se encontró el enlace
if (link) {
    // Obtiene el objeto dataset que tiene los atributos personalizados
    let dataset = link.dataset;

    // variable de verificar los atributos
    let tieneAtributosPersonalizados = false;

    for (let clave in dataset) {
        tieneAtributosPersonalizados = true;
        console.log(clave + ': ' + dataset[clave]);
    }

    if (!tieneAtributosPersonalizados) {
        // en caso de no tener atributos
        console.log("El enlace no tiene atributos personalizados en el dataset.");
    }
} else {
    console.log("No se encontró el enlace <a>");
}