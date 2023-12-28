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