// Obtener todos los enlaces dentro de la lista
let links = document.querySelectorAll('ul a');

// Iterar sobre cada enlace y cambiar el color si es externo
links.forEach(function (link) {
    // Verificar si el enlace es externo
    if (linkExterno(link)) {
        link.style.color = 'purple';
    }
});

// Función para verificar si un enlace es externo
function linkExterno(link) {
    let href = link.getAttribute('href');
            
    // Verificar si el enlace tiene ://
    if (href && href.indexOf('://') !== -1) {
        // Verificar que no comience con http://internal.com
        if (href.indexOf('http://internal.com') !== 0) {
            return true;
        }
    }
    return false;
}