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