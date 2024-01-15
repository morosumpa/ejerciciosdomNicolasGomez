"use strict";
let area = null;
let view = document.getElementById('view');//obtiene el div
//permite editar
view.onclick = function () {
    editStart();
};

//proceso de edicion
function editStart() {
    area = document.createElement('textarea');//crea la zona txt para escribir 
    area.className = 'edit';
    area.value = view.innerHTML;
//tras editar blur cuando enter finalizando
    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    area.onblur = function () {
        editEnd();
    };

    view.replaceWith(area);
    area.focus();
}
//funcion que cambia los txt antiguo por el modificado
function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}

