"use strict"; // Modo estricto para un código más seguro y menos propenso a errores

function runOnKeys(func, ...codes) {//...codes permite multiples parametros en una variable en la funcion

    let pressed = new Set();// Se crea un set para almacenar las teclas actualmente presionadas

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        // Se itera sobre las teclas especificadas
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        // Si todas las teclas están presionadas, se ejecuta la función 'func'
        pressed.clear();

        // Se ejecuta la función 'func'
        func();
    });

    // Se agrega un evento de escucha para el evento de tecla liberada ('keyup')
    document.addEventListener('keyup', function (event) {
        // Se elimina el código de la tecla liberada del conjunto 'pressed'
        pressed.delete(event.code);
    });
}

// funcion para la acciond e las dos teclas
runOnKeys(
    () => alert("Hola Mundo"),
    "KeyQ",
    "KeyW"
);
