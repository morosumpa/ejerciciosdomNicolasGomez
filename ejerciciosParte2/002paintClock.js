"use strict";
let intervaloId;

function updateClock() {
    let horaActual = new Date();
    let hora = horaActual.getHours().toString().padStart(2, '0');//pasStart para cadenas de texto con un tamaño en especifico
    let min = horaActual.getMinutes().toString().padStart(2, '0');
    let secs = horaActual.getSeconds().toString().padStart(2, '0');

    document.getElementById("hours").textContent = hora;
    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = secs;
}
//event listener para los botones strat de que empiece y stop para que pare
document.getElementById("startBtn").addEventListener("click", function() {
    intervaloId = setInterval(updateClock, 1000);
});

document.getElementById("stopBtn").addEventListener("click", function() {
    clearInterval(intervaloId);
});

updateClock();

