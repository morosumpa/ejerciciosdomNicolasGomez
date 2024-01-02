// Ejemplo:elem.append(document.createTextNode(text))
let elem1 = document.getElementById('miElemento');
let text1 = 'Hola, mundo!';
elem1.append(document.createTextNode(text1));

// Ejemplo:elem.innerHTML = text
let elem2 = document.getElementById('miElemento');
let text2 = '<strong>Hola, mundo!</strong>';
elem2.innerHTML = text2;

// Ejemplo:elem.textContent = text
let elem3 = document.getElementById('miElemento');
let text3 = 'Hola, mundo!';
elem3.textContent = text3;

/*elem.textContent = text y elem.append(document.createTextNode(text)) 
son iguales a la hora de plantear el contenido de texto de un elemento. 
Ambos se asignan texto plano al contenido del elemento sin interpretar HTML.*/
