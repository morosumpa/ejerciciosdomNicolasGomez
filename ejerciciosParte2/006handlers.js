"use strict";
let button = document.getElementById('boton');

button.addEventListener('click', () =>alert('1'));// salta el primerp al ser un event listener del boton
button.removeEventListener('click', () => alert('1'));// no salta ya que este es un revoveEventListener haciendo que el boton no lo realice
button.onclick = () => alert(2);// salta porque es un onclick nada mas darle al boton