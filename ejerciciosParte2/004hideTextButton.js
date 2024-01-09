"use strict";
document.addEventListener('DOMContentLoaded', function () {//buscando en internet es obligatorio el uso de DOMContentLoaded ya que es lo que permite que el txt desaparezca
    let hideButton = document.getElementById('hideButton');
    let textDiv = document.getElementById('text');

    // addEventListener para cuando lo pulse haga la desaparicion
    hideButton.addEventListener('click', function () {
        // Oculta el div al darle al boton
        textDiv.style.display = 'none';
    });
});
