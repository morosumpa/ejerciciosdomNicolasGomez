"use strict";

ul.onclick = function (event) {
    if (event.target.tagName != "li") return;//regoge li de la tabla

    if (event.ctrlKey || event.metaKey) {
        marcador(event.target);
    } else {
        selector(event.target);
    }

}

// evitando la selección innecesaria de elementos de la lista en los clics
ul.onmousedown = function () {
    return false;
};
//indica el valor seleccionado
function marcador(li) {
    li.classList.toggle('selected');
}
//elimina la clase del seleccionado o la que primera seleccione y aplica las nuevas de estilo
function selector(li) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}