"use strict";
document.addEventListener('DOMContentLoaded',function () {
    let botonInvisible = document.getElementById('hideButton');//recoge el boton

    // Oculta el propio botón al darle clic
    botonInvisible.addEventListener('click', function () {
        botonInvisible.style.display = 'none';//hace desaparecerlo con hiden
    });
});
