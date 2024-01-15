"use strict";
//obtiene elemento
let panes = document.querySelectorAll('.panel');

//funcion para quitar el mensaje
for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
}