"use strict";
//recoger valores documento
let menuElem = document.getElementById('sweeties');
let tituloElem = menuElem.querySelector('.title');

//desplegar menu
tituloElem.onclick = function () {
    menuElem.classList.toggle('open');
};