/*ej 001*/
/*variable para obtener los valores del documento html*/
let contenedor = document.getElementById('contenedor');

/*variable childnode para guardar los elementos del doc html*/
let childNodes = contenedor.childNodes;/*.childNodes en JavaScript se utiliza para acceder a la lista de nodos secundarios (hijos es decir los elementos del div)

/*bucle para mostrar los datos del div en el orden de arriba abajo*/
for (let i = 0; i < childNodes.length; i++) {
    console.log('childNodes' + i + 'es' + childNodes[i]);
}

/*ej 002*/

 // Accede al primer hijo del div mediante firstchild
 var primerHijo = contenedor.firstChild;

 // Muestra la información en la consola
 console.log('Primer Hijo:', primerHijo);

 /*ej 003*/

 /* Accede al primer hijo del div mediante lastChild*/
 var ultimohijo = contenedor.lastChild;

 /* Muestra la información en la consola*/
 console.log('Último Hijo:', ultimohijo);

/*ej 004*/

// Obtiene el elemento h1 por su etiqueta
let h1padre = document.querySelector('h1');

// Accede al elemento padre del h1 usando parentElement
let divPadre = h1padre.parentElement;

// Muestra la información en la consola
console.log('Elemento Padre:', divPadre);

/*ej 005*/

// Obtiene el elemento h1 por su etiqueta
let listaUL = document.querySelector('ul');

// Accede al elemento padre del h1 usando parentElement
let elementosHijos = listaUL.children;

// Muestra los 3 elementos de la lista
for (let i = 0; i < elementosHijos.length; i++) {
    console.log('Elemento lista ' + i + 'es', elementosHijos[i]);
}

/*ej 006*/
/*variable para trabajar con un elemento del html*/
let elementoContenedor = document.getElementById('contenedor');

/*variable primerElementoContenedor para guardar los elementos del doc html*/
let primerElementoContenedor = elementoContenedor.firstElementChild;/*firstElementChild recoje los valores del primer elemento del div que encuentre en este*/

/*muestra primer elemento del div contenedor*/
console.log('El primer elemento del div es' + primerElementoContenedor);

/*ej 007*/
/*variable para trabajar con un elemento del html*/
let elementoContenedorlast = document.getElementById('contenedor');

/*variable ultimoElementoContenedor para guardar los elementos del doc html*/
let ultimoElementoContenedor = elementoContenedorlast.lastElementChild;/*lastElementChild recoje los valores del ultimo elemento del div que encuentre en este*/

/*muestra primer elemento del div contenedor*/
console.log('El último elemento del div es' + ultimoElementoContenedor);

/*ej 008*/
/* variable para trabajar con un elemento del html */
let elementoparrafo = document.querySelector('.parrafo');/*sin el . delante de parrafo no te coje los valores*/

/* variable elementoparrafo para guardar los elementos del doc html */
let anteriorElementoParrafo = elementoparrafo.previousElementSibling;/*previousElementSibling recoje los valores al anterior que se haya seleccionado*/

/* muestra primer elemento del div contenedor */
console.log('El anterior elemento del div es ' + anteriorElementoParrafo);
