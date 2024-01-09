"use strict";
function showNotification(options) {
    let notificacion = document.createElement('div');//crea el div
    notificacion.className = 'notification';//da el nombre a la clase classname

    notificacion.innerHTML = options.html || '';
//estilos de los px pedidos por el enunciado ( el setting)
    notificacion.style.top = (options.top || 0) + 'px';
    notificacion.style.right = (options.right || 0) + 'px';

    document.body.appendChild(notificacion);
//temporizador de mostrarse en la pantalla el 1.5 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 1500);
  }
//datos a usar de prueba en el mensaje el margen 10 dpedido mas el mensaje junto a la clase welcome
  showNotification({
    top: 10,
    right: 10,
    html: 'bienvenido al ejercicio 3!',
    className: 'welcome'
  });